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
      className="relative overflow-hidden bg-black px-0 py-16 text-white sm:py-24 lg:min-h-screen lg:py-16"
    >
      <div className="absolute left-1/2 top-16 h-72 w-72 -translate-x-1/2 rounded-full bg-[#ae0ca7]/12 blur-3xl sm:h-[34rem] sm:w-[34rem]" />

      <div className="relative mx-auto grid max-w-[1360px] items-center gap-8 px-4 sm:px-6 lg:min-h-[calc(100vh-4rem)] lg:grid-cols-[1fr_3fr] lg:gap-8 lg:pl-0 lg:pr-6">
        <div className="relative flex min-h-[24rem] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#080808]/95 shadow-[0_30px_110px_rgba(0,0,0,0.45)] sm:min-h-[34rem] lg:min-h-[40rem] lg:rounded-l-none lg:rounded-r-2xl lg:border-l-0">
  
  <img
    src="/profile.jpg"
    alt="Leeni Patidar"
    className="h-[50%] w-[50%] max-w-sm rounded-2xl object-cover sm:h-[70%] sm:w-[70%] lg:h-[58%] lg:w-[78%] lg:max-w-xs"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/5" />

  <div className="absolute bottom-7 left-6 flex items-center gap-3 text-sm font-semibold text-white">
    <span className="h-3.5 w-3.5 rounded-full bg-[#23d96b]" />
    Available for work
  </div>
</div>

        <article className="rounded-xl border border-white/10 bg-[#080808]/95 p-6 shadow-[0_28px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-10 lg:mx-0 lg:p-12">
          <div className="space-y-4 text-base leading-7 text-[#d8d5dc] sm:text-lg sm:leading-8">
            <p>
              I'm a passionate Full Stack Developer with strong expertise in frontend
              development using React.js, creating modern, responsive, and user-friendly
              web applications. I enjoy building clean UI designs and transforming ideas
              into seamless digital experiences.
            </p>

            <p>
              Along with frontend development, I work with the MERN Stack and have
              experience developing scalable backend systems using Node.js, Express.js,
              MongoDB, and Python. I love solving real-world problems through efficient
              and optimized code.
            </p>

            <p>
              I'm constantly exploring new technologies, improving my development skills,
              and building projects related to AI, web development, and cloud technologies.
              My goal is to create impactful applications that combine performance,
              functionality, and great user experience.
            </p>
          </div>

          <div className="mt-9 grid gap-x-16 gap-y-6 sm:grid-cols-2">
            {details.map((item) => (
              <div key={item.label}>
                <p className="text-base text-[#8d8793]">{item.label}</p>
                <p
                  className={`mt-1 text-base font-bold ${item.highlight ? "text-[#23d96b]" : "text-white"
                    }`}
                >
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          <button
            onClick={() => window.open("/LEENI_RESUME.pdf", "_blank")}
            className="mt-9 inline-flex w-full items-center justify-center gap-2 rounded-md bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10 sm:w-auto"
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
