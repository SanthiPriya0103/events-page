import React from "react";
import FadeIn from "./FadeIn";

const BlackSection: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <section className={`min-h-[60vh] bg-black text-white py-20 px-6 md:px-20 ${className}`}>
    <div className="max-w-6xl mx-auto w-full">
      <FadeIn>{children}</FadeIn>
    </div>
  </section>
);

export default BlackSection;
