# Brief - Site Astro Grand Bleu Yachts

## Objectif
Créer un site Astro statique professionnel pour Grand Bleu Yachts, déployé sur Cloudflare Pages.

---

## Structure du site

### Arborescence des pages

```
├── BARRE DE NAVIGATION
│   ├── Contact (lien email)
│   ├── Logo
│   └── Menu ⋯ → Instagram | Appeler | Email
│
├── ACCUEIL (/)
│   ├── Zone boutons : [Management] [Delivery] [Charter]
│   └── Zone image de fond
│
├── PAGES SERVICES
│   ├── Management (/management) → Services de gestion
│   ├── Delivery (/delivery) → Livraison côte Est/Bahamas
│   ├── Charter (/charter) → Choix : Louer OU Mettre en location
│   │   ├── Rent (/charter/rent) → Location de yacht
│   │   └── List (/charter/list) → Proposer son yacht
│
└── PIED DE PAGE
    └── Email | Téléphone | Instagram
```

### Disposition des éléments

**BARRE DE NAVIGATION**
Bandeau fixe en haut de l'écran. Lien "Contact" à gauche, logo au centre, menu à droite. Le menu déroule trois options : Instagram, Appeler, Email.

**ACCUEIL**
Deux zones empilées. En haut, une bande avec trois boutons alignés : Management, Delivery, Charter. En dessous, une image de yacht en fond.

**PAGES SERVICES**
Cinq pages internes qui s'affichent en plein écran. Chaque page possède une image de fond pour l'aspect visuel. Le contenu comprend un bouton retour en haut à gauche, suivi d'un titre, de textes descriptifs et de listes. Un bouton de contact en bas propose d'appeler ou d'envoyer un email.

**PAGE CHARTER**
Page intermédiaire avec image de fond, présentant deux choix côte à côte : louer un yacht ou proposer son yacht à la location.

**PIED DE PAGE**
Bandeau en bas contenant les coordonnées : email, téléphone et Instagram.

---

## Contact

- **Email:** contact@grandbleuyachts.com
- **Téléphone:** 347-813-8426
- **Instagram:** @capt.olivier

---

## Palette de couleurs

À définir. Tons suggérés :
- Bleu ciel (fond sections, boutons)
- Bleu moyen (hover, bordures)
- Bleu foncé (accents forts)
- Gris foncé (pied de page)
- Blanc (texte sur fond coloré)

---

## Architecture technique

```
grandbleuyachts/
├── astro.config.mjs
├── package.json
├── public/
│   └── images/
│       └── logo.png
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── ServiceBox.astro
│   │   ├── ContactButton.astro
│   │   ├── BackButton.astro
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── management.astro
│   │   ├── delivery.astro
│   │   └── charter/
│   │       ├── index.astro
│   │       ├── rent.astro
│   │       └── list.astro
│   ├── images/
│   └── styles/
│       ├── _variables.scss
│       └── global.scss
```

---

## Composants

| Composant | Rôle |
|-----------|------|
| Header | Logo, lien contact, menu dropdown |
| Footer | Coordonnées |
| Hero | Section accueil avec boutons et image |
| ServiceBox | Bouton de navigation vers un service |
| ContactButton | Bouton avec options appel/email |
| BackButton | Retour à la page précédente |
| Card | Carte avec effet blur pour le contenu des pages services |

---

## Langue

- **Site en anglais** (English)

---

## Fonctionnalités

- Site statique optimisé
- Images optimisées (WebP/AVIF, lazy loading)
- SEO complet (meta tags, Open Graph, Schema.org)
- Responsive mobile
- Déploiement Cloudflare Pages

---

## Version mobile

Éléments réorganisés et réduits pour les petits écrans. Boutons de services défilables horizontalement, pied de page en colonne.

---

## Comment commit

### Prérequis
- Git installé sur votre machine
- Accès au dépôt GitHub

### Workflow

1. **Vérifier l'état des fichiers modifiés :**
   ```bash
   git status
   ```

2. **Ajouter les fichiers à commiter :**
   ```bash
   # Ajouter des fichiers spécifiques
   git add src/pages/index.astro src/components/Header.astro

   # Ou ajouter tous les fichiers modifiés
   git add .
   ```

3. **Créer le commit avec un message descriptif :**
   ```bash
   git commit -m "description courte des changements"
   ```

4. **Pousser les changements vers le dépôt distant :**
   ```bash
   git push origin nom-de-la-branche
   ```

### Conventions de messages de commit

Utiliser des messages clairs et concis qui décrivent le **pourquoi** du changement :

| Préfixe | Usage | Exemple |
|---------|-------|---------|
| `feat:` | Nouvelle fonctionnalité | `feat: add charter booking form` |
| `fix:` | Correction de bug | `fix: resolve mobile nav overflow` |
| `style:` | Changements visuels/CSS | `style: update hero section colors` |
| `docs:` | Documentation | `docs: update README with deploy steps` |
| `refactor:` | Refactorisation de code | `refactor: simplify header component` |
| `chore:` | Tâches de maintenance | `chore: update dependencies` |

### Exemple complet

```bash
git status
git add src/components/Header.astro src/styles/global.scss
git commit -m "style: improve header responsiveness on mobile"
git push origin main
```