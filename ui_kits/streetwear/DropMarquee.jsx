/* global React */
function DropMarquee() {
  // 10 repeats to give plenty of overflow for the loop
  const items = [];
  for (let i = 0; i < 10; i++) {
    items.push(
      <span key={`a${i}`} style={{ fontFamily: 'var(--font-display)', fontSize: 40, color: 'var(--cream)' }}>Latino Magic</span>,
      <span key={`b${i}`} style={{ fontFamily: 'var(--font-impact)', fontSize: 36, color: 'var(--magenta-300)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Drop 02</span>,
      <span key={`c${i}`} style={{ fontFamily: 'var(--font-script)', fontStyle: 'italic', fontSize: 32, color: 'var(--cream)' }}>Es una chimba</span>,
      <span key={`d${i}`} style={{ fontFamily: 'var(--font-impact)', fontSize: 36, color: 'var(--cream)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>11 · 11 · 12pm EST</span>,
    );
  }
  return (
    <div style={{
      background: 'var(--ink-1000)',
      overflow: 'hidden',
      padding: '18px 0',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
    }}>
      <style>{`@keyframes lmscroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
      <div style={{
        display: 'inline-flex',
        gap: 48,
        alignItems: 'center',
        whiteSpace: 'nowrap',
        animation: 'lmscroll 50s linear infinite',
        paddingRight: 48,
      }}>
        {items}
        {items /* duplicate for seamless loop */}
      </div>
    </div>
  );
}

window.DropMarquee = DropMarquee;
