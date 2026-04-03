"use client";

import React from "react";
import Link from "next/link";

const projects = [
  {
    name: "WISH VERSE",
    href: "/projects/wish-verse",
    style: "font-serif italic tracking-wide",
  },
  {
    name: "PHOTO SHRANK",
    href: "/projects/photo-shrank",
    style: "font-mono tracking-widest",
  },
  {
    name: "PERSONAL PORTFOLIO",
    href: "/projects/personal-portfolio",
    style: "font-sans uppercase tracking-tight",
  },
  {
    name: "PROJECT ALPHA",
    href: "#",
    style: "italic tracking-[0.2em]",
  },
  {
    name: "PROJECT BETA",
    href: "#",
    style: "font-light tracking-wider",
  },
];

export default function ProjectsCarousel() {
  return (
    <div className="overflow-hidden w-full py-8 bg-black">
      <div className="whitespace-nowrap animate-scroll flex gap-12">

        {/* First loop */}
        {projects.map((project, idx) => (
          <Link
            key={idx}
            href={project.href}
            className={`text-neutral-400 hover:text-purple-500 
                        uppercase font-bold text-[clamp(1.5rem,4vw,2.5rem)]
                        transition-transform hover:scale-110 ${project.style}`}
          >
            {project.name}
          </Link>
        ))}

        {/* Repeat for seamless loop */}
        {projects.map((project, idx) => (
          <Link
            key={"repeat-" + idx}
            href={project.href}
            className={`text-neutral-400 uppercase font-bold 
                        text-[clamp(1.5rem,4vw,2.5rem)] ${project.style}`}
          >
            {project.name}
          </Link>
        ))}

      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          display: inline-flex;
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
}