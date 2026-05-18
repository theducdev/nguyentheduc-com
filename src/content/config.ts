import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDatetime: z.coerce.date(),
    author: z.string().default('Nguyễn Thế Đức'),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    readingTime: z.string().optional(),
  }),
});

export const collections = { blog };
