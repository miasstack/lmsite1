/* global React, ReactDOM, LuxeHeader, LuxeHero, MonogramBand, AtelierGrid, ProvenanceBlock, AppointmentModal, LuxeFooter */
const { useState: useStateLuxeApp } = React;

function LuxeApp() {
  const [bookOpen, setBookOpen] = useStateLuxeApp(false);

  return (
    <div className="lm-base" style={{ background: 'var(--ink-1000)', color: 'var(--cream)', minHeight: '100vh' }}>
      <LuxeHeader onBook={() => setBookOpen(true)} />
      <main>
        <LuxeHero onBook={() => setBookOpen(true)} />
        <MonogramBand />
        <AtelierGrid />
        <ProvenanceBlock />
      </main>
      <LuxeFooter />
      <AppointmentModal open={bookOpen} onClose={() => setBookOpen(false)} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('app')).render(<LuxeApp />);
