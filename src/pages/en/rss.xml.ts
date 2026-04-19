import type { APIContext } from 'astro'
import { buildRssResponse } from '../../i18n/rss'

export async function GET(_context: APIContext): Promise<Response> {
  return buildRssResponse('en')
}
