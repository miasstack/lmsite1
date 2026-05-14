/* global React, ReactDOM, Header, Hero, DropMarquee, CategoryStrip, ProductGrid, LookbookBand, QuickView, CartDrawer, Footer */
const { useState } = React;

function App() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [quickView, setQuickView] = useState(null);
  const [route, setRoute] = useState('Hombre');

  const addToCart = (item) => {
    setCart(c => [...c, item]);
    setCartOpen(true);
  };
  const removeFromCart = (idx) => setCart(c => c.filter((_, i) => i !== idx));

  return (
    <div className="lm-base" style={{ background: 'var(--paper)', color: 'var(--ink-900)', minHeight: '100vh' }}>
      <Header cartCount={cart.length} onOpenCart={() => setCartOpen(true)} route={route} setRoute={setRoute} />
      <main>
        <Hero onShop={() => document.getElementById('drop')?.scrollIntoView({ behavior: 'smooth' })} />
        <DropMarquee />
        <CategoryStrip setRoute={setRoute} />
        <div id="drop"><ProductGrid onQuickView={setQuickView} /></div>
        <LookbookBand />
      </main>
      <Footer />
      <QuickView product={quickView} onClose={() => setQuickView(null)} onAdd={addToCart} />
      <CartDrawer open={cartOpen} items={cart} onClose={() => setCartOpen(false)} onRemove={removeFromCart} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('app')).render(<App />);
