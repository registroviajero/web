// @ts-check
import { defineConfig } from 'astro/config';
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

const SITE = 'https://registroviajero.com';

// Cross-locale URL pairs for pages whose slug differs across locales.
// `@astrojs/sitemap`'s `i18n` option auto-pairs only when the URL path is
// identical between locales — these pairs let us emit `xhtml:link` alternates
// for blog posts and legal pages where the slug is intentionally different.
const LOCALE_PAIRS = [
  // Blog posts
  ['/blog/menores-registro-viajeros/', '/en/blog/minors-guest-registration/'],
  ['/blog/sanciones-rd-933-2021/', '/en/blog/royal-decree-933-2021-penalties/'],
  ['/blog/credenciales-ses-hospedajes/', '/en/blog/ses-hospedajes-credentials/'],
  ['/blog/rd-933-2021-registro-viajeros/', '/en/blog/royal-decree-933-2021-guide/'],
  ['/blog/ical-sincronizar-booking-airbnb/', '/en/blog/ical-sync-booking-airbnb/'],
  ['/blog/bienvenido-a-registroviajero/', '/en/blog/welcome-to-registroviajero/'],
  ['/blog/automatizar-registro-viajeros/', '/en/blog/automate-guest-registration/'],
  ['/blog/cataluna-pais-vasco-registro-viajeros/', '/en/blog/catalonia-basque-country-guest-registration/'],
  ['/blog/inteligencia-artificial-registro-viajeros/', '/en/blog/ai-vacation-rental-management/'],
  // Legal pages with locale-specific slugs
  ['/legal/aviso-legal/', '/en/legal/legal-notice/'],
  ['/legal/privacidad/', '/en/legal/privacy/'],
  ['/legal/terminos/', '/en/legal/terms/'],
];

const PATH_TO_PAIR = new Map();
for (const [es, en] of LOCALE_PAIRS) {
  PATH_TO_PAIR.set(es, { es, en });
  PATH_TO_PAIR.set(en, { es, en });
}

// Per-post lastmod from frontmatter. Build-time `new Date()` would tell Google
// every page changed on every deploy, which dilutes the crawl signal — using
// `updated || date` per file lets Google prioritise actually-edited posts.
const POST_LASTMOD = new Map();
const LOCALE_TO_PATH_PREFIX = { es: '/blog/', en: '/en/blog/' };
for (const locale of ['es', 'en']) {
  const dir = join(process.cwd(), 'src/content/blog', locale);
  let files = [];
  try {
    files = readdirSync(dir).filter((f) => f.endsWith('.md'));
  } catch {
    continue;
  }
  for (const file of files) {
    const slug = file.replace(/\.md$/, '');
    const raw = readFileSync(join(dir, file), 'utf8');
    const fm = raw.match(/^---\n([\s\S]*?)\n---/);
    if (!fm) continue;
    const updated = fm[1].match(/^updated:\s*(\S+)/m)?.[1];
    const date = fm[1].match(/^date:\s*(\S+)/m)?.[1];
    const stamp = updated || date;
    if (!stamp) continue;
    POST_LASTMOD.set(`${LOCALE_TO_PATH_PREFIX[locale]}${slug}/`, stamp);
  }
}

// https://astro.build/config
export default defineConfig({
  site: 'https://registroviajero.com',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  // Cross-locale slug confusion appearing as 404s in Search Console — likely
  // URLs Google fabricated from hreflang pairs (EN prefix + ES slug, or vice
  // versa). Both trailing-slash variants because the source URL in GSC has no
  // slash but `trailingSlash: 'always'` would also miss the slashed form.
  redirects: {
    '/en/blog/sanciones-rd-933-2021': '/en/blog/royal-decree-933-2021-penalties/',
    '/en/blog/sanciones-rd-933-2021/': '/en/blog/royal-decree-933-2021-penalties/',
    '/blog/minors-guest-registration': '/blog/menores-registro-viajeros/',
    '/blog/minors-guest-registration/': '/blog/menores-registro-viajeros/',
    '/en/blog/menores-registro-viajeros': '/en/blog/minors-guest-registration/',
    '/en/blog/menores-registro-viajeros/': '/en/blog/minors-guest-registration/',
  },
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-ES',
          en: 'en-US',
        },
      },
      serialize: (item) => {
        const url = new URL(item.url);
        const fullPath = url.pathname;
        const path = fullPath.replace(/^\/en\//, '/').replace(/^\/en$/, '/');

        if (path === '/') {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        } else if (path === '/blog/' || path === '/blog') {
          item.priority = 0.8;
          item.changefreq = 'weekly';
        } else if (path.startsWith('/blog/')) {
          item.priority = 0.7;
          item.changefreq = 'monthly';
        } else if (path.startsWith('/legal/')) {
          item.priority = 0.3;
          item.changefreq = 'yearly';
        }

        // Per-post lastmod from frontmatter, else fall back to build time.
        const postStamp = POST_LASTMOD.get(fullPath);
        if (postStamp) {
          item.lastmod = postStamp;
        }

        // Inject hreflang alternates for pages whose slug differs across locales.
        // The integration's auto-pairing only matches identical paths, so we
        // override with the explicit pair here.
        const pair = PATH_TO_PAIR.get(fullPath);
        if (pair) {
          item.links = [
            { url: `${SITE}${pair.es}`, lang: 'es-ES' },
            { url: `${SITE}${pair.en}`, lang: 'en-US' },
          ];
        }

        return item;
      },
    }),
  ],
});
