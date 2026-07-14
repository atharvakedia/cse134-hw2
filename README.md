# HW2 Part 2 — Portfolio (HTML only)

Static, HTML-only build. No CSS beyond structural borders (`styles.css`), and
no JavaScript beyond the three cases the rubric explicitly allows:

1. `script.js` — defines the two custom elements (`<profile-badge>` and
   `<hello-log>`), loaded as a module on every page.
2. An inline `<script>` on `experiments.html` — a ~9-line `<canvas>` demo.
3. A placeholder third-party analytics `<script src="https://analytics.example.invalid/track.js">`
   in the footer of every page (non-functional on purpose — it's just there
   to demonstrate the tag, per the rubric's note on `<script>`).

## Pages

| File | Notes |
|---|---|
| `index.html` | Home |
| `about.html` | Bio, skills (`<progress>`), approach (`<ol>`) |
| `projects.html` | Project index |
| `project-alpha.html` | TrailMate — includes the `<iframe>` live-demo embed |
| `project-beta.html` | PixelSort Visualizer |
| `project-gamma.html` | StudyGroup Finder |
| `experience.html` | Education / work placeholders |
| `contact.html` | `<form>` with `<fieldset>`/`<legend>`/`<label>`s, plus a `<dialog>` |
| `experiments.html` | `<template>`, `<audio>`, `<video>`, `<canvas>`, `<source>`, and the MathML extra credit |

## Before you submit

- **Everything here is placeholder content** — the bio, the three projects
  (TrailMate / PixelSort Visualizer / StudyGroup Finder), the résumé PDF, the
  work/research entries, and all social links (`github.com/example`, etc.)
  are invented so the structure has something real to hold. Swap in your
  actual info before this counts as your real portfolio.
- **Run the real validator** once this is deployed: every page was checked
  locally for balanced tags, matching `label for`/`input id` pairs, unique
  `id`s, and required `alt` text, but there's no substitute for actually
  running https://validator.w3.org/ against the live Netlify URL, since I
  couldn't reach it from this sandbox (no live internet here).
- **New repo, new Netlify site** — per the assignment, this needs to live in
  its own GitHub repo and Netlify deployment, separate from HW1.
- The `<iframe>` on `project-alpha.html` and the footer analytics `<script>`
  point at placeholder/example URLs — they'll render fine once live, but
  won't resolve to anything real until you swap them for actual links (or
  delete them if you'd rather not keep a fake analytics tag).
