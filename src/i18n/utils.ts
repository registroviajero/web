import { DEFAULT_LOCALE, LOCALE_META, LOCALES, SITE_URL, type Locale } from './config'

export function getLocaleFromUrl(url: URL | string): Locale {
  const pathname = typeof url === 'string' ? url : url.pathname
  const segments = pathname.split('/').filter(Boolean)
  const first = segments[0]
  if (first && (LOCALES as readonly string[]).includes(first)) {
    return first as Locale
  }
  return DEFAULT_LOCALE
}

export function stripLocalePrefix(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean)
  if (segments[0] && (LOCALES as readonly string[]).includes(segments[0])) {
    segments.shift()
  }
  return '/' + segments.join('/')
}

/**
 * Build a URL path for a locale. Always returns a leading slash and a
 * trailing slash so that internal links match Astro's `trailingSlash: 'always'`
 * configuration and the GitHub Pages directory-style output.
 */
export function localizedPath(locale: Locale, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`
  const withoutLocale = stripLocalePrefix(clean)
  // Normalize: ensure trailing slash, but keep '/' for the root
  const normalized = withoutLocale === '/' ? '/' : (withoutLocale.endsWith('/') ? withoutLocale : `${withoutLocale}/`)
  if (locale === DEFAULT_LOCALE) return normalized
  return normalized === '/' ? `/${locale}/` : `/${locale}${normalized}`
}

export function absoluteUrl(locale: Locale, path: string): string {
  return `${SITE_URL}${localizedPath(locale, path)}`
}

export function formatDate(locale: Locale, date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date
  return new Intl.DateTimeFormat(LOCALE_META[locale].dateLocale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(d)
}

/**
 * Map of locale → URL path, used to declare hreflang alternates and to drive
 * the locale switcher and locale banner. For pages whose slug is identical
 * across locales, the default builder produces the right thing. Pages with
 * locale-specific slugs (blog posts, legal pages) must compute the map
 * themselves and pass it in.
 */
export type LocalePaths = Record<Locale, string>

export function buildLocalePaths(
  logicalPath: string,
  overrides: Partial<Record<Locale, string>> = {},
): LocalePaths {
  const paths = LOCALES.reduce<Partial<LocalePaths>>((acc, loc) => {
    acc[loc] = overrides[loc] ?? localizedPath(loc, logicalPath)
    return acc
  }, {})
  return paths as LocalePaths
}

export type Alternate = { locale: Locale; href: string; hreflang: string }

export function getAlternates(
  _currentLocale: Locale,
  localePaths: LocalePaths,
  availableLocales: readonly Locale[] = LOCALES,
): Alternate[] {
  const alternates: Alternate[] = availableLocales.map((loc) => ({
    locale: loc,
    href: `${SITE_URL}${localePaths[loc]}`,
    hreflang: LOCALE_META[loc].hreflang,
  }))
  if (availableLocales.includes(DEFAULT_LOCALE)) {
    alternates.push({
      locale: DEFAULT_LOCALE,
      href: `${SITE_URL}${localePaths[DEFAULT_LOCALE]}`,
      hreflang: 'x-default',
    })
  }
  return alternates
}
