/* global React, PRODUCTS, ProductCard */
function ShopTheLatest({ onQuickView }) {
  const tabs = ['Para ti', 'Nuevo', 'Oferta', 'Bikinis', 'Bombers', 'Bandidas'];
  const [active, setActive] = React.useState('Para ti');
  // PRODUCTS comes from ProductGrid.jsx — reuse
  const data = PRODUCTS;
  // crude tab filtering — display same set in different orders for the demo
  const ordered = React.useMemo(() => {
    const arr = [...data];
    if (active === 'Nuevo') return arr.filter(p => p.tag === 'New' || p.tag === 'Drop 02').concat(arr);
    if (active === 'Oferta') return arr.slice().reverse();
    if (active === 'Bikinis') return arr.filter(p => p.id.includes('bikini')).concat(arr);
    if (active === 'Bombers') return arr.filter(p => p.id.includes('bomber')).concat(arr);
    if (active === 'Bandidas') return arr.filter(p => p.id.includes('bandidas')).concat(arr);
    return arr;
  }, [active, data]);

  return (
    <section style={{ background: 'var(--ink-100)', padding: '96px 32px' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        <div style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          marginBottom: 28,
          flexWrap: 'wrap',
          gap: 16,
        }}>
          <h2 style={{
            margin: 0,
            fontFamily: 'var(--font-impact)',
            fontSize: 56,
            lineHeight: 0.92,
            letterSpacing: '-0.02em',
            textTransform: 'uppercase',
            color: 'var(--ink-900)',
          }}>Shop the latest</h2>
          <div style={{ display: 'flex', gap: 0 }}>
            {tabs.map(t => (
              <button key={t} onClick={() => setActive(t)} style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 800,
                fontSize: 12,
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                padding: '10px 18px',
                background: active === t ? 'var(--ink-900)' : 'transparent',
                color: active === t ? '#fff' : 'var(--ink-700)',
                border: 'none',
                borderBottom: active === t ? '2px solid var(--magenta-500)' : '2px solid transparent',
                cursor: 'pointer',
                transition: 'all 220ms var(--ease-out)',
              }}>{t}</button>
            ))}
          </div>
        </div>

        {/* Horizontal scroller — 4 visible, scrolls horizontally */}
        <div style={{
          display: 'grid',
          gridAutoFlow: 'column',
          gridAutoColumns: 'calc((100% - 36px) / 4)',
          gap: 12,
          overflowX: 'auto',
          paddingBottom: 14,
          scrollSnapType: 'x mandatory',
        }}>
          {ordered.slice(0, 8).map(p => (
            <div key={p.id + active} style={{ scrollSnapAlign: 'start' }}>
              <ProductCard product={p} onQuickView={onQuickView} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.ShopTheLatest = ShopTheLatest;
