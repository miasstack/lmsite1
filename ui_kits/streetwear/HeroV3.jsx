/* global React */
// Product-led hero — Fashion Nova-style. The Cartagena bikini front and center
// with price + Shop now button right on the photo.
function HeroV3({ onShop }) {
  return (
    <section style={{
      position: 'relative',
      width: '100%',
      height: 'min(82vh, 820px)',
      minHeight: 580,
      overflow: 'hidden',
      background: '#0a0a0a',
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: "url('../../assets/lookbook-bikini-beach-cartagena.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center 20%',
      }} />
      {/* Right-side protection gradient (for the product card overlay) */}
      <div style={{
        position: 'absolute',
        right: 0, top: 0, bottom: 0, width: '52%',
        background: 'linear-gradient(270deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.15) 60%, rgba(0,0,0,0) 100%)',
        pointerEvents: 'none',
      }} />

      {/* Top kicker */}
      <div style={{
        position: 'absolute',
        top: 32,
        left: 40,
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        fontFamily: 'var(--font-body)',
        fontWeight: 800,
        fontSize: 10,
        textTransform: 'uppercase',
        letterSpacing: '0.28em',
        color: '#fff',
        background: 'rgba(0,0,0,0.55)',
        backdropFilter: 'blur(8px)',
        padding: '7px 12px',
      }}>
        <span style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--magenta-400)', boxShadow: '0 0 12px var(--magenta-400)' }} />
        Drop 02 · Bestseller
      </div>

      {/* Right-side product callout — Fashion Nova product banner */}
      <div style={{
        position: 'absolute',
        right: 48,
        top: '50%',
        transform: 'translateY(-50%)',
        maxWidth: 460,
        textAlign: 'left',
        color: '#fff',
      }}>
        <div style={{
          fontFamily: 'var(--font-body)',
          fontWeight: 800,
          fontSize: 11,
          textTransform: 'uppercase',
          letterSpacing: '0.28em',
          color: 'var(--magenta-300)',
          marginBottom: 18,
          textShadow: '0 1px 6px rgba(0,0,0,0.5)',
        }}>Mujer · Swim</div>

        <h1 style={{
          margin: 0,
          fontFamily: 'var(--font-impact)',
          fontSize: 112,
          lineHeight: 0.88,
          letterSpacing: '-0.025em',
          textTransform: 'uppercase',
          color: '#fff',
          textShadow: '0 2px 24px rgba(0,0,0,0.45)',
        }}>
          LM Bikini<br/>Cartagena
        </h1>

        <div style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: 14,
          marginTop: 22,
        }}>
          <div style={{
            fontFamily: 'var(--font-impact)',
            fontSize: 40,
            color: '#fff',
            lineHeight: 1,
          }}>$95</div>
          <div style={{
            fontFamily: 'var(--font-body)',
            fontSize: 13,
            color: 'rgba(255,255,255,0.75)',
            textTransform: 'uppercase',
            letterSpacing: '0.14em',
            fontWeight: 600,
          }}>3 colorways · XS–L</div>
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          marginTop: 28,
        }}>
          <button onClick={onShop} style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 800,
            fontSize: 13,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            padding: '17px 32px',
            background: '#fff',
            color: 'var(--ink-1000)',
            border: 'none',
            cursor: 'pointer',
            transition: 'background 220ms var(--ease-out)',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--magenta-300)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = '#fff'; }}>
            Shop now →
          </button>
          <a style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 700,
            fontSize: 11,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: '#fff',
            cursor: 'pointer',
            borderBottom: '1px solid rgba(255,255,255,0.5)',
            paddingBottom: 4,
          }}>View all swim</a>
        </div>
      </div>

      {/* Bottom-left quote */}
      <div style={{
        position: 'absolute',
        left: 40,
        bottom: 40,
        fontFamily: 'var(--font-script)',
        fontStyle: 'italic',
        fontSize: 22,
        color: 'rgba(255,255,255,0.85)',
        textShadow: '0 2px 12px rgba(0,0,0,0.5)',
      }}>
        Cartagena, Colombia
      </div>
    </section>
  );
}

window.HeroV3 = HeroV3;
