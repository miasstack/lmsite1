---
name: latino-magic-design
description: Use this skill to generate well-branded interfaces and assets for Latino Magic — a Latin music culture streetwear & luxury clothing brand — either for production or throwaway prototypes/mocks/decks. Contains essential design guidelines, colors, type, fonts, real brand assets, and React UI-kit components (a streetwear storefront and an LM Atelier luxury site) for prototyping.
user-invocable: true
---

# Latino Magic — Design Skill

Read **`README.md`** in this skill folder first for the full brand context, content fundamentals, visual foundations, and iconography rules. Then explore the other available files:

- **`colors_and_type.css`** — all design tokens (colors, type, spacing, motion). Link this in every HTML artifact you make for the brand.
- **`assets/`** — real brand assets: master logos (`logo-lm-male-full.png`, `logo-lm-female-full.png`), the LM monogram glyph in magenta gradient, monogram all-over-print swatches (Latina / Bandera colorways), the urban brush wordmark on mustard, the Bandidas sugar-skull capsule logo, the damask floret pattern partner, and three lookbook photographs of the Latina tracksuit. Use these directly — never invent logos or generate substitutes.
- **`preview/`** — design-system specimen cards. Open any to see how a token / component actually reads.
- **`ui_kits/streetwear/`** — full React e-commerce storefront (Latino Magic urban). Modular JSX: `Header`, `Hero`, `DropMarquee`, `CategoryStrip`, `ProductCard`, `ProductGrid`, `LookbookBand`, `QuickView`, `CartDrawer`, `Footer`. Open `index.html` to run.
- **`ui_kits/luxury/`** — full React capsule/atelier site (LM Atelier). Modular JSX: `LuxeHeader`, `LuxeHero`, `MonogramBand`, `AtelierGrid`, `ProvenanceBlock`, `AppointmentModal`, `LuxeFooter`. Open `index.html` to run.

## When you're asked to design for Latino Magic

If creating **visual artifacts** (slides, mocks, throwaway prototypes, decks, marketing comps): copy the relevant assets out of `assets/` and create static HTML files for the user to view. Link `colors_and_type.css`. Reach into the UI-kit JSX files when a component (product card, hero, etc.) already exists — don't re-derive them.

If working on **production code**: copy the assets you need and lift the design rules from `README.md`. The UI-kit JSX is a reference, not production code — it's intentionally cosmetic.

## When invoked without other guidance

Ask the user what they want to build — a deck, a marketing page, a new product page, a social campaign, a lookbook? Ask a few questions to scope it:

- Which side of the brand: **streetwear** (Latino Magic urban) or **luxury** (LM Atelier)? Or a mix?
- Which colorway: **Latina** (baby blue × pink), **Bandera** (royal blue × red × yellow), **Selva** (green × gold), **Bandidas** (black × crimson), or **Calle** (mustard × ink)?
- Audience: is the copy for the in-group (Spanglish, slang welcome) or a broader/retail audience (English-forward with Spanish accents)?
- Output: HTML you can drop on a CDN, a deck for an investor pitch, or pure tokens/assets for a developer handoff?

Then act as the expert designer who outputs **HTML artifacts or production code**, anchored on the design system in this folder. Keep it loud, keep it Latino, keep it luxe.

## Hard rules

- Never use Inter, Roboto, Arial, or system-default sans for body — use `Manrope` (already wired in `colors_and_type.css`).
- The LM monogram is always rendered in the magenta gradient — never solid pink, never solid white on a colored bg unless it's intentionally on dark fabric.
- No emoji in product UI or marketing. Decorative bullets use the damask floret asset.
- The Bandidas sugar-skull logo is for that capsule only — never a house mark.
- Square corners on streetwear surfaces, pill on luxury — nothing between.
- No fake stats, no AI slop. Less, but loud.
