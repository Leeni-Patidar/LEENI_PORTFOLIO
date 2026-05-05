import React from "react";
import { Download } from "lucide-react";

const details = [
  { label: "Name", value: "Leeni Patidar" },
  { label: "Email", value: "leenip04@gmail.com" },
  { label: "Location", value: "Indore" },
  { label: "Availability", value: "Open to opportunities", highlight: true },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-0 py-20 text-white sm:py-24 lg:min-h-screen lg:py-16"
    >
      <div className="absolute left-[42%] top-16 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[#ae0ca7]/15 blur-3xl" />

      <div className="relative mx-auto grid max-w-[1360px] items-center gap-10 lg:min-h-[calc(100vh-4rem)] lg:grid-cols-[0.95fr_1fr] lg:gap-12 lg:pr-6">
        <div className="relative min-h-[32rem] overflow-hidden rounded-r-2xl border-y border-r border-white/10 bg-[#1d1b20]/85 shadow-[0_30px_110px_rgba(0,0,0,0.45)] sm:min-h-[38rem] lg:min-h-[40rem]">
          <img
            src="/profile.jpg"
            alt="Shine Kyaw Kyaw Aung"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-white/5" />
          <div className="absolute bottom-7 left-6 flex items-center gap-3 text-sm font-semibold text-white">
            <span className="h-3.5 w-3.5 rounded-full bg-[#23d96b]" />
            Available for work
          </div>
        </div>

        <article className="mx-6 rounded-xl border border-white/10 bg-[#211d24]/95 p-7 shadow-[0_28px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-10 lg:mx-0">
          <div className="space-y-5 text-lg leading-8 text-[#d8d5dc] sm:text-xl sm:leading-9">
            <p>
              I'm a passionate software engineer with experience building web
              applications and digital products. I specialize in frontend
              development with React and Next.js, but I'm also comfortable
              working with backend technologies.
            </p>
            <p>
              My journey in tech started with a strong foundation in software
              development. I've worked with various companies to create
              intuitive, performant, and accessible digital experiences.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, and staying up-to-date with
              the latest industry trends.
            </p>
          </div>

          <div className="mt-9 grid gap-x-16 gap-y-6 sm:grid-cols-2">
            {details.map((item) => (
              <div key={item.label}>
                <p className="text-base text-[#8d8793]">{item.label}</p>
                <p
                  className={`mt-1 text-base font-bold ${
                    item.highlight ? "text-[#23d96b]" : "text-white"
                  }`}
                >
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          <button
            onClick={() => window.open("/LEENI_RESUME.pdf", "_blank")}
            className="mt-9 inline-flex items-center gap-2 rounded-md bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
          >
            <Download size={16} />
            Download Resume
          </button>
        </article>
      </div>
    </section>
  );
};

export default AboutSection;
