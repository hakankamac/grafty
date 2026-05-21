"use client";

import { ScrollReveal } from "@/components/ScrollReveal";

export function HomeScrollReveal() {
  return (
    <ScrollReveal
      rootSelector=".home-continuation"
      sectionSelector="section"
      targetSelector="h2, p:not(.about-label)"
    />
  );
}
