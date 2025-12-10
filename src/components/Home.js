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
    document.title =
      "Webentwickler Offenburg | React & Django | Technik-Lanz";
  }, []);

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Webentwicklung Offenburg ✓ React & Django ✓ Moderne Websites & Apps ✓ Full-Stack Development ✓ Jetzt anfragen!"
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

          <section className="typed-shadow">
            <h1 className="typed">
              <ReactTyped
                strings={[
                  "Hallo, ich bin <span class='red'>Daniel Lanz</span>",
                ]}
                typeSpeed={80}
                backSpeed={50}
                loop={false}
                showCursor={false}
              />
            </h1>

            <h2 className="typed">
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
            </h2>
          </section>

          <p>
            Moderne, individuelle Webseiten – professionell entwickelt in
            Offenburg, Lahr und der Ortenau. Flexibel betreut und zu fairen
            Konditionen realisiert. Von der ersten Idee bis zum fertigen
            Projekt.
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
