/* global React */
function ProvenanceBlock() {
  return (
    <section style={{ background: '#0a0a0a', padding: '120px 32px' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto', display: 'grid', gridTemplateColumns: '5fr 7fr', gap: 80, alignItems: 'center' }}>
        <div style={{
          aspectRatio: '4/5',
          backgroundImage: "url('../../assets/lookbook-latina-tracksuit-back.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} />
        <div>
          <div style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 700,
            fontSize: 11,
            textTransform: 'uppercase',
            letterSpacing: '0.32em',
            color: 'var(--magenta-300)',
            marginBottom: 24,
          }}>La provenencia</div>
          <h2 style={{
            margin: 0,
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontWeight: 700,
            fontSize: 64,
            lineHeight: 1,
            letterSpacing: '-0.02em',
            color: 'var(--cream)',
          }}>
            Hecho a mano,<br/>en Medellín.
          </h2>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 17,
            fontWeight: 300,
            lineHeight: 1.7,
            color: 'rgba(247,241,229,0.78)',
            marginTop: 32,
            maxWidth: 540,
            textWrap: 'pretty',
          }}>
            Every LM Atelier piece is cut, stitched, and finished by hand in our atelier in El Poblado, Medellín. We work with a team of twelve artisans — some who learned from their abuelas, all who sign their work on the lining. Each garment carries a small embroidered number: the order in which it was made, the artisan who made it.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 32,
            marginTop: 56,
            paddingTop: 40,
            borderTop: '1px solid rgba(247,241,229,0.1)',
          }}>
            {[
              ['12', 'Artisans'],
              ['200', 'Hours per piece'],
              ['100%', 'Hecho en Colombia'],
            ].map(([n, l]) => (
              <div key={l}>
                <div style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  fontWeight: 700,
                  fontSize: 52,
                  lineHeight: 1,
                  letterSpacing: '-0.02em',
                  color: 'var(--magenta-300)',
                }}>{n}</div>
                <div style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  fontSize: 11,
                  textTransform: 'uppercase',
                  letterSpacing: '0.16em',
                  color: 'rgba(247,241,229,0.6)',
                  marginTop: 8,
                }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

window.ProvenanceBlock = ProvenanceBlock;
