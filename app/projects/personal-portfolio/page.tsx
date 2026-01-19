import Link from "next/link";

export default function PersonalPortfolioPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-12">
      <section className="max-w-4xl mx-auto pt-20 pb-24">
        {/* Back Link */}
        <Link
          href="/"
          className="text-sm text-neutral-400 hover:text-purple-400 transition"
        >
          ← Back to Home
        </Link>

        {/* Title */}
        <h1 className="mt-6 text-4xl md:text-5xl font-extrabold">
          Personal Portfolio
        </h1>

        <p className="mt-4 text-lg text-neutral-400">
          A modern developer portfolio built to showcase projects, skills, and
          design philosophy with clarity and focus.
        </p>

        {/* Overview */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-neutral-300 leading-relaxed">
            This portfolio was built using Next.js App Router and Tailwind CSS,
            focusing on clean layouts, performance, and scalability. It serves
            as a central hub for highlighting my work, technical skills, and
            approach to building software.
          </p>
        </div>

        {/* Features */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Key Features</h2>
          <ul className="list-disc list-inside text-neutral-300 space-y-2">
            <li>Modern App Router architecture</li>
            <li>Project-based navigation</li>
            <li>Responsive and accessible layout</li>
            <li>Reusable UI patterns</li>
            <li>Dark-first design system</li>
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Technology Stack</h2>
          <div className="flex flex-wrap gap-3 text-sm">
            <span className="rounded-full border px-4 py-2">
              Next.js
            </span>
            <span className="rounded-full border px-4 py-2">
              React
            </span>
            <span className="rounded-full border px-4 py-2">
              TypeScript
            </span>
            <span className="rounded-full border px-4 py-2">
              Tailwind CSS
            </span>
            <span className="rounded-full border px-4 py-2">
              Git & GitHub
            </span>
          </div>
        </div>

        {/* What I Learned */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">
            What I Learned
          </h2>
          <p className="text-neutral-300 leading-relaxed">
            Building this portfolio reinforced best practices around component
            composition, routing structure, and visual hierarchy. It also helped
            refine how I present projects clearly and professionally.
          </p>
        </div>
      </section>
    </main>
  );
}
