// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const experienceCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    candidateName: z.string(),
    company: z.string(),
    role: z.string(),
    category: z.enum(['interview', 'alumni']), // <--- The "Indicator" you asked for
    date: z.date(),
    tags: z.array(z.string()),
    verdict: z.enum(['Selected', 'Rejected', 'Pending']).optional(),
  }),
});

export const collections = {
  'data': experienceCollection,
};