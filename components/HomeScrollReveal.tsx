"use client";

import { useEffect } from "react";

export function HomeScrollReveal() {
  useEffect(() => {
    const root = document.querySelector(".home-continuation");
    if (!root) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const targets = Array.from(
      root.querySelectorAll<HTMLElement>("section h2, section p:not(.about-label)"),
    );

    if (prefersReducedMotion) {
      targets.forEach((target) => target.classList.add("is-visible"));
      return;
    }

    root.querySelectorAll("section").forEach((section) => {
      const sectionTargets = Array.from(
        section.querySelectorAll<HTMLElement>("h2, p:not(.about-label)"),
      );

      sectionTargets.forEach((target, index) => {
        target.classList.add("home-scroll-reveal");
        target.style.setProperty(
          "--home-reveal-delay",
          `${Math.min(index, 4) * 90}ms`,
        );
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.18,
      },
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  return null;
}
