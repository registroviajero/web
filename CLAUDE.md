# CLAUDE.md

Marketing site for RegistroViajero — published at **registroviajero.com**. Static Astro site, deployed to GitHub Pages.

## Working rules (read first)

- **Stealth commits.** Never include `Co-Authored-By: Claude` or any other Claude/Anthropic signature in commit messages or PR descriptions.
- **Honest claims only.** Every factual claim (pricing, trial length, supported platforms, geographic coverage, locales) must match the actual product. Cataluña and País Vasco are **not** supported — do not imply they are. If the app changes, update the landing copy in the same PR.
- **Bilingual site.** Spanish (`es-ES`) at the root (`/`) and US English (`en-US`) under `/en/`. Spanish is the default locale and the authoritative source for legal content — English legal pages are courtesy translations and must carry the reference-translation disclaimer via `ContentPage.astro`. Preserve Spanish domain terms across both locales where they are proper names (`SES.HOSPEDAJES`, `Real Decreto 933/2021`, `DNI`, `NIE`, `Mossos d'Esquadra`, `Ertzaintza`). Mirror all copy changes in both locales.
- **Slugs differ per locale on purpose.** Blog posts and most legal pages use localized slugs (`/blog/menores-registro-viajeros/` ↔ `/en/blog/minors-guest-registration/`, `/legal/privacidad/` ↔ `/en/legal/privacy/`). The SEO benefit outweighs the wiring complexity. Don't unify slugs.
- **One intent per change.** No drive-by copy rewrites or design riffs. Separate PR for every meaningful change.
- **Keep the three surfaces consistent.** Marketing site, help center (`help.registroviajero.com`), and app (`app.registroviajero.com`) must agree on features and limits. Check the main repo's `CLAUDE.md` before claiming new behavior.

## Quick reference

```
bun install                   # Install dependencies
bun dev                       # Astro dev server → http://localhost:4321
bun run build                 # Build → dist/
bun preview                   # Preview the built site
```

Node/runtime: **Bun** (engine pin Node ≥22.12 for tooling compatibility only). Lock file is `bun.lock`.

## Tech stack

- **Astro 6.1** — static output, zero client JS by default
- **Tailwind CSS v4** via `@tailwindcss/vite` — CSS-first configuration in `src/styles/global.css`
- **@tailwindcss/typography** — `prose` classes on legal and blog pages
- **@astrojs/sitemap** — generates `sitemap-index.xml` at build time
- **Content collections** — blog posts via `src/content.config.ts`
- **GitHub Pages** deployment via `.github/workflows/deploy.yml` (push to `main` → Pages). Custom domain `registroviajero.com`.
- **Umami** analytics (cookieless, self-hosted at `analytics.registroviajero.com`) — separate site ID from the help center and the app.

## Structure

```
src/
├── pages/
│   ├── index.astro           # Spanish landing (thin wrapper, <Landing locale="es"/>)
│   ├── 404.astro             # Spanish 404
│   ├── rss.xml.ts            # Spanish RSS feed
│   ├── blog/
│   │   ├── [...page].astro   # Spanish blog list (paginated, 6 posts/page; page 1 at /blog/)
│   │   └── [slug].astro      # Spanish blog post (named param > rest param for routing)
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
│       │   ├── [...page].astro   # English blog list (paginated, 6 posts/page; page 1 at /en/blog/)
│       │   └── [slug].astro      # English blog post
│       └── legal/            # English courtesy translations
│           ├── legal-notice.md
│           ├── privacy.md
│           ├── terms.md
│           └── cookies.md
├── content/
│   └── blog/
│       ├── es/*.md           # Spanish posts
│       └── en/*.md           # English translations (linked via translationKey)
├── content.config.ts         # Blog schema: title, description, date, author, lang, translationKey, cover, coverAlt
├── i18n/
│   ├── config.ts             # LOCALES, DEFAULT_LOCALE, LOCALE_META, SITE_URL/APP_URL/HELP_URL
│   ├── ui.ts                 # All chrome strings + LEGAL_SLUG_FRAGMENT + legalLocalePaths
│   ├── content.ts            # Landing content per locale (hero, spotlights, features, FAQ, schema)
│   ├── utils.ts              # localizedPath, buildLocalePaths, getAlternates, formatDate
│   ├── blog.ts               # getPostsByLocale, getSlug, findTranslation, getReadingTime
│   └── rss.ts                # buildRssResponse per locale
├── layouts/
│   ├── Layout.astro          # Head: canonical, hreflang, OG, JSON-LD, pagination links; props: locale, localePaths, noindex, prevUrl, nextUrl
│   ├── ContentPage.astro     # Legal / static prose; auto-disclaimer for EN; derives legal localePaths
│   └── BlogPost.astro        # Localized article with breadcrumbs, cover, CTA; derives localePaths via findTranslation()
├── components/
│   ├── Nav.astro             # Dict-driven nav with mobile menu, embeds LocaleSwitch
│   ├── Footer.astro          # Dict-driven footer with RSS link
│   ├── Landing.astro         # Shared landing rendered for both locales; imports mockups from src/assets/
│   ├── LocaleSwitch.astro    # ES/EN toggle; persists preferred-locale in localStorage
│   └── LocaleBanner.astro    # First-visit banner suggesting browser-language match (no redirect)
├── assets/
│   └── mockups/              # iPhone-framed product screenshots (WebP, imported by Landing.astro)
└── styles/
    └── global.css            # Tailwind v4 @theme + scroll-reveal CSS + prefers-reduced-motion
public/
├── favicon.ico, favicon.svg, logo.svg, apple-touch-icon.png
├── og-image.webp             # 1200×630, site-wide fallback
├── robots.txt, llms.txt
├── platforms/                # SVG brand marks for iCal platforms
├── blog/                     # 800×800 WebP cover images (watercolor editorial style)
└── .well-known/
    └── security.txt          # Expires 2027-04-18
```

