/* =========================================================
   JOURNEY — app.js
   Desktop : fit-to-screen zoomable map, click a stop to zoom in
   Mobile  : vertical timeline
   ========================================================= */
(() => {
  'use strict';

  const D = window.JOURNEY;
  const $  = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const el = (tag, cls, txt) => { const n = document.createElement(tag); if (cls) n.className = cls; if (txt != null) n.textContent = txt; return n; };
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

  /* ---------------- i18n ---------------- */
  const UI = {
    kicker:     { en: 'The Roadmap · 2022 → now', el: 'Ο Χάρτης · 2022 → σήμερα' },
    heroTitle1: { en: 'My journey in', el: 'Το ταξίδι μου στην' },
    heroTitle2: { en: 'entrepreneurship', el: 'επιχειρηματικότητα' },
    introTitle: { en: 'The Journey Map', el: 'Ο Χάρτης του Ταξιδιού' },
    statYears:  { en: 'Years in', el: 'Χρόνια' },
    statVent:   { en: 'Ventures', el: 'Εγχειρήματα' },
    statFails:  { en: 'Failures', el: 'Αποτυχίες' },
    statSites:  { en: 'Websites', el: 'Websites' },
    hint:       { en: 'Click a stop to zoom in · drag to pan · scroll to zoom · ← → to move', el: 'Πάτα μια στάση για zoom · σύρε για μετακίνηση · scroll για zoom · ← → για πλοήγηση' },
    chapters:   { en: 'Chapters', el: 'Κεφάλαια' },
    updated:    { en: 'Updated', el: 'Ενημέρωση' },
    progress:   { en: 'Journey', el: 'Πορεία' },
    lesson:     { en: 'Lesson', el: 'Μάθημα' },
    addPhoto:   { en: '+ add photo here', el: '+ βάλε φωτό εδώ' },
    outroTitle: { en: 'The map is still being drawn.', el: 'Ο χάρτης γράφεται ακόμα.' },
    outroBody:  { en: 'Four years, five business models, more failures than wins — and all of it feeding one company. New milestones get added here as they happen.', el: 'Τέσσερα χρόνια, πέντε επιχειρηματικά μοντέλα, περισσότερες αποτυχίες από νίκες — και όλα τροφοδοτούν μία εταιρεία. Νέα ορόσημα προστίθενται εδώ όσο συμβαίνουν.' },
    status: {
      win:    { en: 'Win', el: 'Νίκη' },
      fail:   { en: 'Failure', el: 'Αποτυχία' },
      lesson: { en: 'Lesson', el: 'Μάθημα' },
      live:   { en: 'Live now', el: 'Τώρα' },
      next:   { en: 'Next', el: 'Επόμενο' }
    }
  };

  let LANG = 'el';
  try { LANG = localStorage.getItem('journey.lang') || 'el'; } catch (e) {}
  const reg = [];
  const pick = (o) => (o && typeof o === 'object' && !Array.isArray(o)) ? (o[LANG] ?? o.en ?? '') : (o ?? '');
  function T(node, obj, attr) { reg.push({ node, obj, attr: attr || 'text' }); if (attr) node.setAttribute(attr, pick(obj)); else node.textContent = pick(obj); return node; }
  function applyLang() {
    reg.forEach(({ node, obj, attr }) => { if (attr === 'text') node.textContent = pick(obj); else node.setAttribute(attr, pick(obj)); });
    document.documentElement.lang = LANG;
    $('.lang').dataset.active = LANG;
    $$('.lang button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === LANG)));
    try { localStorage.setItem('journey.lang', LANG); } catch (e) {}
  }

  const chapterOf = (id) => D.chapters.find(c => c.id === id) || { color: '#7c5cff', label: { en: '', el: '' } };
  const stages = D.stages;
  const liveIdx = Math.max(0, stages.findIndex(s => s.status === 'live'));

  /* ---------------- CARD (panel + mobile) ---------------- */
  const cardCache = {};
  function buildCard(s) {
    if (cardCache[s.id]) return cardCache[s.id];
    const ch = chapterOf(s.chapter);
    const card = el('article', 'card');
    card.style.setProperty('--acc', ch.color);

    const top = el('div', 'card__top');
    top.append(
      T(el('span', 'tag tag--' + s.status), UI.status[s.status] || UI.status.lesson),
      T(el('span', 'tag tag--acc'), ch.label),
      T(el('span', 'tag'), s.date),
      T(el('span', 'tag'), s.duration)
    );
    card.append(top, T(el('h3'), s.title));
    if (s.subtitle) card.append(T(el('p', 'card__sub'), s.subtitle));
    card.append(T(el('p', 'card__body'), s.body));

    if (s.metrics && s.metrics.length) {
      const m = el('div', 'metrics');
      s.metrics.forEach(x => { const b = el('div', 'metric'); b.append(T(el('b'), x.value), T(el('span'), x.label)); m.append(b); });
      card.append(m);
    }

    const g = el('div', 'gallery');
    (s.images || []).forEach((img, i) => {
      const th = el('button', 'thumb'); th.type = 'button';
      const im = el('img'); im.src = img.src; im.loading = 'lazy'; T(im, img.caption, 'alt');
      th.append(im);
      th.addEventListener('click', () => openLightbox(s.images, i));
      g.append(th);
    });
    const add = el('div', 'thumb thumb--add'); T(add, UI.addPhoto); g.append(add);
    card.append(g);

    if (s.lesson && (s.lesson.en || s.lesson.el)) {
      const q = el('blockquote', 'lesson');
      q.append(T(el('b'), UI.lesson), T(el('span'), s.lesson));
      card.append(q);
    }
    cardCache[s.id] = card;
    return card;
  }

  /* ---------------- MAP LAYOUT ---------------- */
  /* SKIP = slots left empty at the top-left so the intro card never covers a stop */
  const CW = 1600, CH = 900, COLS = 5, SKIP = 2;
  function layout(n) {
    const rows = Math.max(2, Math.ceil((n + SKIP) / COLS));
    const padX = 190, padY = 180;
    const stepX = (CW - padX * 2) / (COLS - 1);
    const stepY = rows > 1 ? (CH - padY * 2) / (rows - 1) : 0;
    const pts = [];
    for (let i = 0; i < n; i++) {
      const slot = i + SKIP;
      const r = Math.floor(slot / COLS);
      let c = slot % COLS;
      if (r % 2 === 1) c = COLS - 1 - c;
      pts.push({ x: padX + c * stepX, y: padY + r * stepY + (i % 2 ? -24 : 24) });
    }
    return pts;
  }
  /* Catmull-Rom → cubic bezier: a natural winding road */
  function smoothPath(p) {
    if (p.length < 2) return '';
    let d = `M ${p[0].x} ${p[0].y}`;
    for (let i = 0; i < p.length - 1; i++) {
      const p0 = p[i - 1] || p[i], p1 = p[i], p2 = p[i + 1], p3 = p[i + 2] || p2;
      const t = 0.22;
      d += ` C ${p1.x + (p2.x - p0.x) * t} ${p1.y + (p2.y - p0.y) * t}, ${p2.x - (p3.x - p1.x) * t} ${p2.y - (p3.y - p1.y) * t}, ${p2.x} ${p2.y}`;
    }
    return d;
  }

  const board = $('#board'), canvas = $('#canvas'), nodesBox = $('#nodes');
  const pBase = $('#roadBase'), pFill = $('#roadFill'), pGlow = $('#roadGlow');
  let PTS = [], nodeEls = [];

  function renderMap() {
    PTS = layout(stages.length);
    const d = smoothPath(PTS);
    [pBase, pFill, pGlow].forEach(p => p.setAttribute('d', d));

    stages.forEach((s, i) => {
      const ch = chapterOf(s.chapter);
      const b = el('button', 'mnode');
      b.style.setProperty('--acc', ch.color);
      b.style.left = PTS[i].x + 'px';
      b.style.top = PTS[i].y + 'px';
      b.dataset.chapter = s.chapter;
      if (s.status === 'live') b.classList.add('is-live');
      if (i > liveIdx) b.classList.add('is-future');

      const dot = el('span', 'mnode__dot', s.icon);
      dot.append(el('span', 'mnode__num', String(i + 1)));
      const lab = el('span', 'mnode__label');
      lab.append(el('b', null, s.year), T(el('i'), s.short || s.title));
      b.append(dot, lab);
      b.addEventListener('click', (e) => { e.stopPropagation(); open(i); });
      nodesBox.append(b);
      nodeEls.push(b);
    });

    /* animate the road drawing up to the live stop */
    requestAnimationFrame(() => {
      const L = pFill.getTotalLength();
      const upto = lengthAt(pFill, L, PTS[liveIdx]);
      [pFill, pGlow].forEach(p => {
        p.style.strokeDasharray = L;
        p.style.strokeDashoffset = L;
        p.getBoundingClientRect();
        p.style.transition = 'stroke-dashoffset 2.4s cubic-bezier(.2,.8,.2,1)';
        p.style.strokeDashoffset = L - upto;
      });
      const pct = Math.round(((liveIdx + 1) / stages.length) * 100);
      setTimeout(() => { $('#hdrFill').style.width = pct + '%'; $('#hdrPct').textContent = pct + '%'; }, 120);
    });
  }
  function lengthAt(path, L, target) {
    let lo = 0, hi = L, best = L;
    for (let i = 0; i < 26; i++) {
      const mid = (lo + hi) / 2, pt = path.getPointAtLength(mid);
      const dy = pt.y - target.y, dx = pt.x - target.x;
      if (Math.hypot(dx, dy) < 2) { best = mid; break; }
      if (pt.y < target.y - 1 || (Math.abs(pt.y - target.y) < 40 && dx * (target.x - pt.x) < 0)) lo = mid; else hi = mid;
      best = mid;
    }
    return best;
  }

  /* ---------------- VIEW (zoom / pan) ---------------- */
  let fit = 1, z = 1, tx = 0, ty = 0, openIdx = -1;
  function boardSize() { const r = board.getBoundingClientRect(); return { w: r.width, h: r.height }; }
  function computeFit() {
    const { w, h } = boardSize();
    fit = Math.min(w / CW, h / CH) * 0.94;
  }
  function homeXY() { const { w, h } = boardSize(); return { x: (w - CW * fit) / 2, y: (h - CH * fit) / 2 }; }
  function apply(animate) {
    canvas.classList.toggle('anim', !!animate);
    canvas.style.transform = `translate(${tx}px, ${ty}px) scale(${fit * z})`;
    $('#zVal').textContent = Math.round(z * 100) + '%';
  }
  function home(animate) { computeFit(); const h = homeXY(); tx = h.x; ty = h.y; z = 1; apply(animate); }
  function zoomAt(nz, cx, cy, animate) {
    nz = clamp(nz, 0.6, 4);
    const s0 = fit * z, s1 = fit * nz;
    tx = cx - (cx - tx) * (s1 / s0);
    ty = cy - (cy - ty) * (s1 / s0);
    z = nz; apply(animate);
  }
  function focus(i, animate = true) {
    computeFit();
    const { w, h } = boardSize();
    const panelW = panel.classList.contains('on') ? panel.getBoundingClientRect().width : 0;
    z = clamp(2.1, 0.6, 4);
    const s = fit * z;
    tx = (w - panelW) * 0.5 - PTS[i].x * s;
    ty = h * 0.46 - PTS[i].y * s;
    apply(animate);
  }

  /* drag to pan */
  let drag = null, moved = 0;
  board.addEventListener('pointerdown', e => {
    if (e.target.closest('.ov') || e.target.closest('.mnode')) return;
    drag = { x: e.clientX, y: e.clientY, tx, ty }; moved = 0;
    board.classList.add('is-drag'); board.setPointerCapture(e.pointerId);
  });
  board.addEventListener('pointermove', e => {
    if (!drag) return;
    moved = Math.max(moved, Math.hypot(e.clientX - drag.x, e.clientY - drag.y));
    tx = drag.tx + (e.clientX - drag.x); ty = drag.ty + (e.clientY - drag.y); apply(false);
  });
  /* click on empty map closes the detail panel */
  board.addEventListener('click', e => {
    if (moved > 5 || e.target.closest('.mnode') || e.target.closest('.ov')) return;
    if (openIdx >= 0) { close(); home(true); }
  });
  const endDrag = () => { drag = null; board.classList.remove('is-drag'); };
  board.addEventListener('pointerup', endDrag);
  board.addEventListener('pointercancel', endDrag);
  board.addEventListener('wheel', e => {
    e.preventDefault();
    const r = board.getBoundingClientRect();
    zoomAt(z * (e.deltaY > 0 ? 0.9 : 1.11), e.clientX - r.left, e.clientY - r.top, false);
  }, { passive: false });

  $('#zIn').addEventListener('click', () => { const { w, h } = boardSize(); zoomAt(z * 1.3, w / 2, h / 2, true); });
  $('#zOut').addEventListener('click', () => { const { w, h } = boardSize(); zoomAt(z / 1.3, w / 2, h / 2, true); });
  $('#zReset').addEventListener('click', () => { close(); home(true); });

  /* ---------------- PANEL ---------------- */
  const panel = $('#panel'), panelBody = $('#panelBody'), scrim = $('#scrim');
  function open(i) {
    openIdx = i;
    panelBody.replaceChildren(buildCard(stages[i]));
    panelBody.scrollTop = 0;
    panel.classList.add('on');
    board.classList.add('focused');
    $('#pCount').textContent = (i + 1) + ' / ' + stages.length;
    nodeEls.forEach((n, k) => n.classList.toggle('is-open', k === i));
    requestAnimationFrame(() => focus(i, true));
  }
  function close() {
    openIdx = -1; panel.classList.remove('on'); scrim.classList.remove('on'); board.classList.remove('focused');
    nodeEls.forEach(n => n.classList.remove('is-open'));
    nodeEls.forEach(n => n.classList.remove('is-open'));
    stopTour();
  }
  const step = d => { if (openIdx < 0) return open(0); open((openIdx + d + stages.length) % stages.length); };
  $('#pClose').addEventListener('click', () => { close(); home(true); });
  $('#pPrev').addEventListener('click', () => step(-1));
  $('#pNext').addEventListener('click', () => step(1));
  scrim.addEventListener('click', () => { close(); home(true); });
  document.addEventListener('keydown', e => {
    if ($('#lightbox').classList.contains('is-open')) return;
    if (e.key === 'Escape') { close(); home(true); }
    if (e.key === 'ArrowRight') step(1);
    if (e.key === 'ArrowLeft') step(-1);
  });

  /* guided tour */
  let tourT = null;
  function stopTour() { if (tourT) { clearInterval(tourT); tourT = null; $('#tour').classList.remove('is-on'); $('#tour').textContent = '▶'; } }
  $('#tour').addEventListener('click', () => {
    if (tourT) return stopTour();
    $('#tour').classList.add('is-on'); $('#tour').textContent = '❚❚';
    open(openIdx < 0 ? 0 : openIdx);
    tourT = setInterval(() => {
      if (openIdx >= stages.length - 1) { stopTour(); return; }
      openIdx += 1; open(openIdx);
    }, 5200);
  });

  /* ---------------- OVERLAYS ---------------- */
  function renderOverlays() {
    T($('#brand-role'), D.profile.role);
    T($('#introTitle'), UI.introTitle);
    T($('#introSub'), D.profile.tagline);
    T($('#hint'), UI.hint);
    T($('#hdrLabel'), UI.progress);

    const real = stages.filter(s => s.status !== 'next');
    const advon = stages.find(s => s.id === 'advon-media');
    const sitesM = advon && advon.metrics && advon.metrics[0] ? advon.metrics[0].value : '200+';
    [
      { n: new Date().getFullYear() - D.profile.startYear, l: UI.statYears },
      { n: real.length, l: UI.statVent },
      { n: real.filter(s => s.status === 'fail').length, l: UI.statFails },
      { n: sitesM, l: UI.statSites }
    ].forEach(s => {
      const b = el('div', 'istat');
      b.append(el('b', null, String(s.n)), T(el('span'), s.l));
      $('#introStats').append(b);
    });

    const lg = $('#legend');
    lg.append(T(el('div', 'legend__t'), UI.chapters));
    D.chapters.forEach(c => {
      const b = el('button', 'lg');
      b.style.setProperty('--c', c.color);
      b.append(el('i'), T(el('span'), c.label));
      b.addEventListener('click', () => {
        b.classList.toggle('off');
        const offs = $$('.lg.off', lg).map(x => x.dataset.id);
        nodeEls.forEach(n => n.classList.toggle('dimmed', offs.includes(n.dataset.chapter)));
      });
      b.dataset.id = c.id;
      lg.append(b);
    });

    const u = $('#updated');
    u.append(T(el('span'), UI.updated), el('b', null, D.profile.lastUpdated));
    const link = D.profile.links[0];
    if (link) { const a = el('a', null, link.label); a.href = link.url; a.target = '_blank'; a.rel = 'noopener'; u.append(a); }
  }

  /* ---------------- MOBILE ---------------- */
  function renderMobile() {
    T($('#m-kicker'), UI.kicker);
    T($('#m-l1'), UI.heroTitle1);
    T($('#m-l2'), UI.heroTitle2);
    T($('#m-sub'), D.profile.tagline);
    T($('#m-now'), D.profile.currentLabel);
    $('#m-start').textContent = D.profile.startYear;
    T($('#m-outroTitle'), UI.outroTitle);
    T($('#m-outroBody'), UI.outroBody);
    $('#m-footer').textContent = '© ' + new Date().getFullYear() + ' Angelo · Advon Media · ' + pick(UI.updated) + ' ' + D.profile.lastUpdated;

    const real = stages.filter(s => s.status !== 'next');
    const advon = stages.find(s => s.id === 'advon-media');
    [
      { n: new Date().getFullYear() - D.profile.startYear, l: UI.statYears },
      { n: real.length, l: UI.statVent },
      { n: real.filter(s => s.status === 'fail').length, l: UI.statFails },
      { n: (advon && advon.metrics[0] && advon.metrics[0].value) || '200+', l: UI.statSites }
    ].forEach(s => {
      const b = el('div', 'stat glass');
      b.append(el('div', 'stat__n grad-text', String(s.n)), T(el('div', 'stat__l'), s.l));
      $('#m-stats').append(b);
    });

    const tl = $('#timeline');
    stages.forEach(s => {
      const ch = chapterOf(s.chapter);
      const row = el('div', 'tl__stage');
      row.style.setProperty('--acc', ch.color);
      const rail = el('div', 'tl__rail');
      rail.append(el('div', 'tl__dot', s.icon), el('div', 'tl__year', s.year));
      const holder = el('div');
      holder.append(buildCard(s));
      row.append(rail, holder);
      tl.append(row);
    });

    const links = $('#m-links');
    D.profile.links.forEach(l => { const a = el('a', 'btn', l.label); a.href = l.url; a.target = '_blank'; a.rel = 'noopener'; links.append(a); });

    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12 });
    $$('.tl__stage').forEach(x => io.observe(x));

    const bar = $('#topFill');
    window.addEventListener('scroll', () => {
      const dh = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (dh > 0 ? (window.scrollY / dh) * 100 : 0) + '%';
    }, { passive: true });
  }

  /* ---------------- LIGHTBOX ---------------- */
  let lbList = [], lbIdx = 0;
  const lb = $('#lightbox');
  function openLightbox(list, i) { lbList = list; lbIdx = i; paintLb(); lb.classList.add('is-open'); }
  function paintLb() { const it = lbList[lbIdx]; $('#lbImg').src = it.src; $('#lbCap').textContent = pick(it.caption); }
  function closeLb() { lb.classList.remove('is-open'); }
  function moveLb(d) { if (!lbList.length) return; lbIdx = (lbIdx + d + lbList.length) % lbList.length; paintLb(); }
  $('#lbClose').addEventListener('click', closeLb);
  $('#lbPrev').addEventListener('click', e => { e.stopPropagation(); moveLb(-1); });
  $('#lbNext').addEventListener('click', e => { e.stopPropagation(); moveLb(1); });
  lb.addEventListener('click', e => { if (e.target === lb) closeLb(); });
  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('is-open')) return;
    if (e.key === 'Escape') closeLb();
    if (e.key === 'ArrowRight') moveLb(1);
    if (e.key === 'ArrowLeft') moveLb(-1);
  });

  /* ---------------- CONTROLS ---------------- */
  $$('.lang button').forEach(b => b.addEventListener('click', () => {
    LANG = b.dataset.lang; applyLang();
    if (lb.classList.contains('is-open')) paintLb();
  }));
  const themeBtn = $('#themeBtn');
  let theme = 'light';
  try { theme = localStorage.getItem('journey.theme') || 'light'; } catch (e) {}
  function applyTheme() {
    document.documentElement.dataset.theme = theme;
    themeBtn.textContent = theme === 'light' ? '☀' : '☾';
    try { localStorage.setItem('journey.theme', theme); } catch (e) {}
  }
  themeBtn.addEventListener('click', () => { theme = theme === 'light' ? 'dark' : 'light'; applyTheme(); });

  /* ---------------- BOOT ---------------- */
  renderMap();
  renderOverlays();
  renderMobile();
  applyLang();
  applyTheme();
  home(false);
  window.addEventListener('resize', () => {
    clearTimeout(window.__rz);
    window.__rz = setTimeout(() => { if (openIdx >= 0) focus(openIdx, true); else home(true); }, 140);
  });
})();
