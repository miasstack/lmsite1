/* global React */
function AppointmentModal({ open, onClose }) {
  const [stage, setStage] = React.useState('form'); // form | done
  const [city, setCity] = React.useState('Medellín');
  const [date, setDate] = React.useState('');

  React.useEffect(() => { if (open) setStage('form'); }, [open]);

  if (!open) return null;

  return (
    <div onClick={onClose} style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,0.7)',
      backdropFilter: 'blur(8px)',
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 32,
      animation: 'lmFadeIn 220ms var(--ease-out)',
    }}>
      <style>{`@keyframes lmFadeIn{from{opacity:0}to{opacity:1}}@keyframes lmRise{from{transform:translateY(24px);opacity:0}to{transform:translateY(0);opacity:1}}`}</style>
      <div onClick={e => e.stopPropagation()} style={{
        background: 'var(--ink-900)',
        width: 'min(640px, 100%)',
        padding: '56px 56px 48px',
        position: 'relative',
        animation: 'lmRise 320ms var(--ease-out)',
        border: '1px solid rgba(247,241,229,0.08)',
      }}>
        <button onClick={onClose} style={{
          position: 'absolute',
          top: 18,
          right: 18,
          width: 32, height: 32,
          background: 'transparent',
          color: 'rgba(247,241,229,0.5)',
          border: 'none',
          fontSize: 20,
          cursor: 'pointer',
        }}>×</button>

        {stage === 'form' && (
          <React.Fragment>
            <div style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 700,
              fontSize: 11,
              textTransform: 'uppercase',
              letterSpacing: '0.32em',
              color: 'var(--magenta-300)',
              marginBottom: 18,
            }}>Private atelier</div>
            <h2 style={{
              margin: 0,
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontWeight: 700,
              fontSize: 42,
              lineHeight: 1,
              letterSpacing: '-0.02em',
              color: 'var(--cream)',
            }}>Book an appointment.</h2>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 15,
              fontWeight: 300,
              lineHeight: 1.65,
              color: 'rgba(247,241,229,0.65)',
              marginTop: 16,
              textWrap: 'pretty',
            }}>
              A private hour with our atelier team. We'll show you Edition 01 in person, take measurements, and discuss commissions.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 32 }}>
              <Field label="Name">
                <input placeholder="Cómo te llamas" style={inputLuxe} />
              </Field>
              <Field label="Email">
                <input placeholder="you@latinomagic.co" style={inputLuxe} />
              </Field>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                <Field label="City">
                  <select value={city} onChange={e => setCity(e.target.value)} style={inputLuxe}>
                    <option>Medellín</option>
                    <option>Miami</option>
                    <option>New York</option>
                    <option>Mexico City</option>
                  </select>
                </Field>
                <Field label="Date">
                  <input type="date" value={date} onChange={e => setDate(e.target.value)} style={inputLuxe} />
                </Field>
              </div>
            </div>

            <button onClick={() => setStage('done')} style={{
              marginTop: 36,
              width: '100%',
              fontFamily: 'var(--font-body)',
              fontWeight: 700,
              fontSize: 12,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              padding: '17px 36px',
              background: 'linear-gradient(135deg,#9C1AAB 0%,#E91E97 55%,#F472B6 100%)',
              color: '#fff',
              border: 'none',
              borderRadius: 999,
              cursor: 'pointer',
              boxShadow: '0 8px 32px -8px rgba(233,30,151,0.5)',
            }}>Request appointment</button>
          </React.Fragment>
        )}

        {stage === 'done' && (
          <React.Fragment>
            <div style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 700,
              fontSize: 11,
              textTransform: 'uppercase',
              letterSpacing: '0.32em',
              color: 'var(--magenta-300)',
              marginBottom: 18,
            }}>Confirmed</div>
            <h2 style={{
              margin: 0,
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontWeight: 700,
              fontSize: 48,
              lineHeight: 1,
              letterSpacing: '-0.02em',
              color: 'var(--cream)',
            }}>Hasta pronto.</h2>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 16,
              fontWeight: 300,
              lineHeight: 1.65,
              color: 'rgba(247,241,229,0.75)',
              marginTop: 20,
            }}>
              We'll write you within 24 hours to confirm. {city} atelier{date ? `, ${date}` : ''}.
            </p>
            <button onClick={onClose} style={{
              marginTop: 36,
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              fontSize: 12,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              padding: '14px 32px',
              background: 'transparent',
              color: 'var(--cream)',
              border: '1px solid rgba(247,241,229,0.4)',
              borderRadius: 999,
              cursor: 'pointer',
            }}>Close</button>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <span style={{
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 10,
        textTransform: 'uppercase',
        letterSpacing: '0.18em',
        color: 'rgba(247,241,229,0.55)',
      }}>{label}</span>
      {children}
    </label>
  );
}

const inputLuxe = {
  background: 'transparent',
  border: 'none',
  borderBottom: '1px solid rgba(247,241,229,0.25)',
  padding: '10px 0',
  fontFamily: 'var(--font-serif)',
  fontStyle: 'italic',
  fontSize: 18,
  color: 'var(--cream)',
  outline: 'none',
  width: '100%',
  colorScheme: 'dark',
};

window.AppointmentModal = AppointmentModal;
