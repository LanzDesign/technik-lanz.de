import React, { useState } from "react";
import "./Projects.css";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      name: "Vereinsverwaltungs-Software",
      category: "fullstack",
      featured: true,
      description:
        "Professionelle Fullstack-Lösung für die digitale Verwaltung von Vereinsmitgliedern. Mit individuell anpassbaren Modulen, Mitgliederdatenbank, Beitragsverwaltung und geplanter digitaler Unterschriftenfunktion.",
      longDescription:
        "Eine umfassende Web-Anwendung zur Verwaltung von Vereinsmitgliedern mit Django Backend und React Frontend. Funktionen: Mitgliederverwaltung, Beitragsabrechnung, Dokumentenverwaltung, Statistiken und Berichte. In Planung: Online-Formular mit digitaler Unterschrift für Beitrittserklärungen.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      technologies: ["Django", "React", "PostgreSQL", "REST API", "Docker"],
      status: "live",
      features: [
        "Mitgliederverwaltung mit Suchfunktion",
        "Automatische Beitragsabrechnung",
        "Dokumenten-Upload & Verwaltung",
        "Individuelle Anpassungsmöglichkeiten",
        "Responsive Dashboard",
        "🔜 Digitale Unterschriften-Funktion",
      ],
      githubUrl: "#",
      demoUrl: "#",
    },
    {
      id: 2,
      name: "Corporate Website mit Sanity CMS",
      category: "web",
      description:
        "Moderne Unternehmenswebsite entwickelt mit React und Sanity als Headless CMS. Vollständig responsive, SEO-optimiert und mit einfacher Content-Verwaltung.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      technologies: ["React", "Sanity CMS", "Tailwind CSS", "Next.js"],
      status: "live",
      features: [
        "Headless CMS Integration",
        "SEO-Optimierung",
        "Bildoptimierung",
        "Multi-Language Support",
      ],
      liveUrl: "#",
    },
    {
      id: 3,
      name: "Portfolio Website",
      category: "web",
      description:
        "Kreatives Portfolio mit React und Sanity CMS. Dynamische Inhalte, animierte Übergänge und optimierte Performance für beste User Experience.",
      image:
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80",
      technologies: ["React", "Sanity CMS", "GSAP", "CSS3"],
      status: "live",
      features: [
        "Dynamisches Portfolio",
        "Smooth Animations",
        "Lazy Loading",
        "Contact Forms",
      ],
      liveUrl: "#",
    },
    {
      id: 4,
      name: "Business Website React + Sanity",
      category: "web",
      description:
        "Professionelle Business-Website mit modernem Design, Blog-Funktion und Sanity CMS für einfache Content-Pflege.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
      technologies: ["React", "Sanity CMS", "Node.js", "CSS3"],
      status: "live",
      features: [
        "Blog-System",
        "Newsletter Integration",
        "Contact Forms",
        "Analytics Integration",
      ],
      liveUrl: "#",
    },
    {
      id: 5,
      name: "E-Commerce Projekt",
      category: "web",
      description:
        "Moderne E-Commerce-Lösung mit React, Sanity CMS und Stripe-Integration für sichere Zahlungsabwicklung.",
      image:
        "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80",
      technologies: ["React", "Sanity CMS", "Stripe", "Next.js"],
      status: "development",
      features: [
        "Produktverwaltung",
        "Warenkorb-System",
        "Stripe Payment",
        "Order Management",
      ],
      liveUrl: "#",
    },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  const featuredProject = projects.find((p) => p.featured);

  return (
    <section className="projects-section" id="projekte">
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="projects-title">Meine Projekte</h2>
          <p className="projects-subtitle">
            Von Fullstack-Anwendungen bis zu modernen Websites – hier findest du
            eine Auswahl meiner realisierten Projekte. Mehr über meine{" "}
            <a href="#leistungen" className="inline-link">Leistungen</a> und{" "}
            <a href="#über-uns" className="inline-link">meine Arbeitsweise</a>.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="project-filters">
          <button
            className={`filter-btn ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            Alle Projekte
          </button>
          <button
            className={`filter-btn ${filter === "fullstack" ? "active" : ""}`}
            onClick={() => setFilter("fullstack")}
          >
            Fullstack
          </button>
          <button
            className={`filter-btn ${filter === "web" ? "active" : ""}`}
            onClick={() => setFilter("web")}
          >
            Websites
          </button>
        </div>

        {/* Featured Project - Hero */}
        {featuredProject && filter === "all" && (
          <div className="featured-project">
            <div className="featured-content">
              <span className="featured-badge">🌟 Highlight-Projekt</span>
              <h3 className="featured-title">{featuredProject.name}</h3>
              <p className="featured-description">
                {featuredProject.longDescription}
              </p>

              <div className="featured-features">
                <h4>Funktionen & Features:</h4>
                <ul>
                  {featuredProject.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="featured-tech">
                {featuredProject.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag-large">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="featured-actions">
                <a
                  href={featuredProject.demoUrl}
                  className="featured-btn primary"
                >
                  <span>Demo ansehen</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path
                      d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"
                      strokeWidth="2"
                    />
                  </svg>
                </a>
                <a href="#kontakt" className="featured-btn secondary">
                  Mehr erfahren
                </a>
              </div>
            </div>

            <div className="featured-image">
              <img
                src={featuredProject.image}
                alt={featuredProject.name}
                className="featured-project-image"
              />
              <div className="featured-overlay">
                <span className="status-badge status-live">
                  {featuredProject.status === "live"
                    ? "🟢 Produktiv"
                    : "🟡 In Entwicklung"}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects
            .filter((p) => !p.featured || filter !== "all")
            .map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-preview">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="project-image"
                  />

                  <div className="project-overlay">
                    <div className="project-tech-tags">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span key={index} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="project-content">
                  <div className="project-category">
                    {project.category === "fullstack"
                      ? "Fullstack Application"
                      : "Website Development"}
                  </div>
                  <h3 className="project-name">{project.name}</h3>

                  <span
                    className={`project-status ${
                      project.status === "live"
                        ? "status-live"
                        : "status-development"
                    }`}
                  >
                    {project.status === "live"
                      ? "🟢 Live"
                      : "🟡 In Entwicklung"}
                  </span>

                  <p className="project-description">{project.description}</p>

                  {project.features && (
                    <ul className="project-features-list">
                      {project.features.slice(0, 3).map((feature, index) => (
                        <li key={index}>✓ {feature}</li>
                      ))}
                    </ul>
                  )}

                  <div className="project-links">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link primary"
                      >
                        <span>Ansehen</span>
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                        </svg>
                      </a>
                    )}

                    <a href="#kontakt" className="project-link">
                      <span>Details</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* CTA Section */}
        <div className="projects-cta">
          <h3>Interessiert an einem ähnlichen Projekt?</h3>
          <p>
            Lass uns gemeinsam deine Idee in die Realität umsetzen! Schau dir auch meine{" "}
            <a href="#leistungen" className="inline-link">Leistungen</a> an oder{" "}
            <a href="#kontakt" className="inline-link">kontaktiere mich</a> direkt.
          </p>
          <a href="#kontakt" className="cta-btn">
            Jetzt Projekt anfragen
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
