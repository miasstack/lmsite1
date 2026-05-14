/* global React */
// Side-by-side product banners — one for Mujer, one for Hombre.
// Pure store merchandising — click into each gender shop.
function GenderSplit() {
  const [hover, setHover] = React.useState(null);
  const sides = [
    {
      id: 'mujer',
      label: 'Mujer',
      tag: 'Shop her favorites',
      img: 'assets/lookbook-stairs-latina-tracksuit.png',
      cta: 'Shop Mujer',
      bg: '#87C2DD',
    },
    {
      id: 'hombre',
      label: 'Hombre',
      tag: 'First menswear drop',
      img: 'assets/lookbook-mens-bandera-tracksuit-front.png',
      cta: 'Shop Hombre',
      bg: '#1A3B8E',
    },
  ];
  return (
    <section style={{ background: 'var(--paper)' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 12px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
        {sides.map(s => (
          <a key={s.id}
            onMouseEnter={() => setHover(s.id)}
            onMouseLeave={() => setHover(null)}
            style={{
              cursor: 'pointer',
              position: 'relative',
              height: 520,
              background: s.bg,
              overflow: 'hidden',
              display: 'block',
            }}>
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url('../../${s.img}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center 18%',
              transform: hover === s.id ? 'scale(1.04)' : 'scale(1)',
              transition: 'transform 600ms var(--ease-out)',
            }} />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.7) 100%)',
              pointerEvents: 'none',
            }} />

            <div style={{
              position: 'absolute',
              left: 32,
              bottom: 32,
              right: 32,
              color: '#fff',
            }}>
              <div style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 800,
                fontSize: 10,
                textTransform: 'uppercase',
                letterSpacing: '0.28em',
                color: 'var(--magenta-300)',
                marginBottom: 8,
              }}>{s.tag}</div>
              <div style={{
                fontFamily: 'var(--font-impact)',
                fontSize: 82,
                lineHeight: 0.9,
                letterSpacing: '-0.02em',
                textTransform: 'uppercase',
              }}>{s.label}</div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                marginTop: 18,
                padding: '12px 20px',
                background: '#fff',
                color: 'var(--ink-1000)',
                fontFamily: 'var(--font-body)',
                fontWeight: 800,
                fontSize: 12,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
              }}>{s.cta} →</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

window.GenderSplit = GenderSplit;
