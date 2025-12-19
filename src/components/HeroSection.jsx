import React from "react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-10 relative overflow-hidden bg-[#100425]"
    >
      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-center relative z-10 backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-3xl p-6 lg:p-10">
        {/* Left */}
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Hi, I'm Leeni
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-cyan-400 mt-2">
            MERN Stack Developer
          </h2>
          <p className="text-base sm:text-lg text-[#d9d9d9] leading-relaxed max-w-md mt-4">
            I’m a MERN Stack Developer specializing in creating responsive and scalable web applications. I build seamless front-end experiences and robust back-end systems that deliver real value to users and businesses.
          </p>
          <button
            onClick={() => window.open("/LEENI_RESUME.pdf", "_blank")}
            className="gradient-button mt-4 text-white px-6 py-2 rounded-lg"
          >
            Resume
          </button>
        </div>

        {/* Right - Profile Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-64 sm:w-80 lg:w-[350px] h-80 sm:h-96 lg:h-[400px] overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
