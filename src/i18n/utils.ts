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

export function localizedPath(locale: Locale, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`
  const withoutLocale = stripLocalePrefix(clean)
  const normalized = withoutLocale === '/' ? '' : withoutLocale
  if (locale === DEFAULT_LOCALE) return normalized || '/'
  return `/${locale}${normalized}`
}

export function absoluteUrl(locale: Locale, path: string): string {
  const p = localizedPath(locale, path)
  return `${SITE_URL}${p === '/' ? '' : p}`
}

export function formatDate(locale: Locale, date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date
  return new Intl.DateTimeFormat(LOCALE_META[locale].dateLocale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(d)
}

export type Alternate = { locale: Locale; href: string; hreflang: string }

export function getAlternates(
  currentLocale: Locale,
  logicalPath: string,
  availableLocales: readonly Locale[] = LOCALES,
): Alternate[] {
  const alternates: Alternate[] = availableLocales.map((loc) => ({
    locale: loc,
    href: absoluteUrl(loc, logicalPath),
    hreflang: LOCALE_META[loc].htmlLang,
  }))
  if (availableLocales.includes(DEFAULT_LOCALE)) {
    alternates.push({
      locale: DEFAULT_LOCALE,
      href: absoluteUrl(DEFAULT_LOCALE, logicalPath),
      hreflang: 'x-default',
    })
  }
  return alternates
}
