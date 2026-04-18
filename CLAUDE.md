# CLAUDE.md

Marketing site for RegistroViajero — published at **registroviajero.com**. Static Astro site, deployed to GitHub Pages.

## Working rules (read first)

- **Stealth commits.** Never include `Co-Authored-By: Claude` or any other Claude/Anthropic signature in commit messages or PR descriptions. Commit as the configured git user, nothing more.
- **Honest claims only.** This is a marketing site, but every factual claim (pricing, trial length, supported platforms, coverage, locales) must match the actual product. Cataluña and País Vasco are **not** supported — do not imply they are. If the app changes, update the landing copy in the same PR.
- **Spanish only.** All published content is in `es-ES`. Preserve Spanish domain terms (`parte de viajeros`, `reserva de hospedaje`, `SES.HOSPEDAJES`, `Real Decreto 933/2021`).
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
│   ├── index.astro           # Landing (hero, features, segments, pricing, FAQ, latest posts)
│   ├── 404.astro             # Branded 404 with nav + footer
│   ├── rss.xml.ts            # RSS 2.0 endpoint — hand-written, no extra dep
│   ├── blog/
│   │   ├── index.astro       # Blog list
│   │   └── [...slug].astro   # Dynamic route, computes readingTime from post.body
│   └── legal/
│       ├── aviso-legal.md    # layout: ContentPage
│       ├── privacidad.md
│       ├── terminos.md
│       └── cookies.md
├── content/
│   └── blog/*.md             # Blog collection (schema in content.config.ts)
├── content.config.ts         # defineCollection({ blog }) — title/description/date/author
├── layouts/
│   ├── Layout.astro          # Base: head, meta, OG, Organization + WebSite JSON-LD, Umami
│   ├── ContentPage.astro     # Legal / static prose pages with nav + footer
│   └── BlogPost.astro        # Blog article with BlogPosting + BreadcrumbList JSON-LD + CTA
├── components/               # Empty for now; add islands only when needed
└── styles/
    └── global.css            # Tailwind import + @theme tokens (primary-*)
public/
├── favicon.ico, favicon.svg, logo.svg
├── og-image.png              # 1200×630, referenced by Layout
├── robots.txt                # Allow all + explicit AI bot allowlist + sitemap hint
├── llms.txt                  # AI discoverability summary (product + links)
└── .well-known/
    └── security.txt          # security@registroviajero.com, expires 2027-04-18
astro.config.mjs              # site + sitemap with per-route priority/changefreq
```

## Configuration conventions

- **`site` is `https://registroviajero.com`.** Sitemap, canonical URLs, and absolute OG URLs depend on it. Do not change without updating the deploy domain.
- **Brand palette lives in `src/styles/global.css`** as `@theme { --color-primary-50…900 }`. Primary-600 (`#2563eb`) is the brand blue — same value used by the app and the help center. Use `text-primary-600`, `bg-primary-600`, etc. Do not introduce ad-hoc hex values in components.
- **Cross-site URL constants.** Layouts declare `APP_URL = 'https://app.registroviajero.com'` and `HELP_URL = 'https://help.registroviajero.com'` locally. When adding a page that links to app/help, re-declare these constants at the top of the Astro file rather than hardcoding the URL inline.
- **Nav and footer are duplicated** across `index.astro`, `blog/index.astro`, `layouts/ContentPage.astro`, `layouts/BlogPost.astro`. Any change to links, labels, or structure must be applied to **all four**. If this duplication grows painful, extract a component — don't let them drift.
- **Legal pages use `layout: ../../layouts/ContentPage.astro`** in frontmatter. They're markdown with `title` and `description`. Do not convert to `.astro` unless you need interactivity.
- **Blog collection schema** (`src/content.config.ts`): `title: string`, `description: string`, `date: z.coerce.date()`, `author: string (default "RegistroViajero")`. Keep the schema strict — validation failures break the build.
- **Blog post id = slug.** `src/content/blog/foo.md` → `/blog/foo`. File name is the permalink — be deliberate, never rename without a redirect plan.

## SEO + meta

- **`Layout.astro` centralizes** `<title>`, description, canonical, OG, Twitter card, theme-color `#2563eb`, favicon, Umami, RSS `<link rel="alternate">`, preconnect/dns-prefetch for analytics, and the sitewide `Organization` + `WebSite` JSON-LD.
- **Title pattern:** `{Page} — RegistroViajero`. Layout doesn't enforce it — each page passes its own `title` prop.
- **`type="article"` + `publishedDate`** is only for blog posts (handled by `BlogPost.astro`).
- **Keywords meta** is broad and intentional: `registro viajeros, parte de viajeros, reserva hospedaje, SES hospedajes, Real Decreto 933/2021, RD 933, alojamiento turístico, check-in online, software hospedaje, envío partes ministerio`. Edit only when the product scope changes.
- **JSON-LD map** (avoid duplicates on the same page):
  - `Layout.astro` → `Organization`, `WebSite` (site-wide).
  - `index.astro` → `SoftwareApplication` with `offers` array (trial + paid) and `FAQPage` mirroring the visible FAQ list.
  - `BlogPost.astro` → `BlogPosting` + `BreadcrumbList`.
- **FAQPage schema must mirror visible FAQ.** Google penalizes mismatches. The `faqs` array at the top of `index.astro` is the single source — it renders both the `<details>` list and the JSON-LD. If you edit one, edit the other.
- **Sitemap** is generated by `@astrojs/sitemap` with per-route priority/changefreq set in `astro.config.mjs` (home 1.0 weekly, `/blog` 0.8 weekly, `/blog/*` 0.7 monthly, `/legal/*` 0.3 yearly, `/404` excluded). Don't set these on each page — keep the rule centralized.
- **RSS** is served from `src/pages/rss.xml.ts` — hand-written XML endpoint, no new dep. It reads the `blog` collection sorted by date desc. If you add a new post, it appears automatically.
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

- **Pricing:** 5 €/puesto/mes, minimum 2 puestos. **15 días** de prueba gratis. No credit card for trial. Polar is the billing provider.
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

- **Placeholder titular name.** `aviso-legal.md` and `privacidad.md` currently contain `<!-- TODO: nombre completo -->`. Do **not** silently remove these TODOs — the legal name must be filled before a real launch. If you edit those pages, either fill the name (when authorized) or leave the TODO intact.
- **Last-updated line.** Legal pages end with `*Última actualización: {mes año}*`. Update this line whenever the substantive content changes, not for typo fixes.
- **RGPD language must stay accurate.** Do not rewrite legal basis (RGPD art. 6.1.b / 6.1.c / 6.1.f), recipients (Ministerio del Interior, Polar, Contabo), or retention periods without checking with someone legally responsible. When in doubt, ask.
- **LSSI-CE art. 10 data** is mandatory in `aviso-legal.md`. If you remove a field, have a reason.

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

### Landing page (`index.astro`)

- The landing copy is in hardcoded Astro arrays (`steps`, `features`, `platforms`, `segments`, `faqs`) at the top of the file. Edit there, not by pasting HTML into the template.
- The hero headline is split for the brand-blue accent — keep the `<span class="text-primary-600">` intact when editing copy.
- **FAQ visible ↔ schema mirror.** The `faqs` array renders both the visible `<details>` list and the `FAQPage` JSON-LD. Mismatched content triggers a Google policy violation — always edit both implicitly by editing the single array.
- **"Desde el blog" section** is fed by `await getCollection('blog')` sorted by date desc, capped to the 3 most recent. It updates automatically as new posts land.
- FAQs on the landing should match the canonical answers in the help center's `faq.md`. If the story diverges, fix the landing to match help, not the other way round.

### Images and assets

- Drop static assets into `public/`, reference as root-relative (`/logo.svg`, `/og-image.png`).
- `og-image.png` is 1200×630. If you replace it, keep the dimensions or update every layout that references it.
- Logo is SVG. If you change the logo, test it at the sizes used (`h-8` in nav, `h-8 brightness-0 invert opacity-80` in footer).
- Do not inline base64 images in markdown or Astro templates.

## Things not to do

- Don't introduce React, Vue, or Svelte components unless a page genuinely needs interactivity. Astro output should remain HTML + CSS with no JS where possible.
- Don't introduce additional analytics or tracking scripts. Umami is intentionally the only one.
- Don't add cookie banners or consent UI — we deliberately avoid cookie-based tracking (`privacidad.md` claims this; the claim must remain true).
- Don't hardcode URLs to `app.registroviajero.com` or `help.registroviajero.com` throughout templates. Use the `APP_URL` / `HELP_URL` local constants.
- Don't change `site` in `astro.config.mjs` or the canonical domain without updating every place the URL is hardcoded (Layout, OG, robots.txt, sitemap config).
- Don't translate content to English or add another locale. This site is `es-ES` only.
- Don't delete a legal section ("Plazo de conservación", "Base legal", "Derechos del interesado", etc.) — these are compliance-mandated.
