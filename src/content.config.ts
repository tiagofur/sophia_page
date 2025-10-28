import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.date(),
        updatedDate: z.date().optional(),
        heroImage: z.string().optional(),
        author: z.string(),
        tags: z.array(z.string()).optional(),
        draft: z.boolean().optional(),
        category: z.string().optional(),
        series: z.string().optional(),
    }),
});

export const collections = {
    blog: blogCollection,
};