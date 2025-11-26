import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (sectionId) => {
    setIsMenuOpen(false);
    
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    // Nur auf der Home-Page Scroll-Detection aktivieren
    if (location.pathname !== '/') {
      setActiveSection('');
      return;
    }

    const handleScroll = () => {
      const sections = ['home', 'projekte', 'leistungen', 'über-uns', 'kontakt'];
      const scrollPosition = window.scrollY + 200; // Offset für bessere Detection

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  return (
    <header className="navbar">
      <button 
        className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <a 
          href="#home" 
          className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
          onClick={(e) => {
            e.preventDefault();
            handleNavigation('home');
          }}
        >
          Home
        </a>
        <a 
          href="#projekte" 
          className={`nav-link ${activeSection === 'projekte' ? 'active' : ''}`}
          onClick={(e) => {
            e.preventDefault();
            handleNavigation('projekte');
          }}
        >
          Projekte
        </a>
        <a 
          href="#leistungen" 
          className={`nav-link ${activeSection === 'leistungen' ? 'active' : ''}`}
          onClick={(e) => {
            e.preventDefault();
            handleNavigation('leistungen');
          }}
        >
          Leistungen
        </a>
        <a 
          href="#über-uns" 
          className={`nav-link ${activeSection === 'über-uns' ? 'active' : ''}`}
          onClick={(e) => {
            e.preventDefault();
            handleNavigation('über-uns');
          }}
        >
          Über mich
        </a>
        <a 
          href="#kontakt" 
          className={`nav-link ${activeSection === 'kontakt' ? 'active' : ''}`}
          onClick={(e) => {
            e.preventDefault();
            handleNavigation('kontakt');
          }}
        >
          Kontakt
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
