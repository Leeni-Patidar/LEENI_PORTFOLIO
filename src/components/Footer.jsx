import React from "react"
import { Github, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative py-8 px-6 border-t border-[#2b215a]/30 bg-[#100425]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Left side text */}
        <p className="text-[#FAFAFA] text-sm font-josefin">
        Leeni Patidar, All rights reserved
        </p>

        {/* Social icons */}
        <div className="flex space-x-4">
          <a
            href="https://github.com/Leeni-Patidar"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-[#979797] hover:text-[#5dffff] transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/leeni-patidar-128274318/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-[#979797] hover:text-[#5dffff] transition-colors"
          >
            <Linkedin size={20} />
          </a>
          {/* <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-[#979797] hover:text-[#5dffff] transition-colors"
          >
            <Twitter size={20} />
          </a> */}
        </div>
      </div>

          
    </footer>
  )
}
