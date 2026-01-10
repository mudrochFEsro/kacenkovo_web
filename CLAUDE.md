# Kacenkovo Web - Project Context

## Overview
E-commerce website for "Kacenkovo" - a clothing store in Bratislava selling women's and children's fashion, accessories.

## Tech Stack
- **Framework**: Nuxt 3.20.2 (Vue 3, TypeScript)
- **Styling**: SCSS with variables and mixins
- **Modules**: @nuxtjs/seo, @nuxt/fonts, @nuxt/image, @nuxt/scripts
- **UI Library**: vaul-vue (drawer component)
- **Build**: SSR + SSG (prerendered routes)

## Project Structure

```
├── app.vue                 # Root component with video background
├── layouts/
│   └── default.vue         # Main layout with AppFooter
├── pages/
│   ├── index.vue           # Homepage with category links
│   ├── damska-moda.vue     # Women's fashion
│   ├── detska-moda.vue     # Children's fashion
│   ├── doplnky.vue         # Accessories
│   ├── o-nas.vue           # About us
│   ├── sluzby.vue          # Services (DPD pickup)
│   └── mapa.vue            # Map/location
├── components/
│   ├── AppFooter.vue       # Footer with drawer (mobile) / sticky (desktop)
│   ├── PageHeader.vue      # Page header with variants
│   └── ProductCard.vue     # Product card component
└── assets/scss/
    ├── main.scss           # Global styles, reset, transitions
    ├── _variables.scss     # Colors, spacing, breakpoints
    └── _mixins.scss        # Responsive mixins, component styles
```

## Key Features

### Video Background (app.vue)
- Full-screen background video on homepage
- Different quality for mobile (1080p) vs desktop (4k)
- Lazy loading, visibility-based playback

### Footer (AppFooter.vue)
- **Mobile/Tablet (≤768px)**: Vaul drawer with swipe gestures
  - Swipe up on toggle to open
  - Swipe down anywhere to close
  - Click to toggle
- **Desktop**: Sticky footer with max-height animation
- Closes on route change

### Page Transitions
- Global fade transition (0.15s opacity, `page-enter/leave`)
- Homepage: Custom "home" transition (0.15s fade) to prevent button blink on return

### PageHeader Component
Props:
- `title?: string` - Page title
- `logo?: string` - Logo image path
- `variant: 'pink' | 'blue' | 'purple' | 'darkred' | 'black' | 'white'`

Features:
- **Sticky header** with smooth height animation on scroll
- **Back button**: Always visible, 52x52px normal → 32x32px when scrolled
- **Title**: Animates from center to left (next to back button) on scroll, shrinks from 1.8rem to 1rem
- **Logo**: Fades out when scrolled
- **Scroll detection**: Debounced with hysteresis (collapse at 50px, expand at 20px after 100ms delay)
- **White variant**: Uses dark text and dark button background

## SCSS Variables

### Colors
- `$accent-pink`, `$accent-blue`, `$accent-purple`, `$accent-darkred`, `$accent-black`, `$accent-white`
- `$text-dark: #333`, `$text-light: #666`, `$text-white: #fff`
- `$bg-light: #fafafa`, `$bg-white: #fff`, `$bg-dark: #333`

### Breakpoints
- `$mobile: 480px`
- `$tablet: 768px`
- `$wide: 1200px`

### Spacing
- `$spacing-xs: 0.5rem`
- `$spacing-sm: 1rem`
- `$spacing-md: 2rem`
- `$spacing-lg: 3rem`

## Responsive Mixins
```scss
@include mobile { ... }  // max-width: 480px
@include tablet { ... }  // max-width: 768px
```

## Important Notes

1. **SSR Hydration**: Use `ClientOnly` wrapper for client-side only components (like drawer)
2. **Footer Height**: Toggle bar is 30px, content area respects safe-area-inset
3. **Homepage Layout**: Uses `height: 100svh` with `overflow: hidden` to prevent scroll
4. **Page Transitions**: Homepage uses custom transition config to avoid button blink on return

## Commands
```bash
pnpm dev          # Start dev server
pnpm build        # Build for production
pnpm generate     # Generate static site
pnpm preview      # Preview production build
```
