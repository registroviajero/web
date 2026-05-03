import type { Locale } from './config'

type Step = { num: string; title: string; desc: string }
type Feature = { title: string; desc: string; icon: string }
type Segment = { title: string; desc: string }
type Faq = { q: string; a: string; html?: string }
/** Keys map to imported assets in Landing.astro. New mockup → add the key
 * here and the corresponding `import` + `mockupMap` entry in Landing.astro. */
export type MockupKey =
  | 'checkin'
  | 'asistente'
  | 'audit'
  | 'reservas'
  | 'alojamiento'
  | 'dashboard'

type Spotlight = {
  eyebrow: string
  title: string
  body: string
  imageKey: MockupKey
  imageAlt: string
  bullets: string[]
}
type TourCard = {
  imageKey: MockupKey
  imageAlt: string
  title: string
  desc: string
}

type LandingContent = {
  meta: { title: string; description: string }
  hero: {
    pill: string
    title1: string
    titleAccent: string
    subhead: string
    ctaPrimary: string
    ctaSecondary: string
    disclaimer: string
    phoneAlt: string
  }
  spotlights: Spotlight[]
  tour: {
    id: string
    title: string
    intro: string
    cards: TourCard[]
  }
  sections: {
    featuresId: string
    featuresTitle: string
    featuresIntro: string
    howItWorksId: string
    howItWorksTitle: string
    howItWorksIntro: string
    platformsTitle: string
    platformsIntro: string
    segmentsId: string
    segmentsTitle: string
    segmentsIntro: string
    pricingId: string
    pricingTitle: string
    pricingIntro: string
    pricingPlan: string
    pricingPriceUnit: string
    pricingBillingNote: string
    pricingCta: string
    pricingNoCard: string
    pricingFeatures: string[]
    pricingGuaranteeTitle: string
    pricingGuaranteeBody: string
    pricingSanctionsNote: string
    pricingSanctionsLinkLabel: string
    pricingSanctionsHref: string
    securityTitle: string
    securityIntro: string
    securityCards: { title: string; desc: string }[]
    faqId: string
    faqTitle: string
    faqFooterPrefix: string
    faqFooterLinkLabel: string
    latestPostsTitle: string
    latestPostsIntro: string
    latestPostsAll: string
    ctaTitle: string
    ctaBody: string
    ctaButton: string
  }
  steps: Step[]
  features: Feature[]
  segments: Segment[]
  platforms: { name: string; slug: string }[]
  faqs: Faq[]
  schema: {
    softwareDescription: string
    featureList: string[]
    priceUnitText: string
    priceDescription: string
    trialOfferName: string
    trialOfferDescription: string
    proOfferName: string
    howToName: string
    howToDescription: string
  }
}

const ICON = {
  link: '<path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />',
  calendar: '<path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />',
  send: '<path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />',
  team: '<path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />',
  shield: '<path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />',
  grid: '<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />',
}

const PLATFORMS = [
  { name: 'Booking.com', slug: 'booking' },
  { name: 'Airbnb', slug: 'airbnb' },
  { name: 'Vrbo', slug: 'vrbo' },
  { name: 'Expedia', slug: 'expedia' },
  { name: 'Tripadvisor', slug: 'tripadvisor' },
  { name: 'Google Calendar', slug: 'google-calendar' },
  { name: 'Holidu', slug: 'holidu' },
]

