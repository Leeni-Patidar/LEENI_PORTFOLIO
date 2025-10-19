import React from "react";

export default function Experience() {
  const experiences = [
    {
      role: "Trainee → Developer",
      company: "MII Foundation (Medi-Caps Innovation & Incubation, Indore)",
      duration: "Jan 2025 – Present",
      description: [
        "Started as a Frontend Trainee, contributing to the ERP Portal using HTML, CSS, JavaScript, Bootstrap, and React.",
        "Progressed to Developer, working on both the ERP Portal and the MII website.",
        "Enhanced existing features, optimized performance, and delivered responsive, user-friendly UIs with React and TailwindCSS.",
      ],
    },
  ];

  return (
    <section id="experience" className="relative py-20 px-6 bg-[#100425] overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute w-[600px] h-[600px] -top-40 -left-20 rounded-full blur-[180px] bg-[linear-gradient(215deg,#DC00D3_0%,#12B4B4_100%)] opacity-20"></div>
      <div className="absolute w-[500px] h-[500px] bottom-0 right-0 rounded-full blur-[150px] bg-[linear-gradient(215deg,#12B4B4_0%,#DC00D3_100%)] opacity-20"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold heading mb-4">
            Experience
          </h2>
          <p className="text-lg text-[#d9d9d9]">
            My professional journey so far
          </p>
        </div>

        {/* Experience List */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-3xl p-8 "
            >
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                <p className="text-[#5dffff] font-medium">{exp.company}</p>
                <p className="text-sm text-[#d9d9d9] mt-1">{exp.duration}</p>
              </div>

              <ul className="list-disc list-inside space-y-2 text-[#d9d9d9] leading-relaxed">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
