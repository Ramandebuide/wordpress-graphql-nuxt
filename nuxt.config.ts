// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  content: {
    watch: {
      ws: {
        port: 3000,
        showURL: true,
      },
    },
  },
  modules: [
    "@nuxt/content",
    "nuxt-graphql-client",
    "@nuxt/devtools",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
  ],

  runtimeConfig: {
    public: {
      GQL_HOST: process.env.GQL_HOST || "http://127.0.0.1:80/wordpress/graphql",
    },
  },

  routeRules: {
    "/": { prerender: true },
  },

  compatibilityDate: "2024-10-09",
});
