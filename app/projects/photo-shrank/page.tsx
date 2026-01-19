import Link from "next/link";

export default function PhotoShrankPage() {
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
          Photo Shrank
        </h1>

        <p className="mt-4 text-lg text-neutral-400">
          A lightweight desktop application for compressing and resizing images
          efficiently without sacrificing visual quality.
        </p>

        {/* Overview */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-neutral-300 leading-relaxed">
            Photo Shrank is a desktop utility built to simplify image
            optimization workflows. It allows users to shrink image file sizes
            for web and storage use while preserving clarity. The app focuses on
            performance, simplicity, and minimal UI friction.
          </p>
        </div>

        {/* Features */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Key Features</h2>
          <ul className="list-disc list-inside text-neutral-300 space-y-2">
            <li>Fast local image compression</li>
            <li>Batch image processing</li>
            <li>Preserves aspect ratio and quality</li>
            <li>Minimal and distraction-free UI</li>
            <li>Cross-platform desktop support</li>
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Technology Stack</h2>
          <div className="flex flex-wrap gap-3 text-sm">
            <span className="rounded-full border px-4 py-2">
              Electron
            </span>
            <span className="rounded-full border px-4 py-2">
              Node.js
            </span>
            <span className="rounded-full border px-4 py-2">
              JavaScript
            </span>
            <span className="rounded-full border px-4 py-2">
              Image Processing Libraries
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
            This project deepened my understanding of desktop application
            development, IPC communication, file system access, and performance
            considerations when handling large files locally.
          </p>
        </div>
      </section>
    </main>
  );
}
