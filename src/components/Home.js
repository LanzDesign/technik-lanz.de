import React, { useEffect } from "react";
import "./Home.css";
import logoImage from "../assets/logo.png";
import { ReactTyped } from "react-typed";
import Projects from "./Projects";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";
import FAQ from "./FAQ";
import { Helmet } from "react-helmet";
import { FaArrowDown } from "react-icons/fa";

const Home = () => {
  const scrollToProjects = () => {
    document.getElementById("projekte")?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // Dynamische Meta-Tags für SEO
    document.title = "Webentwickler Offenburg & Lahr | Technik-Lanz";
  }, []);

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Webentwickler in Offenburg, Lahr & Ortenau. React & Django Entwicklung. Moderne Websites & Apps. Jetzt anfragen!"
        />
        <meta
          name="keywords"
          content="Webentwickler Offenburg, Webentwicklung Lahr, Webdesign Ortenau, React Entwickler Offenburg, Django Entwickler Lahr"
        />
      </Helmet>

      <section className="home" id="home">
        <div className="hero">
          <img
            src={logoImage}
            alt="Technik-Lanz Logo - Webentwickler Offenburg"
            className="logo-hero"
          />

          <h1 className="main-heading visually-hidden">
            Webentwickler in Offenburg, Lahr und Ortenau - Technik-Lanz
          </h1>

          <section className="typed-shadow">
            <div className="typed" role="heading" aria-level="2">
              <ReactTyped
                strings={[
                  "Hallo, ich bin <span class='red'>Daniel Lanz</span>",
                ]}
                typeSpeed={80}
                backSpeed={50}
                loop={false}
                showCursor={false}
              />
            </div>

            <div className="typed" role="heading" aria-level="2">
              <ReactTyped
                strings={[
                  "Webentwickler in Offenburg, Lahr & Ortenau",
                  "Professionelle Webentwicklung für dein Business",
                  "Moderne React-Anwendungen nach Maß",
                  "Dein Partner für digitale Lösungen",
                ]}
                typeSpeed={60}
                backSpeed={40}
                loop={true}
                showCursor={true}
                cursorChar="|"
                startDelay={2000}
              />
            </div>
          </section>

          <p>
            Moderne, individuelle Webseiten – professionell entwickelt in
            Offenburg, Lahr und der Ortenau. Flexibel betreut und zu fairen
            Konditionen realisiert. Von der ersten Idee bis zum fertigen
            Projekt.
          </p>

          <p className="hero-extended-text">
            Als erfahrener <strong>Webentwickler</strong> in der Region Offenburg, Lahr und Ortenau 
            biete ich professionelle Dienstleistungen im Bereich <strong>React</strong> und <strong>Django</strong> Entwicklung. 
            Ich erstelle moderne Websites, leistungsstarke Web-Apps und maßgeschneiderte digitale Lösungen 
            für Unternehmen jeder Größe. Mit Fokus auf benutzerfreundliches Design, sauberen Code und 
            nachhaltige Entwicklung helfe ich dir, deine Online-Präsenz zu stärken. Von der Konzeption 
            über die Umsetzung bis hin zur langfristigen Betreuung – ich begleite dein Projekt in allen 
            Phasen. Kontaktiere mich für eine unverbindliche Beratung und lass uns gemeinsam deine 
            Ideen verwirklichen.
          </p>

          <div className="cta-buttons">
            <a
              href="#projekte"
              className="glowing-btn"
              onClick={scrollToProjects}
            >
              Projekte ansehen
            </a>
            <a href="#kontakt" className="glowing-btn">
              Kostenlos beraten lassen
            </a>
          </div>

          <div className="trust-indicators">
            <div className="trust-grid">
              <div className="trust-item">
                <div className="trust-number">15+</div>
                <div className="trust-label">Zufriedene Kunden</div>
              </div>
              <div className="trust-item">
                <div className="trust-number">30+</div>
                <div className="trust-label">Projekte realisiert</div>
              </div>
              <div className="trust-item">
                <div className="trust-number">100%</div>
                <div className="trust-label">Kundenzufriedenheit</div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator" onClick={scrollToProjects}></div>
      </section>

      <Projects />
      <Services />
      <About />
      <FAQ />
      <Contact />
    </>
  );
};

export default Home;
