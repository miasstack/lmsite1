# Latino Magic — Design System

> **La marca para la cultura.** Streetwear and luxury for Latin music culture.

Latino Magic is a Latino-themed streetwear and luxury clothing line. The brand exists to occupy the space in Latin music culture that brands like **FUBU, Sean John, and Phat Farm / Baby Phat** occupied for hip-hop — a way to wear your culture loud. It is inspired by Latin street culture, **perreo** (reggaeton party culture), and a sense of "la cultura" pride that hasn't had its own apparel powerhouse — until now.

The brand voice is **sexy, machismo, stylish, luxury, and urban**.

The brand has **two product universes** that share an identity:

| Universe | Logo | Vibe | Inspiration |
|---|---|---|---|
| **Latino Magic** (urban / streetwear) | Marker wordmark | Loud, athletic, monogram all-over-prints, varsity trims | FUBU, Sean John, Baby Phat |
| **LM** (luxury monogram) | Slab-serif LM glyph in magenta gradient | Refined, gradient-pink, capsule pieces meant to compete with luxury houses | Louis Vuitton, Gucci, Dior |

Because of Spanish gendered grammar, the brand also splits by gender on certain women's pieces:

- **Latino Magic** → menswear & unisex (tagline _"Ya tu sabes"_)
- **Latina Magic** → women's pieces (tagline _"Es una Chimba"_)
- **Bandidas Latina Magic** → women's capsule with a sugar-skull (Día de Muertos) collab logo

---

## Sources & uploaded materials

All materials were provided as image uploads (the brand has no codebase or Figma yet):

- `uploads/LM Logo male.ai`, `uploads/LM Logo Female.ai` — original Illustrator masters. **Not accessible** to the design agent (binary AI). The user re-uploaded PNG exports as `LM Logo male-02.png` and `LM Logo Female-02.png`, which are now in `assets/`.
- `uploads/IMG_1183.jpg`, `uploads/IMG_1157.jpg` — model lookbook in the baby-blue × pink "Latina" monogram tracksuit (hoodie crop + joggers).
- `uploads/1761764410764788527-3da0b1f4.png` — lookbook of the tracksuit in a mall context.
- `uploads/Screenshot 2026-03-26 at 4.57.40 PM.png` — Bandidas Latina Magic sugar-skull logo.
- `uploads/Screenshot 2023-07-11 at 12.25.59 PM.jpeg` — original urban "LATINO MAGIC" brush wordmark on mustard.
- `uploads/all-over-print-recycled-string-bikini-...png` — LM monogram bikini (front + back).
- `uploads/all-over-print-unisex-bomber-jacket-white-right-...png` — green/yellow monogram bomber.
- `uploads/Untitled-1 (2).png` — pink tattoo-style hoodie (concept/mood reference).
- `uploads/baby blue bomber_jacket_right_sleeve_template.jpg` — clean Latina-colorway monogram pattern.
- `uploads/blue bomber_jacket_right_sleeve_template.jpg` — Bandera (royal blue × red × yellow) monogram pattern.

There is no existing storefront, Figma, or codebase yet — this design system is the **first canonical artefact** for the brand.

---

## Index — what lives in this project

```
.
├── README.md                  ← you are here
├── SKILL.md                   ← skill manifest (works in Claude Code too)
├── colors_and_type.css        ← all design tokens (colors, type, spacing, motion)
├── assets/                    ← logos, patterns, product shots, lookbook
├── preview/                   ← design-system cards (Type / Colors / Spacing / Components / Brand)
└── ui_kits/
    ├── streetwear/            ← Latino Magic e-commerce storefront (urban)
    └── luxury/                ← LM monogram capsule site (luxury)
```

Open the **Design System** tab in this project to see every preview card laid out.

---

## CONTENT FUNDAMENTALS

Latino Magic copy is **bilingual by default**, swaggering, and never apologetic. It's the tone of a friend who knows the spot and is letting you in. Spanish and English mix on the same line; gendered grammar is intentional — "Latino" speaks to men/unisex, "Latina" speaks to women, never one as a default.

