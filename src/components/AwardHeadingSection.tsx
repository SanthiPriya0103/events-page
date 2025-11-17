import React from "react";
import FadeIn from "./FadeIn";

const AwardHeadingSection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-transparent py-32 px-10">
      <FadeIn>
        <div className="text-center">
          <h2
            className="
              text-4xl 
              md:text-6xl 
              font-serif 
              font-bold 
              text-white 
              tracking-wide 
              drop-shadow-lg
              relative
              inline-block
            "
          >
            AWARD WINNING EVENTS HERE

            {/* Animated Underline */}
            <span className="block mx-auto mt-4 h-[3px] w-0 bg-[#D6B68C] animate-underline"></span>
          </h2>
        </div>
      </FadeIn>
    </section>
  );
};

export default AwardHeadingSection;
