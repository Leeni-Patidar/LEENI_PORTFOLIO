import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0b0615]/90 p-6 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-[#5dffff]/20 hover:shadow-[0_20px_60px_rgba(93,255,255,0.15)]"
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-[#5dffff]/5 to-[#ae0ca7]/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative">
        <div className="mb-5 overflow-hidden rounded-[28px] bg-[#0c0621]/90">
          <motion.img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            whileHover={{ scale: 1.05 }}
          />
        </div>

        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
          className="inline-flex rounded-full bg-[#11101f] px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#5dffff]"
        >
          Featured
        </motion.span>

        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
          className="mt-4 text-2xl font-semibold text-white"
        >
          {project.title}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
          className="mt-4 text-sm leading-7 text-[#c7c7e5]"
        >
          {project.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
          className="mt-6 flex flex-wrap gap-3"
        >
          {project.tags.map((tag, tagIndex) => (
            <motion.span
              key={tagIndex}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.6 + tagIndex * 0.05, duration: 0.3 }}
              className="rounded-full bg-[#11101f] px-3 py-1 text-xs text-[#9f9ff7] transition-colors hover:bg-[#5dffff]/10 hover:text-[#5dffff]"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.7, duration: 0.5 }}
          className="mt-8 flex items-center justify-between gap-4"
        >
          <motion.a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#d9d9e0] transition hover:text-[#5dffff]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={18} /> Code
          </motion.a>
          <motion.a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#5dffff] to-[#ae0ca7] px-4 py-2 text-sm font-semibold text-black transition hover:opacity-95 hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Live Demo <ExternalLink size={16} />
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;