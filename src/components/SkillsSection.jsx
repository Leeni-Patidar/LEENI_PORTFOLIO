import React from "react";
import { motion } from "framer-motion";

const skillsData = {
  frontend: [
    { name: "React",  icon: "⚛️" },
    { name: "Tailwind CSS",  icon: "🎨" },
    { name: "JavaScript",  icon: "🟨" },
    { name: "HTML/CSS",  icon: "🌐" },
  ],
  backend: [
    { name: "Node.js",  icon: "🟢" },
    { name: "Express.js",  icon: "🚀" },
    { name: "Python",  icon: "🐍" },
    { name: "MongoDB",  icon: "🍃" },
    { name: "MySQL",  icon: "🔺" },
  ],
  tools: [
    { name: "Git",  icon: "📚" },
    { name: "Docker",  icon: "🐳" },
    { name: "AWS",  icon: "☁️" },
    { name: "VS Code",  icon: "💻" },
    { name: "Postman",  icon: "🐧" },
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function SkillsSection() {
  return (
    <section id="skills" className="relative overflow-hidden px-6 py-24 sm:py-28 lg:py-32">
      <div className="absolute left-0 top-16 h-72 w-72 rounded-full bg-[#5dffff]/10 blur-3xl" />
      <div className="absolute right-0 bottom-16 h-64 w-64 rounded-full bg-[#ae0ca7]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="section-label mx-auto">My technical expertise</div>
          <div className="section-heading mx-auto mt-6 max-w-3xl text-white">
            <h2>Skills & Technologies</h2>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {Object.entries(skillsData).map(([category, skills]) => (
            <motion.div
              key={category}
              variants={itemVariants}
              className="glass-card rounded-[32px] border border-white/10 bg-[#0b0615]/90 p-8 shadow-2xl backdrop-blur-xl"
            >
              <h3 className="mb-6 text-xl font-semibold capitalize text-white">
                {category}
              </h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="text-sm font-medium text-[#cfcfe8]">
                          {skill.name}
                        </span>
                      </div>
                      
                    </div>
                  
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
