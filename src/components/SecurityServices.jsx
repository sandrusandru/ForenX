import '../css/SecurityServices.css'

function SecurityServices() {
  return (
    <a className="service-card security-service" href="/services/security-services">
      <div className="card-top"><span className="service-number">/03</span><span className="service-icon" aria-hidden="true">⛨</span></div>
      <h3>Security Services</h3>
      <p>Cybersecurity consulting and practical support to help identify risks and strengthen defenses.</p>
      <ul><li><span>↗</span>Cybersecurity consulting</li><li><span>↗</span>Malware &amp; log analysis</li><li><span>↗</span>Digital forensics training</li></ul>
      <span className="card-link">Explore service <span>↗</span></span>
    </a>
  )
}

export default SecurityServices
