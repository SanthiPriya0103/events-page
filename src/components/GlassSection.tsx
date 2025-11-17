import React from "react";
import FadeIn from "./FadeIn";

const GlassSection: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => {
  return (
    <section className={`min-h-[60vh] flex items-center py-20 px-6 md:px-20 ${className}`}>
      <div className="max-w-6xl mx-auto w-full">
        <div className="glass rounded-2xl p-10 shadow-xl">
          <FadeIn>{children}</FadeIn>
        </div>
      </div>
    </section>
  );
};

export default GlassSection;
