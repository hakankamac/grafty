"use client";

import type { CSSProperties, MouseEvent, ReactNode } from "react";

type IconName =
  | "premium"
  | "bank"
  | "architecture"
  | "handshake"
  | "insights"
  | "eco";

type Props = {
  icon: IconName;
  title: string;
  children: ReactNode;
  className?: string;
};

export function AboutFeatureCard({ icon, title, children, className = "" }: Props) {
  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 14;
    const rotateY = -(x - centerX) / 14;
    const bgX = (x / rect.width) * 100;
    const bgY = (y / rect.height) * 100;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    card.style.setProperty("--bg-x", `${bgX}%`);
    card.style.setProperty("--bg-y", `${bgY}%`);
  }

  function handleMouseLeave(event: MouseEvent<HTMLDivElement>) {
    event.currentTarget.style.transform = "rotateX(0deg) rotateY(0deg)";
  }

  return (
    <div className={`about-holo-wrap about-fade-in-up ${className}`}>
      <div
        className="about-holo-card min-h-[248px] rounded-[2rem] border border-[var(--about-surface-container-highest)] p-8 md:p-10 shadow-[0_18px_40px_-28px_rgba(0,0,0,0.28)]"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transform: "rotateX(0deg) rotateY(0deg)" } as CSSProperties}
      >
        <div className="relative z-10 flex h-full flex-col gap-6">
          <Icon name={icon} />
          <div className="space-y-3">
            <h3 className="about-headline-sm text-[var(--about-on-surface)]">
              {title}
            </h3>
            <p className="about-body-md text-[var(--about-on-surface-variant)]">
              {children}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon({ name }: { name: IconName }) {
  const paths: Record<IconName, ReactNode> = {
    premium: (
      <>
        <path d="M12 3l2.35 4.75 5.25.76-3.8 3.7.9 5.23L12 14.98 7.3 17.44l.9-5.23-3.8-3.7 5.25-.76L12 3z" />
        <path d="M8.5 20.5h7" />
      </>
    ),
    bank: (
      <>
        <path d="M4 10h16" />
        <path d="M6 10v8M10 10v8M14 10v8M18 10v8" />
        <path d="M3.5 18h17M5 21h14" />
        <path d="M12 3.5 4.5 8h15L12 3.5z" />
      </>
    ),
    architecture: (
      <>
        <path d="M4 20V8l8-4 8 4v12" />
        <path d="M9 20v-7h6v7" />
        <path d="M8 9h.01M12 9h.01M16 9h.01" />
      </>
    ),
    handshake: (
      <>
        <path d="M8.5 12.5 11 15a2 2 0 0 0 2.8 0l.7-.7" />
        <path d="M14 9.5 16.5 12l2.5-2.5" />
        <path d="m5 13 3.5-3.5 3 3" />
        <path d="M2.5 11.5 7 7l3 3M21.5 11.5 17 7l-3 3" />
      </>
    ),
    insights: (
      <>
        <path d="M4 19V5" />
        <path d="M4 19h16" />
        <path d="m7 15 3.5-4 3 2.5L19 7" />
        <path d="M17 7h2v2" />
      </>
    ),
    eco: (
      <>
        <path d="M19 4c-7.5.3-12 4.8-12 10.5 0 3 2 5.5 5.5 5.5C18.5 20 21 12 19 4z" />
        <path d="M7 18c2-4.5 5-7.5 10-10" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-9 w-9 text-[var(--about-tertiary)]"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    >
      {paths[name]}
    </svg>
  );
}
