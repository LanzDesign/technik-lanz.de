import React from "react";
import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Impressum from "./components/Impressum";
import Datenschutz from "./components/Datenschutz";
import AGB from "./components/AGB";
import "./App.css";
import logoImage from "./assets/logo.png";
import CookieBanner from "./components/CookieBanner";
import CookieSettings from "./components/CookieSettings";
import Accessibility from "./components/Accessibility";
import ThemeToggle from "./components/ThemeToggle";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

/**
 * Die Hauptanwendung definiert die Navigation und das Layout der Seite.
 * Sie verwendet React Router, um zwischen verschiedenen Ansichten zu wechseln.
 */
function App() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <Navbar />
      <ThemeToggle />
      <Accessibility />
      <CookieSettings />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/impressum" element={<Impressum />} />
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
                  href="https://github.com/LanzDesign"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://facebook.com/techniklanz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://instagram.com/technik.lanz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://youtube.com/@techniklanz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label="YouTube"
                >
                  <FaYoutube />
                </a>
                <a
                  href="mailto:info@technik-lanz.de"
                  className="footer-social-link"
                  aria-label="Email"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#projekte">Projekte</a>
                </li>
                <li>
                  <a href="#leistungen">Leistungen</a>
                </li>
                <li>
                  <a href="#über-uns">Über mich</a>
                </li>
                <li>
                  <a href="#kontakt">Kontakt</a>
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

            {/* Contact Info */}
            <div className="footer-section">
              <h4>Kontakt</h4>
              <div className="footer-contact">
                <div className="footer-contact-item">
                  <span className="contact-icon">📧</span>
                  <a href="mailto:info@technik-lanz.de">info@technik-lanz.de</a>
                </div>
                <div className="footer-contact-item">
                  <span className="contact-icon">📱</span>
                  <a href="tel:+491742638614">+49 174 263 8614</a>
                </div>
                <div className="footer-contact-item">
                  <span className="contact-icon">📍</span>
                  <span>Deutschland</span>
                </div>
                <div className="footer-contact-item">
                  <span className="contact-icon">⏰</span>
                  <span>Mo - Fr: 9:00 - 18:00</span>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>
              &copy; {new Date().getFullYear()} Technik‑Lanz – Webentwickler
            </p>

            <button className="scroll-to-top-btn" onClick={scrollToTop}>
              <span className="scroll-icon">
                <FaArrowUp />
              </span>
              <span>Scroll to Top</span>
            </button>

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

      <CookieBanner />
    </div>
  );
}

export default App;
