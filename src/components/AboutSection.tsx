import React from "react";
import FadeIn from "./FadeIn";

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative w-full py-20 px-6 md:px-20 text-white bg-black/70"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT — Circular Photo with Decorative Frame */}
        <FadeIn>
          <div className="relative flex justify-center">
            {/* Outer Decorative Circle */}
            <div className="rounded-full border-[12px] border-white/80 p-4 relative 
                            w-[300px] h-[300px] md:w-[420px] md:h-[420px] flex items-center justify-center">

              {/* Decorative butterflies */}
              <img
                src="/images/decor/butterfly1.png"
                className="absolute -top-6 -left-6 w-20 opacity-90"
                alt="Butterfly"
              />
              <img
                src="/images/decor/butterfly2.png"
                className="absolute -bottom-8 -right-4 w-24 opacity-90"
                alt="Butterfly"
              />

              {/* Actual Image */}
              <img
                src="/images/about/2212.jpg"
                alt="About Section Photo"
                className="rounded-full w-full h-full object-cover"
              />
            </div>
          </div>
        </FadeIn>

        {/* RIGHT — Text Content */}
        <FadeIn>
          <div>
            <h2 className="text-4xl font-serif font-bold mb-6">
              About Desiverse.event
            </h2>

            <p className="text-gray-200 leading-relaxed mb-4">
              Hi, we’re Linh, Rainer and Elijah. A small family with a very big 
              passion for all things events. Winners of the ABIA Wedding Awards 2024, 
              along with the Editors Choice Awards 2023, our reviews truly are testament 
              to the quality of service we provide.
            </p>

            <p className="text-gray-200 leading-relaxed mb-4">
              Whether it be silk floral styling, Photo Booths, LED 360 booths, fireworks, 
              dry ice, CO2 guns, giant light up letters, floral walls, table decorations, 
              chandeliers and more.  
              We are your ‘one stop shop’ that offers exceptional quality at an affordable price.
            </p>

            <p className="text-gray-200 leading-relaxed mb-8">
              Contact us today. We’d love to hear from you!
            </p>

            {/* Awards */}
            <div className="flex gap-6 mt-4 flex-wrap">
              <img
                src="/images/awards/award1.png"
                alt="Award 1"
                className="w-28 md:w-32"
              />
              <img
                src="/images/awards/award2.png"
                alt="Award 2"
                className="w-28 md:w-32"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default AboutSection;
