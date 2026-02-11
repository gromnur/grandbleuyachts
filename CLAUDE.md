# Grand Bleu Yachts

Static marketing website for a luxury yacht management, delivery, and charter service built with Astro 5.

## Tech Stack

- **Framework:** Astro 5.0 (static site generator)
- **Language:** TypeScript (strict mode)
- **Styling:** Custom CSS with theme system (CSS variables)
- **Deployment:** Cloudflare Pages

## Commands

```bash
npm run dev       # Start development server
npm run build     # Build static site to dist/
npm run preview   # Preview production build locally
```

## Project Structure

```
src/
├── assets/images/    # Optimized images (used via Astro Image component)
├── components/       # Reusable Astro components (Header, Footer, Layout, Hero, Card, etc.)
├── layouts/          # Page layout with background images and view transitions
├── pages/            # File-based routing (index, management, delivery, charter/)
└── styles/
    ├── global.css    # Global resets and utilities
    └── themes/       # Color themes (classic-blue.css is active)
```

## Key Conventions

- Path alias: `@/*` maps to `src/*`
- Fonts: Playfair Display (headings), Inter (body) loaded via Google Fonts
- Active theme: Classic Blue (`src/styles/themes/classic-blue.css`)
- Images use the Astro `<Image>` component for optimization
- Pages use View Transitions API for smooth navigation
