import '../css/ServiceDetail.css'

function ServiceDetail({ service }) {
  return (
    <section className="service-detail">
      <div className="service-detail-hero">
        <a className="back-to-services" href="/#services">← Back to all services</a>
        <div className="eyebrow"><span className="live-dot" /> {service.category}</div>
        <span className="detail-number">/{service.number}</span>
        <h1>{service.title}</h1>
        <p>{service.intro}</p>
        <a className="button-primary" href="mailto:contact@forenxtech.com">Discuss your requirements <span>↗</span></a>
      </div>
      <div className="service-detail-content">
        <div className="detail-intro">
          <span className="detail-kicker">HOW WE CAN HELP</span>
          <h2>Expertise for your<br /><em>next step.</em></h2>
        </div>
        <div className="detail-topics">
          {service.sections.map((section, index) => (
            <article className="detail-topic" key={section.title}>
              <span className="topic-number">0{index + 1}</span>
              <div>
                <h3>{section.title}</h3>
                <ul>{section.items.map((item) => <li key={item}><span>↗</span>{item}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="detail-contact">
        <div><span className="detail-kicker">START A CONVERSATION</span><h2>Tell us what you need.</h2></div>
        <a className="button-primary" href="mailto:contact@forenxtech.com">Contact ForenX <span>↗</span></a>
      </div>
    </section>
  )
}

export default ServiceDetail
