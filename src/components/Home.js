import React from "react";
import "./Home.css";
import logoImage from "../assets/logo.png";
import { ReactTyped } from "react-typed";
import Projects from "./Projects";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";

const Home = () => {
  const scrollToProjects = () => {
    document.getElementById("projekte")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="home" id="home">
        <div className="hero">
          <img src={logoImage} alt="Technik‑Lanz Logo" className="logo-hero" />

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

            <h1 className="typed">
              <ReactTyped
                strings={[
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
            </h1>
          </section>

          <p>
            Moderne, individuelle Webseiten – professionell entwickelt, flexibel
            betreut und zu fairen Konditionen realisiert. Von der ersten Idee
            bis zum fertigen Projekt.
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

        <div className="scroll-indicator" onClick={scrollToProjects} />
      </section>

      <Projects />
      <Services />
      <About />
      <Contact />
    </>
  );
};

export default Home;