### Voice attributes

- **Sexy.** Confident in body and fit. Copy can reference curves, swagger, perreo, the dance floor.
- **Machismo (modern, not toxic).** Pride, respect, family, "para mi gente." Never punching down.
- **Stylish.** Fashion-house tone when the LM monogram leads. Drops, capsules, limited runs.
- **Luxury.** Sparing words. Italicized serifs. "Atelier," "edition," "in residence."
- **Urban.** Slang welcome. _Ya tu sabes. Brother. Mami. Pa'lla y pa'ca. Cabrón._ But never forced — slang has to land naturally for the speaker.

### Casing & punctuation

- **All-caps for impact heads** — product names on PDPs, hero statements ("PARA LA CULTURA"), category labels ("HOMBRE / MUJER / UNISEX").
- **Sentence case for body and descriptions.** Easier to read.
- **Title Case is reserved for the luxury LM line** — "The Monogram Bomber," "Bandidas Edition." It signals couture.
- **No emoji.** The brand has its own iconography (the LM glyph, the damask). Emoji cheapens it.
- **Spanish punctuation is optional** — _"¿Y tú?"_ reads natural with the inverted question mark, but headlines can drop it for graphic balance. Editorial judgment.

### Pronouns

- **Tú** by default — informal, in-group. Never **usted**, which reads stiff.
- "You" in English; never "the customer" or "users."
- The brand says **"we"** ("nosotros") when speaking for itself — never "I."

### Examples

| ✅ On brand | ❌ Off brand |
|---|---|
| **PARA LA CULTURA.** First drop, hecha con orgullo. | Shop our latest collection of inclusive, culturally-inspired apparel. |
| _Ya tu sabes._ The bomber is back. | Now available: the all-over-print bomber jacket. |
| The Monogram Bomber. Atelier-cut, satin-lined, limited to 200. | Premium luxury bomber jacket made with high-quality materials. |
| **Bandidas drop:** 11.11, 12pm EST. No restock. | Don't miss our exclusive Bandidas collection launching November 11th! |
| Eres una chimba. | Empowered women, empowered fashion. |
| **Hecho para perrear.** | Designed for dancing. |

### Taglines (official)

- **Latino Magic** → _Ya tu sabes_ ("You already know")
- **Latina Magic** → _Es una Chimba_ (Colombian slang: "it's incredible / a vibe")
- **House line** → _Para la cultura_ ("For the culture")

---

## VISUAL FOUNDATIONS

### Color philosophy

The brand has **two color personalities** that share one identity:

1. **The Magenta Gradient** — the LM monogram is always rendered in a 135° magenta → hot-pink gradient (`#9C1AAB → #E91E97 → #F472B6`). This is the modern, gender-neutral, luxury-leaning identity color. It looks expensive on black and electric on white.
2. **The Colorway System** — product palettes. Each apparel collection runs in a named 3-color palette: **Latina** (baby blue × pink), **Bandera** (royal blue × red × yellow — flag colors), **Selva** (tropical green × gold), **Bandidas** (black × crimson × bone), **Calle** (mustard × black). These are not "accents" — they are full apparel colorways that take over an entire piece via monogram all-over-print.

Neutrals run warm: **bone / cream** (`#F7F1E5`, `#FBF8F2`) over plain white, and **deep ink** (`#050505`, `#111`) over true black. The cream pairs with luxury serif type; the deep ink anchors the urban side.

### Typography motifs

Five families do specific jobs — never blur the roles:

- **Display (urban)** — `Permanent Marker` (sub for the original brush wordmark). Hand-drawn marker energy. Use on graphic merch, drop posters, urban headers.
- **Impact (varsity)** — `Anton`. Condensed, all-caps, athletic. Use on product names, big numbers, category labels.
- **Serif (luxury)** — `Playfair Display`, often italic. The LM line's voice. Pairs with the magenta gradient.
- **Script (decorative tagline)** — `Italiana`. Thin decorative serif used for "Ya tu sabes" and "Es una Chimba" beneath logos.
- **Body** — `Manrope`. Clean modern geometric sans for product copy, UI, and longform.

