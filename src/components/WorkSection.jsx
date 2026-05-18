import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "GreenCart",
    description:
      "SmartCart AI is a production-grade AI-powered grocery commerce platform built with the MERN stack, featuring intelligent recipe-to-cart automation, semantic product search, personalized recommendations, secure authentication, real-time order tracking, online payments, and scalable cloud deployment with Docker and CI/CD integration.",
    image: "/Collex.png",
    tags: ["React", "Node.js", "Express", "MongoDB" ,"Python", "AI"],
    links: {
      github: "https://github.com/Leeni-Patidar/GreenCart",
    },
  },
   {
    title: "StudyFusion",
    description:
      "An AI-powered learning platform that generates questions, notes, images, and chatbot-based learning assistance, helping students study smarter through personalized, interactive, and automated educational content generation",
    image: "/StudyFusion.png",
    tags: ["React", "Python", "ChromaDB", "AWS", "CI/CD Pipeline"],
    links: {
      github: "https://github.com/Leeni-Patidar/StudyFusion",
    },
  },
  {
    title: "EduSmart",
    description:
      "A full-stack education platform with structured pages and backend support for learning-related features.",
    image: "/EduSmart.png",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    links: {
      github: "https://github.com/Leeni-Patidar/EduSmart",
    },
  },
  {
    title: "Concept Visualizer AI",
    description:
      "An intelligent AI-powered platform that generates personalized educational content combining text explanations with visual aids. It offers a comprehensive learning experience by providing detailed explanations and relevant images to enhance understanding of complex concepts.",
    image: "/Concept-Visualizer-AI.png",
    tags: ["React", "Python", "GroqAPI","Hugging Face" ,"ChromaDB"],
    links: {
      github: "https://github.com/Leeni-Patidar/Multimodal-Education-Creator.git",
      live: "https://concept-visualizer-ai.vercel.app/",
    },
  },
   {
    title: "BloomingBasket",
    description:
      "A flower shopping platform with product browsing and a full-stack structure for online ordering.",
    image: "/BloomingBasket.png",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    links: {
      github: "https://github.com/Leeni-Patidar/BloomingBasket",
      live: "https://bloomingbasket-client.onrender.com",
    },
  },
    {
    title: "Sip Chill",
    description:
      "A stylish cafe and beverage website with a polished frontend experience and responsive pages.",
    image: "/Sip&Chill.png",
    tags: ["React", "Vite", "JavaScript", "CSS"],
    links: {
      github: "https://github.com/Leeni-Patidar/Sip-Chill",
      live: "https://sip-chill.vercel.app/",
    },
  },
    {
    title: "Multivon",
    description:
      "A full-stack JavaScript application organized with separate frontend and backend workspaces.",
    image: "/Multivon.png",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    links: {
      github: "https://github.com/Leeni-Patidar/Multivon",
      live: "https://multivon.vercel.app",
    },
  },
    {
    title: "Fit Plan Hub",
    description:
      "A fitness planning web app for organizing workouts, goals, and healthy routines in one place.",
    image: "/Fit_Plan_Hub.png",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    links: {
      github: "https://github.com/Leeni-Patidar/Fit-Plan-Hub",
    },
  },
  {
    title: "Scan and Mark",
    description:
      "A scan-based marking system for recording and managing attendance with a practical dashboard flow.",
    image: "/Attendance.png",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    links: {
      github: "https://github.com/Leeni-Patidar/Scan-and-Mark",
    },
  },
];

export default function WorkSection() {
  return (
    <section id="work" className="relative overflow-hidden bg-black px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
      <div className="absolute left-0 top-16 h-72 w-72 rounded-full bg-[#5dffff]/10 blur-3xl" />
      <div className="absolute right-0 bottom-16 h-64 w-64 rounded-full bg-[#ae0ca7]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10 text-center sm:mb-16"
        >
          <div className="section-label mx-auto">Some of my recent work</div>
          <div className="section-heading mx-auto mt-6 max-w-3xl text-white">
            <h2>GitHub Projects</h2>
          </div>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
