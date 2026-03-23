import React from "react";

const SectionDivider = ({ variant = "wave", flip = false }) => {
  const dividers = {
    wave: (
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none" style={{
        display: "block",
        width: "100%",
        height: "80px",
        transform: flip ? "rotate(180deg)" : "none",
      }}>
        <path
          d="M0,40 C360,120 720,0 1080,60 C1260,80 1380,40 1440,40 L1440,120 L0,120 Z"
          fill="rgba(10, 14, 39, 0.98)"
        />
        <path
          d="M0,60 C360,100 720,20 1080,70 C1260,85 1380,50 1440,50 L1440,120 L0,120 Z"
          fill="rgba(5, 10, 31, 0.95)"
        />
      </svg>
    ),
    angle: (
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{
        display: "block",
        width: "100%",
        height: "60px",
        transform: flip ? "rotate(180deg)" : "none",
      }}>
        <path
          d="M0,80 L1440,0 L1440,80 Z"
          fill="rgba(5, 10, 31, 0.95)"
        />
      </svg>
    ),
    curve: (
      <svg viewBox="0 0 1440 100" preserveAspectRatio="none" style={{
        display: "block",
        width: "100%",
        height: "70px",
        transform: flip ? "rotate(180deg)" : "none",
      }}>
        <path
          d="M0,100 C480,0 960,0 1440,100 L1440,100 L0,100 Z"
          fill="rgba(10, 14, 39, 0.98)"
        />
      </svg>
    ),
  };

  return (
    <div style={{
      marginTop: "-1px",
      marginBottom: "-1px",
      lineHeight: 0,
      position: "relative",
      zIndex: 2,
    }}>
      {dividers[variant]}
    </div>
  );
};

export default SectionDivider;
