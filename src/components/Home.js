import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import logoImage from '../assets/logo.png';
/**
 * Startseite mit einem einladenden Intro und Schwerpunkt auf kleine Unternehmen.
 */
const Home = () => {
  return (
    <section className="home">
      <div className="hero">
        <img src={logoImage} alt="Technik‑Lanz Logo" className="logo-hero" />
        <h1>Wo Technik auf Design trifft</h1>
        <p>
          Wir bringen kleine Unternehmen online: mit modernen, maßgeschneiderten Webseiten, die flexibel betreut und zu fairen Preisen realisiert werden.
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