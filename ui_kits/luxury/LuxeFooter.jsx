/* global React */
function LuxeFooter() {
  return (
    <footer style={{ background: '#050505', color: 'var(--cream)', paddingTop: 0 }}>
      {/* Gradient rule */}
      <div style={{ height: 2, background: 'linear-gradient(90deg, transparent 0%, #9C1AAB 30%, #E91E97 50%, #F472B6 70%, transparent 100%)' }} />

      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '64px 32px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 56 }}>
          <div>
            <img src="../../assets/logo-lm-monogram-male.png" alt="LM" style={{ height: 64, filter: 'drop-shadow(0 6px 24px rgba(233,30,151,0.35))' }} />
            <div style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: 600,
              fontSize: 12,
              color: 'var(--cream)',
              textTransform: 'uppercase',
              letterSpacing: '0.4em',
              marginTop: 16,
            }}>LM Atelier</div>
            <div style={{
              fontFamily: 'var(--font-script)',
              fontStyle: 'italic',
              fontSize: 18,
              color: 'var(--magenta-300)',
              marginTop: 6,
            }}>by Latino Magic</div>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 12,
              lineHeight: 1.65,
              color: 'rgba(247,241,229,0.55)',
              marginTop: 24,
              maxWidth: 280,
            }}>
              Carrera 35 #8a-12<br/>
              El Poblado, Medellín<br/>
              By appointment only.
            </p>
          </div>

          {[
            { title: 'The House', items: ['Maison', 'Atelier', 'Editions', 'Press'] },
            { title: 'Service', items: ['Appointments', 'Commissions', 'Care', 'Repairs'] },
            { title: 'Connect', items: ['Instagram', 'Tiktok', 'WhatsApp', 'Newsletter'] },
          ].map(col => (
            <div key={col.title}>
              <div style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 700,
                fontSize: 10,
                textTransform: 'uppercase',
                letterSpacing: '0.28em',
                color: 'var(--magenta-300)',
                marginBottom: 22,
              }}>{col.title}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {col.items.map(i => (
                  <a key={i} style={{
                    fontFamily: 'var(--font-serif)',
                    fontStyle: 'italic',
                    fontWeight: 500,
                    fontSize: 16,
                    color: 'rgba(247,241,229,0.78)',
                    textDecoration: 'none',
                    cursor: 'pointer',
                  }}>{i}</a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 64,
          paddingTop: 28,
          borderTop: '1px solid rgba(247,241,229,0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontFamily: 'var(--font-body)',
          fontSize: 10,
          textTransform: 'uppercase',
          letterSpacing: '0.24em',
          color: 'rgba(247,241,229,0.4)',
        }}>
          <span>© MMXXVI · LM Atelier · All rights reserved</span>
          <span>Hecho en Colombia · Designed in Brooklyn</span>
        </div>
      </div>
    </footer>
  );
}

window.LuxeFooter = LuxeFooter;
