/* global React, ProductCard */
const PRODUCTS = [
  {
    id: 'tracksuit-latina',
    name: 'Latina Magic Tracksuit',
    subtitle: 'Hoodie + jogger · Latina colorway',
    price: 185,
    images: [
      'assets/lookbook-stairs-latina-tracksuit.png',
      'assets/lookbook-stairs-latina-tracksuit-2.png',
      'assets/lookbook-stone-wall-latina-tracksuit.png',
    ],
    swatch: '#87C2DD',
    colorways: ['#87C2DD', '#F4C3D2', '#181818'],
    tag: 'Drop 02',
    tagBg: 'var(--magenta-500)',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    desc: 'Cropped hooded jacket + cuffed jogger. Hecho con orgullo en Medellín. The bestseller.',
  },
  {
    id: 'tracksuit-bandera-mens',
    name: 'Bandera Tracksuit',
    subtitle: 'Hombre · bomber + jogger',
    price: 245,
    images: [
      'assets/lookbook-mens-bandera-tracksuit-front.png',
      'assets/lookbook-mens-bandera-tracksuit-lean.png',
      'assets/lookbook-mens-bandera-tracksuit-full.png',
      'assets/lookbook-mens-bandera-tracksuit-stand.png',
    ],
    swatch: '#1A3B8E',
    colorways: ['#1A3B8E'],
    tag: 'Nuevo',
    tagBg: 'var(--ink-900)',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    desc: 'Royal-blue bomber + jogger with all-over LM monogram. Red-and-yellow varsity trim. Para los reyes.',
  },
  {
    id: 'bikini-lm-blue',
    name: 'LM Bikini · Cartagena',
    subtitle: 'Triangle · recycled nylon',
    price: 95,
    images: [
      'assets/lookbook-bikini-beach-cartagena.png',
      'assets/product-bikini-blue-front.png',
      'assets/product-bikini-blue-back.png',
    ],
    swatch: '#87C2DD',
    colorways: ['#87C2DD', '#E8B5BB', '#C9B5E0'],
    tag: 'Bestseller',
    tagBg: 'var(--cw-bandera-accent)',
    sizes: ['XS', 'S', 'M', 'L'],
    desc: 'String triangle bikini with embroidered LM. Recycled nylon. Tan lines guaranteed.',
  },
  {
    id: 'bikini-pink',
    name: 'LM Bikini · Rosa',
    subtitle: 'Triangle · recycled nylon',
    price: 95,
    images: [
      'assets/lookbook-bikini-pink-front.png',
      'assets/lookbook-bikini-pink-pose.png',
    ],
    swatch: '#E8B5BB',
    colorways: ['#E8B5BB', '#87C2DD', '#C9B5E0'],
    tag: 'New',
    tagBg: 'var(--magenta-500)',
    sizes: ['XS', 'S', 'M', 'L'],
    desc: 'Soft-pink LM bikini. Lightweight, lined, hecho con mucho amor.',
  },
  {
    id: 'bikini-purple-chimba',
    name: '"Es Una Chimba" Bikini',
    subtitle: 'Tagline edition · purple',
    price: 95,
    images: ['assets/lookbook-bikini-purple-back-chimba.png'],
    swatch: '#C9B5E0',
    colorways: ['#C9B5E0'],
    tag: 'Tagline',
    tagBg: 'var(--magenta-500)',
    sizes: ['XS', 'S', 'M', 'L'],
    desc: '"Es una chimba" printed across the back. Self-evident.',
  },
  {
    id: 'activewear-red-tribal',
    name: 'Red Tribal Active Set',
    subtitle: 'Sports bra + leggings',
    price: 145,
    images: [
      'assets/lookbook-red-tribal-set-night.png',
      'assets/lookbook-red-tribal-set-ferns.png',
      'assets/lookbook-red-tribal-set-studio.png',
    ],
    swatch: '#BC1F2D',
    colorways: ['#BC1F2D', '#181818', '#E8B5BB'],
    tag: 'Nuevo',
    tagBg: 'var(--magenta-500)',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    desc: 'High-impact sports bra + sculpting leggings with tribal print and Latina Magic waistband.',
  },
  {
    id: 'activewear-baroque',
    name: 'Baroque Active Set',
    subtitle: 'Black × gold · sports bra + leggings',
    price: 155,
    images: [
      'assets/lookbook-baroque-set-front.png',
      'assets/lookbook-baroque-set-side.png',
    ],
    swatch: '#181818',
    colorways: ['#181818', '#BC1F2D', '#E8B5BB'],
    tag: 'Drop 02',
    tagBg: 'var(--magenta-500)',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    desc: 'Black and gold filigree, signature Latina Magic waistband. Hecho para verte de noche.',
  },
  {
    id: 'activewear-pink-tattoo',
    name: 'Rosa Tattoo Active Set',
    subtitle: 'Sports bra + leggings',
    price: 140,
    images: [
      'assets/lookbook-gym-pink-set-front.png',
      'assets/lookbook-gym-pink-set-side.png',
    ],
    swatch: '#E8B5BB',
    colorways: ['#E8B5BB', '#BC1F2D', '#181818'],
    tag: 'New',
    tagBg: 'var(--magenta-500)',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    desc: 'Soft-pink tattoo-art leggings with hand-script Latina Magic. Cabrón en el gym.',
  },
  {
    id: 'sports-bra-red',
    name: 'Latina Magic Sports Bra',
    subtitle: 'Standalone · red ornate',
    price: 65,
    images: [
      'assets/lookbook-sports-bra-red-wall.png',
      'assets/product-sports-bra-red-front.png',
      'assets/product-sports-bra-red-side.png',
    ],
    swatch: '#BC1F2D',
    colorways: ['#BC1F2D', '#181818'],
    tag: 'Bestseller',
    tagBg: 'var(--cw-bandera-accent)',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    desc: 'Signature red-ornate top. Built for cardio, club, or both.',
  },
];

