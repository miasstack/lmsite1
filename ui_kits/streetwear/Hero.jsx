/* global React */
function Hero({ onShop }) {
  return (
    <section style={{ background: 'var(--paper)' }}>
      <div style={{
        maxWidth: 1400,
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '7fr 5fr',
        minHeight: 600,
      }}>
        <div style={{
          backgroundImage: "url('../../assets/lookbook-latina-tracksuit-front.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
          position: 'relative',
        }}>
          {/* Bottom protection gradient for type, even though we put type in adjacent column */}
          <div style={{
            position: 'absolute',
            left: 24,
            top: 24,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            background: 'rgba(0,0,0,0.55)',
            color: 'var(--cream)',
            fontFamily: 'var(--font-body)',
            fontWeight: 700,
            fontSize: 11,
            textTransform: 'uppercase',
            letterSpacing: '0.14em',
            padding: '7px 12px',
            backdropFilter: 'blur(10px)',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--magenta-300)' }} />
            Live · Drop 02
          </div>
        </div>

        <div style={{
          padding: '64px 56px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: 'var(--paper)',
        }}>
          <div style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 700,
            fontSize: 12,
            textTransform: 'uppercase',
            letterSpacing: '0.18em',
            color: 'var(--magenta-500)',
            marginBottom: 16,
          }}>
            Drop 02 · Latina Magic
          </div>
          <h1 style={{
            margin: 0,
            fontFamily: 'var(--font-impact)',
            fontWeight: 400,
            fontSize: 88,
            lineHeight: 0.92,
            letterSpacing: '-0.02em',
            textTransform: 'uppercase',
            color: 'var(--ink-900)',
          }}>
            Para la<br/>cultura.
          </h1>
          <div style={{
            fontFamily: 'var(--font-script)',
            fontStyle: 'italic',
            fontSize: 32,
            color: 'var(--magenta-400)',
            marginTop: 14,
          }}>
            Es una chimba.
          </div>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 16,
            lineHeight: 1.55,
            color: 'var(--ink-700)',
            marginTop: 22,
            maxWidth: 360,
            textWrap: 'pretty',
          }}>
            All-over-print, hooded, hecho con orgullo en Medellín. The Latina capsule is live now — 200 pieces, no restock.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 30 }}>
            <button onClick={onShop} style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 800,
              fontSize: 12,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              padding: '16px 28px',
              background: 'var(--ink-900)',
              color: '#fff',
              border: '2px solid var(--ink-900)',
              boxShadow: '4px 4px 0 0 var(--magenta-500)',
              cursor: 'pointer',
            }}>
              Shop the drop →
            </button>
            <button style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 700,
              fontSize: 12,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              padding: '16px 28px',
              background: 'transparent',
              color: 'var(--ink-900)',
              border: '1.5px solid var(--ink-900)',
              cursor: 'pointer',
            }}>
              View lookbook
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
