import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: "kontakt@technik-lanz.de",
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  return (
    <section className="contact-section" id="kontakt">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">
            Kontakt in Offenburg, Lahr &amp; Ortenau
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
                <a href="tel:+491742638614" className="info-link">
                  +49 174 263 8614
                </a>
              </p>
            </div>

            <div className="info-card">
              <span className="info-icon">⏰</span>
              <h3 className="info-title">Verfügbarkeit</h3>
              <p className="info-text">
                Mo – Fr: 9:00 – 18:00 Uhr
                <br />
                Termine nach Vereinbarung
              </p>
            </div>

            <div className="info-card">
              <span className="info-icon">📍</span>
              <h3 className="info-title">Standort</h3>
              <p className="info-text">
                Offenburg, Lahr &amp; Ortenau
                <br />
                Baden-Württemberg
                <br />
                Remote &amp; vor Ort
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
                gesamter Ortenaukreis &amp;
                <br />
                Baden-Württemberg
              </p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name *</label>
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
              <label htmlFor="email" className="form-label">E-Mail *</label>
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
              <label htmlFor="subject" className="form-label">Betreff *</label>
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
              <label htmlFor="message" className="form-label">Nachricht *</label>
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

            <button
              type="submit"
              className="form-button"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Wird gesendet…" : "Nachricht senden"}
            </button>

            {status === "success" && (
              <p className="form-success">
                ✅ Vielen Dank! Deine Nachricht wurde gesendet. Ich melde mich schnellstmöglich.
              </p>
            )}
            {status === "error" && (
              <p className="form-error">
                ❌ Fehler beim Senden. Bitte schreib direkt an{" "}
                <a href="mailto:kontakt@technik-lanz.de">kontakt@technik-lanz.de</a>.
              </p>
            )}
          </form>
        </div>

        <div className="social-section">
          <h3 className="social-title">Folge mir</h3>
          <div className="social-links">
            <a
              href="https://github.com/LanzDesign"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title="GitHub"
            >
              <span>💻</span>
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
