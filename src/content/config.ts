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

const eventCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    location: z.string().optional(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  'data': experienceCollection,
  'events': eventCollection,
};