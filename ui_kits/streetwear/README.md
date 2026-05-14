# Latino Magic — Streetwear Storefront UI Kit

A click-thru e-commerce storefront for the **urban / streetwear** side of the brand. Anchored on the Calle (ochre/black) and product colorways. The brand's loud, athletic, FUBU-spiritual voice.

## Run it

Open `index.html`. It's a React/Babel single-file demo — no build step.

## What's in here

| File | Component |
|---|---|
| `index.html` | Page shell, mounts the app |
| `App.jsx` | Compose all sections + global state (cart, quickview, route) |
| `Header.jsx` | Sticky announce bar + main nav + cart icon |
| `Hero.jsx` | Asymmetric 7/5 hero with current drop |
| `DropMarquee.jsx` | Marker-script marquee announcing the next drop |
| `CategoryStrip.jsx` | Four square colorway tiles — Hombre, Mujer, Unisex, LM Atelier |
| `ProductGrid.jsx` | Grid of product cards (uses `ProductCard.jsx`) |
| `ProductCard.jsx` | Streetwear product tile |
| `LookbookBand.jsx` | Full-bleed editorial photography strip |
| `QuickView.jsx` | PDP modal — image, sizes, add-to-bag |
| `CartDrawer.jsx` | Slide-in cart panel |
| `Footer.jsx` | Brand bar + links + LM monogram watermark |

## Style rules followed

- Square corners on streetwear surfaces (`--r-0` / `--r-4`).
- Buttons use Impact-condensed type for "ADD TO BAG" and Manrope-700 for secondary actions.
- Hover lifts (`--shadow-card → --shadow-hover`); never changes color.
- All product cards use real lookbook + monogram pattern imagery from `/assets/`.

## Caveats

- Cart persistence is in-memory only — page reload wipes it.
- This is a recreation kit for marketing/design previews, not a production checkout.
