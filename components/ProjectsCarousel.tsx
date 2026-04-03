"use client";

import React from "react";

const projects = [
  "WISH VERSE",
  "PHOTO SHRANK",
  "PERSONAL PORTFOLIO",
  "PROJECT ALPHA",
  "PROJECT BETA",
];

export default function ProjectsCarousel() {
  return (
    <div className="overflow-hidden w-full py-8 bg-black">
      <div className="whitespace-nowrap animate-scroll flex gap-12">
        {projects.map((name, idx) => (
          <span
            key={idx}
            className={`text-white uppercase font-bold text-[clamp(1.5rem,4vw,2.5rem)] 
                        hover:text-purple-500 transition-transform hover:scale-110`}
          >
            {name}
          </span>
        ))}
        {/* Repeat for seamless loop */}
        {projects.map((name, idx) => (
          <span
            key={"repeat-" + idx}
            className={`text-white uppercase font-bold text-[clamp(1.5rem,4vw,2.5rem)]`}
          >
            {name}
          </span>
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