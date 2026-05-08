// ===============================================
// components/AboutSection.tsx
// ===============================================

"use client";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="
        relative
        z-[20]
        bg-black
        py-32
        border-t
        border-neutral-900
      "
    >
      <div className="mx-auto max-w-[1400px] px-[6vw]">
        {/* TOP */}
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-20
            items-start
          "
        >
          {/* LEFT */}
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-neutral-500 mb-6">
              About Me
            </p>

            <h2
              className="
                text-5xl
                md:text-6xl
                font-black
                leading-[0.95]
                tracking-[-0.04em]
              "
            >
              Designing premium digital experiences with motion, depth, and
              cinematic interaction.
            </h2>
          </div>

          {/* RIGHT */}
          <div className="space-y-8 text-neutral-400 text-lg leading-[1.9]">
            <p>
              I create immersive websites and interactive digital products that
              combine modern frontend engineering with high-end visual design.
              My focus is building experiences that feel alive — smooth motion,
              cinematic layouts, responsive interfaces, and polished user
              interactions.
            </p>

            <p>
              From advanced animations and 3D web experiences to scalable
              Next.js applications, I build products that are both visually
              impactful and production ready. Every section is carefully crafted
              with performance, responsiveness, and user experience in mind.
            </p>

            <p>
              I specialize in React, Next.js, Tailwind CSS, Framer Motion, and
              Three.js, creating modern interfaces that stand out in creative,
              tech, and luxury-focused industries.
            </p>
          </div>
        </div>

        {/* STATS */}
        <div
          className="
            mt-28
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-6
          "
        >
          {[
            {
              number: "5+",
              label: "Years Experience",
            },
            {
              number: "40+",
              label: "Projects Completed",
            },
            {
              number: "15+",
              label: "Technologies Used",
            },
            {
              number: "100%",
              label: "Responsive Experiences",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="
                rounded-3xl
                border
                border-neutral-800
                bg-neutral-950/70
                p-8
                backdrop-blur
              "
            >
              <h3 className="text-5xl font-black text-white mb-4">
                {item.number}
              </h3>

              <p className="text-neutral-500 tracking-wide">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* SERVICES */}
        <div className="mt-28">
          <p className="text-sm tracking-[0.3em] uppercase text-neutral-500 mb-10">
            Services
          </p>

          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              xl:grid-cols-4
              gap-6
            "
          >
            {[
              "Creative Frontend Development",
              "3D Web Experiences",
              "UI / UX Design",
              "High Performance Next.js Apps",
            ].map((service) => (
              <div
                key={service}
                className="
                  rounded-3xl
                  border
                  border-neutral-800
                  p-8
                  bg-neutral-950
                  hover:border-neutral-600
                  transition-all
                  duration-300
                "
              >
                <h3 className="text-2xl font-bold leading-snug">
                  {service}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}