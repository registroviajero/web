import type { APIContext } from 'astro'
import { getCollection } from 'astro:content'

const SITE_URL = 'https://registroviajero.com'
const FEED_TITLE = 'Blog — RegistroViajero'
const FEED_DESCRIPTION = 'Normativa, guías y novedades sobre el registro de viajeros y el cumplimiento del Real Decreto 933/2021 en España.'

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export async function GET(_context: APIContext): Promise<Response> {
  const posts = (await getCollection('blog')).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  )

  const now = new Date().toUTCString()

  const items = posts
    .map((post) => {
      const url = `${SITE_URL}/blog/${post.id}`
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
    <title>${escapeXml(FEED_TITLE)}</title>
    <link>${SITE_URL}/blog</link>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
    <description>${escapeXml(FEED_DESCRIPTION)}</description>
    <language>es-ES</language>
    <lastBuildDate>${now}</lastBuildDate>
    <ttl>1440</ttl>
${items}
  </channel>
</rss>
`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  })
}
