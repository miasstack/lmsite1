/* global React */
function LuxeHero({ onBook }) {
  return (
    <section style={{
      background: 'var(--ink-1000)',
      position: 'relative',
      overflow: 'hidden',
      minHeight: 'calc(100vh - 84px)',
      display: 'flex',
      alignItems: 'center',
    }}>
      {/* Subtle radial pink wash */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at 30% 50%, rgba(233,30,151,0.18) 0%, transparent 55%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: 1400,
        margin: '0 auto',
        padding: '80px 64px',
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: '5fr 6fr',
        gap: 64,
        alignItems: 'center',
        width: '100%',
      }}>
        <div>
          <div style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 700,
            fontSize: 11,
            textTransform: 'uppercase',
            letterSpacing: '0.32em',
            color: 'var(--magenta-300)',
            marginBottom: 28,
          }}>Edition 01 · La Maison</div>

          <h1 style={{
            margin: 0,
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontWeight: 700,
            fontSize: 92,
            lineHeight: 0.95,
            letterSpacing: '-0.025em',
            color: 'var(--cream)',
          }}>
            The Monogram,<br/>
            <span style={{ background: 'linear-gradient(135deg,#F472B6 0%,#E91E97 50%,#9C1AAB 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              hecho a mano.
            </span>
          </h1>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 16,
            fontWeight: 300,
            lineHeight: 1.6,
            color: 'rgba(247,241,229,0.75)',
            marginTop: 32,
            maxWidth: 420,
            textWrap: 'pretty',
          }}>
            Twelve pieces. Two hundred each. Hand-cut, satin-lined, finished by hand in our Medellín atelier. The first edition from LM — the luxury house of Latino Magic.
          </p>

          <div style={{ display: 'flex', gap: 14, marginTop: 40, alignItems: 'center' }}>
            <button style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 700,
              fontSize: 12,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              padding: '16px 36px',
              background: 'linear-gradient(135deg,#9C1AAB 0%,#E91E97 55%,#F472B6 100%)',
              color: '#fff',
              border: 'none',
              borderRadius: 999,
              cursor: 'pointer',
              transition: 'transform 220ms var(--ease-out), box-shadow 220ms var(--ease-out)',
              boxShadow: '0 8px 32px -8px rgba(233,30,151,0.5)',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 14px 40px -8px rgba(233,30,151,0.7)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 8px 32px -8px rgba(233,30,151,0.5)'; }}>
              Explore Edition 01
            </button>
            <button onClick={onBook} style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              fontSize: 12,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              padding: '16px 28px',
              background: 'transparent',
              color: 'var(--cream)',
              border: '1px solid rgba(247,241,229,0.4)',
              borderRadius: 999,
              cursor: 'pointer',
            }}>Book an appointment</button>
          </div>
        </div>

        <div style={{ position: 'relative', height: 560 }}>
          <img src="../../assets/logo-lm-monogram-male.png" alt="LM monogram" style={{
            position: 'absolute',
            inset: 0,
            margin: 'auto',
            width: '85%',
            height: 'auto',
            filter: 'drop-shadow(0 30px 80px rgba(233,30,151,0.55))',
          }} />
          {/* The small italic tag */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            right: 20,
            fontFamily: 'var(--font-script)',
            fontStyle: 'italic',
            fontSize: 24,
            color: 'rgba(247,241,229,0.55)',
            letterSpacing: '0.02em',
          }}>
            Ya tu sabes.
          </div>
        </div>
      </div>
    </section>
  );
}

window.LuxeHero = LuxeHero;
