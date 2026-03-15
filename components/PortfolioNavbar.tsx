"use client";

import * as React from "react";
import {
  Twitch,
  Youtube,
  Twitter,
  Instagram,
  Music2, // TikTok alternative
} from "lucide-react";
import { cn } from "@/lib/utils";

const socialLinks = [
  { icon: Twitch, href: "https://twitch.tv/ProjectDavie", label: "Twitch" },
  { icon: Youtube, href: "https://youtube.com/ProjectDavie", label: "YouTube" },
  { icon: Twitter, href: "https://x.com/ProjectDavie", label: "X.com" },
  { icon: Instagram, href: "https://instagram.com/ProjectDavie", label: "Instagram" },
  { icon: Music2, href: "https://tiktok.com//ProjectDavie", label: "TikTok" },
];

export function PortfolioNavbar() {
  return (
    // Sticky header, 100% transparent, spans full width
    <header className="sticky top-0 z-50 w-full bg-transparent">
      {/* Using 'w-full' instead of 'container' to stretch the whole page length.
          'justify-end' pushes all content (the icons) to the far right.
      */}
      <div className="flex h-16 w-full items-center justify-end px-6 md:px-12">
        
        {/* Social Media Icons Group */}
        <div className="flex items-center gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "transition-transform hover:scale-110",
                "text-cyan-400" // Bright Cyan color
              )}
            >
              <social.icon 
                className="h-6 w-6" 
                strokeWidth={3} // Makes the icon appear "bold"
              />
              <span className="sr-only">{social.label}</span>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}