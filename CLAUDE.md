# CLAUDE.md

Marketing site for RegistroViajero — published at **registroviajero.com**. Static Astro site, deployed to GitHub Pages.

## Working rules (read first)

- **Stealth commits.** Never include `Co-Authored-By: Claude` or any other Claude/Anthropic signature in commit messages or PR descriptions. Commit as the configured git user, nothing more.
- **Honest claims only.** This is a marketing site, but every factual claim (pricing, trial length, supported platforms, coverage, locales) must match the actual product. Cataluña and País Vasco are **not** supported — do not imply they are. If the app changes, update the landing copy in the same PR.
- **Bilingual site.** Spanish (`es-ES`) at the root (`/`) and US English (`en-US`) under `/en/`. Spanish is the default locale and the authoritative source for legal content — English legal pages are courtesy translations and must carry the reference-translation disclaimer rendered by `ContentPage.astro`. Preserve Spanish domain terms across both locales where they are proper names (`SES.HOSPEDAJES`, `Real Decreto 933/2021`, `DNI`, `NIE`, `Mossos d'Esquadra`, `Ertzaintza`). When adding or editing copy in one locale, mirror the change in the other.
- **Slugs differ per locale on purpose.** Blog posts and most legal pages use a localized slug (`/blog/menores-registro-viajeros/` ↔ `/en/blog/minors-guest-registration/`, `/legal/privacidad/` ↔ `/en/legal/privacy/`). Hreflang/canonical/locale-switcher routing depends on per-locale path mapping — see "i18n + URL plumbing" below. Don't unify slugs to make the wiring simpler; the SEO benefit of localized slugs outweighs the convenience.
- **One intent per change.** No drive-by copy rewrites, no design riffs. If a copy overhaul is worth doing, it earns its own PR.
- **Keep the three surfaces consistent.** Marketing site, help center (`help.registroviajero.com`), and app (`app.registroviajero.com`) must tell the same story about features and limits. Check the main repo's `CLAUDE.md` (`/Users/asur/Code/registroviajero.com/CLAUDE.md`) before claiming a behavior.

## Quick reference

```
bun install                   # Install dependencies
bun dev                       # Astro dev server → http://localhost:4321
bun run build                 # Build → dist/
bun preview                   # Preview the built site
```

Node/runtime: **Bun** (engine pin is Node ≥22.12 for tooling compatibility only). Lock file is `bun.lock`.

## Tech stack

- **Astro 6.1** — static output, zero client JS by default
- **Tailwind CSS v4** via `@tailwindcss/vite` — CSS-first configuration in `src/styles/global.css`
- **@tailwindcss/typography** — `prose` classes used on legal and blog pages
- **@astrojs/sitemap** — generates `sitemap-index.xml` at build time
- **Content collections** — blog posts via `src/content.config.ts`
- **Bun** runtime
- **GitHub Pages** deployment via `.github/workflows/deploy.yml` (push to `main` → Pages). Custom domain `registroviajero.com`.
- **Umami** analytics (cookieless, self-hosted at `analytics.registroviajero.com`) — separate site ID from the help center and the app.

## Structure

