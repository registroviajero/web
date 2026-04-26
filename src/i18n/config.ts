export const LOCALES = ['es', 'en'] as const
export type Locale = (typeof LOCALES)[number]

export const DEFAULT_LOCALE: Locale = 'es'

export const LOCALE_META: Record<Locale, {
  code: Locale
  htmlLang: string
  hreflang: string
  ogLocale: string
  label: string
  shortLabel: string
  dateLocale: string
}> = {
  es: { code: 'es', htmlLang: 'es', hreflang: 'es-ES', ogLocale: 'es_ES', label: 'Español', shortLabel: 'ES', dateLocale: 'es-ES' },
  en: { code: 'en', htmlLang: 'en', hreflang: 'en-US', ogLocale: 'en_US', label: 'English', shortLabel: 'EN', dateLocale: 'en-US' },
}

export const SITE_URL = 'https://registroviajero.com'
export const APP_URL = 'https://app.registroviajero.com'
export const HELP_URL = 'https://help.registroviajero.com'
