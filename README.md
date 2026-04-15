# borisavrumov.com

Personal splash page for [Boris Avrumov](https://www.borisavrumov.com) — a software engineer based in NYC with 6+ years of experience in FinTech and AWS.

## Live Site

**[borisavrumov.com](https://www.borisavrumov.com)**

Deployed via GitHub Pages using `gh-pages`.

---

## Project Structure

```
Splash-Page/
├── src/
│   ├── App.jsx                   # Root component — theme state, layout, section assembly
│   ├── index.jsx                 # React entry point
│   │
│   ├── NavigationBar.jsx         # Top nav with theme switcher (green-and-blue / poncho / pizelex)
│   ├── FadedHeader.jsx           # Section headers with directional fade-in animation
│   ├── Portrait.jsx              # Profile photo with AOS flip animation
│   ├── Blurb.jsx                 # Short bio / contact blurb
│   │
│   ├── WorkCards.jsx             # Work experience section — maps company data to ExperienceCard
│   ├── ExperienceCard.jsx        # Individual company card (logo, description, date range, link)
│   ├── Carousel.jsx              # Education section — university logos carousel
│   │
│   ├── Anchor.jsx                # Inline hyperlink helper component
│   ├── AnimatedCollapsible.jsx   # Collapsible content with animation
│   ├── SampleCard.jsx            # Generic card template
│   ├── PayPalDonateButton.jsx    # PayPal donate widget
│   ├── Tachyonsocialfooter.jsx   # Social links footer (Tachyons-styled)
│   │
│   ├── App.css                   # Global styles + theme definitions
│   ├── animation.css             # AOS and custom keyframe animations
│   ├── index.css                 # Base reset and body styles
│   ├── tachyonsocial.css         # Tachyons social icon overrides
│   │
│   ├── assets/                   # Personal assets — photo, resume PDFs (2024, 2026)
│   ├── logos/                    # Company logos (Amazon, BlackRock, StubHub, MVI, RWC)
│   └── logos/uni/                # University logos (Stony Brook, Brooklyn College, BTHS, MHC)
│
├── public/                       # Static files copied to build root (favicons, webmanifest, CNAME)
├── dist/                         # Vite production build output (deployed to GitHub Pages)
├── build/                        # Legacy CRA build output (kept for reference)
├── vite.config.js                # Vite config — React plugin, base path, PDF asset handling
└── package.json                  # v1.2.0 — scripts, dependencies
```

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 (class components) |
| Build tool | Vite 8 |
| UI / Layout | Reactstrap (Bootstrap 5), Tachyons utility CSS |
| Animations | AOS (Animate On Scroll) |
| Icons | react-icons |
| Deployment | GitHub Pages via `gh-pages` |

## Sections

- **Hero** — name, portrait, and brief bio
- **Work Experience** — cards for Amazon, StubHub, BlackRock, MVI Systems, and Retraction Watch
- **Education** — university logo carousel (Stony Brook, Brooklyn College, BTHS, Manhattan)
- **Projects** — placeholder linking to GitHub (coming soon)
- **Footer** — social links

## Getting Started

```bash
npm install
npm start        # dev server at http://localhost:5173
npm run build    # production build → dist/
npm run deploy   # build + push to gh-pages branch
```

## Theming

The app supports three CSS themes switchable from the nav:

| Theme | Description |
|---|---|
| `green-and-blue` | Default — cool tones |
| `poncho` | Warm earth tones |
| `pizelex` | Dark high-contrast |
