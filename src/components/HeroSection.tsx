import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative w-full h-screen overflow-hidden flex items-center bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: "url('/images/bg.jpg')",
      }}
    >

      {/* Overlay (if you want the first screen darker) */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div
        className="relative z-10 w-full px-10 md:px-12 lg:px-20 
                    grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
      >
        {/* LEFT TEXT */}
        <div className="text-white">
          <h1 className="text-5xl md:text-[5rem] font-serif leading-[1.1] mb-6">
            Fireworks <br /> Dry Ice
          </h1>

          <p className="text-gray-200 tracking-wide mb-6">
            COLD SPARKS & DRY ICE
          </p>

          <button className="bg-[#D6B68C] text-black px-6 py-3 rounded-md font-semibold hover:bg-[#c3a078] transition-all">
            Explore Services
          </button>
        </div>

        {/* RIGHT VIDEO */}
        <div className="w-full flex justify-center">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 w-[90%] md:w-[480px]">
            <video
              src="/videos/hero.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-[350px] object-cover"
            ></video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
