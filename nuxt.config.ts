// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  content: {
    watch: {
      ws: {
        port: 3000,
        showURL: true
      }
    }
  },
  modules: ['@nuxt/content','nuxt-graphql-client','@nuxt/devtools','@nuxtjs/tailwindcss'],

  runtimeConfig: {
    public: {
      GQL_HOST: 'http://localhost/wordpress/graphql'
    }
  },

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2024-10-09'
})