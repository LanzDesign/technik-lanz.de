import React from "react";
import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Impressum from "./components/Impressum";
import Datenschutz from "./components/Datenschutz";
import AGB from "./components/AGB";
import "./App.css";
import Projects from "./components/Projects";
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
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/agb" element={<AGB />} />
        </Routes>
      </main>

      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          Technik‑Lanz&nbsp;&ndash;&nbsp;Webentwickler
        </p>

        <div className="circle-div">
          <div className="circle"></div>
        </div>

        <div className="footer-grid">
          <NavLink to="/impressum" end className="">
            Impressum
          </NavLink>

          <div className="circle"></div>

          <NavLink to="/datenschutz" className="">
            Datenschutz
          </NavLink>

          <div className="circle"></div>

          <NavLink to="/agb" className="">
            AGB
          </NavLink>
        </div>
      </footer>
    </div>
  );
}

export default App;
