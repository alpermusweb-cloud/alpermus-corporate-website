import { defineCollection, z } from 'astro:content';

const locationsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    city: z.string(),
    branch: z.string(),
    address: z.string(),
    phone: z.string().optional(),
    email: z.string().optional(),
    coords: z.object({
      lat: z.number(),
      lng: z.number()
    }).optional(),
    hours: z.array(z.object({
      day: z.string(),
      open: z.string(),
      close: z.string()
    })).optional(),
    images: z.array(z.string()),
    sectorRefs: z.array(z.string()),
    seo: z.object({
      title: z.string(),
      description: z.string(),
      image: z.string().optional()
    })
  })
});

const sectorsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    summary: z.string(),
    heroImage: z.string().optional(),
    gallery: z.array(z.string()),
    seo: z.object({
      title: z.string(),
      description: z.string(),
      image: z.string().optional()
    })
  })
});

const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    seo: z.object({
      title: z.string(),
      description: z.string(),
      image: z.string().optional()
    })
  })
});

export const collections = {
  'locations': locationsCollection,
  'sectors': sectorsCollection,
  'pages': pagesCollection,
};
