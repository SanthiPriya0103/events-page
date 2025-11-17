import React from "react";
import FadeIn from "./FadeIn";

const testimonials = [
  {
    name: "Aarav & Priya",
    review:
      "Absolutely phenomenal service! The fireworks and dry ice made our first dance unforgettable.",
  },
  {
    name: "John & Sarah",
    review:
      "Professional, responsive and truly passionate about what they do. Highly recommended!",
  },
  {
    name: "Karan & Meera",
    review:
      "The team created the perfect atmosphere on our wedding day. The effects were magical.",
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="min-h-screen bg-transparent py-32 px-10 flex items-center justify-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        
        {/* SECTION TITLE */}
        <FadeIn>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white text-center mb-4">
            Testimonials
          </h2>
        </FadeIn>

        {/* Underline */}
        <FadeIn>
          <div className="w-40 h-[3px] bg-[#D6B68C] mx-auto mb-12"></div>
        </FadeIn>

        {/* TESTIMONIAL CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          {testimonials.map((t, index) => (
            <FadeIn key={index}>
              <div className="glass p-8 rounded-2xl shadow-xl h-full text-white border border-white/10">
                <p className="text-gray-200 text-lg leading-relaxed italic mb-6">
                  “{t.review}”
                </p>

                <h4 className="text-xl font-semibold text-[#D6B68C]">
                  — {t.name}
                </h4>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
