# Sakthi Ganesh — Developer Portfolio

A responsive, single-page portfolio built with React + Vite + plain CSS. No UI kit, no backend.

## Run it

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

Build for production:

```bash
npm run build
npm run preview
```

## Where to edit content

All real content lives in `src/data/`, separate from the UI components:

| File | What it controls |
|---|---|
| `src/data/profile.js` | Name, role, intro text, resume link, email, phone, WhatsApp, GitHub, LinkedIn |
| `src/data/skills.js` | Skill groups shown in the Skills section |
| `src/data/experience.js` | Timeline entries in the Experience section |
| `src/data/projects.js` | Project cards in the Projects section (marked `sample: true`) |

Replace `public/resume-placeholder.pdf` with your real resume (keep the same file name, or update `resumeUrl` in `profile.js`).

## Structure

```
src/
  components/   UI building blocks (Navbar, Hero, ProjectCard, etc.)
  data/         Content — edit here, not in the components
  hooks/        useTheme (dark/light mode), useReveal (scroll-in animation)
  App.jsx       Composes the page from sections
  main.jsx      React entry point
  index.css     All styling — design tokens (colors, type, spacing) at the top
```

## Notes

- Dark/light mode is a manual toggle in the navbar, defaults to the visitor's OS preference, and persists via `localStorage`.
- All contact links are functional: `mailto:`, `tel:`, and `wa.me` — driven entirely by the placeholder values in `profile.js`.
- Project images are CSS placeholders (no external image requests); swap `.project-card__image` in `ProjectCard.jsx` for real `<img>` tags once you have screenshots.
