import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const dotColumns = 19;
const dotRows = 14;
const heroDots = Array.from({ length: dotColumns * dotRows }, (_, index) => {
  const col = index % dotColumns;
  const row = Math.floor(index / dotColumns);
  const pulse = (col * 11 + row * 7) % 5;
  const size = 6 + pulse * 1.7;
  const palette = ["#f04ad7", "#c64cff", "#e83ca5", "#9b4dff"];

  return {
    col,
    row,
    size,
    color: palette[(col + row) % palette.length],
    delay: (col * 0.04 + row * 0.07) % 1.2,
  };
});

export default function HeroSection() {
  const [dotCursor, setDotCursor] = useState(null);

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const handleDotPointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setDotCursor({
      x: (event.clientX - rect.left) / rect.width,
      y: (event.clientY - rect.top) / rect.height,
    });
  };

  const getDotMotion = (dot) => {
    if (!dotCursor) {
      return {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 0.86,
      };
    }

    const dotX = dot.col / (dotColumns - 1);
    const dotY = dot.row / (dotRows - 1);
    const dx = dotX - dotCursor.x;
    const dy = dotY - dotCursor.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const radius = 0.2;

    if (distance > radius) {
      return { x: 0, y: 0, scale: 1, opacity: 0.82 };
    }

    const force = (radius - distance) / radius;
    const angle = Math.atan2(dy, dx);

    return {
      x: Math.cos(angle) * force * 34,
      y: Math.sin(angle) * force * 34,
      scale: 1 + force * 1.45,
      opacity: 1,
    };
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

          <motion.div
            variants={itemVariants}
            className="relative mx-auto h-[360px] w-full max-w-[640px] sm:h-[440px] lg:h-[520px]"
          >
            <div
              className="relative grid h-full w-full place-items-center gap-x-4 gap-y-3 px-3 sm:gap-x-5 sm:gap-y-4"
              style={{ gridTemplateColumns: `repeat(${dotColumns}, minmax(0, 1fr))` }}
              onPointerMove={handleDotPointerMove}
              onPointerLeave={() => setDotCursor(null)}
            >
              {heroDots.map((dot) => (
                <motion.span
                  key={`${dot.col}-${dot.row}`}
                  className="block"
                  initial={{ opacity: 0, scale: 0.4 }}
                  animate={getDotMotion(dot)}
                  transition={{
                    type: "spring",
                    stiffness: 220,
                    damping: 18,
                    mass: 0.45,
                  }}
                >
                  <span
                    className="block rounded-full animate-dot-float"
                    style={{
                      width: dot.size,
                      height: dot.size,
                      backgroundColor: dot.color,
                      animationDelay: `${dot.delay}s`,
                    }}
                  />
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
