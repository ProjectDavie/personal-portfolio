// ===============================================
// components/HeroSection.tsx
// ===============================================

"use client";

export default function HeroSection() {
  return (
    <section
      className="
        relative
        z-[20]
        min-h-screen
        w-full
        overflow-hidden
        bg-black
      "
    >

      {/* CONTENT */}
      <div
        className="
          flex
          min-h-screen
          items-center
          px-[6vw]
        "
      >
        <div className="max-w-[600px]">

          <p
            className="
              mb-5
              text-sm
              uppercase
              tracking-[0.35em]
              text-purple-400
            "
          >
            Creative Developer
          </p>

          <h1
            className="
              text-[clamp(4rem,8vw,8rem)]
              font-black
              leading-[0.9]
              tracking-tight
            "
          >
            Hi, I’m{" "}
            <span className="text-purple-500">
              ProjectDavie
            </span>
          </h1>

          <p
            className="
              mt-8
              max-w-[520px]
              text-lg
              leading-relaxed
              text-neutral-400
            "
          >
            I build immersive web and mobile experiences
            focused on cinematic interaction systems,
            smooth animation pipelines, premium UI,
            and scalable architecture.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <a
              href="#projects"
              className="
                rounded-2xl
                bg-purple-600
                px-8
                py-4
                font-semibold
                transition
                hover:bg-purple-700
              "
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="
                rounded-2xl
                border
                border-neutral-700
                px-8
                py-4
                font-semibold
                transition
                hover:border-neutral-500
                hover:bg-neutral-900
              "
            >
              Contact Me
            </a>

          </div>
        </div>
      </div>

      {/* GLOW */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-[700px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-purple-500/10
          blur-3xl
        "
      />
    </section>
  );
}