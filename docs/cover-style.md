# Blog cover image recipe

This is the brand-asset recipe for blog post cover images. Treat it as a contract: every cover follows this style, palette, and protocol so the blog index reads as one coherent visual identity over time.

**Style:** editorial illustration in the tradition of contemporary editorial commentary (think *fly.io/blog*, *New Yorker* feature illustrations). Hand-drawn quality with ink linework over loose watercolour washes on warm cream paper. Each cover is a single small Mediterranean-Spanish scene, narrated through gentle whimsy. The recurring world (whitewashed walls, terracotta rooftops, fig trees, cats on wrought-iron balconies, a traveler with a brand-blue suitcase) binds the series; the per-post scenario carries the topic.

**Why this style:** AI image generation is structurally bad at "everything in one drawing style across multiple objects" — that's why the earlier blueprint experiment failed (sub-objects rendered as illustrations instead of staying in linework). Editorial watercolour illustration succeeds because (a) it's a style AI was heavily trained on, (b) every cover has a single coherent scene with no sub-style requirements, and (c) slight inter-cover variation reads as "human illustrator working a series" rather than broken consistency.

**Tooling:** Midjourney v6+ handles this style natively and is the recommended generator. nano banana / Gemini 2.5 Flash Image works but takes more iteration — Gemini is photo-tuned, editorial illustration is its second skill, not its first. Either is acceptable.

**Output:** single 800×800 square WebP per post, saved to `public/blog/<slug>.webp`. The same file is:

- Displayed in-page and in blog list cards as a **square** via CSS (`aspect-square` + `object-cover`) — source is already square so the crop is lossless.
- Used as **og:image** — Facebook, Twitter/X, and LinkedIn all handle 1:1 images; 800×800 is within spec on every platform.

---

## System prompt (paste before every generation)

```
A single editorial illustration for a Spanish hospitality blog cover.
The image should feel like one frame from a recurring illustrated
series — warm, narrative, slightly surreal, made by a human artist
working in mixed media: ink linework over loose watercolour washes
on warm cream paper.

Aesthetic:
- Hand-drawn quality. Visible brush stroke texture. Imperfect line
  work that breathes. Watercolour edges are soft and a touch uneven.
- The composition is a single small scene with one or two characters
  or subjects. Tells a tiny visual story.
- Mediterranean Spanish setting: whitewashed walls catching warm
  afternoon light, terracotta rooftops, narrow stone alleys, wrought
  iron balconies, fig trees, cats, laundry on lines, ceramic tiles.
  This world recurs across all covers — even when the post topic
  isn't directly architectural, the scene happens here.
- Tone is gentle whimsy, never cute or cartoonish. Closer to a New
  Yorker editorial illustration than to a children's book or a
  corporate explainer cartoon.
- Light is warm, low afternoon sun, generous shadows.

Palette — warm and limited:
- Warm cream paper (#fdf8ee) — primary background
- Warm terracotta (#d97757) — rooftops, ceramics, ground
- Sage olive (#8b9d7d) — foliage, foreground accents
- Soft ochre (#f4c8a8) — sunlit walls, light highlights
- Warm dark grey (#4a4a4a) — primary linework, anchors
- Brand blue (#2563eb) — small accents only: the traveler's
  suitcase, the spine of a book, a single ceramic tile. Maximum
  5% of the frame. Never dominant.

Avoid:
- Photographic realism
- Flat vector or geometric digital illustration
- Cartoon-cute styling, Pixar/Disney character design
- Fantasy elements: no dragons, no glowing magic, no anime tropes
- Modern technology rendered literally: no laptop screens, no
  smartphones, no logos. If a digital concept must appear, render
  it as a metaphor (a passport, a letter, a key, a knot of strings)
- Any text, numbers, real signage, or readable annotations
- Watermarks or AI signature marks

Composition:
- 1:1 square format (800×800).
- **The main subject must be fully contained within the central 60%
  of the frame.** The outer 20% on each side is background and
  environment only — no part of the focal element (figure, object,
  tool) should reach the frame edges. A mild crop from any edge
  must not cut the subject.
- Single coherent scene, not a collage.

Subject: [PASTE SUBJECT LINE HERE]
```

