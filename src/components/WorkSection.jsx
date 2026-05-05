import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce platform built with Next.js, Stripe, and Prisma for a polished shopping experience.",
    image: "/BloomingBasket.png",
    tags: ["React", "Node.js", "MongoDB"],
    links: {
      github: "https://github.com/Leeni-Patidar/BloomingBasket",
      live: "https://bloomingbasket-client.onrender.com",
    },
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates and intuitive project controls.",
    image: "/Sip&Chill.png",
    tags: ["React", "MySQL", "Tailwind"],
    links: {
      github: "https://github.com/Leeni-Patidar/Sip-Chill",
      live: "https://sip-chill.vercel.app/",
    },
  },
  {
    title: "AI Content Generator",
    description:
      "An AI-powered content creation tool that generates rich writing using modern AI models.",
    image: "/Attendance.png",
    tags: ["React", "OpenAI", "Node.js"],
    links: {
      github: "https://github.com/Leeni-Patidar/Attendance-Management-System",
      live: "#",
    },
  },
  {
    title: "Fitness Tracker",
    description:
      "A mobile-first fitness tracking dashboard built with data visualizations and support for workout logging.",
    image: "/BloomingBasket.png",
    tags: ["React", "Chart.js", "API"],
    links: {
      github: "https://github.com/Leeni-Patidar/Fitness-Tracker",
      live: "#",
    },
  },
  {
    title: "Weather Dashboard",
    description:
      "A responsive weather dashboard with forecast charts and current conditions powered by API integration.",
    image: "/Sip&Chill.png",
    tags: ["React", "API", "CSS"],
    links: {
      github: "https://github.com/Leeni-Patidar/Weather-Dashboard",
      live: "#",
    },
  },
  {
    title: "Portfolio Website",
    description:
      "A modern portfolio website showcasing projects, skills, and experience with a polished dark theme.",
    image: "/Attendance.png",
    tags: ["Next.js", "Tailwind CSS", "UI"],
    links: {
      github: "https://github.com/Leeni-Patidar/Portfolio",
      live: "#",
    },
  },
];

export default function WorkSection() {
  return (
    <section id="work" className="relative overflow-hidden px-6 py-24 sm:py-28 lg:py-32">
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
          <div className="section-label mx-auto">Some of my recent work</div>
          <div className="section-heading mx-auto mt-6 max-w-3xl text-white">
            <h2>Featured Projects</h2>
          </div>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
