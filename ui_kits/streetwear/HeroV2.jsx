/* global React */
function HeroV2({ onShop }) {
  // Cinematic full-bleed hero with editorial overlay — Monastery vibe
  return (
    <section style={{
      position: 'relative',
      width: '100%',
      height: 'min(86vh, 880px)',
      minHeight: 600,
      overflow: 'hidden',
      background: 'var(--ink-1000)',
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: "url('../../assets/lookbook-latina-tracksuit-front.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center 22%',
        filter: 'brightness(0.95) saturate(1.05)',
      }} />
      {/* Cinematic bottom protection gradient */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 35%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.78) 100%)',
        pointerEvents: 'none',
      }} />
      {/* Left protection for type */}
      <div style={{
        position: 'absolute',
        left: 0, top: 0, bottom: 0, width: '46%',
        background: 'linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 100%)',
        pointerEvents: 'none',
      }} />

      {/* Top-right kicker */}
      <div style={{
        position: 'absolute',
        top: 36,
        right: 40,
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 11,
        textTransform: 'uppercase',
        letterSpacing: '0.28em',
        color: 'var(--cream)',
        background: 'rgba(0,0,0,0.5)',
        backdropFilter: 'blur(8px)',
        padding: '8px 14px',
      }}>
        <span style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--magenta-400)', boxShadow: '0 0 12px var(--magenta-400)' }} />
        Live · Drop 02 · Latina Magic
      </div>

      {/* Bottom-left editorial overlay */}
      <div style={{
        position: 'absolute',
        left: 56,
        bottom: 56,
        maxWidth: 720,
        color: 'var(--cream)',
      }}>
        <div style={{
          fontFamily: 'var(--font-script)',
          fontStyle: 'italic',
          fontSize: 32,
          color: 'var(--magenta-300)',
          marginBottom: 6,
          letterSpacing: '0.01em',
        }}>Es una chimba.</div>
        <h1 style={{
          margin: 0,
          fontFamily: 'var(--font-serif)',
          fontStyle: 'italic',
          fontWeight: 700,
          fontSize: 132,
          lineHeight: 0.86,
          letterSpacing: '-0.035em',
          color: 'var(--cream)',
          textWrap: 'balance',
        }}>
          Para la<br/>cultura.
        </h1>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 18,
          marginTop: 36,
        }}>
          <button onClick={onShop} style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 800,
            fontSize: 12,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            padding: '17px 32px',
            background: 'var(--cream)',
            color: 'var(--ink-1000)',
            border: 'none',
            cursor: 'pointer',
            transition: 'transform 220ms var(--ease-out), background 220ms var(--ease-out)',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--magenta-300)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'var(--cream)'; }}>
            Shop the drop →
          </button>
          <a style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 700,
            fontSize: 11,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--cream)',
            cursor: 'pointer',
            borderBottom: '1px solid rgba(247,241,229,0.5)',
            paddingBottom: 4,
          }}>Ver el lookbook</a>
        </div>
      </div>

      {/* Bottom-right indicator strip — like a contact-sheet */}
      <div style={{
        position: 'absolute',
        right: 40,
        bottom: 56,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: 12,
        fontFamily: 'var(--font-body)',
        color: 'rgba(247,241,229,0.8)',
        fontSize: 10,
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.28em',
      }}>
        <div>01 / 04</div>
        <div style={{ display: 'flex', gap: 4 }}>
          <span style={{ width: 28, height: 2, background: 'var(--magenta-400)' }} />
          <span style={{ width: 28, height: 2, background: 'rgba(247,241,229,0.3)' }} />
          <span style={{ width: 28, height: 2, background: 'rgba(247,241,229,0.3)' }} />
          <span style={{ width: 28, height: 2, background: 'rgba(247,241,229,0.3)' }} />
        </div>
        <div style={{ marginTop: 10, fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 14, letterSpacing: '0.02em', textTransform: 'none', fontWeight: 500 }}>
          Otoño '26 · Medellín
        </div>
      </div>
    </section>
  );
}

window.HeroV2 = HeroV2;
