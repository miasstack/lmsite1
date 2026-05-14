# LM Atelier — Luxury Capsule UI Kit

The luxury side of Latino Magic — anchored on the **LM monogram glyph** and the magenta gradient. Dark editorial surfaces, italic serif headings, generous whitespace, pill CTAs. Meant to compete visually with Louis Vuitton / Gucci / Dior atelier pages, but unmistakably Latin in voice.

## Run it

Open `index.html`.

## What's in here

| File | Component |
|---|---|
| `index.html` | Page shell |
| `App.jsx` | Composes everything; runs the appointment-modal state |
| `LuxeHeader.jsx` | Minimal dark header with the LM glyph |
| `LuxeHero.jsx` | Full-bleed monogram glyph on near-black, italic serif copy |
| `AtelierGrid.jsx` | Two-column editorial product cards |
| `ProvenanceBlock.jsx` | Story block — "Hecho a mano en Medellín" |
| `MonogramBand.jsx` | Repeating-monogram pattern divider |
| `AppointmentModal.jsx` | Book a private atelier appointment |
| `LuxeFooter.jsx` | Minimal footer with magenta gradient rule |

## Style rules followed

- **Dark surface by default** (`--bg-luxe #111`). Text in warm cream.
- **Italic serif headings** (`Playfair Display`).
- **Pill CTAs** only — no square buttons on this side.
- **LM monogram glow** — the brand glyph gets a soft pink drop-shadow on dark.
- **No streetwear pricing patterns** — prices set in italic serif, never Impact-condensed.
- Imagery and language treated like an editorial fashion magazine, not a shop.

## Caveats

- Appointment booking is mock UI — submits in-memory only.
- The atelier product photography uses the LM glyph as a placeholder where real luxury-line photography doesn't exist yet.
