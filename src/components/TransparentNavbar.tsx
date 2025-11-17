import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const TransparentNavbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add blur/background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-500
        ${scrolled ? "backdrop-blur-md bg-white/10 border-b border-white/20" : "bg-transparent"}
      `}
    >
      <nav className="flex justify-between items-center px-6 md:px-16 py-4 text-white">
        
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="w-12 h-12 object-contain"
          />
          <span className="text-xl font-serif tracking-wide">
            DesiVerse Events
          </span>
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-10 font-medium">
          {menuItems.map((item, idx) => (
            <li key={idx}>
              <a
                href={item.href}
                className="hover:text-[#D6B68C] transition-all duration-200"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* MOBILE MENU BUTTON */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="md:hidden bg-black/70 backdrop-blur-xl text-white py-8 px-10 space-y-6 text-lg">
          {menuItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block hover:text-[#D6B68C] transition"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default TransparentNavbar;
