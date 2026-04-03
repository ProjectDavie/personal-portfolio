"use client";

import React from "react";
import ProjectsCarousel from "./ProjectsCarousel";

export default function HeroSection() {
  return (
    <section className="w-full bg-black text-white">
      {/* Full viewport container */}
      <div className="flex flex-col min-h-screen px-[5vw] py-6 md:min-h-[45vh] md:py-12">

        {/* Hero Text: takes ~60% of the viewport */}
        <div className="flex-1 flex flex-col justify-center items-center text-center">
          <h1 className="font-extrabold tracking-tight text-[clamp(2rem,5vw,3.5rem)] md:text-[clamp(3rem,4vw,5rem)]">
            Hi, I’m <span className="text-purple-500">Project Davie ⭐</span>
          </h1>

          <p className="mt-4 text-[clamp(1rem,2.5vw,1.25rem)] text-neutral-400 max-w-[600px]">
            I build modern mobile and web applications focused on clean
            architecture, great user experience, and scalable systems.
          </p>

          <div className="mt-6 flex flex-wrap gap-4 justify-center">
            <a
              href="#projects"
              className="rounded-lg bg-purple-600 px-6 py-2 font-medium hover:bg-purple-700 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-neutral-700 px-6 py-2 font-medium hover:border-neutral-500 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Carousel: takes remaining ~40% of viewport */}
        <div className="flex-none md:hidden mt-6 flex justify-center">
          <ProjectsCarousel />
        </div>
      </div>
    </section>
  );
}