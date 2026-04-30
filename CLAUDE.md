# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start          # dev server (Vite, localhost:5173)
npm run build      # production build → dist/
npm run preview    # preview the production build locally
npm run deploy     # build + push dist/ to gh-pages branch (triggers live deploy to borisavrumov.com)
```

There are no tests beyond `src/App.test.js` (a placeholder). No linter is configured.

## Architecture

Single-page personal portfolio. React 18 class components throughout (no hooks). Vite is the bundler; `gh-pages` deploys `dist/` to the `gh-pages` branch, served at borisavrumov.com via GitHub Pages.

**Page layout (top to bottom):**
1. `NavigationBar` — sticky dark navbar; theme switcher dispatches to `App` state via `handleTheme` prop
2. `FadedHeader` + `Portrait` + intro blurb — hero section
3. `WorkCards` → renders `ExperienceCard` per job
4. `ProjectCards` → renders `ExperienceCard` per project
5. `Carousel` — education section, one column per school
6. `Blurb` — collapsible "about this site" footer section with PayPal donate button
7. `Tachyonsocialfooter` — social icon links

**Theme system:** `App` holds a `theme` string in state (`"green-and-blue"`, `"poncho"`, `"pizelex"`). The string is applied as a CSS class on the root `<div class="App ...">`. Each theme is a full-page background gradient defined in `App.css`.

**Shared card component:** Both `WorkCards` and `ProjectCards` use `ExperienceCard`. The card renders differently based on which optional props are present: `liveUrl` (used as the header link if provided, else `url`), `repoUrl` (shows a "View source →" link in the footer).

**Animations:** AOS (Animate on Scroll) is initialized in `App.componentDidMount`. Individual elements declare `data-aos` attributes. `AnimatedCollapsible` uses reactstrap's `Collapse` with chevron/spinner icons from `react-icons`.

**Styling:** Tachyons utility CSS (installed as individual npm packages) plus reactstrap (Bootstrap 5). Custom styles in `App.css`, `index.css`, `animation.css`, `tachyonsocial.css`.

**Assets:** Images and PDFs in `src/assets/` and `src/logos/` are imported directly into components and handled by Vite's asset pipeline (including PDF via `assetsInclude` in `vite.config.js`). The `public/` folder holds favicons, `CNAME`, and `site.webmanifest` — these are copied verbatim to `dist/` and must not be deleted.

## Deployment

Pushing to `master` triggers the GitHub Actions deploy workflow, which runs `npm run deploy` (build + gh-pages push). CI runs on PRs and non-master branches to verify the build. Use `/deploy` (the custom slash command) to deploy manually from the CLI.
