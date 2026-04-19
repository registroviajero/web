import { LOCALE_META, SITE_URL, type Locale } from './config'
import { getPostsByLocale, getSlug } from './blog'
import { localizedPath } from './utils'

const FEED_META: Record<Locale, { title: string; description: string }> = {
  es: {
    title: 'Blog — RegistroViajero',
    description: 'Normativa, guías y novedades sobre el registro de viajeros y el cumplimiento del Real Decreto 933/2021 en España.',
  },
  en: {
    title: 'Blog — RegistroViajero',
    description: 'Regulations, guides, and updates on guest registration and Royal Decree 933/2021 compliance in Spain.',
  },
}

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export async function buildRssResponse(locale: Locale): Promise<Response> {
  const { title, description } = FEED_META[locale]
  const posts = await getPostsByLocale(locale)
  const now = new Date().toUTCString()
  const blogUrl = `${SITE_URL}${localizedPath(locale, '/blog')}`
  const feedUrl = `${SITE_URL}${localizedPath(locale, '/rss.xml')}`

  const items = posts
    .map((post) => {
      const url = `${SITE_URL}${localizedPath(locale, `/blog/${getSlug(post)}`)}`
      const pubDate = new Date(post.data.date).toUTCString()
      return `    <item>
      <title>${escapeXml(post.data.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${escapeXml(post.data.description)}</description>
      <author>contacto@registroviajero.com (${escapeXml(post.data.author)})</author>
    </item>`
    })
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(title)}</title>
    <link>${blogUrl}</link>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />
    <description>${escapeXml(description)}</description>
    <language>${LOCALE_META[locale].dateLocale}</language>
    <lastBuildDate>${now}</lastBuildDate>
    <ttl>1440</ttl>
${items}
  </channel>
</rss>
`

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  })
}
