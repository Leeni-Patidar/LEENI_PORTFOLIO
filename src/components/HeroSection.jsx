import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import ParticleBackground from "./ParticleBackground";

const heroDots = Array.from({ length: 100 });

export default function HeroSection() {
  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-[#090512] text-white">
      <ParticleBackground />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(93,255,255,0.14),transparent_20%)] pointer-events-none" />
      <div className="absolute -top-24 right-20 h-96 w-96 rounded-full bg-[#ae0ca7]/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-16 h-72 w-72 rounded-full bg-[#5dffff]/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:py-28">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center"
        >
          <div className="space-y-8">
            <motion.div
              variants={itemVariants}
              className="section-label inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm tracking-[0.24em] text-[#f5f5ff] backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
            >
              <span className="mr-3 inline-flex h-2.5 w-2.5 rounded-full bg-[#5dffff] animate-pulse" />
              Software Engineer 
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-5"
            >
              <div className="space-y-3">
                <motion.p
                  variants={itemVariants}
                  className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight"
                >
                  Hi, I'm
                </motion.p>
                <motion.h1
                  variants={itemVariants}
                  className="text-5xl sm:text-6xl lg:text-[5rem] font-black leading-[0.95] tracking-[-0.04em] text-transparent bg-clip-text bg-gradient-to-r from-[#a320f7] via-[#e6299d] to-[#ff5f7f]"
                >
                  Leeni Patidar
                </motion.h1>
              </div>
              <motion.p
                variants={itemVariants}
                className="max-w-xl text-base sm:text-lg leading-8 text-[#d8d8de]"
              >
                I craft exceptional digital experiences with code, creativity, and a passion for innovation. I build modern portfolio sites and web applications with interactive motion and polished UI.
              </motion.p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <motion.button
                onClick={() => scrollTo("work")}
                className="gradient-button inline-flex min-w-[180px] items-center justify-center rounded-full px-6 py-3 font-semibold text-white shadow-[0_20px_60px_rgba(174,12,167,0.25)] transition duration-300 hover:scale-[1.02]"
                whileHover={{ scale: 1.05, boxShadow: "0 25px 80px rgba(174,12,167,0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.button>
              <motion.button
                onClick={() => scrollTo("contact")}
                className="inline-flex min-w-[180px] items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 font-semibold text-[#f4f4ff] transition duration-300 hover:bg-white/15 hover:text-[#5dffff]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 pt-2 text-[#c8c8d4]"
            >
              {[
                { href: "https://github.com/Leeni-Patidar", icon: Github, color: "hover:border-[#5dffff]/30 hover:bg-[#5dffff]/10" },
                { href: "https://www.linkedin.com/in/leeni-patidar-128274318/", icon: Linkedin, color: "hover:border-[#ff5fae]/30 hover:bg-[#ff5fae]/10" },
                { href: "leenip04@gmail.com", icon: Mail, color: "hover:border-[#ae0ca7]/30 hover:bg-[#ae0ca7]/10" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition ${social.color}`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          <div className="relative mx-auto max-w-[540px] overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_25%)]" />
            <div className="relative h-[520px] w-full">
              <div className="absolute inset-0 grid grid-cols-10 gap-3 p-6">
                {heroDots.map((_, index) => (
                  <div
                    key={index}
                    className="rounded-full bg-gradient-to-br from-[#ff5faf] via-[#a53aff] to-[#5dffff] opacity-80 shadow-[0_0_18px_rgba(93,255,255,0.22)] animate-dot-float"
                    style={{
                      width: index % 7 === 0 ? 10 : 6,
                      height: index % 7 === 0 ? 10 : 6,
                      animationDelay: `${(index % 10) * 0.05 + Math.floor(index / 10) * 0.04}s`,
                    }}
                  />
                ))}
              </div>

              <motion.div
                className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0a0614]/70 border border-white/10 shadow-[0_0_90px_rgba(174,12,167,0.18)]"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#5dffff]/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.45)]"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#ae0ca7]/25"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />

              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex h-16 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5">
                <div className="h-2 w-2 rounded-full bg-white/80 animate-bounce-slow" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
