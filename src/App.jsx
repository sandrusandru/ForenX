import serviceDetails from './data/serviceDetails.js'
import Home from './components/Home.jsx'
import ServiceDetail from './components/ServiceDetail.jsx'
import CyberIntelligenceForensics from './components/CyberIntelligenceForensics.jsx'
import SoftwareSolutions from './components/SoftwareSolutions.jsx'
import SecurityServices from './components/SecurityServices.jsx'

function App() {
  const currentPath = window.location.pathname.replace(/\/+$/, '') || '/'
  const selectedService = serviceDetails.find((service) => service.path === currentPath)

  return (
    <>
      <header className="topbar">
        <a className="brand" href="/#home" aria-label="ForenX home">
          <span className="brand-mark">F<span>X</span></span>
          <span className="brand-name">FORENX<span>TECHNOLOGIES</span></span>
        </a>
        <nav aria-label="Main navigation">
          <a href="/#services">What we do</a>
          <a href="/#contact">Contact</a>
        </nav>
        <a className="top-cta" href="mailto:contact@forenxtech.com">Talk to an expert <span>↗</span></a>
      </header>

      <main>
        {selectedService ? (
          <ServiceDetail service={selectedService} />
        ) : (
          <>
            <Home />
            <section className="services-section" id="services">
              <div className="section-heading">
                <div>
                  <div className="eyebrow dark-eyebrow">HOW WE HELP</div>
                  <h2>Clarity for every<br /><em>digital challenge.</em></h2>
                </div>
                <p>From investigations to secure digital products, we bring the expertise to help you move ahead with confidence.</p>
              </div>
              <div className="service-grid">
                <CyberIntelligenceForensics />
                <SoftwareSolutions />
                <SecurityServices />
              </div>
            </section>
          </>
        )}
      </main>

      <footer className="site-footer" id="contact">
        <div className="footer-main">
          <a className="brand footer-brand" href="/#home" aria-label="ForenX home">
            <span className="brand-mark">F<span>X</span></span>
            <span className="brand-name">FORENX<span>TECHNOLOGIES</span></span>
          </a>
          <div className="footer-message">
            <div className="eyebrow"><span className="live-dot" /> CHENNAI, INDIA</div>
            <h2>Let’s make sense<br />of what’s next.</h2>
          </div>
          <div className="footer-contact">
            <span className="footer-label">GET IN TOUCH</span>
            <a href="mailto:contact@forenxtech.com">contact@forenxtech.com <span>↗</span></a>
            <a href="tel:+917397490221">+91 73974 90221</a>
            <span className="address">Arcot Road, Valasaravakkam<br />Chennai, Tamil Nadu, India</span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 ForenX Technologies Pvt. Ltd.</span>
          <span>Intelligence with integrity.</span>
          <a href="/#home">BACK TO TOP ↑</a>
        </div>
      </footer>
    </>
  )
}

export default App
