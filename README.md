# Rohit Saini — Portfolio (React)

A React + Vite recreation of [Rohit628-GitHub/Portfolio](https://github.com/Rohit628-GitHub/Portfolio), rebuilt as
proper components with a hover-to-reveal project card (photo, live link, GitHub repo link) and a downloadable resume.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build      # production build -> dist/
```

## Project structure

```
src/
  components/
    Header.jsx      nav bar + mobile menu + résumé link
    Hero.jsx         intro section
    About.jsx
    Skills.jsx        data-driven skill category cards
    Education.jsx
    Projects.jsx       renders ProjectCard grid
    ProjectCard.jsx    ⭐ hover overlay: photo + live demo + GitHub repo links
    Contact.jsx
    Footer.jsx
  data/
    projects.js        edit this to change project info, photos, and links
  index.css             all styling (dark theme, CSS variables)
public/
  resume/RohitSainiResume.pdf   downloadable résumé (see below)
```

## Things to personalize

1. **Résumé** — `public/resume/RohitSainiResume.pdf` currently contains a placeholder résumé
   auto-generated from the info on the original site (name, contact, education, skills, projects).
   Replace it with your real résumé file, **keeping the same filename**
   (`RohitSainiResume.pdf`), or update the filename references in
   `src/components/Header.jsx`, `src/components/Hero.jsx`, and `src/components/Footer.jsx`
   if you rename it.

2. **Project images & links** — open `src/data/projects.js`. Each project object has:
   - `image` — swap for a real screenshot of the project (put the file in `public/images/` and
     reference it as `/images/yourfile.png`, or use any hosted URL)
   - `live` — the deployed/live demo URL
   - `github` — the GitHub repository URL

   These three fields are exactly what appears in the hover card on each project tile.

3. **Contact info** — update email/phone/LinkedIn/GitHub in `src/components/Contact.jsx` and
   `src/components/Footer.jsx` if anything changes.

## Deploying

`npm run build` outputs a static site in `dist/` that can be deployed to Vercel, Netlify, GitHub
Pages, or any static host.
