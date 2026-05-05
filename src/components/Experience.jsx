import React from "react";

const experiences = [
  {
    role: "Developer",
    company: "Medicaps Innovation and Incubation Foundation (MII)",
    duration: "Jun 2025 - Aug 2025",
    description: [
      "Developed scalable frontend solutions for ERP Portal and MII Website using React.js and Tailwind CSS.",
      "Optimized performance, debugging, and accessibility to enhance user experience.",
      "Maintained clean code practices with Git/GitHub for collaboration and version control.",
    ],
  },
  {
    role: "Trainee",
    company: "Medicaps Innovation and Incubation Foundation (MII)",
    duration: "Jan 2025 - Apr 2025",
    description: [
      "Built responsive UI components using React.js, Tailwind CSS, and Bootstrap.",
      "Learned modern frontend development practices and contributed to real-world projects.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden px-6 py-20 text-white sm:py-24 lg:py-28"
    >
      <div className="absolute left-1/2 top-44 h-96 w-96 -translate-x-1/2 rounded-full bg-[#ae0ca7]/10 blur-3xl" />
      <div className="absolute left-8 bottom-8 h-72 w-72 rounded-full bg-[#5dffff]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
            Work Experience
          </h2>
          <div className="mx-auto mt-5 h-1.5 w-24 rounded-full bg-[#f056df]" />
        </div>

        <div className="relative pb-6">
          <div className="absolute left-4 top-0 h-full w-px bg-white/25 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12 md:space-y-20">
            {experiences.map((item, index) => {
              const isLeft = index % 2 === 1;

              return (
                <div
                  key={item.role}
                  className="relative grid items-start gap-8 pl-12 md:grid-cols-2 md:gap-20 md:pl-0"
                >
                  <div className="absolute left-4 top-24 z-10 h-6 w-6 -translate-x-1/2 rounded-full bg-[#e85ade] p-2 shadow-[0_0_30px_rgba(232,90,222,0.45)] md:left-1/2">
                    <span className="block h-2 w-2 rounded-full bg-white" />
                  </div>

                  <div className={isLeft ? "md:col-start-1" : "md:col-start-2"}>
                    <article className="rounded-xl border border-white/10 bg-[#1e1a22]/95 p-6 shadow-[0_24px_90px_rgba(0,0,0,0.35)] md:p-7">
                      <h3 className="text-2xl font-bold text-white">{item.role}</h3>
                      <p className="mt-1 text-base text-[#aaa5af]">
                        {item.company} | {item.duration}
                      </p>
                      <div className="mt-6 space-y-2 text-base leading-7 text-[#d8d5dc]">
                        {item.description.map((detail) => (
                          <p key={detail}>{detail}</p>
                        ))}
                      </div>
                    </article>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
