# Kacenkovo Web - Stav projektu

## Hotovo

### Hero sekcia (index.vue)
- Fullscreen video pozadie z Cloudflare R2
- Adaptívne video: 1080p pre mobile, 4K pre desktop
- Lokálny poster: `/public/poster.webp`
- Fade-in animácia po načítaní videa
- 3 linky: Dámska móda, Detská móda, Doplnky
- Glassmorphism štýl tlačidiel
- Hover animácie s translateY
- iOS Safari fix pre autoplay video
- Viewport height fix (svh/lvh) pre mobile

### Cloudflare R2 Setup
- Bucket: `kacenkovo`
- Public URL: `https://pub-c3be0c5631d344eab722713e13225ca2.r2.dev`
- Súbory:
  - `kacenkovo_web_4k.mp4` - 4K video pre desktop
  - `kacenkovo_web_1080p.mp4` - 1080p video pre mobile

### Routy
- `/` - Homepage s hero videom
- `/damska-moda` - Dámska móda (produkty)
- `/detska-moda` - Detská móda (produkty)
- `/doplnky` - Doplnky (produkty)
- `/o-nas` - O nás (text o spoločnosti)
- `/sluzby` - Služby (DPD Pickup Point)
- `/mapa` - Kde nás nájdete (Google Maps embed)

### Komponenty
- `PageHeader.vue` - Header pre produktové stránky (pink/blue/purple varianty)
- `ProductCard.vue` - Karta produktu (pink/blue/purple varianty)
- `AppFooter.vue` - Footer s kontaktom, otváracími hodinami a navigáciou

### Footer
- Kontakt: adresa, telefón, email
- Otváracie hodiny: Po-Pi, So
- Navigácia: O nás, Služby, Kde nás nájdete
- Copyright s aktuálnym rokom
- Safe area padding pre iOS
- 100lvh na mobile pre overscroll fix

### SCSS
- Premenné: farby, spacing, shadows, breakpoints
- Mixiny: gradients, breakpoints, card, hover-lift, page-header, product-grid
- 3 farebné varianty: pink, blue, purple

### Konfigurácia
- Runtime config pre video URL
- Theme-color pre Safari (#333333)
- Viewport-fit: cover
- Prerender všetkých routov

---

## TODO

- [ ] Reálne obrázky produktov
- [ ] Rozšíriť produktové stránky
- [ ] Pridať ďalšie služby
- [ ] Social media linky do footeru
