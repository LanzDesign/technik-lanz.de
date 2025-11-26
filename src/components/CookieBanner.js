import React, { useState, useEffect } from "react";
import "./CookieBanner.css";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    localStorage.setItem("cookieConsent", JSON.stringify(allAccepted));
    setShowBanner(false);
  };

  const acceptNecessary = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    localStorage.setItem("cookieConsent", JSON.stringify(necessaryOnly));
    setShowBanner(false);
  };

  const savePreferences = () => {
    localStorage.setItem("cookieConsent", JSON.stringify(preferences));
    setShowBanner(false);
    setShowSettings(false);
  };

  const togglePreference = (key) => {
    if (key !== "necessary") {
      setPreferences((prev) => ({
        ...prev,
        [key]: !prev[key],
      }));
    }
  };

  if (!showBanner) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-container">
        {!showSettings ? (
          <>
            <div className="cookie-content">
              <div className="cookie-icon">🍪</div>
              <div className="cookie-text">
                <h3>Wir verwenden Cookies</h3>
                <p>
                  Diese Website verwendet Cookies, um Ihre Erfahrung zu
                  verbessern. Notwendige Cookies sind für die Funktionalität der
                  Website erforderlich. Weitere Informationen finden Sie in
                  unserer{" "}
                  <a href="/datenschutz" className="cookie-link">
                    Datenschutzerklärung
                  </a>
                  .
                </p>
              </div>
            </div>
            <div className="cookie-actions">
              <button
                onClick={acceptNecessary}
                className="cookie-btn secondary"
              >
                Nur Notwendige
              </button>
              <button
                onClick={() => setShowSettings(true)}
                className="cookie-btn secondary"
              >
                Einstellungen
              </button>
              <button onClick={acceptAll} className="cookie-btn primary">
                Alle akzeptieren
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="cookie-settings">
              <h3>Cookie-Einstellungen</h3>

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
            </div>

            <div className="cookie-actions">
              <button
                onClick={() => setShowSettings(false)}
                className="cookie-btn secondary"
              >
                Zurück
              </button>
              <button onClick={savePreferences} className="cookie-btn primary">
                Auswahl speichern
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CookieBanner;
