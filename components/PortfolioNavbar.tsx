"use client";

import * as React from "react";
import {
  Twitch,
  Youtube,
  Twitter,
  Instagram,
  Music2,
} from "lucide-react";
import { cn } from "@/lib/utils";

const socialLinks = [
  { icon: Twitch, href: "https://twitch.tv/ProjectDavie", label: "Twitch" },
  { icon: Youtube, href: "https://youtube.com/ProjectDavie", label: "YouTube" },
  { icon: Twitter, href: "https://x.com/ProjectDavie", label: "X.com" },
  { icon: Instagram, href: "https://instagram.com/ProjectDavie", label: "Instagram" },
  { icon: Music2, href: "https://tiktok.com/@ProjectDavie", label: "TikTok" },
];

export function PortfolioNavbar() {
  return (
    <header className="w-full">
      <div className="flex w-full items-center justify-end h-[clamp(3rem,6vw,4rem)]">

        <div className="flex items-center gap-[clamp(0.5rem,2vw,1.5rem)]">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "transition-transform hover:scale-110 text-cyan-400"
              )}
            >
              <social.icon
                className="h-[clamp(1.2rem,2.5vw,1.5rem)] w-[clamp(1.2rem,2.5vw,1.5rem)]"
                strokeWidth={3}
              />
              <span className="sr-only">{social.label}</span>
            </a>
          ))}
        </div>

      </div>
    </header>
  );
}