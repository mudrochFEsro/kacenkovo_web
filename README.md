# Kacenkovo - Web

E-commerce website pre obchod s oblečením "Kacenkovo" v Bratislave. Predaj dámskej a detskej módy, doplnkov.

## Tech Stack

- **Framework**: Nuxt 3 (Vue 3, TypeScript)
- **Styling**: SCSS s premennými a mixinmi
- **Moduly**: @nuxtjs/seo, @nuxt/fonts, @nuxt/image, @nuxt/scripts
- **Lightbox**: vue-easy-lightbox
- **Build**: SSR + SSG (prerendered routes)

## Štruktúra projektu

```
├── app.vue                 # Root component s video pozadím
├── layouts/
│   └── default.vue         # Hlavný layout s AppFooter
├── pages/
│   ├── index.vue           # Homepage s kategóriami
│   ├── damska-moda.vue     # Dámska móda
│   ├── detska-moda.vue     # Detská móda
│   ├── doplnky.vue         # Doplnky
│   ├── o-nas.vue           # O nás
│   ├── sluzby.vue          # Služby (DPD pickup)
│   └── mapa.vue            # Mapa/lokácia
├── components/
│   ├── AppFooter.vue       # Draggable footer
│   ├── PageHeader.vue      # Sticky header s animáciou
│   ├── ImageGallery.vue    # Galéria s lightboxom
│   ├── IntroText.vue       # Intro text komponent
│   └── Trademark.vue       # Copyright komponent
└── assets/scss/
    ├── main.scss           # Globálne štýly, reset
    ├── _variables.scss     # Farby, spacing, breakpointy
    └── _mixins.scss        # Responsive mixiny
```

## Inštalácia

```bash
pnpm install
```

## Development

```bash
pnpm dev
```

Server beží na `http://localhost:3000`

## Production

Build:

```bash
pnpm build
```

Preview:

```bash
pnpm preview
```

Generovanie statických stránok:

```bash
pnpm generate
```

## Funkcie

- **Video pozadie** - Full-screen video na homepage (rôzna kvalita pre mobile/desktop)
- **Draggable footer** - Ťahateľný footer pre mobile aj desktop
- **Sticky header** - Animovaný header pri scrollovaní
- **Galéria obrázkov** - Lightbox s navigáciou
- **SEO optimalizácia** - Meta tagy, JSON-LD schema
- **Responzívny dizajn** - Mobile-first approach
