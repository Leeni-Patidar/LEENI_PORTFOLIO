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
import ParticleBackground from "./components/ParticleBackground";

const Home = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black text-white">
      <ParticleBackground />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_top_left,rgba(93,255,255,0.10),transparent_22%),radial-gradient(circle_at_top_right,rgba(174,12,167,0.12),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(93,255,255,0.06),transparent_24%)]" />
      <ScrollProgress />
      <Navigation />
      <main className="relative z-10 flex-1">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <WorkSection />
        <Experience />
        <ContactSection />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
