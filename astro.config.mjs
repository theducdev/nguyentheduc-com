import { defineConfig } from 'astro/config';

// Sitemap integration tạm tắt do bug version mismatch với Astro 4.16.
// Khi cần SEO mạnh, cài lại bằng: npm i @astrojs/sitemap@latest
//   import sitemap from '@astrojs/sitemap';
//   integrations: [sitemap()],
export default defineConfig({
  site: 'https://nguyentheduc.com',
});