window.PRODUCTS = PRODUCTS;

function ProductGrid({ onQuickView, title = 'The drop', filterFn, filters }) {
  const allFilters = filters || ['Todo', 'Tracksuits', 'Activewear', 'Bikinis', 'Tops'];
  const [active, setActive] = React.useState('Todo');
  const list = (filterFn ? PRODUCTS.filter(filterFn) : PRODUCTS).filter(p => {
    if (active === 'Todo') return true;
    if (active === 'Tracksuits') return p.id.includes('tracksuit');
    if (active === 'Activewear') return p.id.includes('activewear') || p.id.includes('sports-bra');
    if (active === 'Bikinis') return p.id.includes('bikini');
    if (active === 'Tops') return p.id.includes('sports-bra');
    return true;
  });
  return (
    <section style={{ padding: '32px 32px 96px', maxWidth: 1400, margin: '0 auto' }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 28, flexWrap: 'wrap', gap: 16 }}>
        <h2 style={{
          margin: 0,
          fontFamily: 'var(--font-impact)',
          fontSize: 48,
          lineHeight: 0.95,
          letterSpacing: '-0.02em',
          textTransform: 'uppercase',
          color: 'var(--ink-900)',
        }}>{title}</h2>
        <div style={{ display: 'flex', gap: 8 }}>
          {allFilters.map(f => (
            <button key={f} onClick={() => setActive(f)} style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 700,
              fontSize: 11,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              padding: '8px 14px',
              background: active === f ? 'var(--ink-900)' : 'transparent',
              color: active === f ? '#fff' : 'var(--ink-700)',
              border: '1.5px solid var(--ink-900)',
              cursor: 'pointer',
            }}>{f}</button>
          ))}
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
        {list.map(p => <ProductCard key={p.id} product={p} onQuickView={onQuickView} />)}
      </div>
    </section>
  );
}

window.ProductGrid = ProductGrid;
