import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        'service_9k2c3gd',   // z.B. "service_xxx"
        'template_7tx1g8m',  // z.B. "template_xxx"
        form.current,
        'b_iYiIOmnKTMwo9V3'    // z.B. "abcd1234..."
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus('Vielen Dank für Ihre Nachricht! Wir melden uns zeitnah bei Ihnen.');
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setStatus('Es gab ein Problem beim Versenden. Bitte versuchen Sie es später erneut.');
        }
      );
  };

  return (
    <section className="contact">
      <h2>Kontakt</h2>
      <p>Haben Sie Fragen oder wünschen ein unverbindliches Angebot? Schreiben Sie mir!</p>
      <div className="contact-details">
        <p>
          E-Mail: <a href="mailto:info@technik-lanz.de">info@technik-lanz.de</a>
        </p>
      </div>
      <form ref={form} className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="user_name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-Mail</label>
          <input type="email" id="email" name="user_email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Nachricht</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit" className="glowing-btn submit-btn">Absenden</button>
        {status && <p className="status-message">{status}</p>}
      </form>
    </section>
  );
};

export default Contact;