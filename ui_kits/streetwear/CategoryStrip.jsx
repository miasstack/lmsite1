/* global React */
function CategoryStrip({ setRoute }) {
  const tiles = [
    { id: 'Hombre',     base: '#1A3B8E', accent: '#F5D000', img: 'assets/product-bomber-green-monogram.png', kicker: 'Bandera' },
    { id: 'Mujer',      base: '#87C2DD', accent: '#F4C3D2', img: 'assets/lookbook-latina-tracksuit-front.jpg', kicker: 'Latina' },
    { id: 'Unisex',     base: '#1FA85E', accent: '#FFD200', img: 'assets/product-bomber-green-monogram.png', kicker: 'Selva' },
    { id: 'LM Atelier', base: '#111111', accent: '#E91E97', img: 'assets/logo-lm-monogram-male.png',          kicker: 'Atelier', luxe: true },
  ];
  return (
    <section style={{ padding: '72px 32px', maxWidth: 1400, margin: '0 auto' }}>
      <div style={{
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 12,
        textTransform: 'uppercase',
        letterSpacing: '0.18em',
        color: 'var(--magenta-500)',
        marginBottom: 10,
      }}>Shop the universe</div>
      <h2 style={{
        margin: '0 0 36px',
        fontFamily: 'var(--font-impact)',
        fontSize: 56,
        lineHeight: 0.95,
        letterSpacing: '-0.02em',
        textTransform: 'uppercase',
        color: 'var(--ink-900)',
      }}>Pick your colorway.</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
        {tiles.map(t => (
          <a key={t.id} onClick={() => setRoute(t.id)} style={{
            cursor: 'pointer',
            background: t.base,
            aspectRatio: '4/5',
            position: 'relative',
            overflow: 'hidden',
            display: 'block',
          }}>
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url('../../${t.img}')`,
              backgroundSize: t.luxe ? '60% auto' : 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              opacity: t.luxe ? 1 : 0.95,
              filter: t.luxe ? 'drop-shadow(0 12px 30px rgba(233,30,151,0.5))' : 'none',
            }} />
            <div style={{
              position: 'absolute',
              left: 16,
              top: 16,
              fontFamily: 'var(--font-body)',
              fontWeight: 700,
              fontSize: 10,
              textTransform: 'uppercase',
              letterSpacing: '0.14em',
              color: t.luxe ? 'var(--magenta-300)' : 'rgba(255,255,255,0.85)',
            }}>
              {t.kicker}
            </div>
            <div style={{
              position: 'absolute',
              left: 16,
              bottom: 16,
              fontFamily: 'var(--font-impact)',
              fontSize: 40,
              lineHeight: 0.95,
              letterSpacing: '-0.01em',
              textTransform: 'uppercase',
              color: '#fff',
              textShadow: '0 2px 16px rgba(0,0,0,0.4)',
            }}>{t.id}</div>
          </a>
        ))}
      </div>
    </section>
  );
}

window.CategoryStrip = CategoryStrip;
