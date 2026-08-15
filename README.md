# 🗺️ Journey — Angelo's Entrepreneurship Roadmap

An interactive, bilingual (🇬🇷 Ελληνικά / 🇬🇧 English) roadmap of my journey — from affiliate marketing at 18 in 2022, through dropshipping, day trading and SMMA, to **Advon Media** today.

**Live site:** https://agelmet.github.io/journey/

---

## ✨ What's in it

- Animated **road/map** that draws itself as you scroll, with a glowing rider dot
- **Progress bar + %** showing how far through the journey you are
- **EL / EN toggle** — every single word switches instantly (remembers your choice)
- **Dark / light** theme toggle
- **Chapter filters** (Affiliate · Dropshipping · Trading · SMMA · Web & Agency)
- Per-stage **photo galleries** with a keyboard-friendly lightbox
- **Win / Failure / Lesson / Live** status tags, metrics chips and a "lesson learned" quote per stage
- Fully **responsive** — the map becomes a clean vertical timeline on mobile

---

## ✍️ How to edit (the only file you need)

Everything lives in **[`data/journey.js`](data/journey.js)**. No build step, no framework, no npm.

### Change text

```js
title: { en: "English title", el: "Ελληνικός τίτλος" },
```

Every text field is a `{ en, el }` pair. Change one, change both — that's it.

### Add a photo

1. Drop the image into the **`images/`** folder (e.g. `images/me-2022.jpg`)
2. Add it to that stage's `images` array:

```js
images: [
  { src: "images/me-2022.jpg", caption: { en: "Me in 2022", el: "Εγώ το 2022" } }
]
```

You can add as many as you want per stage. Recommended size: **1200×900** or similar landscape.

### Add a whole new stage

Copy any `{ ... }` block inside `stages: [ ... ]` and change it. Fields:

| Field | What it does |
|---|---|
| `id` | unique slug, e.g. `"new-venture"` |
| `chapter` | one of the `chapters` ids → sets the colour |
| `icon` | any emoji, shown inside the map node |
| `status` | `"win"` · `"fail"` · `"lesson"` · `"live"` · `"next"` |
| `year` | short label under the node, e.g. `"2025"` |
| `date` / `duration` | `{ en, el }` — exact dates go here |
| `title` / `subtitle` / `body` | `{ en, el }` |
| `metrics` | small stat chips — `{ label: {en,el}, value: "..." }` |
| `lesson` | the italic takeaway quote |
| `images` | the gallery |

Stages appear in the order they're listed in the array.

> ℹ️ Anything currently showing **TBD** is a placeholder waiting for the real dates / numbers.

### Add a new chapter (colour)

```js
chapters: [
  { id: "newthing", label: { en: "New Thing", el: "Κάτι Νέο" }, color: "#ff4fd8" }
]
```

---

## 🧱 Structure

```
index.html            markup + SEO tags
assets/css/style.css  all styling, themes, animations
assets/js/app.js      rendering, road drawing, scroll, i18n, lightbox
data/journey.js       👈 YOUR CONTENT
images/               👈 YOUR PHOTOS
```

## ▶️ Run locally

Just open `index.html` in a browser. (Or `python3 -m http.server` in this folder.)

---

Built with Claude · © Angelo — Advon Media
