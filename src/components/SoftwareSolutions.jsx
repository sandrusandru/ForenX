import '../css/SoftwareSolutions.css'

function SoftwareSolutions() {
  return (
    <a className="service-card software-service" href="/services/software-solutions">
      <div className="card-top"><span className="service-number">/02</span><span className="service-icon" aria-hidden="true">⌘</span></div>
      <h3>Software Solutions</h3>
      <p>Websites, mobile applications and custom software designed around your organization’s needs.</p>
      <ul><li><span>↗</span>Websites &amp; web applications</li><li><span>↗</span>Mobile applications</li><li><span>↗</span>Custom software</li></ul>
      <span className="card-link">Explore service <span>↗</span></span>
    </a>
  )
}

export default SoftwareSolutions