### Backgrounds & surfaces

- **Default canvas:** warm cream (`--paper #FBF8F2`). Never pure cold white.
- **Luxury surface:** deep ink (`--bg-luxe #111`). LM monogram pieces always shoot on near-black.
- **Monogram canvas:** any of the five colorway base hues, tiled with the LM-monogram + damask pattern at ~6–8% density. This is the brand's "wallpaper" — used in hero backgrounds, product pages, and physical garments equally.
- **Full-bleed lookbook photography** dominates marketing surfaces — models in colorway, real environments (mall, jungle, club). Color-grading is warm, saturated, sunlit — never desaturated, never moody/cold.

### Patterns

The **LM monogram all-over-print** is the brand's signature visual asset — a tile that alternates the LM glyph with an ornate damask floret in a fleur-de-lis-style ornament. Tile spacing is generous (the glyph is breathing). Used on garments and on background surfaces in marketing.

### Borders, lines, dividers

- **Hairline rules** (1px, 10% opacity ink) for body content.
- **Heavy rules** (2px, solid ink) for category dividers.
- **Varsity stripes** (3-color: trim → accent → base) at cuffs and hems on apparel; used in marketing as decorative footer/header bars.

### Shadow & elevation

The system is **flat by default**. Depth comes from contrast (cream on black) and scale, not shadow. Two exceptions:

- **`--shadow-card`** — a soft far-cast shadow for the e-commerce product card lift on hover.
- **`--shadow-stamp`** — a hard 4px offset shadow (no blur) in black or magenta. Varsity / hip-hop merch aesthetic. Used on CTA buttons and badges to feel like a screenprint.

### Corner radii

- **Streetwear surfaces** prefer **square corners** (`--r-0`, `--r-4`). Reads like a tag, a sticker, a screenprint.
- **Luxury LM surfaces** prefer **pills** (`--r-pill`) for CTAs and **square** for cards. Pills only.
- We do not use mid-radius rounded rectangles (e.g. 12–16px on everything). It's either flat-square or pill — that tension is part of the brand.

### Buttons — hover & press

- **Hover:** color stays; the button **lifts** (`shadow-card → shadow-hover`) and gains a 4px `--glow-magenta` ring. No color change on hover — colors are sacred.
- **Press:** shadow flattens (`--shadow-inner-press`) and the element scales to `0.98`. Snappy `100ms` ease-out.
- **Focus:** a 3px magenta outline at 2px offset. Visible, never apologetic.

### Animation

- **Easing:** confident `cubic-bezier(0.16, 1, 0.3, 1)` for entrances; symmetric `cubic-bezier(0.65, 0, 0.35, 1)` for state swaps. Never bouncy springs.
- **Duration:** 120ms for micro (button states), 220ms for transitions, 420ms for hero reveals.
- **Hero entrances:** image rises 24px and fades — never zooms in dramatically.
- **No parallax.** No marquee tickers unless explicitly part of a drop announcement.

### Transparency & blur

- **Sticky nav** uses `backdrop-filter: blur(20px)` over cream/black with 80% opacity. Lets monogram patterns ghost through.
- **Modals** sit on a 40% black scrim. No blur underneath — keeps the page legible.
- **Image overlays** for text on photography use a **bottom-gradient protection** (black 0% → 60% over the bottom 50% of the image), never a flat tint.

### Layout rules

- **Generous outer margins.** Streetwear pages breathe — content sits in a 1200px max-content column with ~80px gutters on desktop.
- **Asymmetric hero grids.** A 7/5 split with the imagery dominating; type sits in the smaller column.
- **Sticky brand bar at top** (60px), sometimes joined by a single-line marquee announcing a drop (40px), but never both heavy. Total chrome <120px.
- **No three-column card grids in the hero.** The first viewport always has imagery — never just text + chips.