## Configuration conventions

- **`site` is `https://registroviajero.com`.** Sitemap, canonical URLs, and absolute OG URLs depend on it. Don't change without updating the deploy domain.
- **Brand palette** in `src/styles/global.css` as `@theme { --color-primary-50…900 }`. Primary-600 (`#2563eb`) is the brand blue — use `text-primary-600`, `bg-primary-600`, etc. No ad-hoc hex values in components.
- **Cross-site URL constants** in `src/i18n/config.ts` (`APP_URL`, `HELP_URL`, `SITE_URL`). Import from there — never redeclare.
- **Nav and Footer** are shared, dict-driven from `src/i18n/ui.ts`. Pages pass `locale` explicitly; components fall back to `getLocaleFromUrl(Astro.url)`. Both embed `LocaleSwitch.astro` + `LocaleBanner.astro`.
- **Legal pages** use frontmatter `layout: ../../layouts/ContentPage.astro` (Spanish) or `layout: ../../../layouts/ContentPage.astro` (English), with `title`, `description`, and optional `locale: "en"` to force the courtesy-translation disclaimer.
- **Blog collection schema** (`src/content.config.ts`): `title`, `description`, `date`, `updated` (optional), `author` (default `"RegistroViajero"`), `lang`, `translationKey`, `cover` (optional, root-relative), `coverAlt` (required when `cover` is set).
- **Blog folder structure.** `src/content/blog/{es,en}/*.md`. File stem is the URL slug per locale — they need not match across languages. Both halves of a pair share the same `translationKey`. **When adding a post with differing slugs, add the pair to `LOCALE_PAIRS` in `astro.config.mjs`** so the sitemap emits cross-locale `xhtml:link` alternates.
- **Blog list is paginated** — 6 posts per page. `src/pages/blog/[...page].astro` and `src/pages/en/blog/[...page].astro` use `getStaticPaths` + `paginate()` with the rest-parameter pattern. Page 1 is at the base URL (`/blog/`, `/en/blog/`), page 2+ at `/blog/2/`, etc. `rel=prev`/`rel=next` are emitted via `Layout`'s `prevUrl`/`nextUrl` props. Individual posts use `[slug].astro` (named param), which takes routing priority over the paginated rest param.
- **Landing content** lives in `src/i18n/content.ts` as `LANDING: Record<Locale, LandingContent>`. The landing pages (`index.astro`, `en/index.astro`) are thin wrappers rendering `<Landing locale={…}/>`. Edit `content.ts` — not the pages.
- **Locale URLs.** Spanish is the default at `/`. English is prefixed `/en/`. `prefixDefaultLocale: false` in `astro.config.mjs` — never enable it without redirecting indexed Spanish URLs.

## i18n + URL plumbing

The following conventions prevent the two SEO bugs this site was built to fix: trailing-slash mismatches and hreflang alternates pointing at non-existent slugs.

