/* global React */
function QuickView({ product, onClose, onAdd }) {
  const [size, setSize] = React.useState(null);
  const [imgIdx, setImgIdx] = React.useState(0);
  if (!product) return null;

  return (
    <div onClick={onClose} style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,0.55)',
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 32,
      animation: 'lmFadeIn 220ms var(--ease-out)',
    }}>
      <style>{`@keyframes lmFadeIn{from{opacity:0}to{opacity:1}}@keyframes lmRise{from{transform:translateY(24px);opacity:0}to{transform:translateY(0);opacity:1}}`}</style>
      <div onClick={e => e.stopPropagation()} style={{
        background: 'var(--paper)',
        width: 'min(1000px, 100%)',
        maxHeight: '88vh',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        overflow: 'hidden',
        animation: 'lmRise 320ms var(--ease-out)',
        position: 'relative',
      }}>
        <button onClick={onClose} style={{
          position: 'absolute',
          top: 14,
          right: 14,
          width: 36,
          height: 36,
          background: 'rgba(0,0,0,0.65)',
          color: '#fff',
          border: 'none',
          fontSize: 18,
          cursor: 'pointer',
          zIndex: 2,
        }}>×</button>

        {/* Image */}
        <div style={{
          background: product.swatch,
          backgroundImage: `url('../../${product.images[imgIdx]}')`,
          backgroundSize: product.fit === 'contain' ? 'contain' : 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          aspectRatio: '4/5',
          position: 'relative',
        }}>
          {product.images.length > 1 && (
            <div style={{ position: 'absolute', bottom: 14, left: 14, display: 'flex', gap: 6 }}>
              {product.images.map((_, i) => (
                <button key={i} onClick={() => setImgIdx(i)} style={{
                  width: 30, height: 4, border: 'none', cursor: 'pointer',
                  background: i === imgIdx ? '#fff' : 'rgba(255,255,255,0.4)',
                }} />
              ))}
            </div>
          )}
        </div>

        {/* Details */}
        <div style={{ padding: '40px 36px', display: 'flex', flexDirection: 'column', overflow: 'auto' }}>
          <div style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 700,
            fontSize: 11,
            textTransform: 'uppercase',
            letterSpacing: '0.14em',
            color: 'var(--magenta-500)',
          }}>{product.subtitle}</div>
          <h2 style={{
            margin: '6px 0 0',
            fontFamily: 'var(--font-impact)',
            fontSize: 38,
            lineHeight: 1,
            letterSpacing: '-0.01em',
            textTransform: 'uppercase',
            color: 'var(--ink-900)',
          }}>{product.name}</h2>
          <div style={{
            fontFamily: 'var(--font-impact)',
            fontSize: 28,
            color: 'var(--ink-900)',
            marginTop: 14,
          }}>${product.price}</div>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 14,
            lineHeight: 1.55,
            color: 'var(--ink-700)',
            marginTop: 18,
            textWrap: 'pretty',
          }}>{product.desc}</p>

          <div style={{ marginTop: 24 }}>
            <div style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 700,
              fontSize: 11,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: 'var(--fg-3)',
              marginBottom: 8,
            }}>Talla</div>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {product.sizes.map(s => (
                <button key={s} onClick={() => setSize(s)} style={{
                  minWidth: 52,
                  padding: '11px 14px',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 700,
                  fontSize: 13,
                  letterSpacing: '0.04em',
                  background: size === s ? 'var(--ink-900)' : 'transparent',
                  color: size === s ? '#fff' : 'var(--ink-900)',
                  border: '1.5px solid var(--ink-900)',
                  cursor: 'pointer',
                }}>{s}</button>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', gap: 10, marginTop: 28 }}>
            <button onClick={() => { onAdd({ ...product, size }); onClose(); }} disabled={!size} style={{
              flex: 1,
              padding: '16px 24px',
              fontFamily: 'var(--font-body)',
              fontWeight: 800,
              fontSize: 13,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              background: size ? 'var(--ink-900)' : 'var(--ink-300)',
              color: '#fff',
              border: '2px solid ' + (size ? 'var(--ink-900)' : 'var(--ink-300)'),
              boxShadow: size ? '4px 4px 0 0 var(--magenta-500)' : 'none',
              cursor: size ? 'pointer' : 'not-allowed',
            }}>
              {size ? 'Add to bag →' : 'Pick a size'}
            </button>
          </div>

          <div style={{
            marginTop: 22,
            paddingTop: 22,
            borderTop: '1px solid var(--line)',
            fontFamily: 'var(--font-body)',
            fontSize: 11,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: 'var(--fg-3)',
            display: 'flex',
            justifyContent: 'space-between',
          }}>
            <span>Envío gratis +$150</span>
            <span>14-day returns</span>
          </div>
        </div>
      </div>
    </div>
  );
}

window.QuickView = QuickView;
