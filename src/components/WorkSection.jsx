import React from "react"
import { Github, ExternalLink } from "lucide-react"

export default function WorkSection() {
  const projects = [
    {
      title: "BloomingBasket",
      description:
        "An e-commerce web app for browsing and purchasing products. Features product listings, shopping cart, and secure checkout, providing users with a seamless online shopping experience from browsing to payment completion.",
      image: "/BloomingBasket.png",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      links: {
        github: "https://github.com/Leeni-Patidar/BloomingBasket",
        live: "https://bloomingbasket-client.onrender.com",
      },
    },
    {
      title: "Sip-Chill",
      description:
        "A modern café and drinks platform that enables users to explore beverages, view menus, and enjoy an interactive browsing experience designed with responsive UI and smooth navigation for customers.",
      image: "/Sip&Chill.png",
      tags: ["React", "Node.js", "MySQL"],
      links: {
        github: "https://github.com/Leeni-Patidar/Sip-Chill",
        live: "https://sip-chill.vercel.app/",
      },
    },
    {
      title: "Attendance Management System",
      description:
        "A web application for tracking student attendance. It allows administrators to record, manage, and analyze attendance data efficiently while ensuring accurate reporting and streamlined academic record management.",
      image: "/Attendance.png",
      tags: ["React"],
      links: {
        github: "https://github.com/Leeni-Patidar/Attendance-Management-System",
        live: "#",
      },
    },
    ]

  return (
    <section id="work" className="relative py-20 px-6 bg-[#100425] overflow-hidden">
      {/* Gradient Blobs (background decoration) */}
      <div className="absolute w-[600px] h-[600px] lg:w-[750px] lg:h-[750px] -top-40 right-10 rounded-full blur-[180px] bg-[linear-gradient(215deg,#DC00D3_0%,#12B4B4_100%)] opacity-30"></div>
      <div className="absolute w-[500px] h-[500px] bottom-0 left-0 rounded-full blur-[150px] bg-[linear-gradient(215deg,#12B4B4_0%,#DC00D3_100%)] opacity-20"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold heading mb-4">Recent Work</h2>
          <p className="text-lg text-[#d9d9d9]">A collection of projects I've worked on</p>
        </div>

        {/* Project Cards */}
        <div className="space-y-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Project Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div>
                  <span className="text-sm text-[#5dffff] font-medium tracking-wide">Featured Project</span>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mt-2">{project.title}</h3>
                </div>

                <div className="backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl rounded-3xl p-6 hover:bg-white/20 transition">
                  <p className="text-[#d9d9d9] leading-relaxed">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm bg-[#251c31] text-[#5dffff] rounded-full shadow"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-[#d9d9d9] hover:text-[#5dffff] transition-colors"
                  >
                    <Github size={22} />
                  </a>
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-[#d9d9d9] hover:text-[#5dffff] transition-colors"
                  >
                    <ExternalLink size={22} />
                  </a>
                </div>
              </div>

              {/* Project Image */}
              <div className={`${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                <div className="relative group rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-80 object-cover rounded-2xl transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#5dffff]/20 rounded-2xl opacity-0 "></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
