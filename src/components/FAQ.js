import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Was kostet eine professionelle Website?",
      answer:
        "Die Kosten variieren je nach Umfang und Anforderungen. Eine einfache Website startet ab 1.500€, während umfangreichere Projekte mit CMS und individuellen Features ab 3.500€ beginnen. Ich erstelle dir gerne ein individuelles Angebot nach einem kostenlosen Erstgespräch.",
    },
    {
      question: "Wie lange dauert die Entwicklung einer Website?",
      answer:
        "Eine einfache Website ist in 2-4 Wochen fertig. Umfangreichere Projekte mit Full-Stack Development benötigen 6-12 Wochen. Die genaue Dauer hängt von deinen Anforderungen und der Komplexität ab.",
    },
    {
      question: "Welche Technologien verwendest du?",
      answer:
        "Ich spezialisiere mich auf moderne Technologien wie React, Next.js für das Frontend und Django, Node.js für das Backend. Für CMS-Lösungen setze ich auf Sanity CMS oder WordPress. Alle Projekte sind responsive und SEO-optimiert.",
    },
    {
      question: "Bietest du auch Wartung und Support an?",
      answer:
        "Ja, ich biete umfassende Wartungs- und Support-Pakete ab 150€/Monat an. Diese umfassen regelmäßige Updates, Backups, Security-Patches, Performance-Optimierung und technischen Support bei Problemen.",
    },
    {
      question: "Wo bist du tätig?",
      answer:
        "Ich bin hauptsächlich in Offenburg, Lahr und der Ortenau tätig. Aber ich arbeite auch remote für Kunden in ganz Deutschland und darüber hinaus. Persönliche Treffen sind in der Region möglich.",
    },
    {
      question: "Kann ich meine Website selbst bearbeiten?",
      answer:
        "Ja! Bei CMS-basierten Projekten (Sanity, WordPress) kannst du Inhalte selbst verwalten. Ich biete dir eine ausführliche Einführung und erstelle eine Dokumentation. Bei Fragen stehe ich jederzeit zur Verfügung.",
    },
    {
      question: "Was ist der Unterschied zwischen Frontend und Full-Stack?",
      answer:
        "Frontend-Entwicklung umfasst nur die sichtbare Oberfläche (Design, Benutzerinteraktion). Full-Stack beinhaltet zusätzlich Backend (Server, Datenbank, API), perfekt für Apps mit User-Login, Datenverarbeitung oder komplexer Logik.",
    },
    {
      question: "Bietest du auch E-Commerce Lösungen an?",
      answer:
        "Ja! Ich entwickle moderne E-Commerce-Websites mit Stripe-Integration, Produktverwaltung, Warenkorb-System und sicherer Zahlungsabwicklung. Ideal für Online-Shops und digitale Produkte.",
    },
    {
      question: "Wie sieht der Projektablauf aus?",
      answer:
        "1. Kostenloses Erstgespräch & Beratung, 2. Angebot & Konzept, 3. Design & Planung, 4. Entwicklung mit regelmäßigen Updates, 5. Testing & Feedback, 6. Launch & Übergabe. Du bist in jedem Schritt involviert.",
    },
    {
      question: "Sind deine Websites SEO-optimiert?",
      answer:
        "Absolut! Alle Websites werden mit Best Practices für SEO entwickelt: schnelle Ladezeiten, mobile Optimierung, sauberer Code, Meta-Tags, Schema.org Markup und lokale SEO für die Region Offenburg, Lahr & Ortenau.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        <div className="faq-header">
          <h2 className="faq-title">Häufig gestellte Fragen</h2>
          <p className="faq-subtitle">
            Finde schnell Antworten auf die wichtigsten Fragen zur
            Webentwicklung
          </p>
        </div>

        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? "active" : ""}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              <div
                className={`faq-answer ${openIndex === index ? "open" : ""}`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-cta">
          <p>Deine Frage ist nicht dabei?</p>
          <a href="#kontakt" className="faq-cta-btn">
            Jetzt persönlich beraten lassen
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
