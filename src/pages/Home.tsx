import React from "react";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import AboutSection from "../components/AboutSection";
import AwardHeadingSection from "../components/AwardHeadingSection"
import TestimonialsSection from "../components/TestimonialsSection";
// import Services from "./Services";
// import Gallery from "./Gallery";

const HomePage = () => {
  return (
    <div className="text-white">

      {/* SECTION 1: Transparent → Background visible */}
      <section className="min-h-screen bg-transparent">
        <HeroSection />
      </section>

       {/* SECTION 1: Transparent → Background visible */}
      <section className="min-h-screen bg-black text-white py-32 px-10">
        <AboutSection />
      </section>

      {/* SECTION 2: Solid black background */}
      <section className="min-h-screen bg-black text-white py-32 px-10">
        <h2 className="text-4xl font-bold mb-6">Our Services</h2>
        <ServicesSection />
      </section>

      {/* SECTION 3: Background visible again */}
      <section className="bg-transparent py-12 px-10">
        <AwardHeadingSection />
      </section>  

      {/* SECTION 4: Solid black */}
      <section className="min-h-screen bg-black text-white py-32 px-10">
        <h2 className="text-4xl font-bold mb-6">Testimonials</h2>
        <TestimonialsSection/>
      </section>

    </div>
  );
};

export default HomePage;
