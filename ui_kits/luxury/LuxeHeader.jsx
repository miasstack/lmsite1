/* global React */
function LuxeHeader({ onBook }) {
  const links = ['Maison', 'Atelier', 'Hombre', 'Mujer', 'Editions'];
  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(10,10,10,0.78)',
      backdropFilter: 'blur(22px)',
      WebkitBackdropFilter: 'blur(22px)',
      borderBottom: '1px solid rgba(247,241,229,0.08)',
    }}>
      <div style={{
        maxWidth: 1400,
        margin: '0 auto',
        padding: '20px 32px',
        display: 'grid',
        gridTemplateColumns: '1fr auto 1fr',
        alignItems: 'center',
        gap: 24,
      }}>
        <nav style={{ display: 'flex', gap: 22 }}>
          {links.map((l, i) => (
            <a key={l} style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              fontSize: 11,
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
              color: i === 0 ? 'var(--cream)' : 'rgba(247,241,229,0.55)',
              cursor: 'pointer',
            }}>{l}</a>
          ))}
        </nav>

        <a style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
          <img src="../../assets/logo-lm-monogram-male.png" alt="LM" style={{ height: 42, width: 'auto' }} />
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            lineHeight: 1,
          }}>
            <span style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: 600,
              fontSize: 12,
              color: 'var(--cream)',
              textTransform: 'uppercase',
              letterSpacing: '0.4em',
            }}>LM Atelier</span>
            <span style={{
              fontFamily: 'var(--font-script)',
              fontStyle: 'italic',
              fontSize: 11,
              color: 'var(--magenta-300)',
              marginTop: 4,
            }}>by Latino Magic</span>
          </div>
        </a>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 16, alignItems: 'center' }}>
          <a style={navLuxe}>Search</a>
          <a style={navLuxe}>Bag</a>
          <button onClick={onBook} style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 700,
            fontSize: 11,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            padding: '11px 22px',
            background: 'transparent',
            color: 'var(--cream)',
            border: '1px solid rgba(247,241,229,0.4)',
            borderRadius: 999,
            cursor: 'pointer',
            transition: 'all 220ms var(--ease-out)',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--magenta-300)'; e.currentTarget.style.color = 'var(--magenta-300)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(247,241,229,0.4)'; e.currentTarget.style.color = 'var(--cream)'; }}>
            Book appointment
          </button>
        </div>
      </div>
    </header>
  );
}

const navLuxe = {
  fontFamily: 'var(--font-body)',
  fontWeight: 600,
  fontSize: 11,
  textTransform: 'uppercase',
  letterSpacing: '0.16em',
  color: 'rgba(247,241,229,0.7)',
  cursor: 'pointer',
};

window.LuxeHeader = LuxeHeader;
