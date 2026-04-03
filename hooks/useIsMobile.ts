"use client";

import { useEffect, useState } from "react";

// Hook to detect if screen is mobile
export function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check on initial load
    const checkMobile = () => setIsMobile(window.innerWidth < breakpoint);

    checkMobile();

    // Listen for resize events
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [breakpoint]);

  return isMobile;
}