The single most important rule: **brand blue (#2563eb) appears as the traveler's suitcase or one small element in every cover.** That recurring blue note is what ties the series to the brand visually. Without it, the covers read as "warm watercolour scenes of Spain"; with it, they read as RegistroViajero covers.

---

## Subject lines per post

Subjects are written as small scenes — one or two characters in the recurring world, doing something narratively connected to the post topic.

| Slug | Subject |
|------|---------|
| `rd-933-2021-registro-viajeros` | A traveler with a small worn suitcase pauses in the doorway of a whitewashed Spanish villa at golden hour. They hold a single rolled paper in one hand. A tabby cat on the wrought-iron balcony above watches them. A few terracotta tiles and a fig tree frame the scene. |
| `sanciones-rd-933-2021` | A small figure walks slowly along a clothesline strung between two terracotta rooftops, holding a long balance pole. Below them, a narrow Spanish street with a few open shutters. Late afternoon, long warm shadows. |
| `credenciales-ses-hospedajes` | A traveler stands at a heavy wooden Spanish door, three large iron keys floating in a gentle arc around their hand. They are studying the keys with mild bemusement. A cat watches from a flowerpot. |
| `ical-sincronizar-booking-airbnb` | A character stands at a small table on a terrace by the sea, sorting three envelopes that float in the air toward a single open suitcase. Mediterranean coastline visible in soft distance. Warm afternoon. |
| `menores-registro-viajeros` | A small family scene: an adult traveler holding a passport and a child traveler holding a tiny paper boat, walking together down a Spanish stone alley. A second child rides on a tiny donkey behind them. |
| `cataluna-pais-vasco-registro-viajeros` | A traveler studies a hand-drawn map at a crossroads where one path winds down to a Mediterranean shore (sunlit) and another rises into pine-covered hills (cooler tones). A small dog waits patiently at their feet. |
| `automatizar-registro-viajeros` | A character stands beside a small handcrank machine on a Spanish patio. Papers feed into one side and emerge stamped, neatly tied with twine, on the other. A few papers escape and drift on the breeze. |
| `inteligencia-artificial-registro-viajeros` | A traveler sits on a stone bench in a Spanish plaza, a small bird perched on their shoulder whispering into their ear. The traveler holds an open notebook. Late afternoon, warm shadows from a cypress tree. |
| `bienvenido-a-registroviajero` | A traveler steps through the arched entrance of a whitewashed Spanish town, suitcase at their side, pausing to look at the narrow streets and terracotta rooftops ahead. Warm golden afternoon light spills through the archway. A cat sits on a nearby step. |
| `welcome-to-registroviajero` | Same scene as `bienvenido-a-registroviajero` — a traveler stepping through a whitewashed archway into a Spanish town at golden hour — but rendered from a slightly different angle. The composition is wider, showing more of the town beyond the gate. |
| `nrua-numero-registro-unico` | A traveler hangs a small numbered tag on a hook beside the door of a whitewashed Spanish apartment building. The tag dangles from a thin ribbon. A cat on a step nearby observes carefully. |
| `vau-1560-2025-deposito-arrendamientos` | A character passes a folded document through a small arched stone taquilla window set into a whitewashed wall — the kind found at a Spanish plaza de toros or old town hall. A uniformed hand inside the booth brings down a heavy rubber stamp on it with ceremony. A scruffy dog sits at the character's feet, looking up. Warm afternoon light, terracotta tiles above the window, a fig tree to one side. Composition: figure offset to the right third, more environmental detail on the left. |
| `errores-ses-hospedajes-codigos` | A traveller mid-stumble on a narrow Spanish stone alley: body pitched forward at an angle, one foot raised behind them, free arm flung out for balance. A sheaf of papers has burst from under their arm and hangs in the air around them — some sheets still rising, others beginning to drift down. Their face reads pure surprise. A brand-blue travel bag swings wildly from their shoulder. A cat on a nearby window ledge watches with aristocratic calm. Whitewashed walls, warm terracotta rooftops, late afternoon light. The cobblestone street is just a surface — do not draw a single prominent rock. Composition: figure slightly left of centre, papers arcing into the right third. |

Future posts (subjects reserved):

| Slug | Subject |
|------|---------|
| `deposito-arrendamientos-app-n2` | A character carefully lowers a folded letter into a small wooden chest on a terrace overlooking a Spanish town at twilight. A few letters are already neatly stacked beside the chest. |
| `errores-ses-hospedajes-catalogo` | A traveler stands at a wall of small wooden mailbox slots, all roughly identical, with two slots gently glowing warm orange. The character studies the glowing ones thoughtfully. |
| `ses-hospedajes-no-funciona` | A character at a small writing desk on a Spanish balcony looks up from a tangled string of yarn, gently following the loose end with one finger. A cat plays with the other end on the floor. |

---

## Composition variation — fight series sameness

If every cover places the subject dead-centre, the series becomes monotonous at thumbnail size. Vary the composition mechanically by adding one of these to the subject line for each cover:

- *"Composition: figure offset to the right third, more environmental detail on the left."*
- *"Composition: viewed from a low angle looking up, sky and rooftops dominant."*
- *"Composition: deep perspective, scene receding into background through an archway."*
- *"Composition: viewed from a slightly elevated angle, looking down into a courtyard."*
- *"Composition: figure small in the lower-right, dominant architecture above."*

Use a different one for every other cover. The recurring world stays the same; the camera angle varies.

---

## Workflow — one continuous batch

The recurring-world consistency depends on every generation being anchored to the same seed. Treat each cover as an isolated job, anchored to the seed.

### Phase 1 — establish the seed (60-90 min)

1. Open Midjourney (or Gemini) in a fresh conversation.
2. Generate the cover for `rd-933-2021-registro-viajeros` first — it's the most central post and becomes the brand anchor.
3. Iterate ~10 generations. Reject any that:
   - Use colours outside the warm palette
   - Lose the brand-blue suitcase
   - Drift into cartoon-cute or photorealism
   - Show readable text, numbers or watermarks
4. When you have a winner, save it as `docs/cover-seed.webp` (commit alongside this doc). **Treat this as a permanent brand anchor** — the seed for every future generation, including posts written a year from now.

### Phase 2 — generate the remaining covers (90-180 min)

For each post:

1. **Open a new, clean conversation.** Do not keep generating in the same chat — accumulated conversation context introduces drift over time. Each cover is an isolated job.
2. Paste the system prompt above with the subject line for this cover.
3. Attach `docs/cover-seed.webp` as a reference image (Midjourney `--cref [URL]`; Gemini "use this image as reference" upload).
4. Generate 2-3 variations. Pick the strongest.

### Phase 3 — QC pass (20 min)

1. Open all covers in one grid view (macOS Finder gallery, Photoshop contact sheet).
2. Look for outliers:
   - Hue drift — is one cover noticeably warmer or cooler than the seed?
   - Style drift — is one cover sketchier or more flat-vector than others?
   - Brand-blue absence — does every cover have a brand-blue element somewhere?
3. Re-generate any outlier with the seed image still loaded as reference.

### Phase 4 — compress and wire up (5 min per post)

Convert each generation to WebP at the final path. Use ImageMagick — it handles the resize, center-crop, and watermark removal in one pass:

```sh
magick input.png -resize 900x900^ -gravity Center -extent 800x800 -quality 82 public/blog/<slug>.webp
```

`-resize 900x900^` scales so the shortest dimension reaches at least 900px (maintaining aspect ratio). `-gravity Center -extent 800x800` center-crops to exactly 800×800, trimming ~50px from each edge — enough to remove Gemini's corner watermark zone.

Then add to the post's frontmatter:

```yaml
cover: /blog/rd-933-2021-registro-viajeros.webp
coverAlt: "Un viajero con maleta llega a la puerta de una villa española al atardecer; un gato observa desde el balcón"
```

`cover` is root-relative under `public/`. `coverAlt` is required when `cover` is set — write it in the post's locale (Spanish in `es/`, English in `en/`). The plumbing in `src/layouts/BlogPost.astro` and `src/layouts/Layout.astro` then:

- Renders the image as the post hero, displayed **square** via CSS (`aspect-square` + `object-cover` crops to the centre band)
- Switches `og:image` and `twitter:image` to the cover URL (800×800 square)
- Updates the `BlogPosting` JSON-LD `image` field

When `cover` is omitted, the site-wide `/og-image.webp` falls back automatically.

---

## Watermark check

Gemini sometimes adds a small sparkle/watermark in the bottom-right corner. The Phase 4 recipe handles this automatically: `-resize 900x900^` overshoots to at least 900px on each side, then `-gravity Center -extent 800x800` trims ~50px from every edge, cutting the corner watermark zone out. No separate strip step needed — the single magick command above does it all.

---

## Compression — non-negotiable across the whole site

Every raster asset committed to this repo must be WebP, not PNG or JPEG. WebP is universally supported (Safari 14+, every other browser for years) and runs 50-85% smaller than PNG at equivalent visual quality.

Conversion choice depends on content:

- **Watercolor / illustration / continuous-tone** (these covers, mockup screenshots, photos): use `cwebp -q 85 -mt`. Lossy at q=85 is visually indistinguishable.
- **Flat-vector / line art / logos exported as raster**: use `cwebp -lossless -mt`. Lossless WebP beats PNG with no quality loss.

Single-file conversion:

```sh
cwebp -q 85 -mt -quiet input.png -o output.webp         # continuous-tone
cwebp -lossless -mt -quiet input.png -o output.webp     # flat
```

Batch conversion of an existing directory:

```sh
for f in *.png; do cwebp -q 85 -mt -quiet "$f" -o "${f%.png}.webp" && rm "$f"; done
```

After conversion, update every reference (Astro templates, `src/i18n/content.ts`, frontmatter, JSON-LD `image` fields). The build is the source of truth — if it still passes after the rename, the references are clean.

---

## When to deviate

Don't, with one exception: if a specific cover stays generic-AI-looking after 5-10 iterations, replace it with a hand-curated photograph (Unsplash search, applied with the same warm watercolour treatment in Photoshop). The series can absorb one or two photographic covers as long as the warm palette and editorial mood stay consistent. Rare; only as a fallback.

For everything else, the protocol exists for a reason. Drift is more expensive than mediocrity. Use the seed; ship the cover.