```
src/
├── pages/
│   ├── index.astro           # Spanish landing (thin wrapper around <Landing locale="es"/>)
│   ├── 404.astro             # Spanish 404
│   ├── rss.xml.ts            # Spanish RSS feed
│   ├── blog/
│   │   ├── index.astro       # Spanish blog list
│   │   └── [...slug].astro   # Spanish blog post (filters lang==='es')
│   ├── legal/                # Spanish legal pages (authoritative)
│   │   ├── aviso-legal.md
│   │   ├── privacidad.md
│   │   ├── terminos.md
│   │   └── cookies.md
│   └── en/
│       ├── index.astro       # English landing (<Landing locale="en"/>)
│       ├── 404.astro
│       ├── rss.xml.ts        # English RSS
│       ├── blog/
│       │   ├── index.astro
│       │   └── [...slug].astro
│       └── legal/            # English courtesy translations
│           ├── legal-notice.md
│           ├── privacy.md
│           ├── terms.md
│           └── cookies.md
├── content/
│   └── blog/
│       ├── es/*.md           # Spanish posts
│       └── en/*.md           # English translations (translationKey links them)
├── content.config.ts         # blog schema with lang + translationKey
├── i18n/
│   ├── config.ts             # LOCALES, DEFAULT_LOCALE, LOCALE_META (htmlLang + hreflang + ogLocale), SITE_URL/APP_URL/HELP_URL
│   ├── ui.ts                 # Chrome strings + LEGAL_SLUG_FRAGMENT / legalLocalePaths cross-locale legal mapping
│   ├── content.ts            # Landing content per locale (hero/sections/features/faqs/schema)
│   ├── utils.ts              # localizedPath (always trailing slash), buildLocalePaths, getAlternates, formatDate
│   └── blog.ts               # getPostsByLocale, getSlug, findTranslation
├── layouts/
│   ├── Layout.astro          # Base head: canonical/hreflang/OG/JSON-LD; takes localePaths + optional noindex
│   ├── ContentPage.astro     # Legal / static prose; auto-disclaimer for EN; derives legal localePaths
│   └── BlogPost.astro        # Localized article; derives localePaths via findTranslation()
├── components/
│   ├── Nav.astro             # Dict-driven, embeds LocaleSwitch
│   ├── Footer.astro          # Dict-driven
│   ├── Landing.astro         # Shared landing rendered for both locales
│   ├── LocaleSwitch.astro    # ES/EN toggle; persists preferred-locale in localStorage
│   └── LocaleBanner.astro    # First-visit banner if browser language doesn't match (no redirect)
└── styles/
    └── global.css
public/
├── favicon.ico, favicon.svg, logo.svg
├── og-image.png              # 1200×630, used by both locales (no per-locale variant yet)
├── robots.txt
├── llms.txt                  # Bilingual AI-discoverability summary
└── .well-known/
    └── security.txt          # Expires 2027-04-18
astro.config.mjs              # site + trailingSlash:'always' + i18n + sitemap i18n + LOCALE_PAIRS for cross-locale slugs + per-route priority
```

## Configuration conventions

