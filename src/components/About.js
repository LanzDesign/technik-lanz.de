import React from 'react';
import './About.css';

/**
 * "Über uns"‑Seite, die die Philosophie und Motivation des Inhabers beschreibt.
 */
const About = () => {
  return (
    <section className="about">
      <h2>Über&nbsp;mich</h2>
      <p>
      Ich habe Technik-Lanz gegründet, weil ich davon überzeugt bin, dass eine moderne und professionell umgesetzte Webseite heute unverzichtbar ist 
      – egal ob für Selbstständige, Vereine oder Unternehmen. 
      Meine Leidenschaft gilt dem Webdesign und der Entwicklung von individuellen Online-Auftritten, 
      die nicht nur schön aussehen, sondern auch technisch zuverlässig funktionieren.
      </p>
      <p>
      Von der ersten Idee über das Design bis hin zur Umsetzung mit modernen Technologien wie React begleite ich den gesamten Prozess. 
      Mir ist es wichtig, dass Ihre Webseite nicht nur ein einmaliges Projekt bleibt, sondern langfristig gepflegt und weiterentwickelt werden kann. 
      Deshalb biete ich flexible Betreuung und verständliche Lösungen, die Sie auch ohne technisches Vorwissen nutzen können.
      </p>
      <p>
      Ich arbeite bewusst in kleiner Struktur, um nah am Kunden zu sein und auf individuelle Wünsche eingehen zu können. 
      So entsteht eine persönliche Zusammenarbeit, bei der Ihre Ziele im Mittelpunkt stehen. 
      Denn mein Anspruch ist es, dass Ihre Webseite nicht nur online ist, sondern wirklich einen Mehrwert für Sie und Ihre Besucher schafft.
      </p>
    </section>
  );
};

export default About;