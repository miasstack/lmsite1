/* global React */
const LUXE_PRODUCTS = [
  {
    id: 'bomber',
    name: 'The Monogram Bomber',
    subtitle: 'Edition 01 · 200 pieces',
    price: '1,250',
    medium: 'Satin-lined wool · gold-thread monogram',
    img: 'assets/product-bomber-green-monogram.png',
    bg: 'linear-gradient(180deg, #0a0a0a 0%, #18120f 100%)',
    fit: 'cover',
  },
  {
    id: 'bag',
    name: 'The Atelier Bag',
    subtitle: 'Hecho a mano · 50 pieces',
    price: '2,800',
    medium: 'Vegetable-tanned leather · LM hardware',
    img: 'assets/logo-lm-monogram-female.png',
    bg: 'linear-gradient(180deg, #0a0a0a 0%, #1a0e16 100%)',
    fit: 'contain',
  },
  {
    id: 'tracksuit',
    name: 'The Silk Tracksuit',
    subtitle: 'Edition 01 · 100 pieces',
    price: '1,650',
    medium: 'Sand-washed silk · hand-embroidered',
    img: 'assets/lookbook-latina-tracksuit-front.jpg',
    bg: 'linear-gradient(180deg, #0a0a0a 0%, #0e1418 100%)',
    fit: 'cover',
  },
  {
    id: 'scarf',
    name: 'The Damask Scarf',
    subtitle: 'Edition 01 · 300 pieces',
    price: '480',
    medium: 'Mulberry silk · 90×90 cm',
    img: 'assets/pattern-monogram-royal-blue.jpg',
    bg: 'linear-gradient(180deg, #0a0a0a 0%, #0e1018 100%)',
    fit: 'cover',
  },
];

window.LUXE_PRODUCTS = LUXE_PRODUCTS;

function AtelierGrid() {
  const [hover, setHover] = React.useState(null);
  return (
    <section style={{ background: 'var(--ink-1000)', padding: '120px 32px' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        <div style={{
          textAlign: 'center',
          marginBottom: 72,
        }}>
          <div style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 700,
            fontSize: 11,
            textTransform: 'uppercase',
            letterSpacing: '0.32em',
            color: 'var(--magenta-300)',
            marginBottom: 20,
          }}>Edition 01 · The pieces</div>
          <h2 style={{
            margin: 0,
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontWeight: 700,
            fontSize: 64,
            lineHeight: 1,
            letterSpacing: '-0.02em',
            color: 'var(--cream)',
          }}>The capsule.</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56 }}>
          {LUXE_PRODUCTS.map((p, i) => (
            <article key={p.id}
              onMouseEnter={() => setHover(p.id)}
              onMouseLeave={() => setHover(null)}
              style={{ cursor: 'pointer' }}>
              <div style={{
                aspectRatio: '4/5',
                background: p.bg,
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 420ms var(--ease-out)',
              }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `url('../../${p.img}')`,
                  backgroundSize: p.fit,
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  transition: 'transform 1200ms var(--ease-out)',
                  transform: hover === p.id ? 'scale(1.04)' : 'scale(1)',
                  filter: p.fit === 'contain' ? 'drop-shadow(0 16px 40px rgba(233,30,151,0.35))' : 'none',
                }} />
                {/* Edition number stamp */}
                <div style={{
                  position: 'absolute',
                  top: 24,
                  left: 24,
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  fontSize: 14,
                  color: 'rgba(247,241,229,0.7)',
                  letterSpacing: '0.04em',
                }}>
                  N°0{i+1}
                </div>
                <div style={{
                  position: 'absolute',
                  top: 24,
                  right: 24,
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  fontSize: 10,
                  textTransform: 'uppercase',
                  letterSpacing: '0.28em',
                  color: 'rgba(247,241,229,0.55)',
                }}>
                  Limited
                </div>
              </div>

              <div style={{ marginTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 24 }}>
                <div>
                  <h3 style={{
                    margin: 0,
                    fontFamily: 'var(--font-serif)',
                    fontStyle: 'italic',
                    fontWeight: 700,
                    fontSize: 30,
                    lineHeight: 1.1,
                    letterSpacing: '-0.01em',
                    color: 'var(--cream)',
                  }}>{p.name}</h3>
                  <div style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 600,
                    fontSize: 11,
                    textTransform: 'uppercase',
                    letterSpacing: '0.18em',
                    color: 'rgba(247,241,229,0.55)',
                    marginTop: 8,
                  }}>{p.subtitle}</div>
                  <div style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 13,
                    color: 'rgba(247,241,229,0.7)',
                    marginTop: 10,
                  }}>{p.medium}</div>
                </div>
                <div style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  fontWeight: 600,
                  fontSize: 22,
                  color: 'var(--cream)',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                }}>$ {p.price}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

window.AtelierGrid = AtelierGrid;