- **`site` is `https://registroviajero.com`.** Sitemap, canonical URLs, and absolute OG URLs depend on it. Do not change without updating the deploy domain.
- **Brand palette lives in `src/styles/global.css`** as `@theme { --color-primary-50…900 }`. Primary-600 (`#2563eb`) is the brand blue — same value used by the app and the help center. Use `text-primary-600`, `bg-primary-600`, etc. Do not introduce ad-hoc hex values in components.
- **Cross-site URL constants live in `src/i18n/config.ts`** (`APP_URL`, `HELP_URL`, `SITE_URL`). Import from there instead of redeclaring.
- **Nav and Footer are shared components** (`src/components/Nav.astro`, `Footer.astro`), dict-driven from `src/i18n/ui.ts`. Pages pass `locale` explicitly; components fall back to `getLocaleFromUrl(Astro.url)`. Both use `LocaleSwitch.astro` + `LocaleBanner.astro` for locale UX.
- **Legal pages use `layout: ../../layouts/ContentPage.astro`** (Spanish, two `../`) or `layout: ../../../layouts/ContentPage.astro` (English, three `../`). Markdown frontmatter: `title`, `description`, optional `locale: "en"` to force the courtesy-translation disclaimer.
- **Blog collection schema** (`src/content.config.ts`): `title`, `description`, `date`, `author` (default `"RegistroViajero"`), plus `lang: z.enum(LOCALES)` and `translationKey: string`. `lang` gates the post by locale; `translationKey` links a Spanish post to its English counterpart so hreflang alternates can be emitted.
- **Blog folder structure.** `src/content/blog/es/*.md` and `src/content/blog/en/*.md`. The file stem is the URL slug per locale — they do NOT need to match across languages. Example: `es/sanciones-rd-933-2021.md` → `/blog/sanciones-rd-933-2021/`; `en/royal-decree-933-2021-penalties.md` → `/en/blog/royal-decree-933-2021-penalties/`. Both share `translationKey: "penalties"`. **When you add a post whose slug differs across locales, also add the cross-locale pair to `LOCALE_PAIRS` in `astro.config.mjs`** so the sitemap emits `xhtml:link` alternates (the integration's auto-pairing only matches identical paths).
- **Landing content** lives in `src/i18n/content.ts` as `LANDING: Record<Locale, LandingContent>`. The Spanish and English landing pages are thin wrappers that render `<Landing locale="es"/>` / `<Landing locale="en"/>`. Edit `content.ts` (not the pages) when changing landing copy.
- **Locale URLs.** Spanish is the default and lives at the root (`/`, `/blog/`, `/legal/privacidad/`, `/rss.xml`). English is prefixed with `/en/` (`/en/`, `/en/blog/`, `/en/legal/privacy/`, `/en/rss.xml`). `prefixDefaultLocale: false` in `astro.config.mjs` — never enable it without redirecting the indexed Spanish URLs.

## i18n + URL plumbing

The earliest GSC reports for the site exposed two SEO bugs that all shipped at once: canonicals without trailing slashes (mismatched against the directory-style files Astro emits) and hreflang alternates pointing at non-existent slugs (the wrong-locale slug under `/en/` or under `/`). Both are fixed; the conventions below are the contract that keeps them fixed.

- **Trailing slashes everywhere.** `astro.config.mjs` sets `trailingSlash: 'always'` and `build.format: 'directory'`. Every internal `<a href>` to a route — in templates, in markdown content, in `src/i18n/content.ts`, in `src/i18n/ui.ts` — must end with `/`. Files (`/rss.xml`, `/favicon.ico`, anchors-only `/#section`) keep their actual path. `localizedPath()` in `src/i18n/utils.ts` always returns a trailing slash; if you need a URL, build it through that helper rather than concatenating strings.
- **`hreflang` is separate from `htmlLang`.** `LOCALE_META[locale].htmlLang` (`'es'` / `'en'`) drives `<html lang>` only. `LOCALE_META[locale].hreflang` (`'es-ES'` / `'en-US'`) drives every `<link rel="alternate" hreflang>`, every `og:locale`, and matches the `i18n.locales` keys in the sitemap config. They are intentionally different — short codes for the document language, BCP47 region tags for SEO targeting. Don't conflate them.
- **`localePaths: Record<Locale, string>` is the cross-locale source of truth.** When the slug differs across locales (every blog post and most legal pages), the page must compute a `LocalePaths` map and pass it to `Layout`, `Nav`, and `LocaleBanner`. That map drives:
  - `<link rel="canonical">` and `<link rel="alternate" hreflang>` in `Layout.astro`
  - `og:url` and `og:locale:alternate`
  - the `<a>` href on the locale switcher (`LocaleSwitch.astro`) — without this the switcher 404s on the wrong-locale slug
  - the "view in your language" banner CTA (`LocaleBanner.astro`)
  - the `xhtml:link` alternates emitted by the sitemap's `serialize` hook (via `LOCALE_PAIRS`)
  - `BlogPost.astro` derives `localePaths` from `findTranslation(translationKey, otherLocale)`.
  - `ContentPage.astro` derives it via `legalKeyFromSlug` + `legalLocalePaths()` from `src/i18n/ui.ts`.
  - `Landing.astro` and any future page where the slug is identical across locales can omit the prop — `buildLocalePaths(logicalPath)` handles the symmetric case.
- **Sitemap pairing.** `@astrojs/sitemap`'s `i18n` option auto-pairs alternates only when the URL path is identical across locales (e.g. `/blog/` ↔ `/en/blog/`, or `/legal/cookies/` ↔ `/en/legal/cookies/`). Locale-paired pages with differing slugs are wired manually via `LOCALE_PAIRS` + the `serialize` hook in `astro.config.mjs`. **Add the pair when you add the post.** If you skip it, the sitemap and the HTML hreflang will disagree.
- **`noindex` Layout prop.** Pages that must not be indexed (404s today; thank-you / unsubscribe / preview pages tomorrow) pass `noindex` to `Layout.astro`. That emits `<meta name="robots" content="noindex,follow">` and skips hreflang alternates entirely so we never advertise URLs we don't want crawled.

## SEO + meta

- **`Layout.astro` centralizes** `<title>`, description, canonical, hreflang alternates (including `x-default` → Spanish), OG locale + alternates, Twitter card, theme-color `#2563eb`, favicon, Umami, RSS `<link rel="alternate">` (per locale), preconnect/dns-prefetch for analytics, and the sitewide `Organization` + `WebSite` JSON-LD. Props: `locale`, `logicalPath`, optional `localePaths` (per-locale URL map; required when the slug differs across locales — see "i18n + URL plumbing"), optional `availableLocales` so pages with no counterpart (e.g. Spanish-only post) emit only one hreflang, optional `noindex`.
- **Title pattern:** `{Page} — RegistroViajero`. Each page passes its own localized `title`.
- **`type="article"` + `publishedDate`** is only for blog posts (handled by `BlogPost.astro`).
- **Keywords meta** is locale-aware — Spanish keyword set at the root, English keyword set under `/en/`. Edit in `Layout.astro` when product scope changes.
- **JSON-LD map** (avoid duplicates on the same page):
  - `Layout.astro` → `Organization`, `WebSite` (site-wide, localized `inLanguage`).
  - `Landing.astro` → `SoftwareApplication` (with `offers` array), `FAQPage`, and `HowTo` — all fed from `LANDING[locale]`. Per-locale `inLanguage`.
  - `BlogPost.astro` → `BlogPosting` + `BreadcrumbList` with the post's `inLanguage`.
- **FAQPage schema must mirror visible FAQ.** Google penalizes mismatches. The `faqs` array in `src/i18n/content.ts` is the single source per locale — it renders both the `<details>` list and the JSON-LD. Edit one, both change.
- **Sitemap** uses `@astrojs/sitemap` with its `i18n` option (`defaultLocale: 'es'`, `locales: { es: 'es-ES', en: 'en-US' }`) to emit `xhtml:link` alternates for pages whose path is identical across locales. For pages with locale-specific slugs the `serialize` hook injects the alternates manually from `LOCALE_PAIRS` — see "i18n + URL plumbing". Per-route priority/changefreq is applied in the same hook after stripping the `/en/` prefix (home 1.0 weekly, `/blog` 0.8 weekly, `/blog/*` 0.7 monthly, `/legal/*` 0.3 yearly, `/404` excluded).
- **RSS per locale.** `src/pages/rss.xml.ts` (Spanish, at `/rss.xml`) and `src/pages/en/rss.xml.ts` (English, at `/en/rss.xml`). Both read from the shared blog collection and filter by `lang`.
- **`llms.txt`** at the root is an AI-discoverability summary (product overview + pricing + feature links). Keep it short and factual; update alongside major product changes.
- **`robots.txt`** allows all crawlers. AI bots (`GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`) are explicitly allowed — marketing content is intentionally public. If policy changes, update here first.
- **`security.txt`** lives at `/.well-known/security.txt`. `Expires` is 2027-04-18 — renew before that date.

## Commits, branches, deploy

- Branch names: `feat/…`, `fix/…`, `content/…`, `docs/…`, all kebab-case.
- Conventional commits (`feat:`, `fix:`, `content:`, `chore:`). Never add co-author lines.
- Push to `main` triggers GitHub Actions → GitHub Pages. No preview environment. Failing builds = broken production — fix forward.
- Do **not** commit `dist/` or `.astro/` — already gitignored.

## Content rules

### Audience and tone

- Target reader: **agency owner** in Spain evaluating the product, or a decision-maker for a small accommodation business. Not developers, not guests.
- Confident but honest. Avoid buzzwords ("revolutionary", "cutting-edge"). Prefer concrete numbers and plain Spanish.
- Marketing tone is OK on the landing page. Blog posts are closer to explanatory writing. Legal pages are formal and reference-heavy.
- Do not use emojis in body copy.
- Prefer short paragraphs (2–4 lines). Numbered steps for procedures. Tables only when they add real information density (legal bases, role matrices).

### Factual accuracy (verify against the app before editing)

These must match the app + help center:

- **Pricing:** 5 €/alojamiento activo/mes, **no minimum**. **15 días** de prueba gratis (default 2 seats during trial — not a paid-plan minimum). No credit card for trial. Polar is the billing provider. Internally the billing system uses "seat/puesto"; on the marketing site we say "alojamiento activo" for clarity. Keep terminology aligned with the help center when editing.
- **Check-in is never blocked** by subscription state.
- **Guest locales: 9.** `es, en, fr, de, it, pt, gl, eu, ca`.
- **Geographic coverage:** SES.HOSPEDAJES (Ministerio del Interior). **Not** Cataluña (Mossos d'Esquadra) or País Vasco (Ertzaintza) — label this as "en desarrollo" / "próximamente", never as supported.
- **iCal platforms:** Booking.com, Airbnb, VRBO, Expedia, Tripadvisor, Google Calendar, plus generic `.ics`. Sync every 15 minutes.
- **Retention:** 3 años per RD 933/2021. Eliminación automática después.
- **Security claims (stated in `privacidad.md`):** argon2id (passwords), AES-256-GCM (SES credentials), HTTPS/TLS in transit, S3 privado, multi-tenancy con aislamiento por agencia, registro de auditoría inmutable.
- **Roles:** Propietario / Administrador / Miembro (billing accessible only to Propietario).
- **Legal email:** `legal@registroviajero.com` for RGPD / data subject requests.
- **Hosting provider (disclosed in `privacidad.md`):** Contabo GmbH (Alemania, dentro del EEE). Update if this changes.
- **Payment provider:** Polar (polar.sh). Credit card data is never stored by RegistroViajero.

### Legal pages

- **Spanish is authoritative.** English legal pages under `src/pages/en/legal/` are courtesy translations. `ContentPage.astro` automatically renders a reference-translation disclaimer when `locale === 'en'` (pulled from `UI.en.legalDisclaimer` in `src/i18n/ui.ts`). Do not remove the disclaimer; do not claim the English version is legally binding.
- **Placeholder titular name.** `aviso-legal.md` / `privacidad.md` (Spanish) and `legal-notice.md` / `privacy.md` (English) contain `<!-- TODO: nombre completo -->`. Do **not** silently remove these TODOs — the legal name must be filled before a real launch. Keep both locales in sync.
- **Last-updated line.** Legal pages end with `*Última actualización: {mes año}*` (ES) or `*Last updated: {Month Year}*` (EN). Update on substantive changes in both locales — never edit one without the other.
- **RGPD/GDPR language must stay accurate.** Do not rewrite legal basis (GDPR art. 6.1.b / 6.1.c / 6.1.f), recipients (Ministry of the Interior, Polar, Contabo), or retention periods without checking with someone legally responsible. When in doubt, ask.
- **LSSI-CE art. 10 data** is mandatory in `aviso-legal.md` (ES). The English `legal-notice.md` mirrors those fields.

### Blog

- Frontmatter required: `title`, `description`, `date` (ISO). `author` defaults to `"RegistroViajero"`.
- First paragraph is the lead — it sets the SEO description if we don't provide one, and it's what readers see in the list. Make it count.
- Use H2/H3 for structure. No H1 inside the body — the layout renders `title` as H1.
- Absolute links for app/help: `https://app.registroviajero.com/register`, `https://help.registroviajero.com`. Root-relative links for internal: `/blog/…`, `/legal/…`, `/#precios`.
- **Reading time** is computed in `src/pages/blog/[...slug].astro` from `post.body.split(/\s+/)` / 200 wpm and passed as a prop to `BlogPost.astro`. Do not hardcode it in frontmatter.
- **Breadcrumbs** render automatically in `BlogPost.astro` (visible trail + `BreadcrumbList` JSON-LD) — don't add them inside the post body.
- End with a CTA where natural. The layout already appends a CTA section for blog posts — don't duplicate it at the bottom of the body.
- Dates in the body: `abril 2026` style. Dates in frontmatter: ISO `YYYY-MM-DD`.
- **Cross-link between posts.** New posts should link to 2–3 related posts where the user would naturally want more depth. Internal linking is how SEO traffic compounds.
- **Cover image** is optional but strongly preferred. Frontmatter fields `cover` (root-relative path under `public/`, e.g. `/blog/<slug>.webp` — always WebP, never PNG) and `coverAlt` (required when `cover` is set; written in the post's locale). When set, the cover renders as the post hero and overrides the site-wide `og:image` / `twitter:image` / `BlogPosting` JSON-LD `image`. Style and batch-generation protocol are pinned in [`docs/cover-style.md`](./docs/cover-style.md) — follow that recipe so the blog index stays visually coherent over time. Don't freestyle cover styles per post.

### Landing page (`index.astro`)

- The landing copy is in hardcoded Astro arrays (`steps`, `features`, `platforms`, `segments`, `faqs`) at the top of the file. Edit there, not by pasting HTML into the template.
- The hero headline is split for the brand-blue accent — keep the `<span class="text-primary-600">` intact when editing copy.
- **FAQ visible ↔ schema mirror.** The `faqs` array renders both the visible `<details>` list and the `FAQPage` JSON-LD. Mismatched content triggers a Google policy violation — always edit both implicitly by editing the single array.
- **"Desde el blog" section** is fed by `await getCollection('blog')` sorted by date desc, capped to the 3 most recent. It updates automatically as new posts land.
- FAQs on the landing should match the canonical answers in the help center's `faq.md`. If the story diverges, fix the landing to match help, not the other way round.

### Images and assets

- **All raster assets are WebP.** Never commit PNG or JPEG. WebP is universally supported and runs 50-85% smaller. Use `cwebp -lossless -mt` for flat illustrations / line art / logos exported as raster, and `cwebp -q 85 -mt` for photographic / complex content (mockups, hero photos). Convert before committing — `for f in *.png; do cwebp -q 85 -mt -quiet "$f" -o "${f%.png}.webp" && rm "$f"; done` is the batch one-liner. SVG stays SVG (it's already vector).
- Drop static assets into `public/`, reference as root-relative (`/logo.svg`, `/og-image.webp`).
- `og-image.webp` is 1200×630. If you replace it, keep the dimensions or update every layout that references it.
- Logo is SVG. If you change the logo, test it at the sizes used (`h-8` in nav, `h-8 brightness-0 invert opacity-80` in footer).
- **Blog cover images** live at `public/blog/<slug>.webp`, dimensions 1200×630, generated via the recipe in [`docs/cover-style.md`](./docs/cover-style.md). Style is architectural-blueprint (white linework on deep navy with cream + terracotta accents). Always batch-generate following the seed-anchor protocol in that doc — drift across sessions is the enemy of brand coherence. Wire each cover into the post via `cover:` + `coverAlt:` frontmatter (see Blog section above). Use `cwebp -lossless -mt` since the style is flat-vector.
- **Mockup images** (iPhone-framed product screenshots used in `Landing.astro` spotlights and tour) live at `public/mockups/<feature>.webp`. Use `cwebp -q 85 -mt` (lossy is fine — they are continuous-tone screenshots, lossless gives no perceptible benefit and 5x the file size). Re-shoot when the underlying UI changes; the seed in the main app repo (`src/db/seed.ts`) is curated to produce shoot-ready data.
- **Platform logos** (`public/platforms/<slug>.svg`) are mark-only SVGs used in the "Importa reservas" row on the landing. Sources: simple-icons.org (CC0) for Airbnb, Booking, Expedia, Tripadvisor, Google Calendar; Vrbo V-mark extracted from vrbo.com's public header (kept in sync with the app's `frontend/src/components/PlatformIcon.vue`).
- Do not inline base64 images in markdown or Astro templates.

## Things not to do

- Don't introduce React, Vue, or Svelte components unless a page genuinely needs interactivity. Astro output should remain HTML + CSS with no JS where possible.
- Don't introduce additional analytics or tracking scripts. Umami is intentionally the only one.
- Don't add cookie banners or consent UI — we deliberately avoid cookie-based tracking (`privacidad.md` claims this; the claim must remain true).
- Don't hardcode URLs to `app.registroviajero.com` or `help.registroviajero.com` throughout templates. Use the `APP_URL` / `HELP_URL` local constants.
- Don't change `site` in `astro.config.mjs` or the canonical domain without updating every place the URL is hardcoded (Layout, OG, robots.txt, sitemap config).
- Don't introduce a third locale without updating `LOCALES`, `LOCALE_META`, `LANDING`, `UI`, and every page mirror under `src/pages/`. Adding a locale is a full sweep, not a drive-by.
- Don't delete a legal section ("Plazo de conservación", "Base legal", "Derechos del interesado", etc.) — these are compliance-mandated.
- Don't write internal URLs without a trailing slash (in templates, markdown, JSON-LD, or i18n strings). `trailingSlash: 'always'` is non-negotiable — links without it cause canonical/sitemap drift and competing URL variants in Google's index.
- Don't add a blog post or legal page with locale-specific slugs without wiring it through both `findTranslation`/`legalLocalePaths` (HTML hreflang) **and** `LOCALE_PAIRS` in `astro.config.mjs` (sitemap hreflang). Skipping either side means Google sees inconsistent alternate signals.
