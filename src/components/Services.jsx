import React from "react";
import "./Services.css";
import ScrollReveal from "./ScrollReveal";

const Services = () => {
  const services = [
    {
      id: 1,
      icon: "🌐",
      name: "Webentwicklung",
      description:
        "Moderne, responsive Websites mit React, Next.js und den neuesten Technologien. Von der Landingpage bis zur komplexen Webanwendung.",
      features: [
        "Responsive Design für alle Geräte",
        "SEO-optimiert",
        "Schnelle Ladezeiten",
        "Moderne Technologien (React, Next.js)",
        "Content Management System",
      ],
      price: "ab 1.500€",
      link: "#kontakt",
    },
    {
      id: 2,
      icon: "⚙️",
      name: "Fullstack-Entwicklung",
      description:
        "Komplette Webanwendungen mit Frontend und Backend. Datenbanken, APIs, User-Management und individuelle Business-Logik.",
      features: [
        "Django/Node.js Backend",
        "PostgreSQL/MongoDB Datenbank",
        "REST API Entwicklung",
        "User Authentication",
        "Admin Dashboard",
      ],
      price: "ab 3.500€",
      link: "#kontakt",
    },
    {
      id: 3,
      icon: "🎨",
      name: "UI/UX Design",
      description:
        "Professionelles Design das begeistert. Von der ersten Idee bis zum fertigen Prototypen mit modernen Design-Tools.",
      features: [
        "Modern & benutzerfreundlich",
        "Wireframes & Prototypen",
        "Brand Identity",
        "Design System",
        "Responsive Layouts",
      ],
      price: "ab 800€",
      link: "#kontakt",
    },
    {
      id: 4,
      icon: "🔧",
      name: "Wartung & Support",
      description:
        "Zuverlässige Betreuung deiner Website. Updates, Backups, Security-Patches und technischer Support.",
      features: [
        "Regelmäßige Updates",
        "Backup & Security",
        "Performance-Optimierung",
        "Bug-Fixes",
        "Technischer Support",
      ],
      price: "ab 150€/Monat",
      link: "#kontakt",
    },
    {
      id: 5,
      icon: "📱",
      name: "CMS Integration",
      description:
        "Headless CMS wie Sanity oder WordPress für einfache Content-Verwaltung. Du behältst die volle Kontrolle über deine Inhalte.",
      features: [
        "Sanity CMS / WordPress",
        "Intuitive Bedienung",
        "Multi-User Support",
        "Media Management",
        "Versionierung",
      ],
      price: "ab 1.200€",
      link: "#kontakt",
    },
    {
      id: 6,
      icon: "🚀",
      name: "Performance-Optimierung",
      description:
        "Schnellere Ladezeiten, besseres Google-Ranking. Analyse und Optimierung deiner bestehenden Website.",
      features: [
        "Speed-Optimierung",
        "SEO-Verbesserung",
        "Core Web Vitals",
        "Code-Optimierung",
        "Caching-Strategien",
      ],
      price: "ab 600€",
      link: "#kontakt",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Beratung & Konzept",
      description:
        "Wir besprechen deine Anforderungen und erstellen ein maßgeschneidertes Konzept.",
    },
    {
      number: "2",
      title: "Design & Planung",
      description:
        "Entwicklung eines modernen Designs und detaillierter Projektplanung.",
    },
    {
      number: "3",
      title: "Entwicklung",
      description:
        "Umsetzung mit modernsten Technologien und regelmäßigen Updates.",
    },
    {
      number: "4",
      title: "Testing & Launch",
      description:
        "Ausführliche Tests und professioneller Launch deines Projekts.",
    },
  ];

  return (
    <section className="services-section" id="leistungen">
      <div className="services-container">
        <ScrollReveal>
          <div className="services-header">
            <h2 className="services-title">Meine Leistungen</h2>
            <p className="services-subtitle">
              Von der ersten Idee bis zum fertigen Produkt – ich biete dir
              umfassende Webentwicklungs-Dienstleistungen aus einer Hand.
            </p>
          </div>
        </ScrollReveal>

        <div className="services-grid">
          {services.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 0.08}>
              <div className="service-card">
                <span className="service-icon">{service.icon}</span>
                <h3 className="service-name">{service.name}</h3>
                <p className="service-description">{service.description}</p>

                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>

                <div className="service-price">{service.price}</div>

                <a href={service.link} className="service-link">
                  <span>Mehr erfahren</span>
                  <span>→</span>
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="process-section">
            <h3 className="process-title">So arbeite ich</h3>
            <div className="process-steps">
              {processSteps.map((step, index) => (
                <ScrollReveal key={step.number} delay={index * 0.1}>
                  <div className="process-step">
                    <div className="step-number">{step.number}</div>
                    <h4 className="step-title">{step.title}</h4>
                    <p className="step-description">{step.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Services;
