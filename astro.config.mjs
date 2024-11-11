import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://your-username.github.io',
  base: '/inspire-sphere',
  outDir: 'docs',
  build: {
    assetsPrefix: '/inspire-sphere'
  },
  integrations: [mdx(), sitemap(), tailwind()],
});