"use client";

import Link from "next/link";
import { PortfolioNavbar } from "@/components/PortfolioNavbar";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-black text-white px-[5vw]">
      
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md">
        <div className="w-full max-w-[1200px] mx-auto py-[clamp(0.5rem,2vw,1rem)]">
          <PortfolioNavbar />
        </div>
      </div>

      {/* Content Wrapper */}
      <div className="pt-[clamp(4rem,10vw,6rem)]">

        {/* Hero Section */}
        <section className="w-full max-w-[1200px] mx-auto py-[clamp(2rem,6vw,5rem)]">
          
          <h1 className="font-extrabold tracking-tight text-[clamp(2rem,5vw,3.5rem)]">
            Hi, I’m <span className="text-purple-500">Project Davie ⭐</span>
          </h1>

          <p className="mt-[clamp(1rem,3vw,2rem)] text-[clamp(1rem,2.5vw,1.25rem)] text-neutral-400 max-w-[600px]">
            I build modern mobile and web applications focused on clean
            architecture, great user experience, and scalable systems.
          </p>

          <div className="mt-[clamp(1.5rem,4vw,3rem)] flex flex-wrap gap-[clamp(0.5rem,2vw,1rem)]">
            <Link
              href="#projects"
              className="rounded-lg bg-purple-600 px-[clamp(1rem,3vw,1.5rem)] py-[clamp(0.6rem,2vw,0.9rem)] font-medium hover:bg-purple-700 transition"
            >
              View Projects
            </Link>

            <Link
              href="#contact"
              className="rounded-lg border border-neutral-700 px-[clamp(1rem,3vw,1.5rem)] py-[clamp(0.6rem,2vw,0.9rem)] font-medium hover:border-neutral-500 transition"
            >
              Contact Me
            </Link>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="w-full max-w-[1200px] mx-auto py-[clamp(2rem,6vw,5rem)]"
        >
          <h2 className="text-[clamp(1.5rem,4vw,2rem)] font-bold mb-[clamp(1.5rem,4vw,3rem)]">
            Projects
          </h2>

          <div className="grid gap-[clamp(1rem,3vw,2rem)] md:grid-cols-2">

            {/* Project Card */}
            <Link
              href="/projects/wish-verse"
              className="group rounded-2xl border border-neutral-800 p-[clamp(1rem,3vw,2rem)] hover:border-purple-500 transition"
            >
              <h3 className="text-[clamp(1.2rem,3vw,1.5rem)] font-semibold group-hover:text-purple-400 transition">
                Wish Verse
              </h3>

              <p className="mt-4 text-neutral-400">
                A mobile-first application built with React Native and Expo,
                featuring authentication flows, protected routes, and a custom
                splash screen experience.
              </p>

              <div className="mt-6 flex flex-wrap gap-2 text-sm text-neutral-500">
                <span className="rounded-full border px-3 py-1">React Native</span>
                <span className="rounded-full border px-3 py-1">Expo</span>
                <span className="rounded-full border px-3 py-1">TypeScript</span>
              </div>
            </Link>

            <Link
              href="/projects/photo-shrank"
              className="group rounded-2xl border border-neutral-800 p-[clamp(1rem,3vw,2rem)] hover:border-purple-500 transition"
            >
              <h3 className="text-[clamp(1.2rem,3vw,1.5rem)] font-semibold group-hover:text-purple-400 transition">
                Photo Shrank
              </h3>

              <p className="mt-4 text-neutral-400">
                A desktop application for fast image compression and resizing
                while preserving quality.
              </p>

              <div className="mt-6 flex flex-wrap gap-2 text-sm text-neutral-500">
                <span className="rounded-full border px-3 py-1">Electron</span>
                <span className="rounded-full border px-3 py-1">Node.js</span>
                <span className="rounded-full border px-3 py-1">Desktop</span>
              </div>
            </Link>

            <Link
              href="/projects/personal-portfolio"
              className="group rounded-2xl border border-neutral-800 p-[clamp(1rem,3vw,2rem)] hover:border-purple-500 transition"
            >
              <h3 className="text-[clamp(1.2rem,3vw,1.5rem)] font-semibold group-hover:text-purple-400 transition">
                Personal Portfolio
              </h3>

              <p className="mt-4 text-neutral-400">
                A modern developer portfolio built with Next.js and Tailwind CSS.
              </p>

              <div className="mt-6 flex flex-wrap gap-2 text-sm text-neutral-500">
                <span className="rounded-full border px-3 py-1">Next.js</span>
                <span className="rounded-full border px-3 py-1">React</span>
                <span className="rounded-full border px-3 py-1">Tailwind CSS</span>
              </div>
            </Link>

          </div>
        </section>

        {/* Footer */}
        <footer
          id="contact"
          className="border-t border-neutral-800 py-[clamp(2rem,5vw,3rem)] text-center text-neutral-500"
        >
          <p>
            © {new Date().getFullYear()} Project Davie — Built with Next.js &
            Tailwind CSS
          </p>
        </footer>
      </div>
    </main>
  );
}