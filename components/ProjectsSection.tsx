"use client";

import Link from "next/link";

const projects = [
  {
    title: "Wish Verse",
    desc: "A mobile-first application built with React Native and Expo, featuring authentication flows, protected routes, and a custom splash screen experience.",
    tags: ["React Native", "Expo", "TypeScript"],
    href: "/projects/wish-verse",
  },
  {
    title: "Photo Shrank",
    desc: "A desktop application for fast image compression and resizing while preserving quality.",
    tags: ["Electron", "Node.js", "Desktop"],
    href: "/projects/photo-shrank",
  },
  {
    title: "Personal Portfolio",
    desc: "A modern developer portfolio built with Next.js and Tailwind CSS.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    href: "/projects/personal-portfolio",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full max-w-[1200px] mx-auto py-[clamp(2rem,6vw,5rem)]">
      <h2 className="text-[clamp(1.5rem,4vw,2rem)] font-bold mb-[clamp(1.5rem,4vw,3rem)] text-white text-center sm:text-left">
        Projects
      </h2>

      <div className="grid gap-[clamp(1rem,3vw,2rem)] md:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.title}
            href={project.href}
            className="group rounded-2xl border border-neutral-800 p-[clamp(1rem,3vw,2rem)] hover:border-purple-500 transition"
          >
            <h3 className="text-[clamp(1.2rem,3vw,1.5rem)] font-semibold group-hover:text-purple-400 transition">
              {project.title}
            </h3>
            <p className="mt-4 text-neutral-400">{project.desc}</p>
            <div className="mt-6 flex flex-wrap gap-2 text-sm text-neutral-500">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full border px-3 py-1">
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}