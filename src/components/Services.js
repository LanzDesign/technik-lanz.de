import React, { useEffect, useState } from 'react';
import client from './sanityClient'; // Pfad ggf. anpassen
import './Services.css';

/**
 * Liste der angebotenen IT-Dienstleistungen (aus Sanity).
 */
const query = `*[_type == "services" && defined(title) && defined(description)]
  | order(title asc){
    _id,
    title,
    description
  }`;

const Services = () => {
  const [services, setServices] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    client
      .fetch(query)
      .then((data) => setServices(data))
      .catch((err) => {
        console.error('Sanity error:', err);
        setError(err.message || String(err));
      });
  }, []);

  return (
    <section className="services">
      <h2>Unsere Leistungen</h2>
      <p>
        Als kleiner IT-Dienstleister im Nebengewerbe bieten wir Ihnen ein breites
        Spektrum an Services für Ihr Business.
      </p>

      {error && (
        <p style={{ color: 'crimson' }}>
          Fehler beim Laden: {error}
        </p>
      )}

      {services === null && !error && (
        <p>Lade Inhalte…</p>
      )}

      {services?.length === 0 && !error && (
        <p>Noch keine Services veröffentlicht.</p>
      )}

      {services && services.length > 0 && (
        <div className="service-list">
          {services.map((service) => (
            <div className="service-item" key={service._id}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Services;