- **Trailing slashes everywhere.** `trailingSlash: 'always'`, `build.format: 'directory'`. Every `<a href>` to a route must end with `/`. Files (`/rss.xml`, `/favicon.ico`) and anchor-only links (`/#section`) keep their actual path. Always build URLs through `localizedPath()` in `src/i18n/utils.ts` rather than concatenating strings.
- **`hreflang` ≠ `htmlLang`.** `LOCALE_META[locale].htmlLang` (`es` / `en`) drives `<html lang>` only. `LOCALE_META[locale].hreflang` (`es-ES` / `en-US`) drives all `<link rel="alternate" hreflang>`, `og:locale`, and sitemap `i18n.locales` keys. Short codes for document language, BCP47 region tags for SEO targeting. Don't conflate them.
- **`LocalePaths` is the cross-locale source of truth.** When slugs differ across locales, the page computes a `Record<Locale, string>` and passes it to `Layout`, `Nav`, and `LocaleBanner`. This drives canonical, hreflang `<link>`s, `og:url`/`og:locale:alternate`, locale switcher `<a>` hrefs, banner CTAs, and sitemap `serialize` alternates.
  - `BlogPost.astro` derives it via `findTranslation(translationKey, otherLocale)`.
  - `ContentPage.astro` derives it via `legalKeyFromSlug(slug)` + `legalLocalePaths(key)`.
  - Pages with identical slugs across locales (landing, 404, blog index) omit the prop — `buildLocalePaths(logicalPath)` handles the symmetric case.
- **Sitemap pairing.** `@astrojs/sitemap`'s `i18n` option auto-pairs alternates only when paths are identical. Differing-slug pairs are wired manually via `LOCALE_PAIRS` + the `serialize` hook. **Add the pair when you add the post.** Skipping it means the sitemap and HTML hreflang disagree.
- **`noindex` Layout prop.** Pages not meant for indexing (404, future thank-you/unsubscribe pages) pass `noindex` → emits `<meta name="robots" content="noindex,follow">` and skips all hreflang alternates.

## SEO + meta

- **`Layout.astro` centralizes** title, description, canonical, hreflang alternates (including `x-default` → Spanish), OG locale + alternates, Twitter card, theme-color `#2563eb`, favicon, Umami analytics, per-locale RSS `<link>`, preconnect/dns-prefetch, `Organization` + `WebSite` JSON-LD, and pagination `rel=prev`/`rel=next`.
- **Title pattern:** `{Page} — RegistroViajero` (or `{Page} — RegistroViajero Blog` for posts).
- **`type="article"` + `publishedDate`** only for blog posts (`BlogPost.astro`).
- **Keywords meta** is locale-aware. Edit in `Layout.astro` when product scope changes.
- **JSON-LD map** (no duplicates per page):
  - `Layout.astro` → `Organization`, `WebSite` (site-wide, localized `inLanguage`).
  - `Landing.astro` → `SoftwareApplication` + `FAQPage` + `HowTo` — all from `LANDING[locale]`.
  - `BlogPost.astro` → `BlogPosting` + `BreadcrumbList` with the post's `inLanguage`.
  - Blog index pages → `BreadcrumbList`.
- **FAQPage schema must mirror visible FAQ.** The `faqs` array in `src/i18n/content.ts` is the single source — it renders both the `<details>` list and the JSON-LD. Google penalizes mismatches.
- **Sitemap** priority/changefreq per route: home 1.0 weekly, `/blog` 0.8 weekly, `/blog/*` 0.7 monthly, `/legal/*` 0.3 yearly. Per-post `lastmod` from frontmatter `updated || date`. `/404` excluded from sitemap.
- **RSS per locale.** `/rss.xml` (ES) and `/en/rss.xml` (EN). Both filter blog collection by `lang`.
- **`llms.txt`** at root is an AI-discoverability summary. Keep it factual and in sync with the landing page — when removing a feature claim from the landing, also update `llms.txt`.
- **`robots.txt`** allows all crawlers including AI bots (`GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`).
- **`security.txt`** expires 2027-04-18 — set a calendar reminder.

## Commits, branches, deploy

- Branch names: `feat/…`, `fix/…`, `content/…`, `docs/…` — kebab-case.
- Conventional commits (`feat:`, `fix:`, `content:`, `chore:`). No co-author lines.
- Push to `main` triggers GitHub Actions → GitHub Pages. No preview environment. Fix forward on build failures.
- Don't commit `dist/` or `.astro/` — gitignored.

## Content rules

### Audience and tone

- Target: **agency owner** or small-accommodation decision-maker in Spain. Not developers, not guests.
- Confident but honest. Concrete numbers, plain language. No buzzwords.
- Landing page: marketing tone. Blog: explanatory. Legal: formal, reference-heavy.
- No emojis in body copy. Short paragraphs (2–4 lines). Numbered steps for procedures.

