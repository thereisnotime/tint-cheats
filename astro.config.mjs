// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { execSync } from 'node:child_process';

// Capture the commit SHA and build time so every release is stamped in the UI.
function gitSha() {
  if (process.env.GITHUB_SHA) return process.env.GITHUB_SHA.slice(0, 7);
  try {
    return execSync('git rev-parse --short HEAD').toString().trim();
  } catch {
    return 'dev';
  }
}
const BUILD_SHA = gitSha();
const BUILD_TIME = new Date().toISOString();

// https://astro.build/config
export default defineConfig({
  site: 'https://thereisnotime.github.io',
  base: '/tint-cheats',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  vite: {
    define: {
      __BUILD_SHA__: JSON.stringify(BUILD_SHA),
      __BUILD_TIME__: JSON.stringify(BUILD_TIME),
    },
  },
});
