import React from 'react';
import './About.css';

/**
 * "Über uns"‑Seite, die die Philosophie und Motivation des Inhabers beschreibt.
 */
const About = () => {
  return (
    <section className="about">
      <h2>Über&nbsp;uns</h2>
      <p>
        Technik‑Lanz wurde gegründet, um kleinen Unternehmen einen einfachen und
        zuverlässigen Zugang zu professionellen IT‑Dienstleistungen zu
        ermöglichen. Als Nebengewerbe geführt, können wir flexibel und
        kundenorientiert auf individuelle Bedürfnisse eingehen.
      </p>
      <p>
        Unsere Leidenschaft gilt der Technik und dem Wunsch, diese
        verständlich und zugänglich zu machen. Wir legen Wert auf persönliche
        Betreuung und langfristige Zusammenarbeit – denn Ihr Erfolg ist unser
        Antrieb.
      </p>
    </section>
  );
};

export default About;