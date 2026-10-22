import '../css/Home.css'

function Home() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-copy">
        <div className="eyebrow"><span className="live-dot" /> DIGITAL TRUST. PROVEN EVIDENCE.</div>
        <h1>When the digital world gets complex, <em>find clarity.</em></h1>
        <p className="hero-description">Cyber intelligence, digital forensics and technology solutions for the moments that matter.</p>
        <div className="hero-actions">
          <a className="button-primary" href="#services">Explore our services <span>↗</span></a>
          <a className="text-link" href="mailto:contact@forenxtech.com">Speak with our team <span>→</span></a>
        </div>
        <div className="hero-proof"><div className="proof-line" /><span>INDEPENDENT THINKING. EVIDENCE-LED ACTION.</span></div>
      </div>
      <div className="visual-wrap" aria-label="Abstract animated digital investigation visualization">
        <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" /><div className="radar-sweep" />
        <div className="visual-core"><div className="core-inner"><span>FX</span></div></div>
        <div className="node node-a"><i /> SIGNAL DETECTED</div>
        <div className="node node-b"><i /> EVIDENCE VERIFIED</div>
        <div className="node node-c"><i /> SYSTEMS SECURED</div>
        <div className="visual-caption"><span>FORENSIC INTELLIGENCE</span><span>13°02' N&nbsp; 80°13' E</span></div>
        <div className="scanline" />
      </div>
      <div className="hero-index"><span>01</span><span className="index-rule" /><span>03</span></div>
    </section>
  )
}

export default Home

