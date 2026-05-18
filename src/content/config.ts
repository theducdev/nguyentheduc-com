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

const products = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    thumbnail: z.string(),
    status: z.enum(['live', 'beta', 'wip', 'paused']).default('live'),
    price: z.string().optional(),
    priceAmount: z.number().optional(),
    priceNote: z.string().optional(),
    transferContent: z.string().optional(),
    buyLink: z.string().optional(),
    buyLabel: z.string().default('Mua ngay'),
    externalLink: z.string().optional(),
    order: z.number().default(99),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, products };
