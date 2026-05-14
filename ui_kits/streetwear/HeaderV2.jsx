/* global React */
function HeaderV2({ cartCount, onOpenCart, persona, setPersona }) {
  const personas = ['Mujer', 'Hombre', 'Unisex', 'Sport', 'LM Luxe'];
  const mega = {
    'Mujer':   ['Nuevo', 'Tracksuits', 'Bikinis', 'Activewear', 'Tops', 'Joggers', 'Accesorios', 'Oferta'],
    'Hombre':  ['Nuevo', 'Tracksuits', 'Tees', 'Bombers', 'Joggers', 'Shorts', 'Accesorios', 'Oferta'],
    'Unisex':  ['Nuevo', 'Tees', 'Bombers', 'Hoodies', 'Accesorios', 'Oferta'],
    'Sport':   ['Nuevo', 'Sports bras', 'Leggings', 'Sets', 'Shorts', 'Oferta'],
    'LM Luxe': ['Edition 01', 'Bombers', 'Silk', 'Hecho a mano'],
  };

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(251,248,242,0.94)', backdropFilter: 'blur(22px)', WebkitBackdropFilter: 'blur(22px)' }}>

      {/* Persona switcher */}
      <div style={{
        background: '#fff',
        borderBottom: '1px solid var(--line)',
        padding: '0 32px',
        display: 'flex',
        gap: 0,
        maxWidth: '100%',
        overflowX: 'auto',
      }}>
        {personas.map(p => (
          <a key={p} onClick={() => setPersona(p)} style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 700,
            fontSize: 11,
            textTransform: 'uppercase',
            letterSpacing: '0.18em',
            padding: '12px 18px',
            cursor: 'pointer',
            color: persona === p ? 'var(--ink-900)' : 'var(--ink-500)',
            borderBottom: persona === p ? '2px solid var(--ink-900)' : '2px solid transparent',
            background: persona === p && p === 'LM Atelier' ? 'transparent' : 'transparent',
            transition: 'all 220ms var(--ease-out)',
            whiteSpace: 'nowrap',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
          }}>
            {p === 'LM Luxe' && <span style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--magenta-500)' }} />}
            {p}
          </a>
        ))}
      </div>

      {/* Main bar — wordmark + utility */}
      <div style={{
        padding: '14px 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 24,
      }}>
        {/* Search */}
        <div style={{ flex: 1, display: 'flex', maxWidth: 320 }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            border: '1.5px solid var(--ink-900)',
            background: 'transparent',
            padding: '8px 14px',
            width: '100%',
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
            <input placeholder="Busca ‘bomber Bandera’, ‘bikini’…" style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              background: 'transparent',
              fontFamily: 'var(--font-body)',
              fontSize: 13,
              color: 'var(--ink-900)',
            }} />
          </div>
        </div>

        {/* Center wordmark */}
        <a style={{ textAlign: 'center' }}>
          <div style={{
            fontFamily: 'var(--font-impact)',
            fontSize: 32,
            lineHeight: 0.95,
            letterSpacing: '0',
            textTransform: 'uppercase',
            color: 'var(--ink-900)',
          }}>LATINO MAGIC</div>
          <div style={{
            fontFamily: 'var(--font-script)',
            fontStyle: 'italic',
            fontSize: 14,
            color: 'var(--magenta-500)',
            marginTop: 2,
          }}>Ya tu sabes.</div>
        </a>

        {/* Utility */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 18 }}>
          <a style={utilLink}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            <span>Wishlist</span>
          </a>
          <a style={utilLink}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="4"/><path d="M4 21v-1a8 8 0 0 1 16 0v1"/></svg>
            <span>Cuenta</span>
          </a>
          <button onClick={onOpenCart} style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            background: 'var(--ink-900)',
            color: '#fff',
            border: 'none',
            padding: '9px 14px',
            fontFamily: 'var(--font-body)',
            fontWeight: 700,
            fontSize: 11,
            textTransform: 'uppercase',
            letterSpacing: '0.14em',
            cursor: 'pointer',
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 6h15l-1.5 9h-12z"/><circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M6 6L4 2H1"/></svg>
            Bolsa
            <span style={{ background: 'var(--magenta-500)', color: '#fff', borderRadius: 999, padding: '1px 7px', fontSize: 10, minWidth: 16, textAlign: 'center' }}>{cartCount}</span>
          </button>
        </div>
      </div>

      {/* Mega nav (sub-categories) */}
      <nav style={{
        borderTop: '1px solid var(--line)',
        background: 'rgba(251,248,242,0.94)',
        padding: '11px 32px',
        display: 'flex',
        gap: 0,
        overflowX: 'auto',
        justifyContent: 'center',
      }}>
        {mega[persona].map((c, i) => (
          <a key={c} style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 700,
            fontSize: 11,
            textTransform: 'uppercase',
            letterSpacing: '0.16em',
            padding: '4px 18px',
            cursor: 'pointer',
            color: c === 'Oferta' ? 'var(--cw-bandera-accent)' :
                   c === 'Nuevo' ? 'var(--ink-900)' : 'var(--ink-700)',
            whiteSpace: 'nowrap',
            borderRight: i < mega[persona].length - 1 ? '1px solid var(--line)' : 'none',
          }}>
            {c === 'Nuevo' && <span style={{ marginRight: 4, color: 'var(--magenta-500)' }}>●</span>}
            {c}
          </a>
        ))}
      </nav>
    </header>
  );
}

const utilLink = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 7,
  fontFamily: 'var(--font-body)',
  fontWeight: 700,
  fontSize: 11,
  textTransform: 'uppercase',
  letterSpacing: '0.14em',
  color: 'var(--ink-800)',
  cursor: 'pointer',
};

window.HeaderV2 = HeaderV2;
