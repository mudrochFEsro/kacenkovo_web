// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxtjs/seo', '@nuxt/fonts', '@nuxt/image', '@nuxt/scripts', '@vueuse/nuxt', '@vueuse/motion/nuxt'],

  // SSR je defaultne zapnute v Nuxt
  ssr: true,

  // Pre SSG - prerender specificke routy
  nitro: {
    prerender: {
      routes: ['/', '/detska-sekcia', '/damska-sekcia'],
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
    pageTransition: { name: 'page', mode: 'out-in' }
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
