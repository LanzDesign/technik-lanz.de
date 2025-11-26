import React, { useState } from "react";
import "./CookieSettings.css";

const CookieSettings = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [preferences, setPreferences] = useState(() => {
    const saved = localStorage.getItem("cookieConsent");
    return saved
      ? JSON.parse(saved)
      : {
          necessary: true,
          analytics: false,
          marketing: false,
        };
  });

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  const togglePreference = (key) => {
    if (key !== "necessary") {
      const newPreferences = {
        ...preferences,
        [key]: !preferences[key],
      };
      setPreferences(newPreferences);
      localStorage.setItem("cookieConsent", JSON.stringify(newPreferences));
    }
  };

  return (
    <>
      <button
        className="cookie-settings-toggle"
        onClick={togglePanel}
        aria-label="Cookie-Einstellungen öffnen"
        title="Cookie-Einstellungen"
        style={{
          position: "fixed",
          bottom: "30px",
          left: "30px",
          right: "auto",
          top: "auto",
        }}
      >
        🍪
      </button>

      {isOpen && (
        <div className="cookie-settings-panel">
          <div className="cookie-settings-header">
            <h3>Cookie-Einstellungen</h3>
            <button
              className="close-btn"
              onClick={togglePanel}
              aria-label="Panel schließen"
            >
              ✕
            </button>
          </div>

          <div className="cookie-settings-content">
            <div className="cookie-option">
              <div className="option-header">
                <label>
                  <input
                    type="checkbox"
                    checked={preferences.necessary}
                    disabled
                  />
                  <span className="option-title">Notwendige Cookies</span>
                </label>
                <span className="required-badge">Erforderlich</span>
              </div>
              <p className="option-description">
                Diese Cookies sind für die Grundfunktionen der Website
                notwendig.
              </p>
            </div>

            <div className="cookie-option">
              <div className="option-header">
                <label>
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={() => togglePreference("analytics")}
                  />
                  <span className="option-title">Analyse-Cookies</span>
                </label>
              </div>
              <p className="option-description">
                Helfen uns zu verstehen, wie Besucher mit der Website
                interagieren.
              </p>
            </div>

            <div className="cookie-option">
              <div className="option-header">
                <label>
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={() => togglePreference("marketing")}
                  />
                  <span className="option-title">Marketing-Cookies</span>
                </label>
              </div>
              <p className="option-description">
                Werden verwendet, um Besuchern relevante Anzeigen zu zeigen.
              </p>
            </div>

            <div className="cookie-info">
              <p>
                Weitere Informationen in unserer{" "}
                <a href="/datenschutz" className="cookie-link">
                  Datenschutzerklärung
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieSettings;
