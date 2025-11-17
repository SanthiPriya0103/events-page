import React from "react";
import { useInView } from "../hooks/useInView";

const FadeIn: React.FC<{ children: React.ReactNode; className?: string; rootMargin?: string }> = ({ children, className = "", rootMargin }) => {
  const { ref, inView } = useInView(rootMargin || "-20px");

  return (
    <div ref={ref as any} className={`fade-up ${inView ? "show" : ""} ${className}`}>
      {children}
    </div>
  );
};

export default FadeIn;
