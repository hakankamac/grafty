"use client";

import { useEffect } from "react";

type ScrollRevealProps = {
  rootSelector: string;
  sectionSelector?: string;
  targetSelector?: string;
};

export function ScrollReveal({
  rootSelector,
  sectionSelector = ".scroll-reveal-section",
  targetSelector = "h2, p:not(.about-label):not(.project-label):not(.contact-label), [data-scroll-reveal]",
}: ScrollRevealProps) {
  useEffect(() => {
    const root = document.querySelector(rootSelector);
    if (!root) return;

    const sections = Array.from(
      root.querySelectorAll<HTMLElement>(sectionSelector),
    );

    const targets = sections.flatMap((section) =>
      Array.from(section.querySelectorAll<HTMLElement>(targetSelector)),
    );

    if (!targets.length) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      targets.forEach((target) => target.classList.add("is-visible"));
      return;
    }

    sections.forEach((section) => {
      const sectionTargets = Array.from(
        section.querySelectorAll<HTMLElement>(targetSelector),
      );

      sectionTargets.forEach((target, index) => {
        target.classList.add("scroll-reveal");
        target.style.setProperty(
          "--scroll-reveal-delay",
          `${Math.min(index, 5) * 90}ms`,
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
  }, [rootSelector, sectionSelector, targetSelector]);

  return null;
}
