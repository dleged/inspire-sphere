import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// Replace "your-username" with your actual GitHub username
// Replace "your-repo-name" with your repository name
export default defineConfig({
  site: 'https://your-username.github.io',
  base: '/your-repo-name',
  integrations: [mdx(), sitemap(), tailwind()],
});