export const LANDING: Record<Locale, LandingContent> = {
  es: {
    meta: {
      title: 'RegistroViajero — Automatiza el registro de viajeros | RD 933/2021',
      description: 'Automatiza el registro de viajeros y los partes de hospedaje del RD 933/2021. Tus huéspedes se registran desde su móvil; tú validas y envías a SES.HOSPEDAJES con un clic. 15 días gratis, sin tarjeta.',
    },
    hero: {
      pill: 'Cumple RD 933/2021 · Envío directo a SES.HOSPEDAJES',
      title1: 'Automatiza el registro',
      titleAccent: 'de viajeros',
      subhead: 'Tus huéspedes se registran desde su móvil. Tú validas y envías los partes a SES.HOSPEDAJES con un clic. Sin papeles, sin errores, sin complicaciones.',
      ctaPrimary: 'Empieza gratis — 15 días',
      ctaSecondary: 'Cómo funciona',
      disclaimer: 'Sin tarjeta de crédito. Acceso ilimitado durante la prueba.',
      phoneAlt: 'Panel de control de RegistroViajero',
    },
    spotlights: [
      {
        eyebrow: 'CHECK-IN DIGITAL',
        title: 'Tus huéspedes hacen el check-in solos, en su idioma',
        body: 'Generamos un enlace único por huésped que puedes compartir por email, WhatsApp o el canal que prefieras. Sin app, sin registro, sin descargas. Rellenan sus datos, firman desde el móvil y el parte queda listo para enviar al Ministerio.',
        imageKey: 'checkin',
        imageAlt: 'Pantalla de check-in del huésped en el móvil',
        bullets: [
          '9 idiomas: español, inglés, francés, alemán, italiano, portugués, gallego, euskera y catalán',
          'Validación en tiempo real para DNI, NIE, pasaporte y documentos UE',
          'Firma digital de la declaración de veracidad',
          'Guarda el progreso automáticamente — el huésped puede continuar más tarde',
        ],
      },
      {
        eyebrow: 'ASISTENTE INTEGRADO',
        title: 'ReVi te resuelve dudas y te lleva donde necesitas',
        body: 'Pregúntale por errores del Ministerio, datos incompletos o estadísticas de tu cuenta. ReVi conoce tu contexto, pero nunca ve datos personales de tus huéspedes — solo metadatos y estadísticas.',
        imageKey: 'asistente',
        imageAlt: 'Asistente ReVi en la aplicación de RegistroViajero',
        bullets: [
          'Respuestas en tu idioma, basadas en el centro de ayuda',
          'Te lleva a la pantalla correcta con un clic',
          'Datos sensibles redactados antes de cada consulta',
          'Cumple GDPR — no entrenamos modelos con tu información',
        ],
      },
      {
        eyebrow: 'REGISTRO DE AUDITORÍA',
        title: 'Cada cambio queda registrado, para siempre',
        body: 'Cada acción —añadir un huésped, editar un dato, enviar al Ministerio o recibir una confirmación— queda registrada con fecha, autor y contexto. La pista es inmutable: nunca se modifica, nunca se elimina. Lo que necesitas si una inspección pregunta qué pasó, cuándo y quién lo hizo.',
        imageKey: 'audit',
        imageAlt: 'Registro de auditoría de una reserva',
        bullets: [
          'Inmutable: las filas nunca se modifican ni se borran',
          'Acciones del huésped, del equipo y del sistema diferenciadas',
          'Visible en cada reserva, alojamiento y panel',
          'Cada envío a SES.HOSPEDAJES queda asociado a su lote y respuesta del Ministerio',
        ],
      },
    ],
    tour: {
      id: 'tour',
      title: 'Y mucho más en cada pantalla',
      intro: 'Cada parte del flujo está pensada para reducir clics y errores.',
      cards: [
        {
          imageKey: 'reservas',
          imageAlt: 'Lista de reservas con plataformas de origen y estados',
          title: 'Reservas',
          desc: 'Lista densa con plataforma de origen, estado, advertencias de overbooking y progreso de huéspedes. Filtra por fecha, alojamiento y estado en un instante.',
        },
        {
          imageKey: 'alojamiento',
          imageAlt: 'Página de detalle de un alojamiento',
          title: 'Alojamientos',
          desc: 'Una página por propiedad con foto, dirección, credenciales SES y todas las reservas. Edita un alojamiento y los datos se actualizan en todos los partes pendientes.',
        },
      ],
    },
    sections: {
      featuresId: 'funcionalidades',
      featuresTitle: 'Todo lo que necesitas para cumplir',
      featuresIntro: 'Desde la recogida de datos hasta el envío al Ministerio, todo integrado en una sola plataforma.',
      howItWorksId: 'como-funciona',
      howItWorksTitle: 'Cómo funciona',
      howItWorksIntro: 'Cinco pasos para enviar los partes de viajeros al Ministerio.',
      platformsTitle: 'Importa reservas automáticamente',
      platformsIntro: 'Conecta tus calendarios iCal y las reservas se sincronizan cada 15 minutos.',
      segmentsId: 'para-quien-es',
      segmentsTitle: 'Para quién es RegistroViajero',
      segmentsIntro: 'Diseñado para cualquier alojamiento reglado en España sujeto al RD 933/2021.',
      pricingId: 'precios',
      pricingTitle: 'Precio simple y transparente',
      pricingIntro: 'Empieza con 15 días de prueba gratuita. Después, un precio por alojamiento.',
      pricingPlan: 'Plan Pro',
      pricingPriceUnit: '/alojamiento/mes',
      pricingBillingNote: 'Facturación mensual. Pagas por alojamiento activo. Sin mínimos, sin compromiso anual.',
      pricingCta: 'Empieza gratis — 15 días',
      pricingNoCard: 'Sin tarjeta de crédito',
      pricingFeatures: [
        'Huéspedes ilimitados',
        'Envío directo a SES.HOSPEDAJES',
        'Importación iCal automática',
        'Check-in digital en 9 idiomas',
        'Equipo con roles y permisos',
        'Exportación PDF y CSV',
        'Códigos QR para check-in presencial',
        'Registro de auditoría inmutable',
      ],
      pricingGuaranteeTitle: 'El check-in nunca se bloquea.',
      pricingGuaranteeBody: 'Aunque tu suscripción caduque, tus huéspedes pueden seguir completando sus datos. Tú solo no podrás enviar al Ministerio hasta reactivarla.',
      pricingSanctionsNote: 'Una sola sanción por incumplimiento del RD 933/2021 empieza en 601 €.',
      pricingSanctionsLinkLabel: 'Consulta los tramos y supuestos',
      pricingSanctionsHref: '/blog/sanciones-rd-933-2021/',
      securityTitle: 'Seguridad y cumplimiento',
      securityIntro: 'Tus datos y los de tus huéspedes, siempre protegidos.',
      securityCards: [
        { title: 'Datos cifrados', desc: 'Credenciales y contraseñas cifradas en reposo' },
        { title: 'Cumple el RGPD', desc: 'Retención y eliminación automática de datos' },
        { title: 'Conexión segura', desc: 'Todas las comunicaciones por HTTPS' },
        { title: 'Aislamiento total', desc: 'Cada agencia tiene sus datos separados' },
      ],
      faqId: 'faq',
      faqTitle: 'Preguntas frecuentes',
      faqFooterPrefix: '¿Más preguntas? Consulta el',
      faqFooterLinkLabel: 'Centro de Ayuda',
      latestPostsTitle: 'Desde el blog',
      latestPostsIntro: 'Normativa, guías y novedades sobre el registro de viajeros.',
      latestPostsAll: 'Ver todos los artículos →',
      ctaTitle: 'Empieza a enviar partes de viajeros hoy',
      ctaBody: '15 días de prueba gratis. Sin tarjeta de crédito. Listo en 2 minutos.',
      ctaButton: 'Crear cuenta gratis',
    },
    steps: [
      { num: '1', title: 'Registra tus alojamientos', desc: 'Configura cada propiedad con su dirección, tipo y código de establecimiento del Ministerio.' },
      { num: '2', title: 'Crea reservas', desc: 'Manualmente o importando automáticamente desde Booking.com, Airbnb, VRBO y más vía iCal.' },
      { num: '3', title: 'Envía el enlace de check-in', desc: 'Cada huésped recibe un enlace único. Sin app, sin registro, sin descargas.' },
      { num: '4', title: 'Revisa y valida', desc: 'Comprueba que los datos son correctos y marca la reserva como validada.' },
      { num: '5', title: 'Envía al Ministerio', desc: 'Con un clic, genera y envía los partes a SES.HOSPEDAJES automáticamente.' },
    ],
    features: [
      { title: 'Check-in digital', desc: 'Enlace único por huésped. Formulario adaptado a móvil en 9 idiomas. Firma digital de la declaración de exactitud.', icon: ICON.link },
      { title: 'Importación iCal', desc: 'Sincroniza reservas cada 15 minutos desde Booking.com, Airbnb, VRBO, Expedia, Tripadvisor y Google Calendar.', icon: ICON.calendar },
      { title: 'Envío directo al Ministerio', desc: 'Genera y envía automáticamente los partes de viajeros y reservas de hospedaje a SES.HOSPEDAJES con un clic.', icon: ICON.send },
      { title: 'Equipo y roles', desc: 'Propietario, administrador y miembro. Cada uno con su propio acceso y permisos.', icon: ICON.team },
      { title: 'Cumplimiento RGPD', desc: 'Datos cifrados, retención automática de 3 años según normativa y eliminación completa bajo solicitud.', icon: ICON.shield },
      { title: 'Panel de control', desc: 'Calendario de llegadas, estados de reserva, alertas de errores y actividad reciente en un vistazo.', icon: ICON.grid },
    ],
    segments: [
      { title: 'Apartamentos turísticos', desc: 'Check-in 100 % remoto. El huésped rellena sus datos antes de llegar y tú recibes el parte validado listo para enviar.' },
      { title: 'Hoteles y pensiones', desc: 'Pre-check-in desde el móvil antes de llegar a recepción. Menos tiempo en el mostrador y menos errores de transcripción.' },
      { title: 'Casas rurales y vivienda vacacional', desc: 'Estancias de grupo con un enlace por huésped y un enlace grupal único para compartir por WhatsApp o email.' },
      { title: 'Gestores y agencias', desc: 'Varias propiedades y propietarios en una sola cuenta. Credenciales SES separadas por propietario, roles para tu equipo.' },
    ],
    platforms: PLATFORMS,
    faqs: [
      { q: '¿Cuánto cuesta RegistroViajero?', a: 'El Plan Pro cuesta 5 € por alojamiento activo al mes, con facturación mensual. Incluye un periodo de prueba de 15 días con acceso ilimitado, sin tarjeta de crédito. Sin mínimo de alojamientos y sin compromiso anual. El check-in de huéspedes nunca se bloquea por el estado de tu suscripción.' },
      { q: '¿En qué se diferencia RegistroViajero de un PMS o channel manager?', a: 'Un PMS o channel manager gestiona reservas, calendarios, pagos, sitio web y muchas otras tareas, y suele incluir el registro de viajeros como una funcionalidad más. RegistroViajero hace solo una cosa: el cumplimiento del RD 933/2021 con SES.HOSPEDAJES. Si ya tienes un PMS o no necesitas uno, somos la opción más sencilla y económica para esta parte concreta del trabajo, desde un solo alojamiento y sin mínimos.' },
      { q: '¿Mis huéspedes necesitan instalar algo?', a: 'No. Reciben un enlace que abren en su navegador. Sin app, sin registro, sin descargas.' },
      { q: '¿Funciona en Cataluña y País Vasco?', a: 'Todavía no. Estas comunidades usan sistemas propios (Mossos d\'Esquadra y Ertzaintza). La integración está en desarrollo.' },
      {
        q: '¿Qué pasa si no envío los partes al Ministerio?',
        a: 'El incumplimiento del RD 933/2021 puede acarrear sanciones administrativas conforme a la Ley Orgánica 4/2015 de Seguridad Ciudadana. Más allá de las multas, es una obligación legal del titular del alojamiento.',
        html: 'El incumplimiento del RD 933/2021 puede acarrear sanciones administrativas conforme a la Ley Orgánica 4/2015 de Seguridad Ciudadana. Más allá de las multas, es una obligación legal del titular del alojamiento. <a href="/blog/sanciones-rd-933-2021/" class="text-primary-600 hover:underline">Consulta las cuantías y supuestos</a>.',
      },
      { q: '¿Qué documentos acepta el formulario de check-in?', a: 'DNI, NIE, pasaporte, certificado de registro UE, documento de identidad extranjero y documento de viaje. DNI y NIE requieren segundo apellido y número de soporte.' },
      { q: '¿Qué pasa si caduca mi suscripción?', a: 'Los huéspedes siempre pueden completar sus datos. El check-in nunca se bloquea por el estado de tu plan.' },
      { q: '¿Puedo gestionar múltiples propiedades?', a: 'Sí. Desde una misma cuenta de agencia puedes gestionar todas tus propiedades, cada una con sus propias credenciales SES.' },
      { q: '¿En cuántos idiomas funciona el check-in?', a: 'El formulario de check-in para huéspedes está disponible en 9 idiomas: español, inglés, francés, alemán, italiano, portugués, gallego, euskera y catalán.' },
      {
        q: '¿Cuánto tardo en tenerlo operativo?',
        a: 'Crear la cuenta y añadir un alojamiento lleva unos minutos. Para enviar al Ministerio necesitas tus credenciales SES (usuario, contraseña y código de arrendador) — puedes configurarlas más tarde sin perder el trabajo hecho.',
        html: 'Crear la cuenta y añadir un alojamiento lleva unos minutos. Para enviar al Ministerio necesitas tus credenciales SES (usuario, contraseña y código de arrendador) — puedes configurarlas más tarde sin perder el trabajo hecho. <a href="/blog/credenciales-ses-hospedajes/" class="text-primary-600 hover:underline">Cómo obtener las credenciales paso a paso</a>.',
      },
    ],
    schema: {
      softwareDescription: 'Software para cumplir con el Real Decreto 933/2021. Registro digital de viajeros, envío automático de partes de hospedaje a SES.HOSPEDAJES del Ministerio del Interior.',
      featureList: [
        'Check-in digital para huéspedes en 9 idiomas',
        'Envío automático a SES.HOSPEDAJES',
        'Importación iCal (Booking.com, Airbnb, VRBO, Expedia, Tripadvisor, Google Calendar)',
        'Exportación PDF y CSV',
        'Equipo con roles y permisos',
        'Cumplimiento RGPD',
        'Códigos QR para check-in presencial',
        'Firma digital de declaración de veracidad',
        'Registro de auditoría inmutable',
      ],
      priceUnitText: 'alojamiento activo/mes',
      priceDescription: '5 € por alojamiento activo al mes, facturación mensual',
      trialOfferName: 'Prueba gratuita',
      trialOfferDescription: '15 días de prueba, sin tarjeta de crédito',
      proOfferName: 'Plan Pro',
      howToName: 'Cómo enviar los partes de viajeros al Ministerio del Interior',
      howToDescription: 'Cinco pasos para cumplir con el RD 933/2021 usando RegistroViajero.',
    },
  },
  en: {
    meta: {
      title: 'RegistroViajero — Automatic guest registration for Spanish rentals | Royal Decree 933/2021',
      description: 'Software for Royal Decree 933/2021 compliance. Your guests register from their phone. You review and send to SES.HOSPEDAJES in one click. 15-day free trial.',
    },
    hero: {
      pill: 'Royal Decree 933/2021 · Direct submission to SES.HOSPEDAJES',
      title1: 'Automatic guest',
      titleAccent: 'registration',
      subhead: 'Your guests register from their phone. You review and send reports to SES.HOSPEDAJES in one click. No paperwork, no typos, no hassle.',
      ctaPrimary: 'Start free — 15 days',
      ctaSecondary: 'See how it works',
      disclaimer: 'No credit card. Full access during the trial.',
      phoneAlt: 'RegistroViajero control panel',
    },
    spotlights: [
      {
        eyebrow: 'GUEST CHECK-IN',
        title: 'Your guests check themselves in, in their own language',
        body: 'We generate a unique link per guest that you share over email, WhatsApp or any channel you already use. No app, no sign-up, no downloads. They fill in their details, sign on their phone, and the report is ready to file with the Ministry.',
        imageKey: 'checkin',
        imageAlt: 'Guest check-in screen on a mobile device',
        bullets: [
          '9 languages: Spanish, English, French, German, Italian, Portuguese, Galician, Basque and Catalan',
          'Real-time validation for DNI, NIE, passport and EU documents',
          'Digital signature of the truthfulness declaration',
          'Progress saves automatically — guests can pick up where they left off',
        ],
      },
      {
        eyebrow: 'BUILT-IN ASSISTANT',
        title: 'ReVi answers your questions and takes you where you need to be',
        body: 'Ask about Ministry errors, incomplete data or account statistics. ReVi knows your context but never sees your guests\' personal data — only metadata and aggregates.',
        imageKey: 'asistente',
        imageAlt: 'ReVi assistant inside the RegistroViajero app',
        bullets: [
          'Replies in your language, grounded in the help centre',
          'Navigates you to the right screen with one click',
          'Sensitive data redacted before every request',
          'GDPR compliant — we never train models on your data',
        ],
      },
      {
        eyebrow: 'AUDIT LOG',
        title: 'Every change is logged, forever',
        body: 'Every action — adding a guest, editing a field, submitting to the Ministry, receiving a confirmation — is logged with timestamp, actor and context. The trail is immutable: never modified, never deleted. Exactly what you need when an inspection asks what happened, when and who did it.',
        imageKey: 'audit',
        imageAlt: 'Audit timeline for a reservation',
        bullets: [
          'Immutable: rows are never modified or deleted',
          'Distinguishes guest, team and system actions',
          'Visible on every reservation, property and dashboard',
          'Every SES.HOSPEDAJES submission tied to its lote and Ministry response',
        ],
      },
    ],
    tour: {
      id: 'tour',
      title: 'And more on every screen',
      intro: 'Every part of the workflow is designed to cut clicks and prevent errors.',
      cards: [
        {
          imageKey: 'reservas',
          imageAlt: 'Reservations list with source platforms and statuses',
          title: 'Reservations',
          desc: 'Dense list with source platform, status, overbooking warnings and per-guest progress. Filter by date, property and status in one tap.',
        },
        {
          imageKey: 'alojamiento',
          imageAlt: 'Property detail page',
          title: 'Properties',
          desc: 'One page per property with photo, address, SES credentials and all reservations. Edit a property and the data flows through to every pending report.',
        },
      ],
    },
    sections: {
      featuresId: 'features',
      featuresTitle: 'Everything you need to comply',
      featuresIntro: 'From guest data capture to Ministry submission, all in a single platform.',
      howItWorksId: 'how-it-works',
      howItWorksTitle: 'How it works',
      howItWorksIntro: 'Five steps to send guest reports to the Spanish Ministry of the Interior.',
      platformsTitle: 'Import reservations automatically',
      platformsIntro: 'Connect your iCal feeds and reservations sync every 15 minutes.',
      segmentsId: 'who-its-for',
      segmentsTitle: 'Who RegistroViajero is for',
      segmentsIntro: 'Built for any registered accommodation in Spain subject to Royal Decree 933/2021.',
      pricingId: 'pricing',
      pricingTitle: 'Simple, transparent pricing',
      pricingIntro: 'Start with a 15-day free trial. After that, one flat rate per active accommodation.',
      pricingPlan: 'Pro Plan',
      pricingPriceUnit: '/accommodation/mo',
      pricingBillingNote: 'Billed monthly. You pay only for active accommodations. No minimums, no annual commitment.',
      pricingCta: 'Start free — 15 days',
      pricingNoCard: 'No credit card',
      pricingFeatures: [
        'Unlimited guests',
        'Direct submission to SES.HOSPEDAJES',
        'Automatic iCal import',
        'Guest check-in in 9 languages',
        'Team roles and permissions',
        'PDF and CSV export',
        'QR codes for in-person check-in',
        'Immutable audit log',
      ],
      pricingGuaranteeTitle: 'Check-in is never blocked.',
      pricingGuaranteeBody: 'Even if your subscription lapses, your guests can still complete their registration. Only Ministry submission is paused until you reactivate.',
      pricingSanctionsNote: 'A single fine for non-compliance with Royal Decree 933/2021 starts at €601.',
      pricingSanctionsLinkLabel: 'See penalty tiers and scenarios',
      pricingSanctionsHref: '/en/blog/royal-decree-933-2021-penalties/',
      securityTitle: 'Security and compliance',
      securityIntro: 'Your data and your guests\' data, always protected.',
      securityCards: [
        { title: 'Encrypted data', desc: 'Credentials and passwords encrypted at rest' },
        { title: 'GDPR compliant', desc: 'Automatic data retention and deletion' },
        { title: 'Secure connections', desc: 'All traffic over HTTPS' },
        { title: 'Full isolation', desc: 'Each agency\'s data is kept separate' },
      ],
      faqId: 'faq',
      faqTitle: 'Frequently asked questions',
      faqFooterPrefix: 'More questions? Visit the',
      faqFooterLinkLabel: 'Help Center',
      latestPostsTitle: 'From the blog',
      latestPostsIntro: 'Regulations, guides, and updates on guest registration.',
      latestPostsAll: 'See all articles →',
      ctaTitle: 'Start filing guest reports today',
      ctaBody: '15-day free trial. No credit card. Ready in 2 minutes.',
      ctaButton: 'Create free account',
    },
    steps: [
      { num: '1', title: 'Register your accommodations', desc: 'Configure each property with its address, type, and Ministry-issued establishment code.' },
      { num: '2', title: 'Create reservations', desc: 'Manually or via automatic import from Booking.com, Airbnb, VRBO and more through iCal.' },
      { num: '3', title: 'Send the check-in link', desc: 'Each guest gets a unique link. No app, no sign-up, no downloads.' },
      { num: '4', title: 'Review and validate', desc: 'Confirm the data is correct and mark the reservation as validated.' },
      { num: '5', title: 'Submit to the Ministry', desc: 'One click generates and submits the reports to SES.HOSPEDAJES automatically.' },
    ],
    features: [
      { title: 'Digital check-in', desc: 'Unique link per guest. Mobile-first form in 9 languages. Digital signature of the accuracy declaration.', icon: ICON.link },
      { title: 'iCal import', desc: 'Sync reservations every 15 minutes from Booking.com, Airbnb, VRBO, Expedia, Tripadvisor and Google Calendar.', icon: ICON.calendar },
      { title: 'Direct Ministry submission', desc: 'Automatically generate and submit guest reports and lodging reservations to SES.HOSPEDAJES with one click.', icon: ICON.send },
      { title: 'Team and roles', desc: 'Owner, administrator, and member. Each with their own access and permissions.', icon: ICON.team },
      { title: 'GDPR compliant', desc: 'Encrypted data, automatic 3-year retention per regulation, and full deletion on request.', icon: ICON.shield },
      { title: 'Control panel', desc: 'Arrivals calendar, reservation statuses, error alerts, and recent activity at a glance.', icon: ICON.grid },
    ],
    segments: [
      { title: 'Vacation rentals', desc: '100% remote check-in. Guests fill in their details before arrival and you get a validated report ready to submit.' },
      { title: 'Hotels and guesthouses', desc: 'Mobile pre-check-in before guests reach the desk. Less time at the counter, fewer transcription errors.' },
      { title: 'Rural homes and holiday homes', desc: 'Group stays with one link per guest, plus a single group link to share via WhatsApp or email.' },
      { title: 'Property managers and agencies', desc: 'Multiple properties and owners in a single account. Separate SES credentials per owner, roles for your team.' },
    ],
    platforms: PLATFORMS,
    faqs: [
      { q: 'How much does RegistroViajero cost?', a: 'The Pro Plan costs €5 per active accommodation per month, billed monthly. It includes a 15-day free trial with full access, no credit card required. No minimum number of accommodations and no annual commitment. Guest check-in is never blocked by subscription status.' },
      { q: 'How does RegistroViajero differ from a PMS or channel manager?', a: 'A PMS or channel manager handles reservations, calendars, payments, websites, and dozens of other tasks, typically including guest registration as one feature among many. RegistroViajero does just one thing: RD 933/2021 compliance with SES.HOSPEDAJES. If you already have a PMS or don\'t need one, we\'re the simplest and cheapest option for this specific piece of work, starting from a single accommodation and with no minimums.' },
      { q: 'Do my guests need to install anything?', a: 'No. They receive a link that opens in their browser. No app, no sign-up, no downloads.' },
      { q: 'Does it work in Catalonia and the Basque Country?', a: 'Not yet. These regions use their own systems (Mossos d\'Esquadra and Ertzaintza). Integration is in development.' },
      {
        q: 'What happens if I don\'t file the reports?',
        a: 'Non-compliance with Royal Decree 933/2021 can result in administrative fines under Organic Law 4/2015 on Public Safety. Beyond the fines, it\'s a legal obligation for the accommodation owner.',
        html: 'Non-compliance with Royal Decree 933/2021 can result in administrative fines under Organic Law 4/2015 on Public Safety. Beyond the fines, it\'s a legal obligation for the accommodation owner. <a href="/en/blog/royal-decree-933-2021-penalties/" class="text-primary-600 hover:underline">See penalty tiers and scenarios</a>.',
      },
      { q: 'Which documents does the check-in form accept?', a: 'Spanish DNI, NIE, passport, EU registration certificate, foreign national ID, and travel documents. DNI and NIE require a second surname and the support number.' },
      { q: 'What happens if my subscription lapses?', a: 'Guests can always complete their data. Check-in is never blocked by your plan status.' },
      { q: 'Can I manage multiple properties?', a: 'Yes. From a single agency account you can manage all your properties, each with its own SES credentials.' },
      { q: 'How many languages does check-in support?', a: 'The guest check-in form is available in 9 languages: Spanish, English, French, German, Italian, Portuguese, Galician, Basque, and Catalan.' },
      {
        q: 'How long does it take to get up and running?',
        a: 'Creating an account and adding an accommodation takes a few minutes. To submit to the Ministry you need SES credentials (username, password, and lessor code) — you can configure them later without losing any setup.',
        html: 'Creating an account and adding an accommodation takes a few minutes. To submit to the Ministry you need SES credentials (username, password, and lessor code) — you can configure them later without losing any setup. <a href="/en/blog/ses-hospedajes-credentials/" class="text-primary-600 hover:underline">How to obtain credentials step by step</a>.',
      },
    ],
    schema: {
      softwareDescription: 'Software for Royal Decree 933/2021 compliance. Digital guest registration, automatic submission of lodging reports to SES.HOSPEDAJES at the Spanish Ministry of the Interior.',
      featureList: [
        'Digital guest check-in in 9 languages',
        'Automatic submission to SES.HOSPEDAJES',
        'iCal import (Booking.com, Airbnb, VRBO, Expedia, Tripadvisor, Google Calendar)',
        'PDF and CSV export',
        'Team with roles and permissions',
        'GDPR compliant',
        'QR codes for in-person check-in',
        'Digital signature of truthfulness declaration',
        'Immutable audit log',
      ],
      priceUnitText: 'active accommodation/month',
      priceDescription: '€5 per active accommodation per month, billed monthly',
      trialOfferName: 'Free trial',
      trialOfferDescription: '15-day trial, no credit card',
      proOfferName: 'Pro Plan',
      howToName: 'How to submit guest reports to the Spanish Ministry of the Interior',
      howToDescription: 'Five steps to comply with Royal Decree 933/2021 using RegistroViajero.',
    },
  },
}
