"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

export function registerGSAP() {
  if (typeof window !== "undefined" && !registered) {
    gsap.registerPlugin(ScrollTrigger);
    registered = true;
  }
  return gsap;
}

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Initializes automatic scroll-reveal animations across all elements marked with
 * `.reveal-fade` or `.reveal-stagger`
 */
export function initScrollReveals() {
  if (typeof window === "undefined" || prefersReducedMotion()) return () => {};

  const gsapInstance = registerGSAP();
  const ctx = gsapInstance.context(() => {
    // Individual element reveals
    const fadeElements = document.querySelectorAll(".reveal-fade");
    fadeElements.forEach((el) => {
      gsapInstance.fromTo(
        el,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    // Stagger containers
    const staggerContainers = document.querySelectorAll(".reveal-stagger");
    staggerContainers.forEach((container) => {
      const children = container.children;
      if (children.length > 0) {
        gsapInstance.fromTo(
          children,
          { opacity: 0, y: 30, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: container,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });

    // Subtle parallax on hero floating elements
    const heroFloating = document.querySelectorAll(".hero-float");
    heroFloating.forEach((el) => {
      gsapInstance.to(el, {
        y: -25,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    });
  });

  return () => ctx.revert();
}

export { gsap, ScrollTrigger };
