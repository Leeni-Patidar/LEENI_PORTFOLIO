import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Hamburger and close icons

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "HOME" },
    { id: "about", label: "ABOUT" },
    { id: "work", label: "WORK" },
    { id: "contact", label: "CONTACT" },
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after click
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#100425]/80 backdrop-blur-md border-b border-[#2b215a]/30">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Branding */}
        <div
          onClick={() => scrollToSection("home")}
          className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text cursor-pointer transition-transform hover:scale-105"
        >
          LEENI
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm font-medium transition-colors duration-200 ${
                activeSection === item.id
                  ? "text-[#5dffff]"
                  : "text-[#d9d9d9] hover:text-[#f580f1]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-[#d9d9d9] hover:text-[#f580f1]"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu items */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#100425]/90 backdrop-blur-md border-t border-[#2b215a]/30">
          <div className="flex flex-col px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-base font-medium transition-colors duration-200 ${
                  activeSection === item.id
                    ? "text-[#5dffff]"
                    : "text-[#d9d9d9] hover:text-[#f580f1]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
