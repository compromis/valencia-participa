// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Salvem escoles - Compromís',
      htmlAttrs: {
        lang: 'ca',
      },
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: 'https://compromis.net/sub/icons/favicon.ico',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: 'https://compromis.net/sub/icons/favicon32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '192x192',
          href: 'https://compromis.net/sub/icons/favicon192.png',
        },
        {
          rel: 'stylesheet',
          href: 'https://compromis.net/sub/fonts/manrope.css?variable',
        }
      ],
    }
  },

  css: [
    '@compromis/blobby/scss/blobby.scss',
    '~/assets/scss/main.scss'
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import '@compromis/blobby/scss/variables';
            @import 'bootstrap/scss/functions';
            @import 'bootstrap/scss/variables';
            @import 'bootstrap/scss/mixins';
          `
        }
      }
    }
  },

  modules: [
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    'nuxt-cloudflare-analytics'
  ],

  i18n: {
    locales: [
      {
        code: 'val',
        file: 'val.js'
      },
      {
        code: 'cas',
        file: 'cas.js'
      }
    ],
    lazy: true,
    langDir: 'lang',
    defaultLocale: 'val'
  },

  cloudflareAnalytics: {
    token: '2bd8d268fcb04c08b7423e153cf63f2b'
  }
})
