import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';

import './App.css';

/**
 * Die Hauptanwendung definiert die Navigation und das Layout der Seite.
 * Sie verwendet React Router, um zwischen verschiedenen Ansichten zu wechseln.
 */
function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Technik‑Lanz&nbsp;&ndash;&nbsp;IT‑Dienstleistungen für kleine Unternehmen.</p>
      </footer>
    </div>
  );
}

export default App;