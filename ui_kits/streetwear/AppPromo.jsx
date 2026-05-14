/* global React */
function AppPromo() {
  return (
    <section style={{ background: 'var(--ink-1000)', color: 'var(--cream)' }}>
      <div style={{
        maxWidth: 1400,
        margin: '0 auto',
        padding: '0 32px',
        display: 'grid',
        gridTemplateColumns: '5fr 7fr',
        alignItems: 'stretch',
        minHeight: 460,
      }}>
        {/* Left: phone mockup made from monogram pattern */}
        <div style={{
          position: 'relative',
          backgroundImage: "url('../../assets/pattern-monogram-baby-blue.jpg')",
          backgroundSize: '400px auto',
          backgroundPosition: 'center',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(5,5,5,0.45) 0%, rgba(5,5,5,0.15) 50%, rgba(5,5,5,0.85) 100%)',
          }} />
          <div style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: 220,
            aspectRatio: '9/19',
            background: '#000',
            borderRadius: 32,
            border: '6px solid #1a1a1a',
            boxShadow: '0 30px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.06)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}>
            <div style={{
              flex: 1,
              backgroundImage: "url('../../assets/lookbook-latina-tracksuit-front.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center 25%',
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute',
                left: 14, top: 14,
                fontFamily: 'var(--font-impact)',
                fontSize: 16,
                color: '#fff',
                textTransform: 'uppercase',
              }}>L M</div>
              <div style={{
                position: 'absolute',
                bottom: 14, left: 14, right: 14,
                color: '#fff',
                fontFamily: 'var(--font-body)',
                fontWeight: 800,
                fontSize: 11,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}>
                <div style={{ opacity: 0.7, fontWeight: 600, marginBottom: 4 }}>Drop 02</div>
                <div>Latina Tracksuit</div>
                <div style={{
                  marginTop: 10,
                  background: 'var(--magenta-500)',
                  color: '#fff',
                  padding: '8px 12px',
                  textAlign: 'center',
                  fontSize: 10,
                  letterSpacing: '0.16em',
                }}>+ Add to bag</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: copy + store links */}
        <div style={{ padding: '80px 56px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 700,
            fontSize: 11,
            textTransform: 'uppercase',
            letterSpacing: '0.32em',
            color: 'var(--magenta-300)',
            marginBottom: 18,
          }}>The app</div>
          <h2 style={{
            margin: 0,
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontWeight: 700,
            fontSize: 64,
            lineHeight: 0.95,
            letterSpacing: '-0.02em',
            color: 'var(--cream)',
          }}>
            Compra <span style={{ color: 'var(--magenta-300)' }}>más rápido</span>.
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 16,
            fontWeight: 300,
            lineHeight: 1.65,
            color: 'rgba(247,241,229,0.7)',
            marginTop: 22,
            maxWidth: 480,
            textWrap: 'pretty',
          }}>
            Drop alerts, early access to capsules, and one-tap restocks. La app está cabrón.
          </p>

          <div style={{ display: 'flex', gap: 12, marginTop: 32 }}>
            <a style={storeBtn}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 12.5c0-2.6 2.1-3.9 2.2-3.9-1.2-1.7-3.1-2-3.7-2-1.6-.2-3.1.9-3.9.9-.8 0-2-.9-3.4-.9-1.7 0-3.4 1-4.3 2.6-1.8 3.2-.5 7.9 1.3 10.5.9 1.3 1.9 2.7 3.3 2.6 1.3-.1 1.8-.9 3.4-.9s2 .9 3.4.8c1.4 0 2.3-1.3 3.2-2.6.7-1 1.2-2 1.6-3-.1 0-3.1-1.2-3.1-4.1zM15 5.4c.7-.9 1.2-2.1 1-3.4-1.1.1-2.4.8-3.1 1.6-.6.8-1.2 2-1 3.3 1.2.1 2.4-.6 3.1-1.5z"/></svg>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: 9, opacity: 0.7, textTransform: 'uppercase', letterSpacing: '0.14em' }}>Download on the</div>
                <div style={{ fontSize: 16, fontWeight: 700, lineHeight: 1 }}>App Store</div>
              </div>
            </a>
            <a style={storeBtn}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M3 2.7v18.6c0 .6.2 1 .6 1.2L14.5 12 3.6 1.5c-.4.2-.6.6-.6 1.2zM16.8 14.3l-2.7-1.5L4.3 22.5c.4 0 .8-.1 1.3-.4l13.1-7.4-1.9-.4zM21.4 10.7l-3.6-2-3.1 3.3 3.1 3.3 3.6-2c1.2-.7 1.2-1.9 0-2.6zM5.6 1.5c-.5-.3-.9-.4-1.3-.4l9.8 9.7 2.7-1.5L5.6 1.5z"/></svg>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: 9, opacity: 0.7, textTransform: 'uppercase', letterSpacing: '0.14em' }}>Get it on</div>
                <div style={{ fontSize: 16, fontWeight: 700, lineHeight: 1 }}>Google Play</div>
              </div>
            </a>
          </div>

          <div style={{ display: 'flex', gap: 32, marginTop: 48, paddingTop: 32, borderTop: '1px solid rgba(247,241,229,0.1)' }}>
            {[
              ['4.9★', 'App Store rating'],
              ['250k+', 'Descargas'],
              ['24/7', 'Drop alerts'],
            ].map(([v, l]) => (
              <div key={l}>
                <div style={{ fontFamily: 'var(--font-impact)', fontSize: 32, color: 'var(--cream)', lineHeight: 1 }}>{v}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.16em', color: 'rgba(247,241,229,0.55)', marginTop: 6 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const storeBtn = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 10,
  padding: '12px 18px',
  background: 'transparent',
  border: '1px solid rgba(247,241,229,0.4)',
  color: 'var(--cream)',
  textDecoration: 'none',
  cursor: 'pointer',
  fontFamily: 'var(--font-body)',
};

window.AppPromo = AppPromo;
