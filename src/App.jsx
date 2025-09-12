import React from "react";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import WorkSection from "./components/WorkSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Experience from "./components/Experience";

const Home = () => {
  return (
    <div className="portfolio-gradient min-h-screen flex flex-col">
      {/* Navbar */}
      <Navigation />

      {/* Main Sections */}
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <WorkSection />
        <Experience/>
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
