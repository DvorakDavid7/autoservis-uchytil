// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: [
    "@/plugins/counter.client.ts",
    "@/plugins/cookies.client.ts"
  ],
  modules: [
    "nuxt-primevue",
    "nuxt-gtag",
    "@nuxtjs/seo",
    "@nuxtjs/sitemap",
    "nuxt-og-image"
  ],
  gtag: {
    id: "G-14KXHZFJ8L"
  },
  site: {
    url: 'https://autoservisjju.cz',
    name: 'JJU Autoservis Čakovice',
    description: 'Rodinný autoservis Praha - Čakovice. Provádíme plnění klimatizací, opravu automobilů a další servisní práce na počkání a za příznivé ceny. Rezervaci vyřídíte online!',
    defaultLocale: 'cz'
  },
  seo: {
    fallbackTitle: false
  }
})