import React from "react";
import FadeIn from "./FadeIn";

const services = [
  {
    title: "Cold Sparks",
    img: "/images/services/service1.jpg",
    desc: "Safe indoor cold sparks for weddings & events.",
  },
  {
    title: "Dry Ice",
    img: "/images/services/service2.jpg",
    desc: "Beautiful first-dance cloud effect using dry ice.",
  },
  {
    title: "Fireworks Show",
    img: "/images/services/service3.jpg",
    desc: "Outdoor aerial & stage fireworks for celebrations.",
  },
  {
    title: "CO2 Gun",
    img: "/images/services/service4.jpg",
    desc: "High-energy CO2 smoke gun effects for parties.",
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="relative py-20 px-6 md:px-16 lg:px-24 text-white"
    >
      {/* Optional dark overlay for better contrast */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-center">
            Our Services
          </h2>
        </FadeIn>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
          {services.map((service, index) => (
            <FadeIn key={index}>
              <div className="glass rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.03] transition-all duration-300">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-200 text-sm">{service.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
