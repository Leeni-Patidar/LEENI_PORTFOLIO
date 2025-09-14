import React from "react";
import Spline from "@splinetool/react-spline";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-15 relative overflow-hidden bg-[#100425]"
    >
      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10 backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-3xl">
        {/* Left - Enhanced Glass Effect */}
        <div className="space-y-6">
          <div className=" p-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Hi, I'm Leeni
            </h1>
            <h2 className="text-2xl lg:text-3xl heading font-medium mt-4">
             MERN Stack Developer
            </h2>
            <p className="text-lg text-[#d9d9d9] leading-relaxed max-w-lg mt-6">
              I’m a MERN Stack Developer specializing in creating responsive and scalable web applications. I build seamless front-end experiences and robust back-end systems that deliver real value to users and businesses. </p>

            <button
              onClick={() => window.open("/LEENI_RESUME.pdf", "_blank")}
              className="gradient-button pt-4 mt-5 text-amber-50"
            >
              Resume
            </button>

          </div>
        </div>

        {/* Right - Spline 3D Scene */}

        <div className="flex justify-center lg:justify-end w-full">
          <div className="w-full lg:w-full h-[80vh] lg:h-[90vh] sm:h-[60vh]">
            <Spline scene="https://prod.spline.design/OME4X1bdyBW-epY3/scene.splinecode" />
          </div>
        </div>

      </div>
    </section>
  );
}
