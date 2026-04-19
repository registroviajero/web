import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'
import { LOCALES } from './i18n/config'

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    author: z.string().default('RegistroViajero'),
    lang: z.enum(LOCALES),
    translationKey: z.string(),
  }),
})

export const collections = { blog }
