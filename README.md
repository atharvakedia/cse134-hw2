# HW2 Part 2

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
