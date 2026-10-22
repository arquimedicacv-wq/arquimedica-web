import { defineCollection, z, reference } from "astro:content";
import { glob } from "astro/loaders";

const services = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/services" }),
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
      }),
    ),
    process: z.array(
      z.object({
        step: z.string(),
        description: z.string(),
      }),
    ),
    faq: z.array(
      z.object({
        question: z.string(),
        answer: z.string(),
      }),
    ),
    relatedServices: z.array(z.string()),
    icon: z.string(),
    gallery: z
      .array(
        z.object({
          url: z.string(),
          alt: z.string(),
        }),
      )
      .optional(),
  }),
});

const recursos = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/recursos" }),
  schema: z.object({
    title: z.string(),
    metaDescription: z.string(),
    datePublished: z.date(),
    dateModified: z.date().optional(),
    relatedService: z.string(),
    excerpt: z.string(),
  }),
});

const tramites = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/tramites" }),
  schema: z.object({
    title: z.string(),
    shortTitle: z.string(),
    metaTitle: z.string().max(60),
    metaDescription: z.string().max(160),
    primaryKeyword: z.string(),
    secondaryKeywords: z.array(z.string()).default([]),
    heroTitle: z.string(),
    heroSubtitle: z.string(),
    homoclave: z.string().optional(),
    normativaAplicable: z.array(z.string()).default([]),
    badge: z.string(),
    order: z.number(),
    icon: z.string().optional(),
    whoNeeds: z.string(),
    deliverables: z.array(z.string()),
    requirements: z.array(z.string()),
    timeline: z.string(),
    commonErrors: z.array(z.string()),
    process: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
      }),
    ),
    crossSell: z
      .array(
        z.object({
          service: reference("services"),
          description: z.string(),
        }),
      )
      .default([]),
    relatedTramites: z.array(reference("tramites")).default([]),
    faq: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string(),
        }),
      )
      .min(3),
    whatsappMessage: z.string(),
    draft: z.boolean().default(false),
    datePublished: z.coerce.date(),
    dateModified: z.coerce.date().optional(),
  }),
});

const equipo = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/equipo" }),
  schema: z.object({
    nombre: z.string(),
    marca: z.string(),
    modelo: z.string().optional(),
    categoria: z.enum(["humanos", "veterinarios"]),
    subcategoria: z.string(),
    imagen: z.string(),
    descripcionCorta: z.string(),
    precio: z.number().optional(),
    disponibilidad: z.enum(["En stock", "Bajo pedido", "Consultar"]).default("Consultar"),
    destacado: z.boolean().default(false),
    order: z.number().default(99),
    whatsappMensaje: z.string().optional(),
    especificaciones: z
      .array(
        z.object({
          clave: z.string(),
          valor: z.string(),
        }),
      )
      .optional(),
  }),
});

export const collections = { services, recursos, tramites, equipo };
