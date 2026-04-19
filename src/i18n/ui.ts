import type { Locale } from './config'

export const LEGAL_SLUGS: Record<Locale, {
  legalNotice: string
  privacy: string
  terms: string
  cookies: string
}> = {
  es: {
    legalNotice: '/legal/aviso-legal',
    privacy: '/legal/privacidad',
    terms: '/legal/terminos',
    cookies: '/legal/cookies',
  },
  en: {
    legalNotice: '/en/legal/legal-notice',
    privacy: '/en/legal/privacy',
    terms: '/en/legal/terms',
    cookies: '/en/legal/cookies',
  },
}

type UIStrings = {
  nav: {
    features: string
    howItWorks: string
    pricing: string
    blog: string
    help: string
    login: string
    register: string
    ariaHome: string
  }
  footer: {
    tagline: string
    productHeading: string
    legalHeading: string
    accessHeading: string
    rss: string
    helpCenter: string
    privacy: string
    legalNotice: string
    terms: string
    cookies: string
    login: string
    createAccount: string
    copyright: (year: number) => string
  }
  localeSwitch: {
    ariaLabel: string
    switchTo: string
  }
  localeBanner: {
    message: string
    cta: string
    dismiss: string
  }
  blog: {
    indexTitle: string
    indexDescription: string
    indexHeading: string
    indexIntro: string
    empty: string
    readMore: string
    backToBlog: string
    updated: string
    readingTime: (min: number) => string
    breadcrumbHome: string
    breadcrumbBlog: string
    ctaHeading: string
    ctaSubheading: string
    ctaButton: string
    listTitleMeta: string
    listDescriptionMeta: string
    postTitleSuffix: string
  }
  notFound: {
    title: string
    description: string
    label: string
    heading: string
    body: string
    backHome: string
    helpCenter: string
    lookingForHeading: string
    links: { label: string; href: string }[]
  }
  legalDisclaimer: {
    title: string
    body: string
  }
}

