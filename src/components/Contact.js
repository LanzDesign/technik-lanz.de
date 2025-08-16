import React, { useState } from 'react';
import './Contact.css';

/**
 * Kontaktseite mit einfachem Formular. Das Formular sendet aktuell keine Daten,
 * sondern dient als Beispiel. Für eine funktionierende Lösung kann später
 * ein Backend oder ein Drittanbieter‑Service integriert werden.
 */
const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Einfacher Feedback‑Mechanismus, der die Eingaben momentan nicht speichert.
    setStatus('Vielen Dank für Ihre Nachricht! Wir melden uns zeitnah bei Ihnen.');
  };

  return (
    <section className="contact">
      <h2>Kontakt</h2>
      <p>Haben Sie Fragen oder wünschen ein unverbindliches Angebot? Schreiben Sie uns!</p>
      <div className="contact-details">
        <p>E‑Mail: <a href="mailto:info@technik-lanz.de">info@technik‑lanz.de</a></p>
        {/* Hier können bei Bedarf weitere Kontaktmöglichkeiten wie Telefonnummer eingefügt werden */}
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">E‑Mail</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Nachricht</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit" className="btn primary">Absenden</button>
        {status && <p className="status-message">{status}</p>}
      </form>
    </section>
  );
};

export default Contact;