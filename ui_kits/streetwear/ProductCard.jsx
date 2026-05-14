/* global React */
const { useState: useStateProductCard } = React;

function ProductCard({ product, onQuickView }) {
  const [hover, setHover] = useStateProductCard(false);
  const [imgIdx, setImgIdx] = useStateProductCard(0);
  const img = product.images[hover && product.images.length > 1 ? 1 : 0];

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: '#fff',
        border: '1px solid var(--line)',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        transition: 'box-shadow 220ms var(--ease-out), transform 220ms var(--ease-out)',
        boxShadow: hover
          ? '0 1px 0 rgba(17,17,17,0.04), 0 18px 40px -10px rgba(17,17,17,0.18)'
          : '0 1px 0 rgba(17,17,17,0.04), 0 8px 24px -8px rgba(17,17,17,0.10)',
        transform: hover ? 'translateY(-3px)' : 'translateY(0)',
      }}
    >
      <div style={{
        position: 'relative',
        aspectRatio: '4/5',
        backgroundColor: product.swatch,
        backgroundImage: `url('../../${img}')`,
        backgroundSize: product.fit === 'contain' ? 'contain' : 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        overflow: 'hidden',
      }}>
        {product.tag && (
          <span style={{
            position: 'absolute',
            top: 10,
            left: 10,
            fontFamily: 'var(--font-body)',
            fontWeight: 700,
            fontSize: 10,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            padding: '5px 9px',
            background: product.tagBg || 'var(--magenta-500)',
            color: '#fff',
          }}>{product.tag}</span>
        )}
        {hover && (
          <button onClick={(e) => { e.stopPropagation(); onQuickView(product); }} style={{
            position: 'absolute',
            left: 12,
            right: 12,
            bottom: 12,
            padding: '12px 0',
            background: 'var(--ink-900)',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'var(--font-body)',
            fontWeight: 800,
            fontSize: 12,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
          }}>+ Quickview</button>
        )}
      </div>
      <div style={{ padding: '14px 14px 16px' }}>
        <div style={{
          fontFamily: 'var(--font-body)',
          fontWeight: 800,
          fontSize: 14,
          textTransform: 'uppercase',
          letterSpacing: '-0.005em',
          lineHeight: 1.2,
          color: 'var(--ink-900)',
        }}>{product.name}</div>
        <div style={{
          fontFamily: 'var(--font-body)',
          fontSize: 11,
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          color: 'var(--fg-3)',
          marginTop: 4,
        }}>{product.subtitle}</div>
        <div style={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          marginTop: 12,
        }}>
          <div style={{
            fontFamily: 'var(--font-impact)',
            fontSize: 22,
            color: 'var(--ink-900)',
          }}>${product.price}</div>
          <div style={{ display: 'flex', gap: 4 }}>
            {product.colorways.map((c, i) => (
              <span key={i} style={{ width: 10, height: 10, background: c, borderRadius: 999, border: '1px solid rgba(0,0,0,0.08)' }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

window.ProductCard = ProductCard;
