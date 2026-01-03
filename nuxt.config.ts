import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint'],
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  app: {
    head: {
      title: 'EventosIA',
      htmlAttrs: { lang: 'es' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      script: [
        {
          src: 'https://cdn.snipcart.com/themes/v3.0.31/default/snipcart.js',
          async: true,
          id: 'snipcart',
          'data-config-modal-style': 'side',
          'data-api-key': process.env.NUXT_PUBLIC_SNIPCART_KEY || ''
        }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://cdn.snipcart.com/themes/v3.0.31/default/snipcart.css' }
      ]
    }
  },
  runtimeConfig: {
    public: {
      snipcartKey: '' // NUXT_PUBLIC_SNIPCART_KEY
    }
  }
})