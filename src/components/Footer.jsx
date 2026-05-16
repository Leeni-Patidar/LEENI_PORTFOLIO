import React from "react";
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-4 py-10 text-[#bdbde1] backdrop-blur-xl sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm">Leeni Patidar </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Leeni-Patidar"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-[#5dffff]"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/leeni-patidar-128274318/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-[#ae0ca7]"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
