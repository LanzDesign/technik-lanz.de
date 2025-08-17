import React, { useState } from 'react';
import './Header.css';

/**
 * Kopfzeile mit Navigation. Die Logo‑Platzhalter kann von
 * Nutzerinnen und Nutzern durch ein eigenes Logo ersetzt werden.
 */
const Impressum = () => {

  return (
    <div className="Impressum">
            <section className="about">
      <h2>Impressum</h2>
      <p>
        <strong>Angaben gemäß § 5 TMG</strong>
      </p>
      <p>
        <strong>Technik-Lanz</strong>
        <br />
        Inhaber: Daniel Lanz
        <br />
        Vogelbeerweg 5
        <br />
        77656 Offenburg
      </p>
      <p>
        <strong>Kontakt</strong>
        <br />
        Telefon: (+49) 174 / 2638614
        <br />
        E-Mail:{" "}
        <a href="mailto:info@technik-lanz.de">info@technik-lanz.de</a>
      </p>
      <p>
        <strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</strong>
        <br />
        Daniel Lanz
        <br />
        Vogelbeerweg 5
        <br />
        77656 Offenburg
      </p>
    </section>
    </div>
  );
};

export default Impressum;