### Imagery color vibe

- **Warm, saturated, sunlit.** Reggaeton album cover energy.
- **Real environments:** mall, club, beach, jungle, parking lot, barrio rooftops. Not studio white seamless (except for catalog cutouts).
- **Models look at the camera with confidence** — never coy.
- **Optional film grain (~3%)** on hero photography only — adds texture without going retro.

---

## ICONOGRAPHY

Latino Magic has its own iconographic vocabulary — we lean on **brand glyphs** instead of generic UI icon sets:

1. **LM Monogram** (`assets/logo-lm-monogram-male.png`) — used as a favicon, loading spinner, watermark, and pattern tile. This is the brand's "tick."
2. **Damask Floret** (`assets/ornament-damask.png`) — the small ornament between LM glyphs in the pattern. Used as section dividers and bullet markers.
3. **Sugar Skull** (`assets/logo-bandidas-skull.png`) — Bandidas capsule only. Never used outside that line.
4. **Varsity stripes** — three horizontal bars (trim / accent / base, ~6–8px each). Decorative dividers in marketing.

For **functional UI icons** (cart, search, account, menu, play, etc.), we use **Lucide** via CDN (https://unpkg.com/lucide@latest). Lucide's 1.5px stroke matches the brand's clean modern sans body type. Stroke weight stays at 1.5px; never use Lucide's solid fills.

- **No emoji** in product UI or marketing. The damask floret replaces decorative bullets.
- **Unicode symbols** (★, ↳, →) are allowed as inline copy markers, in body type, for editorial tone.
- **No hand-drawn UI icons** — that role belongs to the LM and damask glyphs alone.

### Logo asset inventory

| File | Use |
|---|---|
| `assets/logo-lm-male-full.png` | Master logo — LM glyph + "Latino Magic" + "Ya tu sabes". Magenta gradient. |
| `assets/logo-lm-female-full.png` | Master logo — LM glyph + "Latina Magic" + "Es una Chimba". Magenta gradient. |
| `assets/logo-lm-monogram-male.png` | LM glyph only, magenta gradient. Square. Favicon, watermark. |
| `assets/logo-lm-monogram-female.png` | LM glyph only (female variant). |
| `assets/logo-lm-monogram.png` | LM glyph in solid white — for use on dark/colored fabric & UI backgrounds. |
| `assets/logo-latino-magic-wordmark.jpg` | Original brush wordmark on mustard. Urban side identity. |
| `assets/logo-bandidas-skull.png` | Bandidas Latina Magic sugar-skull collab logo. |
| `assets/ornament-damask.png` | Damask floret, white. Pattern partner to LM glyph. |
| `assets/pattern-monogram-baby-blue.jpg` | Latina colorway all-over-print swatch. |
| `assets/pattern-monogram-royal-blue.jpg` | Bandera colorway all-over-print swatch. |

### Font substitutions — needs user input

Original brand fonts were not provided. The following Google Fonts are placeholders selected for tonal match. **Please confirm or send originals:**

- Urban wordmark "LATINO MAGIC" (brush) → **Permanent Marker** (close but not identical — the original has more variance in stroke pressure).
- The "Latino Magic" / "Latina Magic" wordmark beneath the LM glyph → currently **Manrope 800**. The original may be a custom rounded sans (it has subtle curl on the "a"). If you have the original `.ttf`/`.otf`, drop it in `fonts/` and update `colors_and_type.css`.
- The tagline "Ya tu sabes" / "Es una Chimba" → **Italiana**. The original has a more distinctive curl on `b` and `h`.

---

## Quick start for designers/agents

1. Read this README + open the **Design System** tab to scan tokens visually.
2. Link `colors_and_type.css` in any new HTML you build.
3. Use the colorway variables (`--cw-latina-*`, `--cw-bandera-*`, etc.) for product/collection theming.
4. Reach for assets from `assets/` first — only fall back to placeholders if nothing fits.
5. When in doubt: **keep it loud, keep it Latino, keep it luxe.**
