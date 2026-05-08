// ===============================================
// components/ProjectsSection.tsx
// ===============================================

"use client";

import Link from "next/link";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="
        relative
        z-[20]
        min-h-screen
        px-[6vw]
        py-32
      "
    >

      {/* =========================================
          REMOVED FEATURED PROJECTS HEADER
      ========================================= */}

      <div
        className="
          ml-auto
          grid
          max-w-[720px]
          grid-cols-2
          gap-8
        "
      >

        {/* CARD */}
        <Link
          href="/projects/wish-verse"
          className="
            rounded-3xl
            border
            border-neutral-800
            bg-neutral-900/50
            backdrop-blur-xl
            p-8
            transition
            hover:border-purple-500
          "
        >
          <h3 className="text-2xl font-semibold">
            Wish Verse
          </h3>

          <p className="mt-4 text-neutral-400">
            Mobile-first React Native experience.
          </p>
        </Link>

        {/* CARD */}
        <Link
          href="/projects/photo-shrank"
          className="
            rounded-3xl
            border
            border-neutral-800
            bg-neutral-900/50
            backdrop-blur-xl
            p-8
            transition
            hover:border-cyan-500
          "
        >
          <h3 className="text-2xl font-semibold">
            Photo Shrank
          </h3>

          <p className="mt-4 text-neutral-400">
            Desktop image compression platform.
          </p>
        </Link>

        {/* CARD */}
        <Link
          href="/projects/personal-portfolio"
          className="
            rounded-3xl
            border
            border-neutral-800
            bg-neutral-900/50
            backdrop-blur-xl
            p-8
            transition
            hover:border-pink-500
          "
        >
          <h3 className="text-2xl font-semibold">
            Personal Portfolio
          </h3>

          <p className="mt-4 text-neutral-400">
            Cinematic 3D developer portfolio.
          </p>
        </Link>

      </div>
    </section>
  );
}