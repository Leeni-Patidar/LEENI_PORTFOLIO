import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Senior Frontend Engineer",
    company: "Tech Innovations Inc.",
    duration: "2024 - Present",
    description: [
      "Lead front-end development for a SaaS dashboard using React, Tailwind, and animation libraries.",
      "Implemented reusable UI components, improved site performance, and helped onboard new team members.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Digital Solutions Co.",
    duration: "2021 - 2024",
    description: [
      "Built responsive web applications using React and TypeScript.",
      "Collaborated with designers and backend engineers to deliver polished user experiences.",
    ],
  },
  {
    role: "Web Developer Intern",
    company: "Creative Agency",
    duration: "2019 - 2021",
    description: [
      "Designed landing pages and assisted in building client portals with HTML, CSS, and JavaScript.",
      "Learned modern web practices and contributed to cross-functional project delivery.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden bg-[#090512] px-6 py-24 sm:py-28 lg:py-32">
      <div className="absolute left-0 bottom-24 h-72 w-72 rounded-full bg-[#ae0ca7]/10 blur-3xl" />
      <div className="absolute right-10 top-16 h-64 w-64 rounded-full bg-[#5dffff]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="section-label mx-auto">My professional journey</div>
          <div className="section-heading mx-auto mt-6 max-w-3xl text-white">
            <h2>Work Experience</h2>
          </div>
        </motion.div>

        <div className="relative grid gap-12 md:grid-cols-[0.08fr_0.92fr]">
          <div className="absolute left-5 top-0 h-full w-1 rounded-full bg-gradient-to-b from-[#5dffff] via-[#ae0ca7] to-[#5dffff] md:left-10" />
          <div className="space-y-12">
            {experiences.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
                className="relative pl-8 md:pl-14"
              >
                <motion.div
                  className="timeline-dot absolute left-0 top-2 md:left-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3, duration: 0.5, type: "spring" }}
                />
                <motion.div
                  className="glass-card rounded-[32px] border border-white/10 p-8 shadow-2xl"
                  whileHover={{ scale: 1.02, boxShadow: "0 20px 60px rgba(93, 255, 255, 0.1)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center">
                    <div>
                      <p className="text-sm uppercase tracking-[0.3em] text-[#9e9ef6]">{item.company}</p>
                      <h3 className="mt-3 text-2xl font-semibold text-white">{item.role}</h3>
                    </div>
                    <p className="rounded-full border border-[#5dffff]/20 bg-[#11101f]/90 px-4 py-2 text-sm text-[#b2b2ff]">
                      {item.duration}
                    </p>
                  </div>
                  <ul className="mt-6 space-y-3 text-[#d9d9e5] leading-7">
                    {item.description.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#5dffff] flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
