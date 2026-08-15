/* =========================================================
   JOURNEY — app.js
   One zoomable map, desktop and mobile.
   ========================================================= */
(() => {
  'use strict';

  const D = window.JOURNEY;
  const $  = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const el = (t, c, x) => { const n = document.createElement(t); if (c) n.className = c; if (x != null) n.textContent = x; return n; };
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const SVGNS = 'http://www.w3.org/2000/svg';

  /* ---------------- icons ---------------- */
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
    moon:"M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z",
    megaphone:"M4 10v4a1 1 0 0 0 1 1h3l7 4V5L8 9H5a1 1 0 0 0-1 1z|M18 9a4 4 0 0 1 0 6",
    film:"M3 5h18v14H3z|M3 9h4|M3 15h4|M17 9h4|M17 15h4|M9 5v14|M15 5v14",
    cube:"M12 3l8 4.5v9L12 21l-8-4.5v-9z|M12 12l8-4.5|M12 12v9|M12 12L4 7.5",
    eye:"M2 12s3.8-6.5 10-6.5S22 12 22 12s-3.8 6.5-10 6.5S2 12 2 12z|M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
    eyeoff:"M3 3l18 18|M10.6 6.1A9.9 9.9 0 0 1 12 6c6.2 0 10 6 10 6a17 17 0 0 1-3.6 4.1|M6.3 7.5A16.6 16.6 0 0 0 2 12s3.8 6.5 10 6.5a10 10 0 0 0 3.6-.7|M9.9 9.9a3 3 0 0 0 4.2 4.2",
    info:"M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18z|M12 11v6|M12 7.6h.01",
    summary:"M5 4h14v16H5z|M8.5 8.5h7|M8.5 12h7|M8.5 15.5h4"
  };
  function icon(name, size) {
    const svg = document.createElementNS(SVGNS, 'svg');
    svg.setAttribute('viewBox', '0 0 24 24'); svg.setAttribute('width', size); svg.setAttribute('height', size);
    svg.setAttribute('fill', 'none'); svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('stroke-width', '1.7'); svg.setAttribute('stroke-linecap', 'round'); svg.setAttribute('stroke-linejoin', 'round');
    (ICONS[name] || ICONS.star).split('|').forEach(d => { const p = document.createElementNS(SVGNS, 'path'); p.setAttribute('d', d); svg.append(p); });
    return svg;
  }
  const FLAG_GR = `<svg viewBox="0 0 27 18" width="22" height="15" class="flag"><rect width="27" height="18" fill="#0d5eaf"/><g fill="#fff"><rect y="2" width="27" height="2"/><rect y="6" width="27" height="2"/><rect y="10" width="27" height="2"/><rect y="14" width="27" height="2"/></g><rect width="10" height="10" fill="#0d5eaf"/><g fill="#fff"><rect x="4" width="2" height="10"/><rect y="4" width="10" height="2"/></g></svg>`;
  const FLAG_UK = `<svg viewBox="0 0 30 18" width="22" height="15" class="flag"><rect width="30" height="18" fill="#012169"/><path d="M0,0 30,18 M30,0 0,18" stroke="#fff" stroke-width="3.6"/><path d="M0,0 30,18 M30,0 0,18" stroke="#C8102E" stroke-width="2.1"/><path d="M15,0 v18 M0,9 h30" stroke="#fff" stroke-width="6"/><path d="M15,0 v18 M0,9 h30" stroke="#C8102E" stroke-width="3.6"/></svg>`;

  /* ---------------- i18n ---------------- */
  const UI = {
    statYears:{en:'Years',el:'Χρόνια'}, statStops:{en:'Stops',el:'Στάσεις'},
    statFails:{en:'Failures',el:'Αποτυχίες'}, statSites:{en:'Websites',el:'Websites'},
    progress:{en:'Journey',el:'Πορεία'},
    hint:{en:'Click a stop to zoom in · drag to pan · scroll or +/− to zoom · ← → to move',el:'Πάτα μια στάση για zoom · σύρε · scroll ή +/− για zoom · ← → πλοήγηση'},
    hintM:{en:'Tap a stop · drag the map · pinch to zoom',el:'Πάτα μια στάση · σύρε τον χάρτη · pinch για zoom'},
    updated:{en:'Updated',el:'Ενημέρωση'},
    lesson:{en:'Lesson',el:'Μάθημα'},
    meanwhile:{en:'Meanwhile',el:'Παράλληλα'},
    milestone:{en:'Milestone',el:'Ορόσημο'},
    milestones:{en:'Milestones',el:'Ορόσημα'},
    about:{en:'About',el:'Σχετικά'},
    chapters:{en:'Chapters',el:'Κεφάλαια'},
    addPhoto:{en:'+ add photo here',el:'+ βάλε φωτό εδώ'},
    privacyOn:{en:'Amounts hidden',el:'Ποσά κρυμμένα'},
    privacyOff:{en:'Amounts shown',el:'Ποσά ορατά'},
    summaryTitle:{en:'The short version',el:'Η σύντομη εκδοχή'},
    summaryLead:{en:'Six years in about a minute.',el:'Έξι χρόνια σε περίπου ένα λεπτό.'},
    theWhole:{en:'The whole map',el:'Όλος ο χάρτης'},
    status:{
      win:{en:'Win',el:'Νίκη'}, fail:{en:'Failure',el:'Αποτυχία'},
      lesson:{en:'Lesson',el:'Μάθημα'}, live:{en:'Now',el:'Τώρα'}, next:{en:'Next',el:'Επόμενο'}
    }
  };

  let LANG = 'el';
  try { LANG = localStorage.getItem('journey.lang') || 'el'; } catch (e) {}
  const reg = [];
  const pick = o => (o && typeof o === 'object' && !Array.isArray(o)) ? (o[LANG] ?? o.en ?? '') : (o ?? '');
  function T(node, obj, attr) {
    reg.push({ node, obj, attr: attr || 'text' });
    if (attr === 'mask') maskInline(node, pick(obj));
    else if (attr) node.setAttribute(attr, pick(obj));
    else node.textContent = pick(obj);
    return node;
  }
  function applyLang() {
    reg.forEach(({ node, obj, attr }) => {
      if (attr === 'mask') maskInline(node, pick(obj));
      else if (attr === 'text') node.textContent = pick(obj);
      else node.setAttribute(attr, pick(obj));
    });
    document.documentElement.lang = LANG;
    $('.lang').dataset.active = LANG;
    $$('.lang button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === LANG)));
    try { localStorage.setItem('journey.lang', LANG); } catch (e) {}
    if (privacy) maskTree(document.getElementById('panelBody'));
  }

  const stages = D.stages;
  const chapterOf = id => D.chapters.find(c => c.id === id) || { color: '#7c5cff', label: { en: '', el: '' } };
  const liveIdx = Math.max(0, stages.findIndex(s => s.status === 'live'));
  const src = n => 'images/media/' + D.media[n];

  /* ---------------- privacy mask (> €2,500) ---------------- */
  let privacy = false;
  try { privacy = localStorage.getItem('journey.privacy') === '1'; } catch (e) {}
  const LIMIT = 2500;
  function parseAmount(raw, kSuffix) {
    let s = String(raw).trim();
    let v;
    if (/^\d{1,3}([.,]\d{3})+$/.test(s)) v = +s.replace(/[.,]/g, '');
    else if (/^\d+[.,]\d{1,2}$/.test(s)) v = +s.replace(',', '.');
    else v = +s.replace(/[.,]/g, '');
    if (kSuffix) v *= 1000;
    return isNaN(v) ? 0 : v;
  }
  const AMOUNT = /([€$])\s?(\d[\d.,]*)\s?(k)?|(\d[\d.,]*)\s?(k)?\s?€/gi;
  function maskString(text) {
    let hit = false;
    const parts = [];
    let last = 0, m;
    AMOUNT.lastIndex = 0;
    while ((m = AMOUNT.exec(text)) !== null) {
      const sym = m[1] || '€';
      const num = m[2] || m[4];
      const k = m[3] || m[5];
      const val = parseAmount(num, k);
      if (val > LIMIT) {
        hit = true;
        if (m.index > last) parts.push(text.slice(last, m.index));
        const digits = String(Math.round(val)).length;
        parts.push({ sym, mask: '8'.repeat(Math.min(Math.max(digits, 4), 6)) });
        last = m.index + m[0].length;
      }
    }
    if (!hit) return null;
    if (last < text.length) parts.push(text.slice(last));
    return parts;
  }
  function maskInline(node, text) {
    const parts = privacy ? maskString(text) : null;
    if (!parts) { node.textContent = text; return; }
    node.replaceChildren();
    parts.forEach(p => {
      if (typeof p === 'string') node.append(document.createTextNode(p));
      else { const w = el('span', 'blurwrap'); w.append(document.createTextNode(p.sym), el('span', 'blurnum', p.mask)); node.append(w); }
    });
  }
  function maskTree(root) {
    if (!root || !privacy) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const jobs = [];
    let n;
    while ((n = walker.nextNode())) {
      if (n.parentElement && n.parentElement.classList.contains('blurnum')) continue;
      const parts = maskString(n.nodeValue);
      if (parts) jobs.push([n, parts]);
    }
    jobs.forEach(([node, parts]) => {
      const frag = document.createDocumentFragment();
      parts.forEach(p => {
        if (typeof p === 'string') frag.append(document.createTextNode(p));
        else {
          const w = el('span', 'blurwrap');
          w.append(document.createTextNode(p.sym));
          w.append(el('span', 'blurnum', p.mask));
          frag.append(w);
        }
      });
      node.parentNode.replaceChild(frag, node);
    });
  }

  /* ---------------- cards ---------------- */
  let cardCache = {};
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
    card.append(top, el('div', 'card__no', String(i + 1).padStart(2, '0')), T(el('h3'), s.title));
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

  function statList() {
    const real = stages.filter(s => s.status !== 'next');
    return [
      { n: 6, l: UI.statYears },
      { n: real.length, l: UI.statStops },
      { n: real.filter(s => s.status === 'fail').length, l: UI.statFails },
      { n: '200+', l: UI.statSites }
    ];
  }

  function buildAbout() {
    const box = el('div', 'about');
    box.append(T(el('h3'), { en: 'The Journey Map', el: 'Ο Χάρτης του Ταξιδιού' }));
    box.append(T(el('p', 'card__body'), D.profile.tagline));
    const st = el('div', 'metrics');
    statList().forEach(s => { const b = el('div', 'metric'); b.append(el('b', null, String(s.n)), T(el('span'), s.l)); st.append(b); });
    box.append(st, T(el('div', 'about__t'), UI.chapters));
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

  /* ---------------- summary ---------------- */
  function buildSummary() {
    const box = el('div', 'about summary');
    box.append(T(el('h3'), UI.summaryTitle));
    box.append(T(el('p', 'sum__lead'), UI.summaryLead));

    D.periods.forEach(p => {
      const list = stages.filter(s => s.period === p.id);
      const ms = list.filter(s => s.milestone);
      const row = el('div', 'sum__row');
      const head = el('div', 'sum__head');
      head.append(el('b', null, p.label), T(el('span'), p.life));
      row.append(head);
      const ul = el('div', 'sum__list');
      (ms.length ? ms : list.slice(0, 2)).forEach(s => {
        const li = el('button', 'sum__item' + (s.milestone ? ' is-ms' : ''));
        li.append(T(el('i'), s.date), T(el('span'), s.short || s.title, 'mask'));
        li.addEventListener('click', () => open(stages.indexOf(s)));
        ul.append(li);
      });
      row.append(ul);
      box.append(row);
    });

    const b = el('button', 'btn');
    T(b, UI.theWhole);
    b.addEventListener('click', () => { close(); home(true); });
    box.append(b);
    return box;
  }

  /* ---------------- layout ---------------- */
  let MOBILE = false, CW = 0, CH = 0, PTS = [], BANDS = [];
  function buildLayout() {
    MOBILE = window.innerWidth < 980;
    const MAXCOLS = MOBILE ? 2 : 9;
    const padX  = MOBILE ? 150 : 720;
    const stepX = MOBILE ? 320 : 330;
    const padY  = MOBILE ? 380 : 210;
    const stepY = MOBILE ? 295 : 320;
    const bandGap = MOBILE ? 240 : 0;

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
      if (row.first) BANDS.push({ p: row.p, x: MOBILE ? CW / 2 : 40, y: MOBILE ? y - 215 : y, mobile: MOBILE });
      const rev = ri % 2 === 1;
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
      box.append(el('b', null, b.p.label));
      box.append(T(el('span', 'band__life'), b.p.life));
      box.append(T(el('span', 'band__note'), b.p.note));
      const ms = stages.filter(s => s.period === b.p.id && s.milestone);
      if (ms.length) {
        const ul = el('div', 'band__ms');
        const cap = MOBILE ? 4 : 3;
        ms.slice(0, cap).forEach(s => ul.append(T(el('span'), s.short || s.title, 'mask')));
        if (ms.length > cap) ul.append(el('span', 'band__more', '+' + (ms.length - cap)));
        box.append(ul);
      }
      bandsBox.append(box);
    });

    stages.forEach((s, i) => {
      const ch = chapterOf(s.chapter);
      const b = el('button', 'mnode' + (s.milestone ? ' milestone' : '') + (i % 2 ? ' lab-up' : ''));
      b.style.setProperty('--acc', ch.color);
      b.style.left = PTS[i].x + 'px'; b.style.top = PTS[i].y + 'px';
      b.dataset.chapter = s.chapter;
      if (s.status === 'live') b.classList.add('is-live');
      if (i > liveIdx) b.classList.add('is-future');
      const dot = el('span', 'mnode__dot');
      dot.append(icon(s.icon, s.milestone ? 48 : 40));
      dot.append(el('span', 'mnode__num', String(i + 1)));
      b.append(dot);
      const lab = el('span', 'mnode__label');
      lab.append(T(el('i'), s.short || s.title, 'mask'));
      lab.append(T(el('b'), s.date));
      b.append(lab);
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
  function lengthAt(path, L, target) {
    const N = 1400; let best = L, bestD = Infinity;
    for (let i = 0; i <= N; i++) {
      const l = L * i / N, pt = path.getPointAtLength(l);
      const dd = (pt.x - target.x) ** 2 + (pt.y - target.y) ** 2;
      if (dd < bestD) { bestD = dd; best = l; }
    }
    return best;
  }

  /* ---------------- view: smooth zoom & pan ---------------- */
  let fit = 1, z = 1, tx = 0, ty = 0, openIdx = -1;
  let tz = 1, ttx = 0, tty = 0, raf = null;
  const size = () => { const r = board.getBoundingClientRect(); return { w: r.width, h: r.height }; };
  const MINZ = () => MOBILE ? 0.6 : 0.75, MAXZ = 5;

  function computeFit() {
    const { w, h } = size();
    fit = MOBILE ? (w / CW) * 0.98 : Math.min(w / CW, h / CH) * 0.94;
  }
  function clampT(nx, ny, sc) {
    const { w, h } = size();
    const cw = CW * sc, chh = CH * sc, m = 120;
    nx = cw < w ? clamp(nx, w - cw - m, m) : clamp(nx, w - cw - m, m);
    ny = chh < h ? clamp(ny, h - chh - m, m) : clamp(ny, h - chh - m, m);
    return [nx, ny];
  }
  function paint() {
    const sc = fit * z;
    canvas.style.transform = `translate3d(${tx}px, ${ty}px, 0) scale(${sc})`;
    canvas.style.setProperty('--inv', (1 / sc).toFixed(4));
    canvas.classList.toggle('near', sc >= 0.55);
    canvas.classList.toggle('far', sc < 0.55);
    $('#zVal').textContent = Math.round(z * 100) + '%';
  }
  /* frame-rate independent easing so the motion feels the same everywhere */
  let lastFrame = 0;
  function tick(now) {
    const dt = Math.min(64, now - (lastFrame || now - 16)); lastFrame = now;
    const k = 1 - Math.exp(-dt / 95);
    z += (tz - z) * k; tx += (ttx - tx) * k; ty += (tty - ty) * k;
    paint();
    if (Math.abs(tz - z) > 0.0015 || Math.abs(ttx - tx) > 0.5 || Math.abs(tty - ty) > 0.5) raf = requestAnimationFrame(tick);
    else { z = tz; tx = ttx; ty = tty; paint(); raf = null; lastFrame = 0; }
  }
  function glide() { if (!raf) { lastFrame = 0; raf = requestAnimationFrame(tick); } }
  function setNow(nz, nx, ny) { tz = z = nz; [ttx, tty] = [nx, ny]; tx = nx; ty = ny; paint(); }
  function setTarget(nz, nx, ny) {
    tz = clamp(nz, MINZ(), MAXZ);
    [ttx, tty] = clampT(nx, ny, fit * tz);
    glide();
  }
  function home(anim) {
    computeFit();
    const { w, h } = size();
    const nx = (w - CW * fit) / 2, ny = MOBILE ? 10 : (h - CH * fit) / 2;
    if (anim) setTarget(1, nx, ny); else setNow(1, nx, ny);
  }
  function zoomAt(nz, cx, cy, anim) {
    nz = clamp(nz, MINZ(), MAXZ);
    const base = anim ? tz : z, bx = anim ? ttx : tx, by = anim ? tty : ty;
    const s0 = fit * base, s1 = fit * nz;
    const nx = cx - (cx - bx) * (s1 / s0), ny = cy - (cy - by) * (s1 / s0);
    if (anim) setTarget(nz, nx, ny);
    else { const [cxx, cyy] = clampT(nx, ny, s1); setNow(nz, cxx, cyy); }
  }
  function focus(i, anim = true) {
    computeFit();
    const { w, h } = size();
    const panelW = (!MOBILE && panel.classList.contains('on')) ? panel.getBoundingClientRect().width : 0;
    const panelH = (MOBILE && panel.classList.contains('on')) ? panel.getBoundingClientRect().height : 0;
    const nz = MOBILE ? clamp(1.1 / fit, 0.9, 2.4) : 1.9;
    const s = fit * nz;
    const nx = (w - panelW) * 0.5 - PTS[i].x * s;
    const ny = (h - panelH) * 0.45 - PTS[i].y * s;
    tz = nz; ttx = nx; tty = ny; glide();
  }

  /* pointer: drag with momentum */
  let drag = null, moved = 0, vx = 0, vy = 0, lastT = 0, pinch = null;
  board.addEventListener('pointerdown', e => {
    if (e.target.closest('.ov') || e.target.closest('.mnode')) return;
    if (raf) { cancelAnimationFrame(raf); raf = null; tz = z; ttx = tx; tty = ty; }
    drag = { x: e.clientX, y: e.clientY, tx, ty }; moved = 0; vx = vy = 0; lastT = performance.now();
    board.classList.add('is-drag');
    try { board.setPointerCapture(e.pointerId); } catch (err) {}
  });
  board.addEventListener('pointermove', e => {
    if (!drag) return;
    const now = performance.now(), dt = Math.max(8, now - lastT);
    const nx = drag.tx + (e.clientX - drag.x), ny = drag.ty + (e.clientY - drag.y);
    vx = (nx - tx) / dt * 16; vy = (ny - ty) / dt * 16;
    moved = Math.max(moved, Math.hypot(e.clientX - drag.x, e.clientY - drag.y));
    tx = nx; ty = ny; ttx = nx; tty = ny; lastT = now; paint();
  });
  function endDrag() {
    if (!drag) return;
    drag = null; board.classList.remove('is-drag');
    if (Math.hypot(vx, vy) > 2) setTarget(z, tx + vx * 7, ty + vy * 7);
  }
  board.addEventListener('pointerup', endDrag);
  board.addEventListener('pointercancel', endDrag);
  board.addEventListener('click', e => {
    if (moved > 6 || e.target.closest('.mnode') || e.target.closest('.ov')) return;
    if (openIdx >= 0) { close(); home(true); }
  });
  board.addEventListener('dblclick', e => {
    if (e.target.closest('.ov')) return;
    const r = board.getBoundingClientRect();
    zoomAt(tz * (e.shiftKey ? 1 / 1.8 : 1.8), e.clientX - r.left, e.clientY - r.top, true);
  });
  board.addEventListener('wheel', e => {
    e.preventDefault();
    const r = board.getBoundingClientRect();
    const f = Math.exp(-e.deltaY * (e.ctrlKey ? 0.008 : 0.0022));
    zoomAt(tz * f, e.clientX - r.left, e.clientY - r.top, true);
  }, { passive: false });
  board.addEventListener('touchstart', e => {
    if (e.touches.length === 2) { const [a, b] = e.touches; pinch = { d: Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY), z }; drag = null; }
  }, { passive: true });
  board.addEventListener('touchmove', e => {
    if (pinch && e.touches.length === 2) {
      const [a, b] = e.touches, r = board.getBoundingClientRect();
      const d = Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
      zoomAt(pinch.z * (d / pinch.d), (a.clientX + b.clientX) / 2 - r.left, (a.clientY + b.clientY) / 2 - r.top, false);
    }
  }, { passive: true });
  board.addEventListener('touchend', () => { pinch = null; });

  const zoomCenter = f => { const { w, h } = size(); zoomAt(tz * f, w / 2, h / 2, true); };
  $('#zIn').addEventListener('click', () => zoomCenter(1.4));
  $('#zOut').addEventListener('click', () => zoomCenter(1 / 1.4));
  $('#zReset').addEventListener('click', () => { close(); home(true); });

  /* ---------------- panel ---------------- */
  const panel = $('#panel'), panelBody = $('#panelBody');
  function fill(node) { panelBody.replaceChildren(node); if (privacy) maskTree(panelBody); panelBody.scrollTop = 0; }
  function open(i) {
    openIdx = i;
    fill(buildCard(stages[i], i));
    panel.classList.add('on'); board.classList.add('focused');
    $('#pCount').textContent = (i + 1) + ' / ' + stages.length;
    nodeEls.forEach((n, k) => n.classList.toggle('is-open', k === i));
    requestAnimationFrame(() => focus(i, true));
  }
  function openPane(node) {
    openIdx = -1; fill(node); panel.classList.add('on');
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
  $('#aboutBtn').addEventListener('click', () => openPane(buildAbout()));
  $('#sumBtn').addEventListener('click', () => openPane(buildSummary()));
  document.addEventListener('keydown', e => {
    if ($('#lightbox').classList.contains('is-open')) return;
    if (e.target.closest('input,textarea')) return;
    if (e.key === 'Escape') { close(); home(true); }
    if (e.key === 'ArrowRight') step(1);
    if (e.key === 'ArrowLeft') step(-1);
    if (e.key === '+' || e.key === '=') zoomCenter(1.4);
    if (e.key === '-' || e.key === '_') zoomCenter(1 / 1.4);
    if (e.key === '0') { close(); home(true); }
  });

  let tourT = null;
  function stopTour() { if (tourT) { clearInterval(tourT); tourT = null; $('#tour').classList.remove('is-on'); } }
  $('#tour').addEventListener('click', () => {
    if (tourT) return stopTour();
    $('#tour').classList.add('is-on');
    open(openIdx < 0 ? 0 : openIdx);
    tourT = setInterval(() => { if (openIdx >= stages.length - 1) return stopTour(); open(openIdx + 1); }, 6000);
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
    $('#aboutBtn').append(icon('info', 16));
    $('#sumBtn').append(icon('summary', 16));
    $$('.lang button').forEach(b => { b.innerHTML = b.dataset.lang === 'el' ? FLAG_GR : FLAG_UK; });
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
    themeBtn.replaceChildren(icon(theme === 'light' ? 'sun' : 'moon', 16));
    try { localStorage.setItem('journey.theme', theme); } catch (e) {}
  }
  themeBtn.addEventListener('click', () => { theme = theme === 'light' ? 'dark' : 'light'; applyTheme(); });

  const privBtn = $('#privBtn');
  function applyPrivacy(rerender) {
    privBtn.replaceChildren(icon(privacy ? 'eyeoff' : 'eye', 16));
    privBtn.classList.toggle('is-on', privacy);
    privBtn.title = pick(privacy ? UI.privacyOn : UI.privacyOff);
    try { localStorage.setItem('journey.privacy', privacy ? '1' : '0'); } catch (e) {}
    if (rerender) {
      cardCache = {};
      applyLang();
      if (openIdx >= 0) { const i = openIdx; fill(buildCard(stages[i], i)); openIdx = i; }
      else if (panel.classList.contains('on')) fill(buildSummary());
    }
  }
  privBtn.addEventListener('click', () => { privacy = !privacy; applyPrivacy(true); });

  /* ---------------- boot ---------------- */
  renderMap();
  renderChrome();
  applyLang();
  applyTheme();
  applyPrivacy(false);
  home(false);

  let lastMobile = MOBILE;
  window.addEventListener('resize', () => {
    clearTimeout(window.__rz);
    window.__rz = setTimeout(() => {
      const was = lastMobile;
      buildLayout();
      if (MOBILE !== was) { lastMobile = MOBILE; renderMap(); }
      if (openIdx >= 0) focus(openIdx, true); else home(true);
    }, 150);
  });
})();
