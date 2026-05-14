/* global React, ReactDOM, CountdownBanner, HeaderV2, HeroV3, GenderSplit, DropMarquee, ShopByCategory, ShopTheLatest, ActiveBanner, ProductGrid, LookbookBand, AppPromo, QuickView, CartDrawer, Footer */
const { useState: useStateAppV2 } = React;

function AppV2() {
  const [cart, setCart] = useStateAppV2([]);
  const [cartOpen, setCartOpen] = useStateAppV2(false);
  const [quickView, setQuickView] = useStateAppV2(null);
  const [persona, setPersona] = useStateAppV2('Mujer');

  const addToCart = (item) => { setCart(c => [...c, item]); setCartOpen(true); };
  const removeFromCart = (idx) => setCart(c => c.filter((_, i) => i !== idx));

  return (
    <div className="lm-base" style={{ background: 'var(--paper)', color: 'var(--ink-900)', minHeight: '100vh' }}>
      <CountdownBanner />
      <HeaderV2 cartCount={cart.length} onOpenCart={() => setCartOpen(true)} persona={persona} setPersona={setPersona} />
      <main>
        <HeroV3 onShop={() => document.getElementById('latest')?.scrollIntoView({ behavior: 'smooth' })} />
        <GenderSplit />
        <ShopByCategory />
        <div id="latest"><ShopTheLatest onQuickView={setQuickView} /></div>
        <ActiveBanner />
        <ProductGrid onQuickView={setQuickView} title="Mujer · favoritos" filterFn={p => /tracksuit-latina|bikini|activewear|sports-bra/.test(p.id)} filters={['Todo', 'Bikinis', 'Activewear', 'Tops', 'Tracksuits']} />
        <LookbookBand />
        <DropMarquee />
        <AppPromo />
      </main>
      <Footer />
      <QuickView product={quickView} onClose={() => setQuickView(null)} onAdd={addToCart} />
      <CartDrawer open={cartOpen} items={cart} onClose={() => setCartOpen(false)} onRemove={removeFromCart} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('app')).render(<AppV2 />);
