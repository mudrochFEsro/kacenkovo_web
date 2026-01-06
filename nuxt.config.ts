// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxtjs/seo', '@nuxt/fonts', '@nuxt/image', '@nuxt/scripts', '@vueuse/nuxt', '@vueuse/motion/nuxt'],

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
    prerender: {
      routes: ['/', '/detska-moda', '/damska-moda'],
      crawlLinks: true
    }
  },

  // SEO konfigurácia
  site: {
    url: 'https://kacenkovo.sk',
    name: 'Kacenkovo - Obchod s oblečením',
    description: 'Kvalitné dámske a detské oblečenie za skvelé ceny',
    defaultLocale: 'sk'
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'sk'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1'
    },
    pageTransition: { name: 'page', mode: 'in-out' },
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
