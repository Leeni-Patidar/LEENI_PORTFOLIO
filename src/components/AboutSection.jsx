import React from "react";

// ✅ Import Flaticon.jpegs
import bootstrap from "../assets/icons/bootstrap.jpeg";
import css from "../assets/icons/css.jpeg";
import express from "../assets/icons/express.jpeg";
import figma from "../assets/icons/figma.jpeg";
import github from "../assets/icons/github.jpeg";
import html from "../assets/icons/html.jpeg";
import javascript from "../assets/icons/javascript.jpeg";
import mongodb from "../assets/icons/mongodb.jpeg";
import mysql from "../assets/icons/mysql.jpeg";
import node from "../assets/icons/node.jpeg";
import postman from "../assets/icons/postman.jpeg";
import reactIcon from "../assets/icons/react.jpeg";
import tailwind from "../assets/icons/tailwind.jpeg";
import vscode from "../assets/icons/vscode.jpeg";

const icons = [
  { icon: bootstrap, label: "Bootstrap" },
  { icon: css, label: "CSS" },
  { icon: express, label: "Express" },
  { icon: figma, label: "Figma" },
  { icon: github, label: "GitHub" },
  { icon: html, label: "HTML" },
  { icon: javascript, label: "JavaScript" },
  { icon: mongodb, label: "MongoDB" },
  { icon: mysql, label: "MySQL" },
  { icon: node, label: "Node.js" },
  { icon: postman, label: "Postman" },
  { icon: reactIcon, label: "React" },
  { icon: tailwind, label: "Tailwind CSS" },
  { icon: vscode, label: "VS Code" },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative py-28 px-6 flex flex-col items-center bg-[#100425] overflow-hidden"
    >
      {/* Decorative gradient background */}
      

      {/* Heading */}
      <h2 className="text-6xl md:text-7xl font-extrabold font-['Josefin_Sans'] heading  z-10">
        About
      </h2>

      {/* Description */}
      <p className="mt-10 text-lg md:text-xl text-[#fafafa]/90 leading-8 md:leading-9 text-center max-w-4xl font-['Josefin_Sans'] z-10">
       I am a Full Stack MERN Developer skilled in React, Node.js, Express, and MongoDB. Passionate about writing clean, maintainable code, I focus on building responsive, accessible, and high-performance applications. With strong problem-solving and teamwork skills, I thrive in collaborative environments, delivering impactful digital solutions that enhance user experiences.
      </p>

      {/* Orbit icons container */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(220,0,211,0.4),transparent)] blur-[200px] top-40 left-1/2 -translate-x-1/2"></div>
      <div className="relative  w-full max-w-[400px] md:max-w-[600px] h-[400px] md:h-[600px] flex justify-center items-center">
        {/* Central glowing circle */}
        <div className="absolute w-24 md:w-36 h-24 md:h-36 rounded-full bg-gradient-to-b from-[#5DFFFF]/30 to-[#DC00D3]/15 flex items-center justify-center z-10">
          <div className="text-white text-3xl md:text-4xl font-bold">Σ</div>
        </div>

        {/* Rotating orbit wrapper */}
        <div className="absolute w-full h-full animate-spin-slow">
          {icons.map((item, i) => {
            const angle = (360 / icons.length) * i;
            const radius = 150; // smaller for mobile, adjusted in CSS
            const x = radius * Math.cos((angle * Math.PI) / 180);
            const y = radius * Math.sin((angle * Math.PI) / 180);

            return (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-all duration-300"
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
                title={item.label}
              >
                <img
                  src={item.icon}
                  alt={item.label}
                  className="w-10 h-10 md:w-12 md:h-12 drop-shadow-lg rounded-full"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Tailwind animation keyframe */}
      <style>
        {`
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 30s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default AboutSection;
