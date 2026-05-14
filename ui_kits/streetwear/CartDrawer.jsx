/* global React */
function CartDrawer({ open, items, onClose, onRemove }) {
  const subtotal = items.reduce((s, it) => s + it.price, 0);
  return (
    <>
      {open && (
        <div onClick={onClose} style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.4)',
          zIndex: 90,
          animation: 'lmFadeIn 220ms var(--ease-out)',
        }} />
      )}
      <aside style={{
        position: 'fixed',
        top: 0,
        right: 0,
        height: '100vh',
        width: 420,
        maxWidth: '100vw',
        background: 'var(--paper)',
        zIndex: 91,
        transform: open ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 320ms var(--ease-out)',
        display: 'flex',
        flexDirection: 'column',
        borderLeft: '1px solid var(--line)',
      }}>
        <div style={{
          padding: '20px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid var(--line)',
        }}>
          <div style={{
            fontFamily: 'var(--font-impact)',
            fontSize: 28,
            textTransform: 'uppercase',
            letterSpacing: '-0.01em',
            color: 'var(--ink-900)',
          }}>La bolsa</div>
          <button onClick={onClose} style={{
            width: 32, height: 32, background: 'transparent', border: 'none', cursor: 'pointer', fontSize: 22, color: 'var(--ink-700)',
          }}>×</button>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: '12px 24px' }}>
          {items.length === 0 ? (
            <div style={{ padding: '40px 0', textAlign: 'center' }}>
              <div style={{
                fontFamily: 'var(--font-script)',
                fontStyle: 'italic',
                fontSize: 26,
                color: 'var(--magenta-400)',
                marginBottom: 6,
              }}>Está vacía, mami.</div>
              <div style={{
                fontFamily: 'var(--font-body)',
                fontSize: 13,
                color: 'var(--fg-3)',
                marginBottom: 22,
              }}>Add something fire from the drop.</div>
              <button onClick={onClose} style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 800,
                fontSize: 12,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                padding: '14px 28px',
                background: 'var(--ink-900)',
                color: '#fff',
                border: '2px solid var(--ink-900)',
                cursor: 'pointer',
              }}>Keep shopping</button>
            </div>
          ) : (
            items.map((it, idx) => (
              <div key={idx} style={{
                display: 'flex',
                gap: 14,
                padding: '14px 0',
                borderBottom: '1px solid var(--line)',
              }}>
                <div style={{
                  width: 78,
                  height: 92,
                  background: it.swatch,
                  backgroundImage: `url('../../${it.images[0]}')`,
                  backgroundSize: it.fit === 'contain' ? 'contain' : 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  flexShrink: 0,
                }} />
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 800,
                    fontSize: 13,
                    textTransform: 'uppercase',
                    letterSpacing: '-0.005em',
                    lineHeight: 1.2,
                    color: 'var(--ink-900)',
                  }}>{it.name}</div>
                  <div style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 11,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: 'var(--fg-3)',
                    marginTop: 3,
                  }}>{it.subtitle} · Talla {it.size}</div>
                  <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{
                      fontFamily: 'var(--font-impact)',
                      fontSize: 18,
                      color: 'var(--ink-900)',
                    }}>${it.price}</div>
                    <button onClick={() => onRemove(idx)} style={{
                      background: 'transparent',
                      border: 'none',
                      fontFamily: 'var(--font-body)',
                      fontSize: 11,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      color: 'var(--fg-3)',
                      cursor: 'pointer',
                      textDecoration: 'underline',
                      textUnderlineOffset: 3,
                    }}>Remove</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div style={{ padding: 24, borderTop: '1px solid var(--line)', background: '#fff' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 14 }}>
              <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--fg-3)' }}>Subtotal</div>
              <div style={{ fontFamily: 'var(--font-impact)', fontSize: 24, color: 'var(--ink-900)' }}>${subtotal}</div>
            </div>
            <button style={{
              width: '100%',
              padding: '16px 24px',
              fontFamily: 'var(--font-body)',
              fontWeight: 800,
              fontSize: 13,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              background: 'var(--ink-900)',
              color: '#fff',
              border: '2px solid var(--ink-900)',
              boxShadow: '4px 4px 0 0 var(--magenta-500)',
              cursor: 'pointer',
            }}>Checkout →</button>
            <div style={{
              fontFamily: 'var(--font-body)',
              fontSize: 11,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: 'var(--fg-3)',
              marginTop: 12,
              textAlign: 'center',
            }}>{subtotal >= 150 ? '✓ Envío gratis incluido' : `Add $${150 - subtotal} for free shipping`}</div>
          </div>
        )}
      </aside>
    </>
  );
}

window.CartDrawer = CartDrawer;
