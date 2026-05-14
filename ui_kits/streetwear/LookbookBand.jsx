/* global React */
function LookbookBand() {
  return (
    <section style={{ background: 'var(--ink-1000)', padding: '96px 0' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 32px' }}>
        <div style={{
          fontFamily: 'var(--font-body)',
          fontWeight: 800,
          fontSize: 11,
          textTransform: 'uppercase',
          letterSpacing: '0.28em',
          color: 'var(--magenta-300)',
          marginBottom: 14,
        }}>Lookbook · Otoño '26</div>
        <h2 style={{
          margin: '0 0 36px',
          fontFamily: 'var(--font-impact)',
          fontSize: 64,
          lineHeight: 0.95,
          letterSpacing: '-0.025em',
          textTransform: 'uppercase',
          color: 'var(--cream)',
        }}>
          La calle es <span style={{ color: 'var(--magenta-300)' }}>tuya.</span>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 12, height: 540 }}>
          <div style={{
            backgroundImage: "url('../../assets/lookbook-mens-bandera-tracksuit-front.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center 20%',
          }} />
          <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: 12 }}>
            <div style={{
              backgroundImage: "url('../../assets/lookbook-stairs-latina-tracksuit.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center 15%',
            }} />
            <div style={{
              backgroundImage: "url('../../assets/lookbook-baroque-set-front.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center 15%',
            }} />
          </div>
          <div style={{
            backgroundImage: "url('../../assets/lookbook-bikini-beach-cartagena.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center 20%',
          }} />
        </div>
        <div style={{ marginTop: 28, textAlign: 'center' }}>
          <button style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 800,
            fontSize: 12,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            padding: '16px 36px',
            background: 'transparent',
            color: 'var(--cream)',
            border: '1.5px solid rgba(247,241,229,0.4)',
            cursor: 'pointer',
          }}>View the full lookbook →</button>
        </div>
      </div>
    </section>
  );
}

window.LookbookBand = LookbookBand;
