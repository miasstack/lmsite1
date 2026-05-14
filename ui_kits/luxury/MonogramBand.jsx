/* global React */
function MonogramBand() {
  return (
    <section style={{
      background: 'var(--ink-1000)',
      padding: 0,
      borderTop: '1px solid rgba(247,241,229,0.06)',
      borderBottom: '1px solid rgba(247,241,229,0.06)',
    }}>
      <div style={{
        height: 220,
        backgroundImage: "url('../../assets/pattern-monogram-baby-blue.jpg')",
        backgroundSize: 'auto 220px',
        backgroundRepeat: 'repeat-x',
        position: 'relative',
        filter: 'hue-rotate(190deg) saturate(0.7) brightness(0.85)',
        opacity: 0.6,
      }} />
    </section>
  );
}

window.MonogramBand = MonogramBand;
