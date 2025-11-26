import React from "react";
import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Impressum from "./components/Impressum";
import Datenschutz from "./components/Datenschutz";
import AGB from "./components/AGB";
import "./App.css";
import Projects from "./components/Projects";
import logoImage from "./assets/logo.png";

/**
 * Die Hauptanwendung definiert die Navigation und das Layout der Seite.
 * Sie verwendet React Router, um zwischen verschiedenen Ansichten zu wechseln.
 */
function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/agb" element={<AGB />} />
        </Routes>
      </main>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            {/* Brand Section */}
            <div className="footer-brand">
              <img
                src={logoImage}
                alt="Technik-Lanz Logo"
                className="footer-logo"
              />
              <h3>Technik-Lanz</h3>
              <p>
                Moderne Webentwicklung mit React, Django und den neuesten
                Technologien. Dein Partner für professionelle digitale Lösungen.
              </p>
              <div className="footer-social">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                >
                  💻
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                >
                  💼
                </a>
                <a
                  href="mailto:kontakt@technik-lanz.de"
                  className="footer-social-link"
                >
                  ✉️
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <a href="#projekte">Projekte</a>
                </li>
                <li>
                  <NavLink to="/services">Leistungen</NavLink>
                </li>
                <li>
                  <NavLink to="/about">Über mich</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Kontakt</NavLink>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="footer-section">
              <h4>Services</h4>
              <ul className="footer-links">
                <li>
                  <a href="#leistungen">Webentwicklung</a>
                </li>
                <li>
                  <a href="#leistungen">Fullstack-Apps</a>
                </li>
                <li>
                  <a href="#leistungen">UI/UX Design</a>
                </li>
                <li>
                  <a href="#leistungen">CMS Integration</a>
                </li>
                <li>
                  <a href="#leistungen">Support</a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="footer-newsletter">
              <h4>Newsletter</h4>
              <p>
                Bleib auf dem Laufenden über neue Projekte und Technologien.
              </p>
              <form
                className="newsletter-form"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="Deine E-Mail"
                  className="newsletter-input"
                  required
                />
                <button type="submit" className="newsletter-button">
                  →
                </button>
              </form>
            </div>
          </div>

          <div className="footer-bottom">
            <p>
              &copy; {new Date().getFullYear()} Technik‑Lanz – Webentwickler
            </p>

            <div className="footer-grid">
              <NavLink to="/impressum">Impressum</NavLink>
              <span className="circle"></span>
              <NavLink to="/datenschutz">Datenschutz</NavLink>
              <span className="circle"></span>
              <NavLink to="/agb">AGB</NavLink>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
