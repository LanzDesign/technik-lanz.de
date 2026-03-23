import React, { useEffect, useState } from "react";
import "./Home.css";
import logoImage from "../assets/logo.png";
import { ReactTyped } from "react-typed";
import Projects from "./Projects";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";
import FAQ from "./FAQ";
import SectionDivider from "./SectionDivider";
import { Helmet } from "react-helmet";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.title = "Webentwickler Offenburg | React & Django | Technik-Lanz";
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToProjects = (e) => {
    e.preventDefault();
    document.getElementById("projekte")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Webentwicklung Offenburg - React & Django - Moderne Websites & Apps - Full-Stack Development - Jetzt anfragen!"
        />
        <meta
          name="keywords"
          content="Webentwickler Offenburg, Webentwicklung Lahr, Webdesign Ortenau, React Entwickler Offenburg, Django Entwickler Lahr"
        />
      </Helmet>

      {/* HERO SECTION with Parallax */}
      <section className="home" id="home">
        {/* Parallax Background Layers */}
        <div
          className="parallax-bg parallax-bg-1"
          style={{ transform: `translate3d(0, ${scrollY * 0.3}px, 0)` }}
        />
        <div
          className="parallax-bg parallax-bg-2"
          style={{ transform: `translate3d(0, ${scrollY * 0.15}px, 0)` }}
        />
        <div
          className="parallax-bg parallax-bg-3"
          style={{ transform: `translate3d(0, ${scrollY * 0.05}px, 0)` }}
        />

        {/* Floating Particles */}
        <div className="particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
            }} />
          ))}
        </div>

        <div className="hero" style={{
          transform: `translate3d(0, ${scrollY * 0.1}px, 0)`,
          opacity: Math.max(0, 1 - scrollY / 800),
        }}>
          {/* Branded Logo */}
          <div className="logo-container">
            <div className="logo-glow" />
            <img
              src={logoImage}
              alt="Technik-Lanz Logo - Webentwickler Offenburg"
              className="logo-hero"
            />
          </div>

          {/* Brand Name */}
          <div className="brand-name">
            <span className="brand-tech">TECHNIK</span>
            <span className="brand-separator">|</span>
            <span className="brand-lanz">LANZ</span>
          </div>

          <section className="typed-shadow">
            <h1 className="typed">
              <ReactTyped
                strings={[
                  "Hallo, ich bin <span class='highlight-name'>Daniel Lanz</span>",
                ]}
                typeSpeed={80}
                backSpeed={50}
                loop={false}
                showCursor={false}
              />
            </h1>

            <h2 className="typed-sub">
              <ReactTyped
                strings={[
                  "Webentwickler in Offenburg, Lahr & Ortenau",
                  "Professionelle Webentwicklung für dein Business",
                  "Moderne React-Anwendungen nach Maß",
                  "Dein Partner für digitale Lösungen",
                ]}
                typeSpeed={50}
                backSpeed={30}
                loop={true}
                showCursor={true}
                cursorChar="|"
                startDelay={2000}
              />
            </h2>
          </section>

          <p className="hero-description">
            Moderne, individuelle Webseiten – professionell entwickelt in
            Offenburg, Lahr und der Ortenau. Von der ersten Idee bis zum fertigen
            Projekt.
          </p>

          <div className="cta-buttons">
            <a href="#projekte" className="btn-primary" onClick={scrollToProjects}>
              Projekte ansehen
            </a>
            <a href="#kontakt" className="btn-secondary" onClick={scrollToContact}>
              Kostenlos beraten lassen
            </a>
          </div>

          <div className="trust-indicators">
            <div className="trust-grid">
              <div className="trust-item">
                <div className="trust-number">15+</div>
                <div className="trust-label">Zufriedene Kunden</div>
              </div>
              <div className="trust-divider" />
              <div className="trust-item">
                <div className="trust-number">30+</div>
                <div className="trust-label">Projekte realisiert</div>
              </div>
              <div className="trust-divider" />
              <div className="trust-item">
                <div className="trust-number">100%</div>
                <div className="trust-label">Kundenzufriedenheit</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator" onClick={scrollToProjects}>
          <div className="scroll-mouse">
            <div className="scroll-wheel" />
          </div>
          <span className="scroll-text">Scroll</span>
        </div>
      </section>

      <SectionDivider variant="wave" />
      <Projects />
      <SectionDivider variant="curve" />
      <Services />
      <SectionDivider variant="wave" flip />
      <About />
      <SectionDivider variant="curve" flip />
      <FAQ />
      <SectionDivider variant="wave" />
      <Contact />
    </>
  );
};

export default Home;
