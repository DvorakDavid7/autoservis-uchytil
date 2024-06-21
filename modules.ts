import { defineNuxtModule } from '@nuxt/kit'
import { installNuxtSiteConfig, updateSiteConfig } from 'nuxt-site-config-kit'

export default defineNuxtModule({
  async setup(options) {
    await installNuxtSiteConfig()

    updateSiteConfig({
      _context: 'nuxt-site-config',
      url: options.siteUrl,
    })
  }
})