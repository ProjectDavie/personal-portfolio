// ===============================================
// app/page.tsx
// ===============================================

"use client";

import { PortfolioNavbar } from "@/components/PortfolioNavbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import SceneCanvas from "@/components/SceneCanvas";
import Footer from "@/components/Footer";
import ProjectsCarousel from "@/components/ProjectsCarousel";

export default function HomePage() {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      {/* NAVBAR */}
      <div className="fixed top-0 left-0 w-full z-[100]">
        <div className="mx-auto max-w-[1400px] px-[4vw] py-5">
          <PortfolioNavbar />
        </div>
      </div>

      {/* =========================================
          CINEMATIC SECTION
          HERO + PROJECTS SHARE SAME SCENE
      ========================================= */}
      <section id="cinematic-section" className="relative">
        <SceneCanvas />

        <HeroSection />

        <ProjectsSection />
        <ProjectsCarousel />
      </section>

      {/* ABOUT */}
      <AboutSection />

      {/* FOOTER */}
      <Footer />
    </main>
  );
}