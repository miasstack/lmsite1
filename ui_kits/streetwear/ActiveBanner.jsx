/* global React */
// Activewear-focused promo banner — Latina Magic active line callout.
// Two-column: a big editorial photo on the left, copy + product chips on the right.
function ActiveBanner() {
  return (
    <section style={{ background: 'var(--ink-1000)', color: 'var(--cream)' }}>
      <div style={{
        maxWidth: 1400,
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '6fr 5fr',
        gap: 0,
        minHeight: 540,
      }}>
        <div style={{
          backgroundImage: "url('../../assets/lookbook-red-tribal-set-night.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center 25%',
          position: 'relative',
        }}>
          <div style={{
            position: 'absolute',
            top: 24,
            left: 24,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'rgba(0,0,0,0.55)',
            backdropFilter: 'blur(8px)',
            padding: '7px 12px',
            fontFamily: 'var(--font-body)',
            fontWeight: 800,
            fontSize: 10,
            textTransform: 'uppercase',
            letterSpacing: '0.28em',
            color: 'var(--magenta-300)',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--magenta-400)' }} />
            Latina Magic · Active
          </div>
        </div>

        <div style={{ padding: '64px 56px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 800,
            fontSize: 11,
            textTransform: 'uppercase',
            letterSpacing: '0.28em',
            color: 'var(--magenta-300)',
            marginBottom: 16,
          }}>Activewear</div>
          <h2 style={{
            margin: 0,
            fontFamily: 'var(--font-impact)',
            fontSize: 88,
            lineHeight: 0.92,
            letterSpacing: '-0.025em',
            textTransform: 'uppercase',
            color: 'var(--cream)',
          }}>
            Sudar<br/>con estilo.
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 15,
            lineHeight: 1.6,
            color: 'rgba(247,241,229,0.75)',
            marginTop: 22,
            maxWidth: 360,
          }}>
            Sculpting compression. Signature waistband. Hand-drawn tribal prints. Built in Medellín, tested in the gym and at the club.
          </p>

          <div style={{ display: 'flex', gap: 12, marginTop: 24, flexWrap: 'wrap' }}>
            {['Red Tribal · $145', 'Black + Gold · $155', 'Rosa Tattoo · $140', 'Sports Bra · $65'].map(c => (
              <span key={c} style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 700,
                fontSize: 11,
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                padding: '8px 14px',
                background: 'rgba(247,241,229,0.08)',
                color: 'var(--cream)',
                border: '1px solid rgba(247,241,229,0.18)',
              }}>{c}</span>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 12, marginTop: 32 }}>
            <button style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 800,
              fontSize: 12,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              padding: '16px 28px',
              background: 'var(--cream)',
              color: 'var(--ink-1000)',
              border: 'none',
              cursor: 'pointer',
            }}>Shop all active →</button>
          </div>
        </div>
      </div>
    </section>
  );
}

window.ActiveBanner = ActiveBanner;
