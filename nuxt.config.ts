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
    name: 'Autoservis JJU | Praha-Čakovice',
    description: 'Rodinný Autoservis Praha-Čakovice. Provádíme plnění klimatizací, opravu automobilů, pravidelný servis, výměnu oleje a další servisní práce a služby na počkání za příznivé ceny. Rezervaci vyřídíte online!',
    defaultLocale: 'cs'
  },
  seo: {
    fallbackTitle: false
  }
})