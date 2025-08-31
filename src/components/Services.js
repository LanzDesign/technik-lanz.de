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
      <h2>Meine Leistungen</h2>
      <p>
        Wir bauen und betreuen performante Webseiten – responsiv, DSGVO-konform und leicht zu pflegen.
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
              <br/>
                <div className='service-h3-bg'>
                  <h3>{service.title}</h3>
                </div>
              <br/>
                <div className='service-p-bg'>
                  <p>{service.description}</p>
                </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Services;
