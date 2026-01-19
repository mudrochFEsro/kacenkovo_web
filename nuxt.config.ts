// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxtjs/seo', '@nuxt/fonts', '@nuxt/image', '@nuxt/scripts'],

  // @nuxt/image konfigurácia
  image: {
    // Vercel automaticky použije svoj provider
    quality: 80,
    format: ['webp'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280
    },
    presets: {
      gallery: {
        modifiers: {
          format: 'webp',
          quality: 80,
          width: 400,
          height: 300,
          fit: 'cover'
        }
      }
    }
  },

  runtimeConfig: {
    public: {
      videoUrlMobile: 'https://pub-c3be0c5631d344eab722713e13225ca2.r2.dev/kacenkovo_web_1080p.mp4',
      videoUrl4k: 'https://pub-c3be0c5631d344eab722713e13225ca2.r2.dev/kacenkovo_web_4k.mp4'
    }
  },

  // SSR je defaultne zapnute v Nuxt
  ssr: true,

  // Pre SSG - prerender specificke routy
  nitro: {
    preset: 'vercel',
    prerender: {
      routes: ['/', '/detska-moda', '/damska-moda', '/doplnky', '/mapa', '/o-nas', '/sluzby'],
      crawlLinks: true
    }
  },

  // SEO konfigurácia
  site: {
    url: 'https://kacenkovo.sk',
    name: 'Kačenkovo - Obchod s oblečením',
    description: 'Kvalitné dámske a detské oblečenie za skvelé ceny',
    defaultLocale: 'sk',
    trailingSlash: false
  },

  // Automatické canonical URL
  seo: {
    automaticDefaults: true
  },

  // Sitemap konfigurácia
  sitemap: {
    urls: [
      { loc: '/', changefreq: 'weekly', priority: 1.0 },
      { loc: '/damska-moda', changefreq: 'weekly', priority: 0.9 },
      { loc: '/detska-moda', changefreq: 'weekly', priority: 0.9 },
      { loc: '/doplnky', changefreq: 'weekly', priority: 0.9 },
      { loc: '/o-nas', changefreq: 'monthly', priority: 0.7 },
      { loc: '/sluzby', changefreq: 'monthly', priority: 0.7 },
      { loc: '/mapa', changefreq: 'monthly', priority: 0.6 }
    ]
  },

  // Robots.txt konfigurácia
  robots: {
    allow: '/',
    sitemap: 'https://kacenkovo.sk/sitemap.xml'
  },


  app: {
    head: {
      htmlAttrs: {
        lang: 'sk'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
      meta: [
        { name: 'color-scheme', content: 'light dark' },
        { name: 'theme-color', media: '(prefers-color-scheme: light)', content: '#333333' },
        { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#333333' },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
        { property: 'og:image', content: 'https://kacenkovo.sk/poster.webp' },
        { property: 'og:image:width', content: '1920' },
        { property: 'og:image:height', content: '1080' },
        { property: 'og:type', content: 'website' },
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ClothingStore',
            name: 'Kačenkovo',
            description: 'Kvalitné dámske a detské oblečenie za skvelé ceny',
            url: 'https://kacenkovo.sk',
            image: 'https://kacenkovo.sk/poster.webp',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Dudvážska 5',
              addressLocality: 'Bratislava',
              postalCode: '821 07',
              addressCountry: 'SK'
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 48.1371468,
              longitude: 17.2143142
            },
            priceRange: '€€'
          })
        }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon.png' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'preconnect', href: 'https://pub-c3be0c5631d344eab722713e13225ca2.r2.dev' },
        { rel: 'dns-prefetch', href: 'https://www.google.com' },
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  // Globálne SCSS
  css: ['~/assets/scss/main.scss'],

  // SCSS premenné a mixiny dostupné v každom komponente
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/_variables.scss" as *; @use "~/assets/scss/_mixins.scss" as *;'
        }
      }
    }
  }
})
