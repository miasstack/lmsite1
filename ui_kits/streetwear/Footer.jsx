/* global React */
function Footer() {
  const cols = [
    { title: 'Shop', items: ['Mujer', 'Hombre', 'Unisex', 'Sport', 'LM Luxe'] },
    { title: 'La casa', items: ['Lookbook', 'Drop calendar', 'About', 'Press'] },
    { title: 'Ayuda', items: ['Size guide', 'Shipping', 'Returns', 'Contact'] },
  ];
  return (
    <footer style={{ background: 'var(--ink-1000)', color: 'var(--cream)', padding: '72px 32px 28px' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48 }}>
          <div>
            <div style={{
              fontFamily: 'var(--font-impact)',
              fontSize: 48,
              lineHeight: 0.95,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              color: 'var(--cream)',
            }}>LATINO<br/>MAGIC</div>
            <div style={{
              fontFamily: 'var(--font-script)',
              fontStyle: 'italic',
              fontSize: 22,
              color: 'var(--magenta-300)',
              marginTop: 10,
            }}>Ya tu sabes.</div>
            <div style={{
              fontFamily: 'var(--font-body)',
              fontSize: 13,
              color: 'rgba(247,241,229,0.6)',
              marginTop: 22,
              maxWidth: 280,
              lineHeight: 1.55,
            }}>
              Streetwear y lujo para la cultura. Diseñado en Brooklyn, hecho en Medellín.
            </div>
            {/* Newsletter */}
            <div style={{
              display: 'flex',
              marginTop: 22,
              border: '1.5px solid rgba(247,241,229,0.3)',
              maxWidth: 320,
            }}>
              <input placeholder="Tu email, mami" style={{
                flex: 1,
                background: 'transparent',
                border: 'none',
                outline: 'none',
                padding: '12px 14px',
                fontFamily: 'var(--font-body)',
                fontSize: 13,
                color: 'var(--cream)',
              }} />
              <button style={{
                background: 'var(--magenta-500)',
                color: '#fff',
                border: 'none',
                padding: '0 18px',
                fontFamily: 'var(--font-body)',
                fontWeight: 800,
                fontSize: 11,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                cursor: 'pointer',
              }}>Join →</button>
            </div>
          </div>
          {cols.map(col => (
            <div key={col.title}>
              <div style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 800,
                fontSize: 11,
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                color: 'var(--magenta-300)',
                marginBottom: 16,
              }}>{col.title}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {col.items.map(i => (
                  <a key={i} style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 500,
                    fontSize: 14,
                    color: 'rgba(247,241,229,0.85)',
                    textDecoration: 'none',
                    cursor: 'pointer',
                  }}>{i}</a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Varsity stripes divider */}
        <div style={{ marginTop: 56 }}>
          <div style={{ height: 4, background: '#F5D000' }} />
          <div style={{ height: 8, background: '#1A3B8E' }} />
          <div style={{ height: 4, background: '#F5D000' }} />
        </div>

        <div style={{
          marginTop: 28,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontFamily: 'var(--font-body)',
          fontSize: 11,
          textTransform: 'uppercase',
          letterSpacing: '0.14em',
          color: 'rgba(247,241,229,0.5)',
        }}>
          <span>© 2026 Latino Magic · All rights reserved</span>
          <span>Para la cultura ★</span>
        </div>
      </div>
    </footer>
  );
}

window.Footer = Footer;
