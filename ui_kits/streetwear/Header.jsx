/* global React */
const { useState } = React;

function Header({ cartCount, onOpenCart, route, setRoute }) {
  const links = ['Hombre', 'Mujer', 'Unisex', 'LM Atelier', 'Lookbook'];
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50 }}>
      {/* Announce bar */}
      <div style={{
        background: 'var(--ink-1000)',
        color: 'var(--cream)',
        fontFamily: 'var(--font-body)',
        fontWeight: 600,
        fontSize: 11,
        textTransform: 'uppercase',
        letterSpacing: '0.15em',
        padding: '10px 24px',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16,
      }}>
        <span style={{ color: 'var(--magenta-300)' }}>●</span>
        <span>Drop 02 · Latina Magic · 11.11 · 12pm EST · Edición limitada de 200</span>
        <span style={{ color: 'var(--magenta-300)' }}>●</span>
      </div>

      {/* Main nav */}
      <div style={{
        background: 'rgba(251,248,242,0.92)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--line)',
        padding: '16px 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 24,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          <a onClick={() => setRoute('home')} style={{
            fontFamily: 'var(--font-impact)',
            fontSize: 22,
            textTransform: 'uppercase',
            lineHeight: 1,
            color: 'var(--ink-900)',
            cursor: 'pointer',
            letterSpacing: '-0.005em',
          }}>
            LATINO<br/>MAGIC
          </a>
          <nav style={{ display: 'flex', gap: 22 }}>
            {links.map((l, i) => (
              <a key={l} onClick={() => setRoute(l)} style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 700,
                fontSize: 12,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                cursor: 'pointer',
                color: i === 3 ? 'var(--magenta-500)' : (route === l ? 'var(--ink-900)' : 'var(--ink-600)'),
                borderBottom: route === l ? '2px solid var(--ink-900)' : '2px solid transparent',
                paddingBottom: 2,
                transition: 'color 220ms var(--ease-out)',
              }}>{l}</a>
            ))}
          </nav>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <a style={navLink}>Buscar</a>
          <a style={navLink}>Cuenta</a>
          <button onClick={onOpenCart} style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 700,
            fontSize: 11,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            padding: '8px 14px',
            background: 'var(--ink-900)',
            color: 'var(--cream)',
            border: 'none',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
          }}>
            Bolsa
            <span style={{
              background: 'var(--magenta-500)',
              color: '#fff',
              borderRadius: 999,
              padding: '2px 7px',
              fontSize: 10,
              minWidth: 16,
              textAlign: 'center',
            }}>{cartCount}</span>
          </button>
        </div>
      </div>
    </header>
  );
}

const navLink = {
  fontFamily: 'var(--font-body)',
  fontWeight: 700,
  fontSize: 11,
  textTransform: 'uppercase',
  letterSpacing: '0.12em',
  color: 'var(--ink-700)',
  cursor: 'pointer',
};

window.Header = Header;
