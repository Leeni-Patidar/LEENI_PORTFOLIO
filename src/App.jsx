import React from "react";
import Navigation from "./components/Navigation";
import ScrollProgress from "./components/ScrollProgress";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import WorkSection from "./components/WorkSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Experience from "./components/Experience";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#090512] text-white">
      <ScrollProgress />
      <Navigation />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <WorkSection />
        <Experience />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
