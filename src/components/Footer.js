import React from "react";
import { NavLink } from "react-router-dom";
import logoImage from "../assets/logo-no-text.png";
import { FaGithub, FaLinkedin, FaArrowUp, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <img src={logoImage} alt="Technik-Lanz Logo" className="footer-logo" />
            <h3>Technik-Lanz</h3>
            <p>
              Moderne Webentwicklung aus Offenburg. Von der ersten Idee bis zum
              fertigen Projekt – professionell, zuverlässig und mit Leidenschaft.
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
                href="https://linkedin.com/comm/mynetwork/discovery-see-all?"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Navigation</h4>
            <ul className="footer-links">
              <li><a href="#home">Startseite</a></li>
              <li><a href="#projekte">Projekte</a></li>
              <li><a href="#leistungen">Leistungen</a></li>
              <li><a href="#über-uns">Über mich</a></li>
              <li><a href="#kontakt">Kontakt</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Rechtliches</h4>
            <ul className="footer-links">
              <li><NavLink to="/impressum">Impressum</NavLink></li>
              <li><NavLink to="/datenschutz">Datenschutz</NavLink></li>
              <li><NavLink to="/agb">AGB</NavLink></li>
              <li><NavLink to="/accessibility">Barrierefreiheit</NavLink></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Kontakt</h4>
            <div className="footer-contact">
              <div className="footer-contact-item">
                <FaEnvelope className="contact-icon" />
                <a href="mailto:kontakt@technik-lanz.de">kontakt@technik-lanz.de</a>
              </div>
              <div className="footer-contact-item">
                <FaPhone className="contact-icon" />
                <a href="tel:+491742638614">+49 174 263 861 4</a>
              </div>
              <div className="footer-contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span>Offenburg, Deutschland</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Technik-Lanz. Alle Rechte vorbehalten.</p>
          <button className="scroll-to-top-btn" onClick={scrollToTop} aria-label="Nach oben scrollen">
            <FaArrowUp className="scroll-icon" />
            <span>Nach oben</span>
          </button>
          <div className="footer-grid">
            <div className="circle"></div>
            <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem" }}>
              Made with passion in Offenburg
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
