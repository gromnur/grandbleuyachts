# CLAUDE.md - Grand Bleu Yachts

## Project Overview

Site web vitrine pour Grand Bleu Yachts, construit avec Astro 5.

## Tech Stack

- **Framework**: Astro 5
- **Language**: TypeScript
- **Styling**: CSS (fichiers dans `src/styles/`)

## Commands

- `npm run dev` — Lancer le serveur de développement
- `npm run build` — Build de production
- `npm run preview` — Prévisualiser le build

## Project Structure

```
src/
├── assets/        # Images et fichiers statiques
├── components/    # Composants Astro réutilisables (Header, Footer, Carousel, etc.)
├── layouts/       # Layout principal (Layout.astro)
├── pages/         # Pages du site (index, charter, delivery, management)
└── styles/        # Fichiers CSS globaux
```

## Conventions

- Utiliser le composant `Image` d'Astro pour les images (pas de balises `<img>` brutes)
- Les composants sont en `.astro`
- Header et Footer sont fixes (position fixed)
- Toujours push après chaque modification
- Créer une PR pour chaque changement
