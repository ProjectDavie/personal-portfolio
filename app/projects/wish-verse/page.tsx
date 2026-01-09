import Link from "next/link";

export default function WishVersePage() {
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
          Wish Verse
        </h1>

        <p className="mt-4 text-lg text-neutral-400">
          A mobile application focused on structured navigation, authentication
          flow design, and clean UI architecture.
        </p>

        {/* Overview */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-neutral-300 leading-relaxed">
            Wish Verse is a React Native application built as a hands-on project
            to explore real-world mobile app architecture. The project focuses
            on authentication flows, route protection, splash screen behavior,
            and scalable navigation using Expo Router.
          </p>
        </div>

        {/* Features */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Key Features</h2>
          <ul className="list-disc list-inside text-neutral-300 space-y-2">
            <li>Authentication context with protected routes</li>
            <li>Separated auth and authenticated navigation stacks</li>
            <li>Custom splash screen with controlled display duration</li>
            <li>Modern UI styled with NativeWind (Tailwind for React Native)</li>
            <li>Git-based feature branch workflow</li>
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Technology Stack</h2>
          <div className="flex flex-wrap gap-3 text-sm">
            <span className="rounded-full border px-4 py-2">
              React Native
            </span>
            <span className="rounded-full border px-4 py-2">
              Expo
            </span>
            <span className="rounded-full border px-4 py-2">
              Expo Router
            </span>
            <span className="rounded-full border px-4 py-2">
              TypeScript
            </span>
            <span className="rounded-full border px-4 py-2">
              NativeWind
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
            This project strengthened my understanding of mobile routing,
            authentication patterns, and clean project structure. It also
            reinforced best practices around Git workflows, including feature
            branches, incremental commits, and merging into main.
          </p>
        </div>
      </section>
    </main>
  );
}
