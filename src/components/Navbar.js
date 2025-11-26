import React, { useState } from "react";
import "./Navbar.css";
import logoImage from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="navbar">
      <button
        className={`menu-toggle ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
        <a
          href="#home"
          className="nav-link"
          onClick={() => scrollToSection("home")}
        >
          Home
        </a>
        <a
          href="#projekte"
          className="nav-link"
          onClick={() => scrollToSection("projekte")}
        >
          Projekte
        </a>
        <a
          href="#leistungen"
          className="nav-link"
          onClick={() => scrollToSection("leistungen")}
        >
          Leistungen
        </a>
        <a
          href="#über-uns"
          className="nav-link"
          onClick={() => scrollToSection("über-uns")}
        >
          Über mich
        </a>
        <a
          href="#kontakt"
          className="nav-link"
          onClick={() => scrollToSection("kontakt")}
        >
          Kontakt
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
