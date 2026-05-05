import React from "react";
import { Download } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="relative overflow-hidden bg-[#090512] px-6 py-24 sm:py-28 lg:py-32">
      <div className="absolute left-[-10%] top-10 h-72 w-72 rounded-full bg-[#ae0ca7]/20 blur-3xl" />
      <div className="absolute right-0 top-24 h-72 w-72 rounded-full bg-[#5dffff]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <div className="section-label mx-auto mb-5">My background and journey</div>
          <div className="section-heading mx-auto max-w-3xl text-[#f9f9ff]">
            <h2>About Me</h2>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] xl:gap-10">
          <div className="glass-card rounded-[32px] p-8 lg:p-10">
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] items-center">
              <div className="rounded-[28px] border border-white/10 bg-[#100425]/80 p-5 shadow-2xl">
                <div className="relative overflow-hidden rounded-[28px] bg-[#120724] h-[360px]">
                  <img
                    src="/profile.jpg"
                    alt="Leeni Patidar"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-6 flex items-center justify-between rounded-3xl bg-[#0b0420]/90 p-4 border border-white/10">
                  <div>
                    <p className="text-sm uppercase tracking-[0.35em] text-[#9e9ef6]">Availability</p>
                    <p className="mt-2 text-sm font-medium text-[#f8f8ff]">Open to opportunities</p>
                  </div>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#5dffff] to-[#ae0ca7] text-black">
                    ✓
                  </span>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-[#9e9ef6]">Hello, I’m Leeni</p>
                  <h3 className="mt-4 text-3xl font-bold text-white sm:text-4xl">A passionate software engineer</h3>
                </div>
                <p className="text-base leading-8 text-[#d9d9e5]">
                  I build interactive web experiences with code, design, and thoughtful detail. I specialize in frontend development using React and Tailwind, and I enjoy working on full-stack applications with modern technologies like Node.js, PostgreSQL, and cloud tooling.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-[#120724]/90 p-5">
                    <p className="text-sm text-[#9e9ef6]">Location</p>
                    <p className="mt-2 text-lg font-semibold text-white">Myanmar</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-[#120724]/90 p-5">
                    <p className="text-sm text-[#9e9ef6]">Email</p>
                    <p className="mt-2 text-lg font-semibold text-white">leenip04@gmail.com</p>
                  </div>
                </div>
                <button
                  onClick={() => window.open("/LEENI_RESUME.pdf", "_blank")}
                  className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#5dffff] to-[#ae0ca7] px-6 py-3 text-sm font-semibold text-black shadow-[0_20px_80px_rgba(93,255,255,0.22)] transition hover:scale-[1.02]"
                >
                  <Download size={18} />
                  Download Resume
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-10">
            <div className="glass-card rounded-[32px] p-10">
              <h3 className="text-2xl font-semibold text-white">Who I am</h3>
              <p className="mt-6 text-base leading-8 text-[#d9d9e5]">
                I’m a software engineer with experience building scalable web apps and polished user experiences. I care deeply about performance, clean code, and elegant UI design.
              </p>
              <p className="mt-4 text-base leading-8 text-[#d9d9e5]">
                My journey began in frontend development, and I now enjoy solving problems with both frontend and backend technologies. When I’m not coding, I explore new design systems and stay current with modern web trends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
