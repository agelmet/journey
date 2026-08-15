/* =========================================================
   JOURNEY — app.js
   One zoomable map, on desktop and on mobile.
   Rows are year bands; click a stop to zoom into it.
   ========================================================= */
(() => {
  'use strict';

  const D = window.JOURNEY;
  const $  = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const el = (t, c, x) => { const n = document.createElement(t); if (c) n.className = c; if (x != null) n.textContent = x; return n; };
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const SVGNS = 'http://www.w3.org/2000/svg';

  /* ---------------- icons (no emoji) ---------------- */
  const ICONS = {
    book:"M4 5a2 2 0 0 1 2-2h12v18H6a2 2 0 0 1-2-2z|M8 3v18",
    search:"M11 4a7 7 0 1 1 0 14 7 7 0 0 1 0-14z|M16.5 16.5 21 21",
    star:"M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L4.5 9.7l5.9-.9z",
    grid:"M4 4h7v7H4z|M13 4h7v7h-7z|M4 13h7v7H4z|M13 13h7v7h-7z",
    cart:"M3 4h2l2.4 11h10.2l2-8H6|M9.5 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2z|M17.5 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2z",
    shield:"M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z",
    shield2:"M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z|M9 12l2 2 4-4",
    compass:"M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18z|M15.5 8.5l-2 5-5 2 2-5z",
    flag:"M6 21V4|M6 4h10l-2 3.5L16 11H6",
    layers:"M12 3l9 5-9 5-9-5z|M3 13l9 5 9-5",
    doc:"M6 3h8l4 4v14H6z|M14 3v4h4",
    tag:"M3 12l9-9h8v8l-9 9z|M16.4 7.6h.01",
    users:"M8.5 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z|M2.5 21c0-3.3 2.7-6 6-6s6 2.7 6 6|M16.5 8.4a2.7 2.7 0 1 0 0-5.4|M16 15.2c3 .5 5 2.9 5 5.8",
    gift:"M3 11h18v10H3z|M3 7h18v4H3z|M12 7v14|M12 7C9 7 7.5 3 9.5 3S12 7 12 7z|M12 7c3 0 4.5-4 2.5-4S12 7 12 7z",
    euro:"M17 6.6A6 6 0 1 0 17 17.4|M4 10.5h9|M4 13.5h9",
    bot:"M7 8h10a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-5a3 3 0 0 1 3-3z|M12 4v4|M9.5 13h.01|M14.5 13h.01",
    pin:"M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11z|M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
    pin2:"M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11z|M12 12.6a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2z|M4 21h16",
    piggy:"M4 12.5a6 6 0 0 1 6-6h4l3-2v4a6 6 0 0 1 2 4.5c0 3.6-3.6 6.5-8 6.5H8l-2 2v-3.2a6 6 0 0 1-2-5.8z|M13.5 10.5h.01",
    check:"M4 12.5l5 5L20 6.5",
    card:"M3 6h18v12H3z|M3 10h18",
    nfc:"M8 8a6 6 0 0 1 0 8|M11.5 6a10 10 0 0 1 0 12|M15 4a14 14 0 0 1 0 16",
    chart:"M3 7l5 6 4-3 9 9|M21 14v5h-5",
    trend:"M3 17l6-6 4 4 8-8|M21 7v5h-5",
    list:"M4 6h16|M4 12h16|M4 18h10",
    target:"M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18z|M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8z|M12 11.4a.6.6 0 1 1 0 1.2.6.6 0 0 1 0-1.2z",
    phone:"M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z",
    cap:"M2 8.5 12 4l10 4.5-10 4.5z|M6 11v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5",
    battery:"M3 8h14v8H3z|M20 11v2|M6.5 11v2",
    spark:"M12 3v4|M12 17v4|M3 12h4|M17 12h4|M6 6l2.5 2.5|M15.5 15.5 18 18|M18 6l-2.5 2.5|M8.5 15.5 6 18",
    trophy:"M7 4h10v5a5 5 0 0 1-10 0z|M7 6H4v2a3 3 0 0 0 3 3|M17 6h3v2a3 3 0 0 1-3 3|M10 20h4|M12 14v6",
    code:"M8 8l-4 4 4 4|M16 8l4 4-4 4|M13.5 5l-3 14",
    sun:"M12 7.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9z|M12 2v2|M12 20v2|M2 12h2|M20 12h2|M4.9 4.9l1.4 1.4|M17.7 17.7l1.4 1.4|M19.1 4.9l-1.4 1.4|M6.3 17.7l-1.4 1.4",
    megaphone:"M4 10v4a1 1 0 0 0 1 1h3l7 4V5L8 9H5a1 1 0 0 0-1 1z|M18 9a4 4 0 0 1 0 6",
    film:"M3 5h18v14H3z|M3 9h4|M3 15h4|M17 9h4|M17 15h4|M9 5v14|M15 5v14",
    cube:"M12 3l8 4.5v9L12 21l-8-4.5v-9z|M12 12l8-4.5|M12 12v9|M12 12L4 7.5"
  };
  function icon(name, size) {
    const svg = document.createElementNS(SVGNS, 'svg');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('width', size); svg.setAttribute('height', size);
    svg.setAttribute('fill', 'none'); svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('stroke-width', '1.7'); svg.setAttribute('stroke-linecap', 'round');
    svg.setAttribute('stroke-linejoin', 'round');
    (ICONS[name] || ICONS.star).split('|').forEach(d => {
      const p = document.createElementNS(SVGNS, 'path'); p.setAttribute('d', d); svg.append(p);
    });
    return svg;
  }

  /* ---------------- i18n ---------------- */
  const UI = {
    statYears:{en:'Years',el:'Χρόνια'}, statStops:{en:'Stops',el:'Στάσεις'},
    statFails:{en:'Failures',el:'Αποτυχίες'}, statSites:{en:'Websites',el:'Websites'},
    progress:{en:'Journey',el:'Πορεία'},
    hint:{en:'Click a stop to zoom in · drag to pan · scroll to zoom · ← → to move',el:'Πάτα μια στάση για zoom · σύρε · scroll για zoom · ← → πλοήγηση'},
    hintM:{en:'Tap a stop · drag the map · pinch to zoom',el:'Πάτα μια στάση · σύρε τον χάρτη · pinch για zoom'},
    updated:{en:'Updated',el:'Ενημέρωση'},
    lesson:{en:'Lesson',el:'Μάθημα'},
    meanwhile:{en:'Meanwhile',el:'Παράλληλα'},
    milestone:{en:'Milestone',el:'Ορόσημο'},
    about:{en:'About this map',el:'Σχετικά με τον χάρτη'},
    chapters:{en:'Chapters',el:'Κεφάλαια'},
    addPhoto:{en:'+ add photo here',el:'+ βάλε φωτό εδώ'},
    start:{en:'Start the tour',el:'Ξεκίνα την ξενάγηση'},
    status:{
      win:{en:'Win',el:'Νίκη'}, fail:{en:'Failure',el:'Αποτυχία'},
      lesson:{en:'Lesson',el:'Μάθημα'}, live:{en:'Now',el:'Τώρα'}, next:{en:'Next',el:'Επόμενο'}
    }
  };

  let LANG = 'el';
  try { LANG = localStorage.getItem('journey.lang') || 'el'; } catch (e) {}
  const reg = [];
  const pick = o => (o && typeof o === 'object' && !Array.isArray(o)) ? (o[LANG] ?? o.en ?? '') : (o ?? '');
  function T(node, obj, attr) { reg.push({ node, obj, attr: attr || 'text' }); if (attr) node.setAttribute(attr, pick(obj)); else node.textContent = pick(obj); return node; }
  function applyLang() {
    reg.forEach(({ node, obj, attr }) => { if (attr === 'text') node.textContent = pick(obj); else node.setAttribute(attr, pick(obj)); });
    document.documentElement.lang = LANG;
    $('.lang').dataset.active = LANG;
    $$('.lang button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === LANG)));
    try { localStorage.setItem('journey.lang', LANG); } catch (e) {}
  }

  const stages = D.stages;
  const chapterOf = id => D.chapters.find(c => c.id === id) || { color: '#7c5cff', label: { en: '', el: '' } };
  const liveIdx = Math.max(0, stages.findIndex(s => s.status === 'live'));
  const src = n => 'images/media/' + D.media[n];

  /* ---------------- cards ---------------- */
  const cardCache = {};
  function buildCard(s, i) {
    if (cardCache[s.id]) return cardCache[s.id];
    const ch = chapterOf(s.chapter);
    const card = el('article', 'card');
    card.style.setProperty('--acc', ch.color);

    const top = el('div', 'card__top');
    if (s.milestone) top.append(T(el('span', 'tag tag--ms'), UI.milestone));
    top.append(
      T(el('span', 'tag tag--' + s.status), UI.status[s.status] || UI.status.lesson),
      T(el('span', 'tag tag--acc'), ch.label),
      T(el('span', 'tag'), s.date)
    );
    card.append(top);
    card.append(el('div', 'card__no', String(i + 1).padStart(2, '0')));
    card.append(T(el('h3'), s.title));
    if (s.subtitle) card.append(T(el('p', 'card__sub'), s.subtitle));
    if (s.meanwhile) {
      const mw = el('div', 'meanwhile');
      mw.append(T(el('b'), UI.meanwhile), T(el('span'), s.meanwhile));
      card.append(mw);
    }
    card.append(T(el('p', 'card__body'), s.body));

    if (s.metrics && s.metrics.length) {
      const m = el('div', 'metrics');
      s.metrics.forEach(x => { const b = el('div', 'metric'); b.append(T(el('b'), x.value), T(el('span'), x.label)); m.append(b); });
      card.append(m);
    }

    const g = el('div', 'gallery');
    (s.images || []).forEach((img, k) => {
      const th = el('button', 'thumb'); th.type = 'button';
      const im = el('img'); im.src = src(img.n); im.loading = 'lazy'; T(im, img.caption, 'alt');
      th.append(im);
      if (D.media[img.n] && D.media[img.n].endsWith('.gif')) th.append(el('span', 'thumb__gif', 'GIF'));
      th.addEventListener('click', () => openLightbox(s.images, k));
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

  function buildAbout() {
    const box = el('div', 'about');
    box.append(T(el('h3'), { en: 'The Journey Map', el: 'Ο Χάρτης του Ταξιδιού' }));
    box.append(T(el('p', 'card__body'), D.profile.tagline));
    const st = el('div', 'metrics');
    statList().forEach(s => { const b = el('div', 'metric'); b.append(el('b', null, String(s.n)), T(el('span'), s.l)); st.append(b); });
    box.append(st);
    box.append(T(el('div', 'about__t'), UI.chapters));
    const lg = el('div', 'legend');
    D.chapters.forEach(c => {
      const b = el('button', 'lg'); b.style.setProperty('--c', c.color); b.dataset.id = c.id;
      b.append(el('i'), T(el('span'), c.label));
      b.addEventListener('click', () => {
        b.classList.toggle('off');
        const offs = $$('.lg.off', lg).map(x => x.dataset.id);
        nodeEls.forEach(n => n.classList.toggle('dimmed', offs.includes(n.dataset.chapter)));
      });
      lg.append(b);
    });
    box.append(lg);
    const u = el('p', 'about__upd');
    u.append(T(el('span'), UI.updated), el('b', null, ' ' + D.profile.lastUpdated));
    box.append(u);
    const link = D.profile.links[0];
    if (link) { const a = el('a', 'btn', link.label); a.href = link.url; a.target = '_blank'; a.rel = 'noopener'; box.append(a); }
    return box;
  }

  function statList() {
    const real = stages.filter(s => s.status !== 'next');
    const advon = stages.find(s => s.id === 'today');
    return [
      { n: 2026 - D.profile.startYear + 2, l: UI.statYears },
      { n: real.length, l: UI.statStops },
      { n: real.filter(s => s.status === 'fail').length, l: UI.statFails },
      { n: (advon && advon.metrics[0] && advon.metrics[0].value) || '200+', l: UI.statSites }
    ];
  }

  /* ---------------- layout ---------------- */
  let MOBILE = false, CW = 0, CH = 0, PTS = [], BANDS = [];
  function buildLayout() {
    MOBILE = window.innerWidth < 980;
    const MAXCOLS = MOBILE ? 2 : 9;
    const padX  = MOBILE ? 150 : 430;
    const stepX = MOBILE ? 320 : 330;
    const padY  = MOBILE ? 220 : 200;
    const stepY = MOBILE ? 285 : 310;
    const bandGap = MOBILE ? 190 : 0;

    /* rows = chunks of each period */
    const rows = [];
    D.periods.forEach(p => {
      const list = stages.map((s, i) => ({ s, i })).filter(o => o.s.period === p.id);
      for (let k = 0; k < list.length; k += MAXCOLS) rows.push({ p, items: list.slice(k, k + MAXCOLS), first: k === 0 });
    });

    const maxCols = Math.max(...rows.map(r => r.items.length), 2);
    CW = padX * 2 + stepX * (maxCols - 1);

    PTS = new Array(stages.length); BANDS = [];
    let y = padY;
    rows.forEach((row, ri) => {
      if (row.first && ri > 0) y += bandGap;
      if (row.first) BANDS.push({ p: row.p, x: MOBILE ? CW / 2 : 215, y: MOBILE ? y - 145 : y, mobile: MOBILE });
      const rev = ri % 2 === 1;
      /* short rows are centred so the map stays balanced */
      const off = (maxCols - row.items.length) / 2 * stepX;
      row.items.forEach((o, k) => {
        const c = rev ? (row.items.length - 1 - k) : k;
        PTS[o.i] = { x: padX + off + c * stepX, y: y + ((o.i % 2) ? -18 : 18) };
      });
      y += stepY;
    });
    CH = y - stepY + padY;
  }

  function smoothPath(p) {
    if (p.length < 2) return '';
    let d = `M ${p[0].x} ${p[0].y}`;
    for (let i = 0; i < p.length - 1; i++) {
      const p0 = p[i - 1] || p[i], p1 = p[i], p2 = p[i + 1], p3 = p[i + 2] || p2, t = 0.2;
      d += ` C ${p1.x + (p2.x - p0.x) * t} ${p1.y + (p2.y - p0.y) * t}, ${p2.x - (p3.x - p1.x) * t} ${p2.y - (p3.y - p1.y) * t}, ${p2.x} ${p2.y}`;
    }
    return d;
  }

  const board = $('#board'), canvas = $('#canvas'), nodesBox = $('#nodes'), bandsBox = $('#bands');
  const svg = $('#roadSvg'), pBase = $('#roadBase'), pFill = $('#roadFill'), pGlow = $('#roadGlow');
  let nodeEls = [];

  function renderMap() {
    buildLayout();
    canvas.style.width = CW + 'px'; canvas.style.height = CH + 'px';
    svg.setAttribute('viewBox', `0 0 ${CW} ${CH}`);
    svg.style.width = CW + 'px'; svg.style.height = CH + 'px';

    const d = smoothPath(PTS);
    [pBase, pFill, pGlow].forEach(p => p.setAttribute('d', d));

    nodesBox.replaceChildren(); bandsBox.replaceChildren(); nodeEls = [];

    BANDS.forEach(b => {
      const box = el('div', 'band' + (b.mobile ? ' band--m' : ''));
      box.style.left = b.x + 'px'; box.style.top = b.y + 'px';
      box.append(el('b', null, b.p.label), T(el('span'), b.p.note));
      bandsBox.append(box);
    });

    stages.forEach((s, i) => {
      const ch = chapterOf(s.chapter);
      const b = el('button', 'mnode' + (s.milestone ? ' milestone' : ''));
      b.style.setProperty('--acc', ch.color);
      b.style.left = PTS[i].x + 'px'; b.style.top = PTS[i].y + 'px';
      b.dataset.chapter = s.chapter;
      if (s.status === 'live') b.classList.add('is-live');
      if (i > liveIdx) b.classList.add('is-future');

      const dot = el('span', 'mnode__dot');
      dot.append(icon(s.icon, s.milestone ? 46 : 40));
      dot.append(el('span', 'mnode__num', String(i + 1)));
      const lab = el('span', 'mnode__label');
      lab.append(T(el('b'), s.date), T(el('i'), s.short || s.title));
      b.append(dot, lab);
      b.addEventListener('click', e => { e.stopPropagation(); open(i); });
      nodesBox.append(b); nodeEls.push(b);
    });

    requestAnimationFrame(() => {
      const L = pFill.getTotalLength();
      const upto = lengthAt(pFill, L, PTS[liveIdx]);
      [pFill, pGlow].forEach(p => {
        p.style.transition = 'none';
        p.style.strokeDasharray = L; p.style.strokeDashoffset = L;
        p.getBoundingClientRect();
        p.style.transition = 'stroke-dashoffset 2.6s cubic-bezier(.2,.8,.2,1)';
        p.style.strokeDashoffset = L - upto;
      });
      const pct = Math.round(((liveIdx + 1) / stages.length) * 100);
      setTimeout(() => { $('#hdrFill').style.width = pct + '%'; $('#hdrPct').textContent = pct + '%'; }, 120);
    });
  }
  /* closest point on the path to a node — works even when a row doubles back */
  function lengthAt(path, L, target) {
    const N = 1400; let best = L, bestD = Infinity;
    for (let i = 0; i <= N; i++) {
      const l = L * i / N, pt = path.getPointAtLength(l);
      const d = (pt.x - target.x) ** 2 + (pt.y - target.y) ** 2;
      if (d < bestD) { bestD = d; best = l; }
    }
    return best;
  }

  /* ---------------- view ---------------- */
  let fit = 1, z = 1, tx = 0, ty = 0, openIdx = -1;
  const size = () => { const r = board.getBoundingClientRect(); return { w: r.width, h: r.height }; };
  function computeFit() {
    const { w, h } = size();
    fit = MOBILE ? (w / CW) * 0.98 : Math.min(w / CW, h / CH) * 0.94;
  }
  function apply(anim) {
    canvas.classList.toggle('anim', !!anim);
    canvas.style.transform = `translate(${tx}px, ${ty}px) scale(${fit * z})`;
    canvas.classList.toggle('near', fit * z >= 0.5);
    $('#zVal').textContent = Math.round(z * 100) + '%';
  }
  function home(anim) {
    computeFit();
    const { w, h } = size();
    tx = (w - CW * fit) / 2;
    ty = MOBILE ? 8 : (h - CH * fit) / 2;
    z = 1; apply(anim);
  }
  function zoomAt(nz, cx, cy, anim) {
    nz = clamp(nz, 0.5, 4.5);
    const s0 = fit * z, s1 = fit * nz;
    tx = cx - (cx - tx) * (s1 / s0); ty = cy - (cy - ty) * (s1 / s0);
    z = nz; apply(anim);
  }
  function focus(i, anim = true) {
    computeFit();
    const { w, h } = size();
    const panelW = (!MOBILE && panel.classList.contains('on')) ? panel.getBoundingClientRect().width : 0;
    const panelH = (MOBILE && panel.classList.contains('on')) ? panel.getBoundingClientRect().height : 0;
    z = MOBILE ? clamp(1.25 / fit * 0.55, 0.8, 2.2) : 1.9;
    const s = fit * z;
    tx = (w - panelW) * 0.5 - PTS[i].x * s;
    ty = (h - panelH) * 0.45 - PTS[i].y * s;
    apply(anim);
  }

  /* drag + wheel + pinch */
  let drag = null, moved = 0, pinch = null;
  board.addEventListener('pointerdown', e => {
    if (e.target.closest('.ov') || e.target.closest('.mnode')) return;
    drag = { x: e.clientX, y: e.clientY, tx, ty }; moved = 0;
    board.classList.add('is-drag');
    try { board.setPointerCapture(e.pointerId); } catch (err) {}
  });
  board.addEventListener('pointermove', e => {
    if (!drag) return;
    moved = Math.max(moved, Math.hypot(e.clientX - drag.x, e.clientY - drag.y));
    tx = drag.tx + (e.clientX - drag.x); ty = drag.ty + (e.clientY - drag.y); apply(false);
  });
  const endDrag = () => { drag = null; board.classList.remove('is-drag'); };
  board.addEventListener('pointerup', endDrag);
  board.addEventListener('pointercancel', endDrag);
  board.addEventListener('click', e => {
    if (moved > 6 || e.target.closest('.mnode') || e.target.closest('.ov')) return;
    if (openIdx >= 0) { close(); home(true); }
  });
  board.addEventListener('wheel', e => {
    e.preventDefault();
    const r = board.getBoundingClientRect();
    zoomAt(z * (e.deltaY > 0 ? 0.9 : 1.11), e.clientX - r.left, e.clientY - r.top, false);
  }, { passive: false });
  board.addEventListener('touchstart', e => {
    if (e.touches.length === 2) {
      const [a, b] = e.touches;
      pinch = { d: Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY), z };
    }
  }, { passive: true });
  board.addEventListener('touchmove', e => {
    if (pinch && e.touches.length === 2) {
      const [a, b] = e.touches, r = board.getBoundingClientRect();
      const d = Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
      zoomAt(pinch.z * (d / pinch.d), (a.clientX + b.clientX) / 2 - r.left, (a.clientY + b.clientY) / 2 - r.top, false);
    }
  }, { passive: true });
  board.addEventListener('touchend', () => { pinch = null; });

  $('#zIn').addEventListener('click', () => { const { w, h } = size(); zoomAt(z * 1.35, w / 2, h / 2, true); });
  $('#zOut').addEventListener('click', () => { const { w, h } = size(); zoomAt(z / 1.35, w / 2, h / 2, true); });
  $('#zReset').addEventListener('click', () => { close(); home(true); });

  /* ---------------- panel ---------------- */
  const panel = $('#panel'), panelBody = $('#panelBody');
  function open(i) {
    openIdx = i;
    panelBody.replaceChildren(buildCard(stages[i], i));
    panelBody.scrollTop = 0;
    panel.classList.add('on'); board.classList.add('focused');
    $('#pCount').textContent = (i + 1) + ' / ' + stages.length;
    nodeEls.forEach((n, k) => n.classList.toggle('is-open', k === i));
    requestAnimationFrame(() => focus(i, true));
  }
  function openAbout() {
    openIdx = -1;
    panelBody.replaceChildren(buildAbout());
    panelBody.scrollTop = 0;
    panel.classList.add('on');
    $('#pCount').textContent = '';
    nodeEls.forEach(n => n.classList.remove('is-open'));
  }
  function close() {
    openIdx = -1; panel.classList.remove('on'); board.classList.remove('focused');
    nodeEls.forEach(n => n.classList.remove('is-open'));
    stopTour();
  }
  const step = d => { if (openIdx < 0) return open(0); open((openIdx + d + stages.length) % stages.length); };
  $('#pClose').addEventListener('click', () => { close(); home(true); });
  $('#pPrev').addEventListener('click', () => step(-1));
  $('#pNext').addEventListener('click', () => step(1));
  $('#aboutBtn').addEventListener('click', openAbout);
  document.addEventListener('keydown', e => {
    if ($('#lightbox').classList.contains('is-open')) return;
    if (e.key === 'Escape') { close(); home(true); }
    if (e.key === 'ArrowRight') step(1);
    if (e.key === 'ArrowLeft') step(-1);
  });

  let tourT = null;
  function stopTour() { if (tourT) { clearInterval(tourT); tourT = null; $('#tour').classList.remove('is-on'); } }
  $('#tour').addEventListener('click', () => {
    if (tourT) return stopTour();
    $('#tour').classList.add('is-on');
    open(openIdx < 0 ? 0 : openIdx);
    tourT = setInterval(() => {
      if (openIdx >= stages.length - 1) return stopTour();
      open(openIdx + 1);
    }, 6000);
  });

  /* ---------------- lightbox ---------------- */
  let lbList = [], lbIdx = 0;
  const lb = $('#lightbox');
  function openLightbox(list, i) { lbList = list; lbIdx = i; paintLb(); lb.classList.add('is-open'); }
  function paintLb() { const it = lbList[lbIdx]; $('#lbImg').src = src(it.n); $('#lbCap').textContent = pick(it.caption); }
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

  /* ---------------- chrome ---------------- */
  function renderChrome() {
    T($('#brand-role'), D.profile.role);
    T($('#hdrLabel'), UI.progress);
    T($('#hint'), MOBILE ? UI.hintM : UI.hint);
    const u = $('#updated');
    u.append(T(el('span'), UI.updated), el('b', null, D.profile.lastUpdated));
    const hs = $('#hdrStats');
    statList().forEach(s => { const b = el('div', 'hstat'); b.append(el('b', null, String(s.n)), T(el('span'), s.l)); hs.append(b); });
  }

  $$('.lang button').forEach(b => b.addEventListener('click', () => {
    LANG = b.dataset.lang; applyLang();
    if (lb.classList.contains('is-open')) paintLb();
  }));
  const themeBtn = $('#themeBtn');
  let theme = 'light';
  try { theme = localStorage.getItem('journey.theme') || 'light'; } catch (e) {}
  function applyTheme() {
    document.documentElement.dataset.theme = theme;
    themeBtn.replaceChildren(icon(theme === 'light' ? 'sun' : 'star', 16));
    try { localStorage.setItem('journey.theme', theme); } catch (e) {}
  }
  themeBtn.addEventListener('click', () => { theme = theme === 'light' ? 'dark' : 'light'; applyTheme(); });

  /* ---------------- boot ---------------- */
  renderMap();
  renderChrome();
  applyLang();
  applyTheme();
  home(false);

  let lastMobile = MOBILE;
  window.addEventListener('resize', () => {
    clearTimeout(window.__rz);
    window.__rz = setTimeout(() => {
      const wasMobile = lastMobile;
      buildLayout();
      if (MOBILE !== wasMobile) { lastMobile = MOBILE; renderMap(); }
      if (openIdx >= 0) focus(openIdx, true); else home(true);
    }, 150);
  });
})();
