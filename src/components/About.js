import React from "react";
import "./About.css";

const About = () => {
  const skills = [
    {
      category: "Frontend",
      icon: "💻",
      items: [
        "React & Next.js",
        "JavaScript/TypeScript",
        "HTML5 & CSS3",
        "Tailwind CSS",
        "GSAP Animations",
      ],
    },
    {
      category: "Backend",
      icon: "⚙️",
      items: [
        "Django & Python",
        "Node.js & Express",
        "PostgreSQL",
        "REST APIs",
        "Authentication",
      ],
    },
    {
      category: "Tools & Workflow",
      icon: "🛠️",
      items: ["Git & GitHub", "Docker", "VS Code", "Figma", "Sanity CMS"],
    },
  ];

  const stats = [
    { number: "3+", label: "Jahre Erfahrung" },
    { number: "30+", label: "Projekte" },
    { number: "15+", label: "Kunden" },
    { number: "100%", label: "Qualität" },
  ];

  return (
    <section className="about-section" id="über-uns">
      <div className="about-container">
        <div className="about-content">
          <div className="about-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80"
              alt="Webentwickler Workspace Offenburg"
              className="about-image"
            />
          </div>

          <div className="about-text">
            <h2 className="about-title">Über mich</h2>
            <p className="about-subtitle">
              Webentwickler & Full-Stack Developer in Offenburg, Lahr & Ortenau
            </p>

            <p className="about-description">
              Hallo! Ich bin Daniel Lanz, ein leidenschaftlicher Webentwickler
              aus der Region Offenburg, Lahr und Ortenau. Seit über 3 Jahren
              entwickle ich maßgeschneiderte digitale Lösungen für Unternehmen
              und Privatpersonen in Baden-Württemberg.
            </p>

            <p className="about-description">
              Meine Expertise liegt in der Entwicklung von performanten
              React-Anwendungen und komplexen Full-Stack-Projekten. Als
              Webentwickler in Offenburg, Lahr und der Ortenau liebe ich es,
              innovative Ideen in funktionale, benutzerfreundliche Websites zu
              verwandeln.
            </p>

            <div className="about-highlight">
              <p>
                "Qualität und Kundenzufriedenheit stehen bei mir an erster
                Stelle. Jedes Projekt wird mit Sorgfalt, Kreativität und
                technischer Expertise umgesetzt."
              </p>
            </div>

            <p className="about-description">
              Von der ersten Idee bis zum fertigen Produkt begleite ich Kunden
              aus Offenburg, Lahr, der Ortenau und ganz Baden-Württemberg durch
              den gesamten Entwicklungsprozess. Dabei setze ich auf transparente
              Kommunikation, agile Methoden und modernste Technologien.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="skills-section">
          <h3 className="skills-title">Technologien & Skills</h3>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-category">
                <h4 className="skill-category-title">
                  <span className="skill-category-icon">{skill.icon}</span>
                  {skill.category}
                </h4>
                <ul className="skill-list">
                  {skill.items.map((item, idx) => (
                    <li key={idx} className="skill-item">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-section">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
