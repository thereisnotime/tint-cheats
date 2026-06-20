// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://thereisnotime.github.io',
  base: '/tint-cheats',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
