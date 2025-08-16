import React from 'react';
import './Services.css';

/**
 * Liste der angebotenen IT‑Dienstleistungen.
 */
const Services = () => {
  const services = [
    {
      title: 'Website‑Entwicklung',
      description:
        'Wir erstellen moderne, responsive Webseiten, die sich an Ihre Bedürfnisse anpassen und Ihre Marke stärken.',
    },
    {
      title: 'IT‑Beratung',
      description:
        'Von der Strategie bis zur Umsetzung unterstützen wir Sie bei der digitalen Transformation Ihres Unternehmens.',
    },
    {
      title: 'Netzwerk‑ & Systembetreuung',
      description:
        'Wir kümmern uns um die Einrichtung und Wartung Ihrer Systeme, damit Sie sich auf Ihr Geschäft konzentrieren können.',
    },
    {
      title: 'Support & Schulung',
      description:
        'Individuelle Schulungen und schneller Support für Sie und Ihr Team – persönlich und unkompliziert.',
    },
  ];

  return (
    <section className="services">
      <h2>Unsere Leistungen</h2>
      <p>
        Als kleiner IT‑Dienstleister im Nebengewerbe bieten wir Ihnen ein breites
        Spektrum an Services für Ihr Business.
      </p>
      <div className="service-list">
        {services.map((service, index) => (
          <div className="service-item" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;