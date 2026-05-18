import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const SITE = 'https://nguyentheduc.com';

export const GET: APIRoute = async () => {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  const sortedPosts = posts.sort(
    (a, b) => b.data.pubDatetime.valueOf() - a.data.pubDatetime.valueOf()
  );

  const staticUrls = [
    { loc: `${SITE}/`, priority: '1.0', changefreq: 'weekly' },
    { loc: `${SITE}/posts/`, priority: '0.9', changefreq: 'weekly' },
    { loc: `${SITE}/about/`, priority: '0.7', changefreq: 'monthly' },
  ];

  const postUrls = sortedPosts.map((post) => ({
    loc: `${SITE}/posts/${post.slug}/`,
    lastmod: post.data.pubDatetime.toISOString(),
    priority: '0.8',
    changefreq: 'monthly',
  }));

  const urls = [...staticUrls, ...postUrls];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>${'lastmod' in u ? `\n    <lastmod>${u.lastmod}</lastmod>` : ''}
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
