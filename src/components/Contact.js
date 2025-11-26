import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert(
      "Vielen Dank für deine Nachricht! Ich melde mich schnellstmöglich bei dir."
    );
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="contact-section" id="kontakt">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">
            Kontakt in Offenburg, Lahr & Ortenau
          </h2>
          <p className="contact-subtitle">
            Lass uns gemeinsam dein nächstes Projekt in Offenburg, Lahr oder der
            Ortenau verwirklichen. Ich freue mich auf deine Nachricht!
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <span className="info-icon">📧</span>
              <h3 className="info-title">E-Mail</h3>
              <p className="info-text">
                <a href="mailto:kontakt@technik-lanz.de" className="info-link">
                  kontakt@technik-lanz.de
                </a>
              </p>
            </div>

            <div className="info-card">
              <span className="info-icon">📱</span>
              <h3 className="info-title">Telefon</h3>
              <p className="info-text">
                <a href="tel:+4915012345678" className="info-link">
                  +49 150 123 456 78
                </a>
              </p>
            </div>

            <div className="info-card">
              <span className="info-icon">⏰</span>
              <h3 className="info-title">Verfügbarkeit</h3>
              <p className="info-text">
                Mo - Fr: 9:00 - 18:00 Uhr
                <br />
                Termine nach Vereinbarung
              </p>
            </div>

            <div className="info-card">
              <span className="info-icon">📍</span>
              <h3 className="info-title">Standort</h3>
              <p className="info-text">
                Offenburg, Lahr & Ortenau
                <br />
                Baden-Württemberg
                <br />
                Remote & vor Ort
              </p>
            </div>

            <div className="info-card">
              <span className="info-icon">🏢</span>
              <h3 className="info-title">Servicebereich</h3>
              <p className="info-text">
                Offenburg, Lahr, Kehl, Achern,
                <br />
                Oberkirch, Gengenbach,
                <br />
                gesamter Ortenaukreis &
                <br />
                Baden-Württemberg
              </p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Dein Name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                E-Mail *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="deine@email.de"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">
                Betreff *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-input"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Worum geht es?"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Nachricht *
              </label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Erzähl mir von deinem Projekt..."
              />
            </div>

            <button type="submit" className="form-button">
              Nachricht senden
            </button>
          </form>
        </div>

        <div className="social-section">
          <h3 className="social-title">Folge mir</h3>
          <div className="social-links">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title="GitHub"
            >
              <span>💻</span>
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title="LinkedIn"
            >
              <span>💼</span>
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title="Twitter"
            >
              <span>🐦</span>
            </a>
            <a
              href="mailto:kontakt@technik-lanz.de"
              className="social-link"
              title="E-Mail"
            >
              <span>✉️</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
