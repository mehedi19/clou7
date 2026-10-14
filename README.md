# Cloud 7 — Marketing Website

Next.js (App Router) + TypeScript landing page for **Cloud 7 Limited**, built from the
*Website Content Blueprint*. Visual direction: Boku-style (large serif headlines, pill buttons,
rounded cards, scroll-triggered interactive sections) in a **sky-blue** palette.

- Body font: **Inter** · Title font: **Instrument Serif** (both via `next/font/google`, self-hosted at build)
- No UI/animation libraries — only `next`, `react`, `react-dom`. Animations are CSS + small hooks.
- Light + dark mode (toggle in header, persisted, no flash), reduced-motion respected, keyboard accessible.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
npm run lint     # type-check
```

Requires Node 20+. The build downloads the two Google fonts, so it needs internet access.

## Where to edit

| What | Where |
| --- | --- |
| All copy (headlines, cards, steps, footer links) | `src/data/content.ts` |
| Colours, radii, spacing, dark theme | `src/styles/tokens.css` |
| Section styles (in page order) | `src/styles/sections.css` |
| Page order / add / remove sections | `src/app/page.tsx` |
| Fonts + metadata + SEO | `src/app/layout.tsx` |
| Contact form backend | `src/app/api/contact/route.ts` |
| Icons (add a key + SVG paths) | `src/components/Icon.tsx` |

## Sections & interactions

1. **Hero** – animated dotted world map; payment routes flow from merchant hubs to Dhaka (hover a city). Pointer-follow glow.
2. **Trusted by** – three rows: two marquees + banking-partner row.
3. **About** – copy + animated fact tiles.
4. **What we do** – vertical tabs (arrow-key navigable) with a mock UI per capability.
5. **Industries** – 12 hover tiles.
6. **Why Bangladesh** – count-up stats, parallax orbs, CTA.
7. **Platform** – clickable architecture flow with a **Simulate a payment** animation.
8. **Why Cloud 7** – 6 value tiles.
9. **Merchant journey** – timeline that fills on scroll; click a step for detail.
10. **Solutions** – 8 industry tabs (Challenges / Solutions / Benefits).
11. **Success story** – Challenge · Solution · Result.
12. **Insights** – 9 article cards.
13. **Developer portal** – JS / Python / PHP / Java snippet switcher with copy button.
14. **Contact** – routing cards pre-select the form's destination team → `POST /api/contact`.
15. **Footer** – CTA band, 6 link columns, legal, social.

## Things to replace before launch

- **Partner logos** (`trusted` in `content.ts`): shown as neutral text wordmarks. Only add real logos where partner permission is confirmed (`public/logos/…`). Banking row shows placeholder tiles.
- **Developer snippets** (`DevPortal.tsx`): package names / fields are illustrative.
- **Status pill** ("All systems operational") is static — wire to your status page.
- **Contact API**: currently validates + logs. Connect to your CRM/email provider and route by `route`.
- **Links**: footer/insight/solution links point to `#` anchors until those pages exist.
- **Solutions copy** (challenges/benefits) is drafted from the blueprint's structure — have the team review it.
- **Case study** uses the blueprint's sample; swap in a named/anonymised real story.
- `scripts/generate-world-dots.mjs` regenerates the stylised map (`src/data/worldDots.ts`).
