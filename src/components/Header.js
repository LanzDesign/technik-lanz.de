import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logoImage from '../assets/logo-no-text.png';

/**
 * Kopfzeile mit Navigation. Die Logo‑Platzhalter kann von
 * Nutzerinnen und Nutzern durch ein eigenes Logo ersetzt werden.
 */
const Header = () => {
  // Zustand für das Aufklappen des Burgermenüs
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="header">
      <div className="brand">
        {/* Logo */}
        <NavLink to="/" end className={"logo-navbar"} onClick={() => setMenuOpen(false)}>
          <img src={logoImage} alt="Technik‑Lanz Logo" className="logo-image" />
        </NavLink>
      </div>
      
      {/* Toggle‑Button für kleine Displays */}
      <button
        className={`menu-toggle${menuOpen ? ' open' : ''}`}
        onClick={toggleMenu}
        aria-label="Menü öffnen oder schließen"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <nav className={`nav${menuOpen ? ' open' : ''}`}>
        <NavLink to="/" end className="nav-link" onClick={() => setMenuOpen(false)}>
          Startseite
        </NavLink>
        <NavLink to="/services" className="nav-link" onClick={() => setMenuOpen(false)}>
          Leistungen
        </NavLink>
        <NavLink to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>
          Über&nbsp;uns
        </NavLink>
        <NavLink to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>
          Kontakt
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;