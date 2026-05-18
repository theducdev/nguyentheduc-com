import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '../config';

export async function GET(context) {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return rss({
    title: SITE.title,
    description: SITE.desc,
    site: context.site,
    items: posts
      .sort((a, b) => b.data.pubDatetime.valueOf() - a.data.pubDatetime.valueOf())
      .map((post) => ({
        title: post.data.title,
        pubDate: post.data.pubDatetime,
        description: post.data.description,
        link: `/posts/${post.slug}/`,
      })),
  });
}
