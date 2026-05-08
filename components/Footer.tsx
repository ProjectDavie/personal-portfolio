// ===============================================
// components/Footer.tsx
// ===============================================

"use client";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="
        relative
        z-[20]
        bg-black
        border-t
        border-neutral-900
        pt-24
        pb-10
      "
    >
      <div className="mx-auto max-w-[1400px] px-[6vw]">
        {/* TOP GRID */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4
            gap-14
            pb-20
            border-b
            border-neutral-900
          "
        >
          {/* BRAND */}
          <div>
            <h2 className="text-3xl font-black tracking-tight mb-6">
              ProjectDavie
            </h2>

            <p className="text-neutral-500 leading-[1.9]">
              Premium frontend development, cinematic UI systems, immersive web
              experiences, and scalable modern applications built with precision.
            </p>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="text-sm uppercase tracking-[0.25em] text-neutral-500 mb-6">
              Company
            </h3>

            <div className="flex flex-col gap-4">
              <a
                href="https://google.com"
                target="_blank"
                className="text-neutral-300 hover:text-white transition-colors"
              >
                About
              </a>

              <a
                href="https://google.com"
                target="_blank"
                className="text-neutral-300 hover:text-white transition-colors"
              >
                Careers
              </a>

              <a
                href="https://google.com"
                target="_blank"
                className="text-neutral-300 hover:text-white transition-colors"
              >
                Case Studies
              </a>

              <a
                href="https://google.com"
                target="_blank"
                className="text-neutral-300 hover:text-white transition-colors"
              >
                Services
              </a>
            </div>
          </div>

          {/* RESOURCES */}
          <div>
            <h3 className="text-sm uppercase tracking-[0.25em] text-neutral-500 mb-6">
              Resources
            </h3>

            <div className="flex flex-col gap-4">
              <a
                href="https://google.com"
                target="_blank"
                className="text-neutral-300 hover:text-white transition-colors"
              >
                Documentation
              </a>

              <a
                href="https://google.com"
                target="_blank"
                className="text-neutral-300 hover:text-white transition-colors"
              >
                Design System
              </a>

              <a
                href="https://google.com"
                target="_blank"
                className="text-neutral-300 hover:text-white transition-colors"
              >
                Blog
              </a>

              <a
                href="https://google.com"
                target="_blank"
                className="text-neutral-300 hover:text-white transition-colors"
              >
                Support
              </a>
            </div>
          </div>

          {/* SOCIALS */}
          <div>
            <h3 className="text-sm uppercase tracking-[0.25em] text-neutral-500 mb-6">
              Connect
            </h3>

            <div className="flex flex-col gap-4">
              <a
                href="https://google.com"
                target="_blank"
                className="text-neutral-300 hover:text-white transition-colors"
              >
                LinkedIn
              </a>

              <a
                href="https://google.com"
                target="_blank"
                className="text-neutral-300 hover:text-white transition-colors"
              >
                GitHub
              </a>

              <a
                href="https://google.com"
                target="_blank"
                className="text-neutral-300 hover:text-white transition-colors"
              >
                Twitter / X
              </a>

              <a
                href="https://google.com"
                target="_blank"
                className="text-neutral-300 hover:text-white transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div
          className="
            pt-8
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-6
          "
        >
          <p className="text-neutral-600 text-sm">
            © {new Date().getFullYear()} ProjectDavie. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm">
            <a
              href="https://google.com"
              target="_blank"
              className="text-neutral-500 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>

            <a
              href="https://google.com"
              target="_blank"
              className="text-neutral-500 hover:text-white transition-colors"
            >
              Terms of Service
            </a>

            <a
              href="https://google.com"
              target="_blank"
              className="text-neutral-500 hover:text-white transition-colors"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}