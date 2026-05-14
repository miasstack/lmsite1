/* global React */
function TrendReport() {
  const tiles = [
    {
      title: 'Perreo intenso',
      kicker: 'Saturday Night',
      copy: 'For the floor. Para sudar.',
      img: 'assets/lookbook-latina-tracksuit-back.jpg',
      bg: '#1A3B8E',
      accent: 'var(--magenta-300)',
    },
    {
      title: 'En la playa',
      kicker: 'Saltwater',
      copy: 'Bikini × monogram × salt.',
      img: 'assets/product-bikini-blue-front.png',
      bg: '#87C2DD',
      fit: 'contain',
      accent: 'var(--ink-900)',
    },
    {
      title: 'De paseo',
      kicker: 'Mall Day',
      copy: 'The tracksuit. Pa\u2019lla y pa\u2019ca.',
      img: 'assets/lookbook-mall-tracksuit.png',
      bg: '#181818',
      accent: 'var(--magenta-300)',
    },
    {
      title: 'Atelier 01',
      kicker: 'Hecho a mano',
      copy: 'Twelve pieces. Two hundred each.',
      img: 'assets/logo-lm-monogram-male.png',
      bg: '#050505',
      fit: 'contain',
      accent: 'var(--magenta-300)',
      luxe: true,
    },
  ];

  return (
    <section style={{ background: 'var(--paper)', padding: '96px 32px 72px' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        <div style={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          marginBottom: 32,
          gap: 24,
        }}>
          <div>
            <div style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 700,
              fontSize: 11,
              textTransform: 'uppercase',
              letterSpacing: '0.32em',
              color: 'var(--magenta-500)',
              marginBottom: 10,
            }}>El reporte · Otoño '26</div>
            <h2 style={{
              margin: 0,
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontWeight: 700,
              fontSize: 64,
              lineHeight: 0.95,
              letterSpacing: '-0.02em',
              color: 'var(--ink-900)',
            }}>Cuatro modos. Una cultura.</h2>
          </div>
          <a style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 700,
            fontSize: 11,
            textTransform: 'uppercase',
            letterSpacing: '0.16em',
            color: 'var(--ink-900)',
            textDecoration: 'underline',
            textUnderlineOffset: 4,
            cursor: 'pointer',
            whiteSpace: 'nowrap',
          }}>See all moods →</a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
          {tiles.map((t, i) => (
            <a key={t.title} style={{
              position: 'relative',
              aspectRatio: '3/4',
              background: t.bg,
              backgroundImage: `url('../../${t.img}')`,
              backgroundSize: t.fit === 'contain' ? '70% auto' : 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              overflow: 'hidden',
              cursor: 'pointer',
              display: 'block',
            }}>
              {/* Bottom protection gradient for type */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.78) 100%)',
                pointerEvents: 'none',
              }} />

              <div style={{
                position: 'absolute',
                left: 20,
                top: 20,
                fontFamily: 'var(--font-body)',
                fontWeight: 700,
                fontSize: 10,
                textTransform: 'uppercase',
                letterSpacing: '0.22em',
                color: t.accent,
                background: 'rgba(0,0,0,0.55)',
                backdropFilter: 'blur(8px)',
                padding: '5px 9px',
              }}>0{i+1} · {t.kicker}</div>

              <div style={{
                position: 'absolute',
                left: 20,
                right: 20,
                bottom: 20,
                color: '#fff',
              }}>
                <div style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  fontWeight: 700,
                  fontSize: 32,
                  lineHeight: 1,
                  letterSpacing: '-0.02em',
                }}>{t.title}</div>
                <div style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                  fontSize: 13,
                  marginTop: 8,
                  opacity: 0.9,
                  textWrap: 'pretty',
                }}>{t.copy}</div>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  marginTop: 14,
                  fontFamily: 'var(--font-body)',
                  fontWeight: 700,
                  fontSize: 10,
                  textTransform: 'uppercase',
                  letterSpacing: '0.18em',
                  borderBottom: '1px solid currentColor',
                  paddingBottom: 4,
                }}>Shop the mood →</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

window.TrendReport = TrendReport;
