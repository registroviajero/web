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
    /** Path under /public — e.g. "/blog/nrua.webp". One 1200x630
     *  landscape source. Displayed in-page as a square via CSS crop
     *  (aspect-square + object-cover shows the centred 630x630 band).
     *  Same file serves as og:image / twitter:image at its native
     *  landscape aspect. Falls back to the site-wide og-image.webp. */
    cover: z.string().optional(),
    /** Short alt text for the cover image. Required when cover is set. */
    coverAlt: z.string().optional(),
  }),
})

export const collections = { blog }
