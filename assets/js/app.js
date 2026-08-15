/* =========================================================
   JOURNEY — app.js
   Renders the roadmap from data/journey.js, handles the
   animated road, scroll progress, language + theme, lightbox.
   ========================================================= */
(() => {
  'use strict';

  const D = window.JOURNEY;
  const $  = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  /* ---------- i18n ---------- */
  const UI = {
    kicker:      { en: 'The Roadmap · 2022 → now', el: 'Ο Χάρτης · 2022 → σήμερα' },
    heroTitle1:  { en: 'My journey in', el: 'Το ταξίδι μου στην' },
    heroTitle2:  { en: 'entrepreneurship', el: 'επιχειρηματικότητα' },
    statYears:   { en: 'Years in', el: 'Χρόνια μέσα' },
    statVent:    { en: 'Ventures', el: 'Εγχειρήματα' },
    statFails:   { en: 'Failures', el: 'Αποτυχίες' },
    statNow:     { en: 'Companies now', el: 'Εταιρείες τώρα' },
    scroll:      { en: 'scroll the map', el: 'κύλισε τον χάρτη' },
    mapTitle:    { en: 'The Map', el: 'Ο Χάρτης' },
    mapSub:      { en: 'Every stop, in order. Tap a photo to open it. Filter by chapter below.', el: 'Κάθε στάση, με τη σειρά. Πάτα μια φωτογραφία για να ανοίξει. Φιλτράρισε ανά κεφάλαιο.' },
    all:         { en: 'All', el: 'Όλα' },
    progress:    { en: 'Progress', el: 'Πρόοδος' },
    lesson:      { en: 'Lesson', el: 'Μάθημα' },
    addPhoto:    { en: '+ add photo here', el: '+ βάλε φωτό εδώ' },
    outroTitle:  { en: 'The map is still being drawn.', el: 'Ο χάρτης γράφεται ακόμα.' },
    outroBody:   { en: 'Four years, five business models, more failures than wins — and all of it feeding one company. New milestones get added here as they happen.', el: 'Τέσσερα χρόνια, πέντε επιχειρηματικά μοντέλα, περισσότερες αποτυχίες από νίκες — και όλα τροφοδοτούν μία εταιρεία. Νέα ορόσημα προστίθενται εδώ όσο συμβαίνουν.' },
    status: {
      win:    { en: 'Win',      el: 'Νίκη' },
      fail:   { en: 'Failure',  el: 'Αποτυχία' },
      lesson: { en: 'Lesson',   el: 'Μάθημα' },
      live:   { en: 'Live now', el: 'Τώρα' },
      next:   { en: 'Next',     el: 'Επόμενο' }
    }
  };

  let LANG = 'el';
  try { LANG = localStorage.getItem('journey.lang') || 'el'; } catch (e) {}
  const reg = []; // [{node, obj, attr}]
  const pick = (o) => (o && typeof o === 'object' && !Array.isArray(o)) ? (o[LANG] ?? o.en ?? '') : (o ?? '');
  function T(node, obj, attr) {
    reg.push({ node, obj, attr: attr || 'text' });
    if (attr) node.setAttribute(attr, pick(obj)); else node.textContent = pick(obj);
    return node;
  }
  function applyLang() {
    reg.forEach(({ node, obj, attr }) => {
      if (attr === 'text') node.textContent = pick(obj);
      else node.setAttribute(attr, pick(obj));
    });
    document.documentElement.lang = LANG;
    $('.lang').dataset.active = LANG;
    $$('.lang button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === LANG)));
    try { localStorage.setItem('journey.lang', LANG); } catch (e) {}
  }

  /* ---------- helpers ---------- */
  const el = (tag, cls, txt) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (txt != null) n.textContent = txt;
    return n;
  };
  const chapterOf = (id) => D.chapters.find(c => c.id === id) || { color: '#7c5cff', label: { en: '', el: '' } };

  /* ---------- HERO ---------- */
  function renderHero() {
    T($('#kicker-text'), UI.kicker);
    T($('#hero-l1'), UI.heroTitle1);
    T($('#hero-l2'), UI.heroTitle2);
    T($('#hero-sub'), D.profile.tagline);
    T($('#hero-now'), D.profile.currentLabel);
    T($('#scroll-text'), UI.scroll);
    T($('#brand-role'), D.profile.role);
    $('#hero-start').textContent = D.profile.startYear;

    const real = D.stages.filter(s => s.status !== 'next');
    const stats = [
      { n: new Date().getFullYear() - D.profile.startYear, l: UI.statYears },
      { n: real.length, l: UI.statVent },
      { n: real.filter(s => s.status === 'fail').length, l: UI.statFails },
      { n: 1, l: UI.statNow }
    ];
    const wrap = $('#stats');
    stats.forEach((s, i) => {
      const box = el('div', 'stat glass rv');
      box.style.transitionDelay = (i * 90) + 'ms';
      const num = el('div', 'stat__n grad-text', '0');
      num.dataset.target = s.n;
      box.append(num, T(el('div', 'stat__l'), s.l));
      wrap.append(box);
    });
  }

  /* ---------- FILTERS ---------- */
  function renderFilters() {
    const box = $('#filters');
    const mk = (id, label, color) => {
      const b = el('button', 'chip' + (id === 'all' ? ' is-on' : ''));
      b.dataset.f = id;
      const dot = el('i');
      if (color) dot.style.background = color;
      b.append(dot, T(el('span'), label));
      b.addEventListener('click', () => {
        $$('.chip').forEach(c => c.classList.toggle('is-on', c === b));
        $$('.stage').forEach(s => s.classList.toggle('is-hidden', id !== 'all' && s.dataset.chapter !== id));
        requestAnimationFrame(() => { buildPath(); onScroll(); });
      });
      box.append(b);
    };
    mk('all', UI.all, 'linear-gradient(90deg,#7c5cff,#2bd98b)');
    D.chapters.forEach(c => mk(c.id, c.label, c.color));
  }

  /* ---------- STAGES ---------- */
  function renderStages() {
    const road = $('#road');
    T($('#map-title'), UI.mapTitle);
    T($('#map-sub'), UI.mapSub);

    D.stages.forEach((s) => {
      const ch = chapterOf(s.chapter);
      const stage = el('div', 'stage');
      stage.dataset.chapter = s.chapter;
      stage.id = 'stage-' + s.id;
      stage.style.setProperty('--acc', ch.color);
      if (s.status === 'live') stage.classList.add('is-live');

      /* node */
      const nodeWrap = el('div', 'stage__node');
      const node = el('div', 'node', s.icon);
      node.setAttribute('role', 'button');
      node.setAttribute('tabindex', '0');
      node.append(el('span', 'node__year', s.year));
      node.addEventListener('click', () => stage.scrollIntoView({ behavior: 'smooth', block: 'center' }));
      nodeWrap.append(node);

      /* card */
      const cardWrap = el('div', 'stage__card');
      const card = el('article', 'card glass');
      card.addEventListener('pointermove', (e) => {
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
        card.style.setProperty('--my', (e.clientY - r.top) + 'px');
      });

      const top = el('div', 'card__top');
      top.append(
        T(el('span', 'tag tag--' + s.status), UI.status[s.status] || UI.status.lesson),
        T(el('span', 'tag tag--acc'), ch.label),
        T(el('span', 'tag'), s.date),
        T(el('span', 'tag'), s.duration)
      );
      card.append(top);
      card.append(T(el('h3'), s.title));
      if (s.subtitle) card.append(T(el('p', 'card__sub'), s.subtitle));
      card.append(T(el('p', 'card__body'), s.body));

      if (s.metrics && s.metrics.length) {
        const m = el('div', 'metrics');
        s.metrics.forEach(x => {
          const box = el('div', 'metric');
          box.append(T(el('b'), x.value), T(el('span'), x.label));
          m.append(box);
        });
        card.append(m);
      }

      const g = el('div', 'gallery');
      (s.images || []).forEach((img, i) => {
        const th = el('button', 'thumb');
        th.type = 'button';
        const im = el('img');
        im.src = img.src;
        im.loading = 'lazy';
        T(im, img.caption, 'alt');
        th.append(im);
        th.addEventListener('click', () => openLightbox(s.images, i));
        g.append(th);
      });
      const add = el('div', 'thumb thumb--add');
      T(add, UI.addPhoto);
      g.append(add);
      card.append(g);

      if (s.lesson && (s.lesson.en || s.lesson.el)) {
        const q = el('blockquote', 'lesson');
        const inner = el('div');
        inner.append(T(el('b'), UI.lesson), T(el('span'), s.lesson));
        q.append(inner);
        card.append(q);
      }

      cardWrap.append(card);
      stage.append(cardWrap, nodeWrap);
      road.append(stage);
    });
  }

  /* ---------- OUTRO ---------- */
  function renderOutro() {
    T($('#outro-title'), UI.outroTitle);
    T($('#outro-body'), UI.outroBody);
    const box = $('#outro-links');
    D.profile.links.forEach((l, i) => {
      const a = el('a', 'btn' + (i ? ' btn--ghost' : ''), l.label);
      a.href = l.url;
      a.target = '_blank';
      a.rel = 'noopener';
      box.append(a);
    });
  }

  /* ---------- ROAD PATH ---------- */
  const svg = $('#roadSvg');
  const pBase = $('#roadBase'), pFill = $('#roadFill'), pGlow = $('#roadGlow'), rider = $('#rider');
  let pathLen = 0;

  function buildPath() {
    const road = $('#road');
    const stages = $$('.stage:not(.is-hidden)', road);
    if (!stages.length) return;
    const rb = road.getBoundingClientRect();
    svg.setAttribute('viewBox', `0 0 ${rb.width} ${rb.height}`);
    svg.setAttribute('width', rb.width);
    svg.setAttribute('height', rb.height);

    const pts = stages.map(s => {
      const n = $('.node', s).getBoundingClientRect();
      return { x: n.left - rb.left + n.width / 2, y: n.top - rb.top + n.height / 2 };
    });
    pts.unshift({ x: pts[0].x, y: Math.max(0, pts[0].y - 70) });
    pts.push({ x: pts[pts.length - 1].x, y: Math.min(rb.height, pts[pts.length - 1].y + 70) });

    let d = `M ${pts[0].x} ${pts[0].y}`;
    for (let i = 1; i < pts.length; i++) {
      const a = pts[i - 1], b = pts[i];
      const k = Math.abs(b.y - a.y) * 0.45;
      d += ` C ${a.x} ${a.y + k}, ${b.x} ${b.y - k}, ${b.x} ${b.y}`;
    }
    [pBase, pFill, pGlow].forEach(p => p.setAttribute('d', d));
    pathLen = pFill.getTotalLength();
    pFill.style.strokeDasharray = pathLen;
    pGlow.style.strokeDasharray = pathLen;
  }

  /* ---------- SCROLL ---------- */
  let ticking = false;
  function onScroll() {
    /* page progress bar */
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    const pageP = docH > 0 ? Math.min(1, Math.max(0, window.scrollY / docH)) : 0;
    $('#topFill').style.width = (pageP * 100) + '%';

    const road = $('#road');
    if (!road || !pathLen) return;
    const rb = road.getBoundingClientRect();
    const anchor = window.innerHeight * 0.55;
    let p = (anchor - rb.top) / rb.height;
    p = Math.min(1, Math.max(0, p));

    pFill.style.strokeDashoffset = pathLen * (1 - p);
    pGlow.style.strokeDashoffset = pathLen * (1 - p);

    const pt = pFill.getPointAtLength(pathLen * p);
    rider.setAttribute('transform', `translate(${pt.x},${pt.y})`);
    rider.style.opacity = p > 0.001 && p < 0.999 ? 1 : 0.25;

    const pct = Math.round(p * 100);
    $('#hdrFill').style.width = pct + '%';
    $('#hdrPct').textContent = pct + '%';

    $$('.stage:not(.is-hidden)').forEach(s => {
      const n = $('.node', s).getBoundingClientRect();
      const y = n.top - rb.top + n.height / 2;
      s.classList.toggle('is-reached', pt.y >= y - 6);
    });
    ticking = false;
  }
  const queue = () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } };

  /* ---------- REVEAL + COUNTERS ---------- */
  function observe() {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        e.target.classList.add('in');
        if (e.target.classList.contains('stat')) {
          const n = $('.stat__n', e.target);
          const target = +n.dataset.target;
          let i = 0;
          const step = () => {
            i += Math.max(1, Math.ceil(target / 22));
            if (i >= target) { n.textContent = target; return; }
            n.textContent = i;
            requestAnimationFrame(step);
          };
          step();
        }
        io.unobserve(e.target);
      });
    }, { threshold: 0.18, rootMargin: '0px 0px -60px 0px' });
    $$('.stage, .rv').forEach(x => io.observe(x));
  }

  /* ---------- LIGHTBOX ---------- */
  let lbList = [], lbIdx = 0;
  const lb = $('#lightbox');
  function openLightbox(list, i) {
    lbList = list; lbIdx = i;
    paintLightbox();
    lb.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }
  function paintLightbox() {
    const it = lbList[lbIdx];
    $('#lbImg').src = it.src;
    $('#lbCap').textContent = pick(it.caption);
  }
  function closeLightbox() {
    lb.classList.remove('is-open');
    document.body.style.overflow = '';
  }
  function move(d) {
    if (!lbList.length) return;
    lbIdx = (lbIdx + d + lbList.length) % lbList.length;
    paintLightbox();
  }
  $('#lbClose').addEventListener('click', closeLightbox);
  $('#lbPrev').addEventListener('click', e => { e.stopPropagation(); move(-1); });
  $('#lbNext').addEventListener('click', e => { e.stopPropagation(); move(1); });
  lb.addEventListener('click', e => { if (e.target === lb) closeLightbox(); });
  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('is-open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') move(1);
    if (e.key === 'ArrowLeft') move(-1);
  });

  /* ---------- CONTROLS ---------- */
  $$('.lang button').forEach(b => b.addEventListener('click', () => {
    LANG = b.dataset.lang;
    applyLang();
    if (lb.classList.contains('is-open')) paintLightbox();
  }));

  const themeBtn = $('#themeBtn');
  let theme = 'dark';
  try { theme = localStorage.getItem('journey.theme') || 'dark'; } catch (e) {}
  function applyTheme() {
    document.documentElement.dataset.theme = theme;
    themeBtn.textContent = theme === 'dark' ? '☾' : '☀';
    try { localStorage.setItem('journey.theme', theme); } catch (e) {}
  }
  themeBtn.addEventListener('click', () => { theme = theme === 'dark' ? 'light' : 'dark'; applyTheme(); });

  /* cursor glow (desktop only) */
  if (window.matchMedia('(pointer:fine)').matches) {
    const glow = $('#cursorGlow');
    window.addEventListener('pointermove', e => {
      glow.style.opacity = 1;
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
    }, { passive: true });
  }

  /* ---------- BOOT ---------- */
  renderHero();
  renderFilters();
  renderStages();
  renderOutro();
  applyLang();
  applyTheme();
  observe();

  const relayout = () => { buildPath(); onScroll(); };
  window.addEventListener('scroll', queue, { passive: true });
  window.addEventListener('resize', () => { clearTimeout(window.__rt); window.__rt = setTimeout(relayout, 120); });
  window.addEventListener('load', relayout);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(relayout);
  setTimeout(relayout, 60);
  setTimeout(relayout, 600);
  relayout();
})();
