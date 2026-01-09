export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Hero Section */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="text-4xl font-bold md:text-6xl">
          Hi, I’m <span className="text-purple-400">Davie</span>
        </h1>
        <p className="mt-6 max-w-xl text-neutral-400">
          Software Developer focused on building reliable mobile and web
          applications with React, React Native, and Next.js.
        </p>
      </section>

      {/* About Section */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="mb-6 text-3xl font-semibold">About Me</h2>
        <p className="text-neutral-400 leading-relaxed">
          I am currently working on a mobile-first project called{" "}
          <span className="text-neutral-200 font-medium">Wish Verse</span>,
          where I designed authentication flows, protected routes, and a custom
          splash screen using Expo and React Native. The splash screen was
          implemented with a controlled 5-second delay before navigating to the
          sign-in flow, following platform best practices.
        </p>
      </section>

      {/* Projects Section */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="mb-8 text-3xl font-semibold">Projects</h2>

        <div className="rounded-xl border border-neutral-800 p-6 hover:border-purple-400 transition">
          <h3 className="text-xl font-semibold">Wish Verse (Mobile App)</h3>
          <p className="mt-3 text-neutral-400">
            A React Native + Expo mobile application featuring authentication,
            protected routes, and a custom splash screen experience. Built using
            Expo Router, Context API, and modern mobile UI practices.
          </p>

          <div className="mt-4 text-sm text-neutral-500">
            Tech: React Native · Expo · TypeScript · Tailwind (Native)
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800 py-8 text-center text-neutral-500">
        © {new Date().getFullYear()} Davie. All rights reserved.
      </footer>
    </main>
  );
}
