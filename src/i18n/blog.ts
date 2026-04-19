import { getCollection, type CollectionEntry } from 'astro:content'
import type { Locale } from './config'

export type BlogPost = CollectionEntry<'blog'>

export function getSlug(post: BlogPost): string {
  const parts = post.id.split('/')
  return parts.length > 1 ? parts.slice(1).join('/') : post.id
}

export async function getPostsByLocale(locale: Locale): Promise<BlogPost[]> {
  const posts = await getCollection('blog')
  return posts
    .filter((p) => p.data.lang === locale)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
}

export async function findTranslation(
  translationKey: string,
  targetLocale: Locale,
): Promise<BlogPost | undefined> {
  const posts = await getCollection('blog')
  return posts.find(
    (p) => p.data.translationKey === translationKey && p.data.lang === targetLocale,
  )
}

export function getReadingTime(post: BlogPost): number {
  const wordCount = post.body?.split(/\s+/).filter(Boolean).length ?? 0
  return Math.max(1, Math.ceil(wordCount / 200))
}
