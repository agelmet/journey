# The Journey Map — Angelo

An interactive, bilingual (🇬🇷 Ελληνικά / 🇬🇧 English) **map** of my journey: from A-Levels and mindset books in 2020, through affiliate pages, six e-commerce stores, an SMMA, a trading account that bled, and finally **Advon Media** — 200+ websites delivered.

**Live site:** https://agelmet.github.io/journey/

---

## What it is

It is not a scrolling timeline. It is **one map that fits your screen**, with **37 stops laid out in year bands** — 2020–21, 2022, 2023, 2024, 2025, 2026 and Next. The road draws itself up to where the journey is today; everything after is dashed.

- **Click any stop → the map zooms into it** and a panel opens with the full story, the numbers, the photos and the lesson
- **Drag to pan · scroll or pinch to zoom · `←` `→` to move between stops · `Esc` to zoom back out**
- **▶** runs a guided tour through all 37 stops on its own
- **Milestone stops** are drawn larger with a double ring (first $200, Rhodes, Advon born, the free offer, in-person era, trading, June-goal-hit-in-January, today)
- Every stop carries a **"Meanwhile"** line — what I was doing in life at that moment (Year 12, KCL year 1 / 2 / 3, army)
- **Light theme by default**, dark one click away · **ΕΛ / EN** switches every word instantly
- The chapter legend (in the **i** panel) doubles as a filter
- **Mobile is a map too** — two lanes, pannable, pinch-zoomable, with a bottom sheet for detail

---

## Editing it — one file

Everything lives in **[`data/journey.js`](data/journey.js)**. No build step, no framework, no npm.

### Change any text

```js
title: { en: "English title", el: "Ελληνικός τίτλος" },
```

Every text field is an `{ en, el }` pair.

### Add a photo or a GIF

1. Put the file in **`images/media/`** (naming them `YYYY-MM-DD_something.jpg` keeps them tidy)
2. Add it to the `media` map at the top of the file with the next free number:

```js
media: { …, 112: "2026-08-20_new-photo.jpg" }
```

3. Reference it from any stop:

```js
images: [ { n: 112, caption: { en: "What this shows", el: "Τι δείχνει" } } ]
```

Videos should be converted to GIF first — they display inline and get a small `GIF` badge.

### Add a new stop

Copy any `{ … }` block inside `stages: [ … ]`:

| Field | What it does |
|---|---|
| `id` | unique slug |
| `period` | one of the `periods` ids → which year band it lands in |
| `chapter` | one of the `chapters` ids → sets the colour |
| `icon` | icon name (see `ICONS` in `assets/js/app.js`) — no emojis |
| `status` | `win` · `fail` · `lesson` · `live` · `next` |
| `milestone` | `true` draws it bigger with a double ring |
| `date` | shown on the map under the stop |
| `short` | the short label on the map |
| `meanwhile` | the life-context line (school / uni / army) |
| `title` `subtitle` `body` | the story |
| `metrics` | the stat chips |
| `lesson` | the italic takeaway |
| `images` | the gallery |

Stops appear in array order, and each year band fills left-to-right then right-to-left, so the road always flows.

### Change the "updated" date

One place, top of the file:

```js
lastUpdated: "15/08/2026",
```

---

## A note on dates

Dates were taken from each photo's EXIF capture date, falling back to the file's modification date, and cross-checked against what is visible inside the screenshots. A handful of files had been re-saved and lost their original timestamp — if a stop's date looks wrong, it is one line to fix in `data/journey.js`.

---

## Structure

```
index.html            markup + SEO
assets/css/style.css  styling, themes, map, animations
assets/js/app.js      map layout, zoom/pan, icons, i18n, panel, lightbox
data/journey.js       👈 ALL CONTENT
images/media/         👈 ALL PHOTOS AND GIFS
```

Open `index.html` in a browser, or `python3 -m http.server` in this folder.

---

© Angelo — Advon Media
