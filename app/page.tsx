import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-12">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto pt-24 pb-20">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
          Hi, I’m <span className="text-purple-500">Project Davie</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-neutral-400 max-w-2xl">
          I build modern mobile and web applications focused on clean
          architecture, great user experience, and scalable systems.
        </p>

        <div className="mt-10 flex gap-4">
          <Link
            href="#projects"
            className="rounded-lg bg-purple-600 px-6 py-3 font-medium hover:bg-purple-700 transition"
          >
            View Projects
          </Link>

          <Link
            href="#contact"
            className="rounded-lg border border-neutral-700 px-6 py-3 font-medium hover:border-neutral-500 transition"
          >
            Contact Me
          </Link>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="max-w-5xl mx-auto pb-24"
      >
        <h2 className="text-3xl font-bold mb-10">Projects</h2>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Wish Verse */}
          <Link
            href="/projects/wish-verse"
            className="group rounded-2xl border border-neutral-800 p-6 hover:border-purple-500 transition"
          >
            <h3 className="text-2xl font-semibold group-hover:text-purple-400 transition">
              Wish Verse
            </h3>

            <p className="mt-4 text-neutral-400">
              A mobile-first application built with React Native and Expo,
              featuring authentication flows, protected routes, and a custom
              splash screen experience.
            </p>

            <div className="mt-6 flex flex-wrap gap-2 text-sm text-neutral-500">
              <span className="rounded-full border px-3 py-1">
                React Native
              </span>
              <span className="rounded-full border px-3 py-1">
                Expo
              </span>
              <span className="rounded-full border px-3 py-1">
                TypeScript
              </span>
            </div>
          </Link>

          {/* Photo Shrank */}
          <Link
            href="/projects/photo-shrank"
            className="group rounded-2xl border border-neutral-800 p-6 hover:border-purple-500 transition"
          >
            <h3 className="text-2xl font-semibold group-hover:text-purple-400 transition">
              Photo Shrank
            </h3>

            <p className="mt-4 text-neutral-400">
              A desktop application for fast image compression and resizing
              while preserving quality.
            </p>

            <div className="mt-6 flex flex-wrap gap-2 text-sm text-neutral-500">
              <span className="rounded-full border px-3 py-1">
                Electron
              </span>
              <span className="rounded-full border px-3 py-1">
                Node.js
              </span>
              <span className="rounded-full border px-3 py-1">
                Desktop
              </span>
            </div>
          </Link>

          {/* Personal Portfolio */}
          <Link
            href="/projects/personal-portfolio"
            className="group rounded-2xl border border-neutral-800 p-6 hover:border-purple-500 transition"
          >
            <h3 className="text-2xl font-semibold group-hover:text-purple-400 transition">
              Personal Portfolio
            </h3>

            <p className="mt-4 text-neutral-400">
              A modern developer portfolio built with Next.js and Tailwind CSS
              to showcase projects and skills.
            </p>

            <div className="mt-6 flex flex-wrap gap-2 text-sm text-neutral-500">
              <span className="rounded-full border px-3 py-1">
                Next.js
              </span>
              <span className="rounded-full border px-3 py-1">
                React
              </span>
              <span className="rounded-full border px-3 py-1">
                Tailwind CSS
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="border-t border-neutral-800 py-12 text-center text-neutral-500"
      >
        <p>
          © {new Date().getFullYear()} Project Davie — Built with Next.js &
          Tailwind CSS
        </p>
      </footer>
    </main>
  );
}