export const UI: Record<Locale, UIStrings> = {
  es: {
    nav: {
      features: 'Funcionalidades',
      howItWorks: 'Cómo funciona',
      pricing: 'Precios',
      blog: 'Blog',
      help: 'Ayuda',
      login: 'Iniciar sesión',
      register: 'Prueba gratis',
      ariaHome: 'RegistroViajero — Inicio',
    },
    footer: {
      tagline: 'Software de registro de viajeros y partes de hospedaje para agencias de alojamiento turístico en España.',
      productHeading: 'Producto',
      legalHeading: 'Legal',
      accessHeading: 'Acceso',
      rss: 'RSS',
      helpCenter: 'Centro de Ayuda',
      privacy: 'Privacidad',
      legalNotice: 'Aviso legal',
      terms: 'Términos de uso',
      cookies: 'Cookies',
      login: 'Iniciar sesión',
      createAccount: 'Crear cuenta',
      copyright: (year) => `© ${year} RegistroViajero. Cumplimiento del Real Decreto 933/2021.`,
    },
    localeSwitch: {
      ariaLabel: 'Seleccionar idioma',
      switchTo: 'Ver en inglés',
    },
    localeBanner: {
      message: 'Esta página también está disponible en tu idioma.',
      cta: 'Ver en español',
      dismiss: 'Cerrar',
    },
    blog: {
      indexTitle: 'Blog — RegistroViajero',
      indexDescription: 'Artículos sobre registro de viajeros, normativa turística y gestión de alojamientos en España.',
      indexHeading: 'Blog',
      indexIntro: 'Normativa, guías y novedades sobre el registro de viajeros en España.',
      empty: 'Próximamente publicaremos nuevos artículos.',
      readMore: 'Leer más',
      backToBlog: 'Volver al blog',
      updated: 'Actualizado',
      readingTime: (min) => `${min} min de lectura`,
      breadcrumbHome: 'Inicio',
      breadcrumbBlog: 'Blog',
      ctaHeading: 'Automatiza tus partes de viajeros',
      ctaSubheading: '15 días de prueba gratis. Sin tarjeta de crédito.',
      ctaButton: 'Crear cuenta gratis',
      listTitleMeta: 'Blog — RegistroViajero',
      listDescriptionMeta: 'Artículos sobre registro de viajeros, normativa turística y gestión de alojamientos en España.',
      postTitleSuffix: 'Blog RegistroViajero',
    },
    notFound: {
      title: 'Página no encontrada — RegistroViajero',
      description: 'La página que buscas no existe o ha sido movida. Vuelve al inicio o consulta el Centro de Ayuda.',
      label: 'Error 404',
      heading: 'Página no encontrada',
      body: 'La página que buscas no existe, se ha movido o ha sido eliminada. Revisa la dirección o vuelve al inicio.',
      backHome: 'Volver al inicio',
      helpCenter: 'Centro de Ayuda',
      lookingForHeading: '¿Buscabas algo en concreto?',
      links: [
        { label: 'Funcionalidades', href: '/#funcionalidades' },
        { label: 'Precios', href: '/#precios' },
        { label: 'Blog', href: '/blog' },
        { label: 'Privacidad', href: '/legal/privacidad' },
        { label: 'Aviso legal', href: '/legal/aviso-legal' },
      ],
    },
    legalDisclaimer: {
      title: '',
      body: '',
    },
  },
  en: {
    nav: {
      features: 'Features',
      howItWorks: 'How it works',
      pricing: 'Pricing',
      blog: 'Blog',
      help: 'Help',
      login: 'Log in',
      register: 'Free trial',
      ariaHome: 'RegistroViajero — Home',
    },
    footer: {
      tagline: 'Guest registration and lodging report software for vacation rental agencies in Spain.',
      productHeading: 'Product',
      legalHeading: 'Legal',
      accessHeading: 'Access',
      rss: 'RSS',
      helpCenter: 'Help Center',
      privacy: 'Privacy',
      legalNotice: 'Legal notice',
      terms: 'Terms of use',
      cookies: 'Cookies',
      login: 'Log in',
      createAccount: 'Create account',
      copyright: (year) => `© ${year} RegistroViajero. Compliance with Royal Decree 933/2021.`,
    },
    localeSwitch: {
      ariaLabel: 'Select language',
      switchTo: 'View in Spanish',
    },
    localeBanner: {
      message: 'This page is also available in your language.',
      cta: 'View in English',
      dismiss: 'Dismiss',
    },
    blog: {
      indexTitle: 'Blog — RegistroViajero',
      indexDescription: 'Articles on guest registration, Spanish tourism regulations, and accommodation management.',
      indexHeading: 'Blog',
      indexIntro: 'Regulations, guides, and updates on guest registration in Spain.',
      empty: 'New articles coming soon.',
      readMore: 'Read more',
      backToBlog: 'Back to blog',
      updated: 'Updated',
      readingTime: (min) => `${min} min read`,
      breadcrumbHome: 'Home',
      breadcrumbBlog: 'Blog',
      ctaHeading: 'Automate your guest reports',
      ctaSubheading: '15-day free trial. No credit card.',
      ctaButton: 'Create free account',
      listTitleMeta: 'Blog — RegistroViajero',
      listDescriptionMeta: 'Articles on guest registration, Spanish tourism regulations, and accommodation management.',
      postTitleSuffix: 'RegistroViajero Blog',
    },
    notFound: {
      title: 'Page not found — RegistroViajero',
      description: 'The page you are looking for does not exist or has been moved. Return to the homepage or visit the Help Center.',
      label: 'Error 404',
      heading: 'Page not found',
      body: 'The page you are looking for does not exist, was moved, or has been removed. Check the URL or return to the homepage.',
      backHome: 'Back to homepage',
      helpCenter: 'Help Center',
      lookingForHeading: 'Looking for something specific?',
      links: [
        { label: 'Features', href: '/en/#features' },
        { label: 'Pricing', href: '/en/#pricing' },
        { label: 'Blog', href: '/en/blog' },
        { label: 'Privacy', href: '/en/legal/privacy' },
        { label: 'Legal notice', href: '/en/legal/legal-notice' },
      ],
    },
    legalDisclaimer: {
      title: 'Reference translation',
      body: 'This is a courtesy translation of the original Spanish document. In the event of any discrepancy, the Spanish version prevails.',
    },
  },
}
