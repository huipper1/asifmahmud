"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { registerGSAP, ScrollTrigger, initScrollReveals } from "@/lib/animations";

export function SmoothScroll() {
  useEffect(() => {
    // Respect user's reduced-motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    // Initialize silky smooth Lenis momentum scroll
    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.6,
    });

    const gsap = registerGSAP();

    // Hook Lenis into GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    const updateLenis = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    // Initialize all scroll-triggered reveals
    const cleanupReveals = initScrollReveals();

    return () => {
      cleanupReveals();
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
    };
  }, []);

  return null;
}
