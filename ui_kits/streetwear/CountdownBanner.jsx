/* global React */
function CountdownBanner() {
  const target = React.useRef(null);
  if (!target.current) {
    // Set drop at 4 days from "now" so the timer always reads cleanly
    target.current = Date.now() + 4 * 24 * 3600 * 1000 + 5 * 3600 * 1000 + 23 * 60 * 1000;
  }
  const [now, setNow] = React.useState(Date.now());
  React.useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  const ms = Math.max(0, target.current - now);
  const d = Math.floor(ms / 86400000);
  const h = Math.floor((ms / 3600000) % 24);
  const m = Math.floor((ms / 60000) % 60);
  const s = Math.floor((ms / 1000) % 60);
  const pad = (n) => String(n).padStart(2, '0');

  return (
    <div style={{
      background: 'var(--ink-1000)',
      color: 'var(--cream)',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
      padding: '10px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 22,
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 11,
      textTransform: 'uppercase',
      letterSpacing: '0.18em',
    }}>
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
        <span style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--magenta-400)', boxShadow: '0 0 12px var(--magenta-400)' }} />
        Drop 02 · Latina Magic
      </span>
      <span style={{ color: 'rgba(255,255,255,0.4)' }}>·</span>
      <span>Edición limitada · 200 piezas</span>
      <span style={{ color: 'rgba(255,255,255,0.4)' }}>·</span>
      <span style={{ display: 'inline-flex', alignItems: 'baseline', gap: 6 }}>
        <span>Restock en</span>
        <span style={{ fontFamily: 'ui-monospace, SF Mono, monospace', fontSize: 12, color: 'var(--magenta-300)', letterSpacing: '0.05em' }}>
          {pad(d)}d · {pad(h)}h · {pad(m)}m · {pad(s)}s
        </span>
      </span>
      <a style={{
        marginLeft: 14,
        background: 'var(--magenta-500)',
        color: '#fff',
        padding: '5px 12px',
        textDecoration: 'none',
        cursor: 'pointer',
        letterSpacing: '0.16em',
      }}>Avísame →</a>
    </div>
  );
}

window.CountdownBanner = CountdownBanner;
