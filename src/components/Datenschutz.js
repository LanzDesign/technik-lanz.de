import React, { useState } from 'react';
import './Header.css';

/**
 * Kopfzeile mit Navigation. Die Logo‑Platzhalter kann von
 * Nutzerinnen und Nutzern durch ein eigenes Logo ersetzt werden.
 */
const Datenschutz = () => {

  return (
    <div className="Datenschutz">
    <section className="about">
      <h2>Datenschutzerklärung</h2>

      <p><strong>Stand:</strong> 17.08.2025</p>

      <p>
        <strong>1. Allgemeine Hinweise</strong><br />
        Der Schutz Ihrer personenbezogenen Daten ist mir wichtig. Ich verarbeite
        Ihre Daten vertraulich und entsprechend den gesetzlichen Vorgaben der DSGVO
        sowie dieser Datenschutzerklärung.
      </p>

      <p>
        <strong>2. Verantwortlicher</strong><br />
        Technik-Lanz<br />
        Inhaber: Daniel Lanz<br />
        Vogelbeerweg 5<br />
        77656 Offenburg<br />
        Telefon: 0174 2638614<br />
        E-Mail: <a href="mailto:info@technik-lanz.de">info@technik-lanz.de</a>
      </p>

      <p>
        <strong>3. Hosting (Vercel)</strong><br />
        Diese Website wird bei <em>Vercel Inc.</em> gehostet. Beim Aufruf der Website
        werden technisch notwendige Daten (z.&nbsp;B. IP-Adresse, Datum/Uhrzeit,
        User-Agent, Referrer) in Server-Logfiles verarbeitet, um die Stabilität und
        Sicherheit des Betriebs zu gewährleisten. Die Verarbeitung erfolgt auf Basis
        von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer sicheren,
        stabilen Bereitstellung der Website).
      </p>

      <p>
        <strong>4. Domainverwaltung (IONOS)</strong><br />
        Die Domain wird über <em>IONOS SE</em> bereitgestellt. Im Rahmen der
        technischen Bereitstellung können Verbindungsdaten (z.&nbsp;B. IP-Adresse)
        verarbeitet werden. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
      </p>

      <p>
        <strong>5. Kontaktformular (EmailJS)</strong><br />
        Für das Kontaktformular nutze ich den Dienst <em>EmailJS</em>. Bei Nutzung
        werden die von Ihnen eingegebenen Daten (z.&nbsp;B. Name, E-Mail-Adresse,
        Nachricht) zur Zustellung Ihrer Anfrage verarbeitet und an EmailJS
        übermittelt. Die Verarbeitung erfolgt zur Bearbeitung Ihrer Anfrage
        (Art. 6 Abs. 1 lit. b DSGVO) bzw. aufgrund berechtigten Interesses an
        effizienter Kommunikation (Art. 6 Abs. 1 lit. f DSGVO).
      </p>

      <p>
        <strong>6. Cookies &amp; ähnliche Technologien</strong><br />
        Sofern funktional erforderlich, können Cookies bzw. vergleichbare
        Technologien eingesetzt werden (z.&nbsp;B. zur Auslieferung statischer
        Inhalte, Sicherheitsfunktionen). Soweit eine Einwilligung erforderlich ist,
        erfolgt der Einsatz auf Basis von Art. 6 Abs. 1 lit. a DSGVO; im Übrigen auf
        Art. 6 Abs. 1 lit. f DSGVO. Sie können Cookies in Ihrem Browser löschen oder
        blockieren.
      </p>

      <p>
        <strong>7. Speicherdauer</strong><br />
        Personenbezogene Daten werden nur so lange gespeichert, wie es für die
        jeweiligen Zwecke erforderlich ist oder gesetzliche Aufbewahrungspflichten
        bestehen. Server-Logs werden in der Regel kurzfristig gelöscht.
      </p>

      <p>
        <strong>8. Ihre Rechte</strong><br />
        Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der
        Verarbeitung, Datenübertragbarkeit sowie Widerspruch gegen die Verarbeitung
        Ihrer Daten (Art. 15–21 DSGVO). Zudem besteht ein Beschwerderecht bei einer
        Datenschutzaufsichtsbehörde.
      </p>

      <p>
        <strong>9. Sicherheit</strong><br />
        Ich treffe angemessene technische und organisatorische Maßnahmen, um Ihre
        Daten gegen Verlust, Missbrauch und unbefugten Zugriff zu schützen.
      </p>

      <p>
        <strong>10. Externe Empfänger &amp; Auftragsverarbeitung</strong><br />
        Sofern externe Dienstleister eingesetzt werden (z.&nbsp;B. Hosting, E-Mail-
        Versand), bestehen – soweit erforderlich – Verträge zur Auftragsverarbeitung
        gem. Art. 28 DSGVO.
      </p>

      <p>
        <strong>11. Aktualisierung dieser Erklärung</strong><br />
        Diese Datenschutzerklärung wird bei Bedarf angepasst, um sie an rechtliche
        oder technische Änderungen anzupassen.
      </p>
    </section>
    </div>
  );
};

export default Datenschutz;