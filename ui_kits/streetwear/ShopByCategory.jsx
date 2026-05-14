/* global React */
function ShopByCategory() {
  const cats = [
    { name: 'Tracksuits', bg: '#87C2DD', img: 'assets/lookbook-stairs-latina-tracksuit.png',         fit: 'cover' },
    { name: 'Bikinis',    bg: '#87C2DD', img: 'assets/lookbook-bikini-beach-cartagena.png',          fit: 'cover' },
    { name: 'Active',     bg: '#BC1F2D', img: 'assets/lookbook-red-tribal-set-night.png',            fit: 'cover' },
    { name: 'Bombers',    bg: '#1A3B8E', img: 'assets/lookbook-mens-bandera-tracksuit-front.png',    fit: 'cover' },
    { name: 'Tops',       bg: '#BC1F2D', img: 'assets/lookbook-sports-bra-red-wall.png',             fit: 'cover' },
    { name: 'Joggers',    bg: '#1A3B8E', img: 'assets/lookbook-mens-bandera-tracksuit-down.png',     fit: 'cover' },
    { name: 'LM Luxe',    bg: '#0a0a0a', img: 'assets/logo-lm-monogram-male.png',                    fit: 'contain', luxe: true },
  ];
  return (
    <section style={{ background: 'var(--paper)', padding: '64px 32px 96px' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 26 }}>
          <h2 style={{
            margin: 0,
            fontFamily: 'var(--font-impact)',
            fontSize: 48,
            lineHeight: 0.95,
            letterSpacing: '-0.02em',
            textTransform: 'uppercase',
            color: 'var(--ink-900)',
          }}>Shop por categoría</h2>
          <a style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 700,
            fontSize: 11,
            textTransform: 'uppercase',
            letterSpacing: '0.16em',
            color: 'var(--ink-900)',
            cursor: 'pointer',
            textDecoration: 'underline',
            textUnderlineOffset: 4,
          }}>Ver todo →</a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 8 }}>
          {cats.map(c => (
            <a key={c.name} style={{ cursor: 'pointer', display: 'block' }}>
              <div style={{
                aspectRatio: '4/5',
                background: c.bg,
                backgroundImage: `url('../../${c.img}')`,
                backgroundSize: c.fit === 'contain' ? '70% auto' : 'cover',
                backgroundPosition: c.fit === 'contain' ? 'center' : 'center 18%',
                backgroundRepeat: 'no-repeat',
                position: 'relative',
                overflow: 'hidden',
                filter: c.luxe ? 'drop-shadow(0 12px 24px rgba(233,30,151,0.4))' : 'none',
                transition: 'transform 320ms var(--ease-out)',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; }}>
                <div style={{
                  position: 'absolute',
                  left: 0, right: 0, bottom: 0,
                  height: 56,
                  background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.7) 100%)',
                }} />
              </div>
              <div style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 800,
                fontSize: 12,
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                marginTop: 10,
                color: 'var(--ink-900)',
                textAlign: 'center',
              }}>{c.name}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

window.ShopByCategory = ShopByCategory;
