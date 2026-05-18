import type { APIRoute } from 'astro';

const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://nguyentheduc.com/sitemap-index.xml
`;

export const GET: APIRoute = () =>
  new Response(robotsTxt, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
