// ===============================================
// app/page.tsx
// ===============================================

"use client";

import { PortfolioNavbar } from "@/components/PortfolioNavbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SceneCanvas from "@/components/SceneCanvas";

export default function HomePage() {
  return (
    <main className="relative bg-black text-white overflow-x-hidden">

      {/* =========================================
          GLOBAL 3D CANVAS
          NOW FLOATS OVER ENTIRE PAGE
      ========================================= */}
      <SceneCanvas />

      {/* NAVBAR */}
      <div className="fixed top-0 left-0 w-full z-[100]">
        <div className="mx-auto max-w-[1400px] px-[4vw] py-5">
          <PortfolioNavbar />
        </div>
      </div>

      {/* HERO */}
      <HeroSection />

      {/* PROJECTS */}
      <ProjectsSection />

      {/* FOOTER */}
      <footer
        id="contact"
        className="
          relative
          z-[20]
          border-t
          border-neutral-800
          py-16
          text-center
          text-neutral-500
          bg-black
        "
      >
        © {new Date().getFullYear()} ProjectDavie — Built with Next.js
      </footer>

    </main>
  );
}