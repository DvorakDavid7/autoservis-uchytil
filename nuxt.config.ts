// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

    devtools: {enabled: true},
    css: ["~/assets/css/main.css"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    plugins: [
        "@/plugins/counter.client.ts"
    ],
    modules: ["nuxt-primevue", "nuxt-gtag"],
    gtag: {
        id: "G-14KXHZFJ8L"
    }
})