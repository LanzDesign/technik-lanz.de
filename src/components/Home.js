import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

/**
 * Startseite mit einem einladenden Intro und Schwerpunkt auf kleine Unternehmen.
 */
const Home = () => {
  return (
    <section className="home">
      <div className="hero">
        <h1>Ihr persönlicher IT‑Dienstleister</h1>
        <p>
          Wir unterstützen kleine Unternehmen mit maßgeschneiderten IT‑Lösungen.
          Als Nebengewerbe bieten wir flexible Services zu fairen Konditionen.
        </p>
        <div className="cta-buttons">
          <Link to="/services" className="btn primary">
            Leistungen entdecken
          </Link>
          <Link to="/contact" className="btn secondary">
            Kontakt aufnehmen
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;