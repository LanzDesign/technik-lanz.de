import React from "react";
import { useScrollReveal } from "../hooks/useParallax";

const ScrollReveal = ({ children, direction = "up", delay = 0, className = "" }) => {
  const { ref, isVisible } = useScrollReveal();

  const directions = {
    up: "translate3d(0, 60px, 0)",
    down: "translate3d(0, -60px, 0)",
    left: "translate3d(-60px, 0, 0)",
    right: "translate3d(60px, 0, 0)",
    scale: "scale(0.9)",
  };

  const style = {
    transform: isVisible ? "translate3d(0, 0, 0) scale(1)" : directions[direction],
    opacity: isVisible ? 1 : 0,
    transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
    willChange: "transform, opacity",
  };

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
};

export default ScrollReveal;