### Factual accuracy (verify against the app)

- **Pricing:** 5 €/alojamiento activo/mes. No minimum. 15 días de prueba gratis. No credit card. Polar (polar.sh) is the billing provider.
- **Check-in never blocked** by subscription state.
- **Guest locales: 9** — `es, en, fr, de, it, pt, gl, eu, ca`.
- **Geographic coverage:** SES.HOSPEDAJES (Ministerio del Interior). Cataluña and País Vasco labeled "en desarrollo"/"próximamente", never as supported.
- **iCal:** Booking.com, Airbnb, VRBO, Expedia, Tripadvisor, Google Calendar, Holidu, plus generic `.ics`. Sync every 15 minutes.
- **Retention:** 3 años per RD 933/2021. Automatic deletion.
- **Security:** argon2id (passwords), AES-256-GCM (SES credentials), HTTPS/TLS, multi-tenancy with per-agency isolation, immutable audit log.
- **Roles:** Propietario / Administrador / Miembro (billing: Propietario only).
- **Legal email:** `legal@registroviajero.com` for RGPD/data subject requests.
- **Hosting:** Contabo GmbH (Germany, EEA). Payment: Polar (no card data stored by us).

### Legal pages

- **Spanish is authoritative.** English legal pages carry the reference-translation disclaimer via `ContentPage.astro` (`UI.en.legalDisclaimer`). Never remove it.
- **Placeholder titular name.** `aviso-legal.md` / `privacidad.md` and their English counterparts contain `<!-- TODO: nombre completo -->`. Keep both locales in sync; fill before launch.
- **Last-updated line.** Legal pages end with `*Última actualización: {mes año}*` (ES) / `*Last updated: {Month Year}*` (EN). Update both locales on substantive changes.
- **RGPD/GDPR language** (legal basis, recipients, retention periods) must stay accurate. Don't rewrite without legal review.
- **LSSI-CE art. 10 data** is mandatory in `aviso-legal.md`. The English `legal-notice.md` mirrors it.

### Blog

- Frontmatter: `title`, `description`, `date` (ISO), `updated` (optional), `author` (default `"RegistroViajero"`), `lang`, `translationKey`, optional `cover` + `coverAlt`.
- First paragraph is the lead — it's the meta description fallback and list card preview. Make it count.
- Structure: H2/H3 only (no H1 — layout renders `title` as H1).
- Links: absolute for app/help, root-relative for internal (`/blog/…`, `/legal/…`, `/#precios`), trailing slash always.
- **Reading time** computed in `[...slug].astro` (word count / 200 wpm), passed to `BlogPost.astro`. Don't hardcode.
- **Breadcrumbs** render automatically via `BlogPost.astro` (visible trail + `BreadcrumbList` JSON-LD).
- **Cross-link** 2–3 related posts in every new article.
- **Cover images:** 800×800 WebP, watercolor-editorial style per [`docs/cover-style.md`](./docs/cover-style.md). Every cover reuses the same Spanish-Mediterranean illustrated world. Follow the seed-anchor protocol — drift across sessions ruins brand coherence.

### Images and assets

- **All raster assets are WebP.** No PNG or JPEG. Use `cwebp -q 85 -mt` for continuous-tone (mockups, photos), `cwebp -lossless -mt` for flat/line-art. SVG stays SVG.
- Static assets: `public/`, root-relative references.
- `og-image.webp`: 1200×630 site-wide fallback.
- **Mockups:** `src/assets/mockups/*.webp`, imported by `Landing.astro`. Astro's `Image` component handles format negotiation and responsive srcset. New mockup → add key to `MockupKey` type, import, add to `mockupMap`.
- No inline base64 images.

## Things not to do

- No React, Vue, or Svelte unless interactivity is required. HTML + CSS by default.
- No additional analytics or tracking. Umami only.
- No cookie banners or consent UI — we claim cookieless tracking in `privacidad.md`; the claim must stay true.
- Don't hardcode cross-site URLs — use `APP_URL` / `HELP_URL`.
- Don't change `site` in `astro.config.mjs` without updating all hardcoded URLs.
- Don't add a third locale without a full sweep of `LOCALES`, `LOCALE_META`, `LANDING`, `UI`, and page mirrors.
- Don't delete legal sections — compliance-mandated.
- No internal URLs without trailing slash (templates, markdown, JSON-LD, i18n strings).
- No blog/legal page with locale-specific slugs without wiring both HTML hreflang (`localePaths`) and sitemap hreflang (`LOCALE_PAIRS`).
