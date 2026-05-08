// ===============================================
// components/ProjectsSection.tsx
// ===============================================

"use client";

import Link from "next/link";
import {
  Sparkles,
  Monitor,
  Smartphone,
  Zap,
  Globe,
  Database,
  ImageIcon,
  Plane,
} from "lucide-react";

const projects = [
  {
    title: "Personal Portfolio",
    href: "/projects/personal-portfolio",
    icon: Sparkles,
    glow: "from-pink-500/30 to-rose-500/10",
    border: "hover:border-pink-400",
    iconColor: "text-pink-400",
  },

  {
    title: "Quiz App",
    href: "/projects/quiz-app",
    icon: Zap,
    glow: "from-yellow-500/30 to-orange-500/10",
    border: "hover:border-yellow-400",
    iconColor: "text-yellow-400",
  },

  {
    title: "Wish Verse",
    href: "/projects/wish-verse",
    icon: Smartphone,
    glow: "from-purple-500/30 to-fuchsia-500/10",
    border: "hover:border-purple-400",
    iconColor: "text-purple-400",
  },

  {
    title: "Photo Shrank",
    href: "/projects/photo-shrank",
    icon: ImageIcon,
    glow: "from-cyan-500/30 to-blue-500/10",
    border: "hover:border-cyan-400",
    iconColor: "text-cyan-400",
  },

  {
    title: "Expo Air",
    href: "/projects/expo-air",
    icon: Plane,
    glow: "from-sky-500/30 to-indigo-500/10",
    border: "hover:border-sky-400",
    iconColor: "text-sky-400",
  },

  {
    title: "Get Logos",
    href: "/projects/get-logos",
    icon: Globe,
    glow: "from-emerald-500/30 to-teal-500/10",
    border: "hover:border-emerald-400",
    iconColor: "text-emerald-400",
  },

  {
    title: "Student Management",
    href: "/projects/student-management",
    icon: Database,
    glow: "from-violet-500/30 to-purple-500/10",
    border: "hover:border-violet-400",
    iconColor: "text-violet-400",
  },

  {
    title: "PHP Project",
    href: "/projects/project",
    icon: Monitor,
    glow: "from-red-500/30 to-orange-500/10",
    border: "hover:border-red-400",
    iconColor: "text-red-400",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="
        relative
        z-[20]
        min-h-[180vh]
        w-full
        overflow-hidden
        -mt-40
      "
    >
      {/* RIGHT SIDE GRID */}
      <div
        className="
          relative
          ml-auto
          flex
          min-h-[180vh]
          w-full
          max-w-[48%]
          items-end
          justify-end
          px-[4vw]
          pb-[10vh]
        "
      >
        <div
          className="
            grid
            w-full
            max-w-[680px]
            grid-cols-2
            gap-5
          "
        >
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <Link
                key={project.title}
                href={project.href}
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-white/10
                  bg-white/[0.04]
                  p-6
                  backdrop-blur-2xl
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:scale-[1.02]
                  hover:bg-white/[0.06]
                  ${project.border}
                `}
              >
                {/* GLOW */}
                <div
                  className={`
                    absolute
                    inset-0
                    bg-gradient-to-br
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                    ${project.glow}
                  `}
                />

                {/* CONTENT */}
                <div className="relative z-[2]">
                  {/* ICON */}
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-white/10
                      bg-black/30
                    "
                  >
                    <Icon
                      className={`h-7 w-7 ${project.iconColor}`}
                    />
                  </div>

                  {/* TITLE */}
                  <h3
                    className="
                      mt-6
                      text-[1.05rem]
                      font-semibold
                      tracking-tight
                      text-white
                    "
                  >
                    {project.title}
                  </h3>
                </div>

                {/* SHINE EFFECT */}
                <div
                  className="
                    absolute
                    inset-0
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                >
                  <div
                    className="
                      absolute
                      -left-20
                      top-0
                      h-full
                      w-20
                      rotate-12
                      bg-white/10
                      blur-2xl
                    "
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* BOTTOM BORDER */}
      <div
        className="
          absolute
          bottom-0
          left-0
          h-[1px]
          w-full
          bg-white/10
        "
      />
    </section>
  );
}