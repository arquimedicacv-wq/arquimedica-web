import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    metaDescription: z.string(),
    heroTitle: z.string(),
    heroSubtitle: z.string(),
    order: z.number(),
    painPoints: z.array(z.string()),
    includes: z.array(z.string()),
    normativa: z.array(
      z.object({
        nombre: z.string(),
        descripcion: z.string(),
      })
    ),
    process: z.array(
      z.object({
        step: z.string(),
        description: z.string(),
      })
    ),
    faq: z.array(
      z.object({
        question: z.string(),
        answer: z.string(),
      })
    ),
    relatedServices: z.array(z.string()),
    icon: z.string(),
    gallery: z.array(
      z.object({
        url: z.string(),
        alt: z.string(),
      })
    ).optional(),
  }),
});

const recursos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/recursos' }),
  schema: z.object({
    title: z.string(),
    metaDescription: z.string(),
    datePublished: z.date(),
    dateModified: z.date().optional(),
    relatedService: z.string(),
    excerpt: z.string(),
  }),
});

export const collections = { services, recursos };
