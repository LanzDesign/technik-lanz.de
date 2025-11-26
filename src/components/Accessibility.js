import React, { useState } from "react";
import "./Accessibility.css";
import { MdAccessibility } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const Accessibility = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState({
    fontSize: 100,
    contrast: false,
    grayscale: false,
    lineHeight: false,
    readableFont: false,
  });

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  const adjustFontSize = (increase) => {
    setSettings((prev) => {
      const newSize = increase
        ? Math.min(prev.fontSize + 10, 150)
        : Math.max(prev.fontSize - 10, 80);
      document.documentElement.style.fontSize = `${newSize}%`;
      return { ...prev, fontSize: newSize };
    });
  };

  const toggleContrast = () => {
    setSettings((prev) => {
      const newContrast = !prev.contrast;
      if (newContrast) {
        document.body.classList.add("high-contrast");
      } else {
        document.body.classList.remove("high-contrast");
      }
      return { ...prev, contrast: newContrast };
    });
  };

  const toggleGrayscale = () => {
    setSettings((prev) => {
      const newGrayscale = !prev.grayscale;
      if (newGrayscale) {
        document.body.classList.add("grayscale");
      } else {
        document.body.classList.remove("grayscale");
      }
      return { ...prev, grayscale: newGrayscale };
    });
  };

  const toggleLineHeight = () => {
    setSettings((prev) => {
      const newLineHeight = !prev.lineHeight;
      if (newLineHeight) {
        document.body.classList.add("increased-line-height");
      } else {
        document.body.classList.remove("increased-line-height");
      }
      return { ...prev, lineHeight: newLineHeight };
    });
  };

  const toggleReadableFont = () => {
    setSettings((prev) => {
      const newReadableFont = !prev.readableFont;
      if (newReadableFont) {
        document.body.classList.add("readable-font");
      } else {
        document.body.classList.remove("readable-font");
      }
      return { ...prev, readableFont: newReadableFont };
    });
  };

  const resetSettings = () => {
    document.documentElement.style.fontSize = "100%";
    document.body.classList.remove(
      "high-contrast",
      "grayscale",
      "increased-line-height",
      "readable-font"
    );
    setSettings({
      fontSize: 100,
      contrast: false,
      grayscale: false,
      lineHeight: false,
      readableFont: false,
    });
  };

  return (
    <>
      <button
        className="accessibility-toggle"
        onClick={togglePanel}
        aria-label="Barrierefreiheit-Einstellungen öffnen"
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          left: "auto",
          top: "auto",
        }}
      >
        <MdAccessibility />
      </button>

      {isOpen && (
        <div className="accessibility-panel">
          <div className="accessibility-header">
            <h3>Barrierefreiheit</h3>
            <button
              className="close-btn"
              onClick={togglePanel}
              aria-label="Panel schließen"
            >
              <IoMdClose />
            </button>
          </div>

          <div className="accessibility-content">
            {/* Font Size */}
            <div className="accessibility-option">
              <label>Schriftgröße</label>
              <div className="button-group">
                <button onClick={() => adjustFontSize(false)}>A-</button>
                <span>{settings.fontSize}%</span>
                <button onClick={() => adjustFontSize(true)}>A+</button>
              </div>
            </div>

            {/* Contrast */}
            <div className="accessibility-option">
              <label>
                <input
                  type="checkbox"
                  checked={settings.contrast}
                  onChange={toggleContrast}
                />
                Hoher Kontrast
              </label>
            </div>

            {/* Grayscale */}
            <div className="accessibility-option">
              <label>
                <input
                  type="checkbox"
                  checked={settings.grayscale}
                  onChange={toggleGrayscale}
                />
                Graustufen
              </label>
            </div>

            {/* Line Height */}
            <div className="accessibility-option">
              <label>
                <input
                  type="checkbox"
                  checked={settings.lineHeight}
                  onChange={toggleLineHeight}
                />
                Erhöhter Zeilenabstand
              </label>
            </div>

            {/* Readable Font */}
            <div className="accessibility-option">
              <label>
                <input
                  type="checkbox"
                  checked={settings.readableFont}
                  onChange={toggleReadableFont}
                />
                Lesbare Schriftart
              </label>
            </div>

            <button className="reset-btn" onClick={resetSettings}>
              Zurücksetzen
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Accessibility;
