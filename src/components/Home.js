import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import logoImage from '../assets/logo.png';
import { ReactTyped } from "react-typed";

import Services from './Services';
import About from './About';
import Contact from './Contact';
/**
 * Startseite mit einem einladenden Intro und Schwerpunkt auf kleine Unternehmen.
 */
const Home = () => {
  return (
    <section className="home">
      <div className="hero">
        <img src={logoImage} alt="Technik‑Lanz Logo" className="logo-hero" />

<section className="typed-shadow">
  <h1 className='typed'>
   <ReactTyped
      strings={[
        "Hallo ich heiße <span className='red'>Daniel Lanz</span>"
      ]}
      typeSpeed={80}
      showCursor={false}
    />
  </h1>



  <h1 className="typed">
    <ReactTyped
      strings={[
        "Willkommen bei meiner Webseite.<br/>Ich entwickle moderne React-Anwendungen.<br/>Maßgeschneiderte IT-Lösungen für dich."
      ]}
      typeSpeed={80}
      showCursor={false}
    />
  </h1>
</section>
    <br/>
        <p>
          „Moderne, individuelle Webseiten – professionell entwickelt, flexibel betreut und zu fairen Konditionen realisiert.“
        </p>
        <div className="cta-buttons">
          <Link to="/services" className="glowing-btn">
            Leistungen entdecken
          </Link>
          <Link to="/contact" className="glowing-btn">
            Kontakt aufnehmen
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;