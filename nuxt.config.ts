// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  app: {
    // baseURL: "http://localhost:3000",
    baseURL: "/",
  },
  css: ["~/assets/css/reset.css", "~/assets/css/main.css"],
});
