"use client";

import type { CSSProperties, MouseEvent, ReactNode } from "react";
import { useEffect, useRef } from "react";

type IconName =
  | "building"
  | "interior"
  | "urban"
  | "planning"
  | "modeling"
  | "decor";

type Props = {
  icon: IconName;
  title: string;
  children: ReactNode;
  className?: string;
};

export function AboutFeatureCard({ icon, title, children, className = "" }: Props) {
  const frameRef = useRef<number | null>(null);
  const pointerRef = useRef<{
    card: HTMLDivElement;
    clientX: number;
    clientY: number;
  } | null>(null);

  useEffect(() => {
    return () => {
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    pointerRef.current = {
      card: event.currentTarget,
      clientX: event.clientX,
      clientY: event.clientY,
    };

    if (frameRef.current) return;

    frameRef.current = window.requestAnimationFrame(() => {
      const pointer = pointerRef.current;
      if (!pointer) {
        frameRef.current = null;
        return;
      }

      const { card, clientX, clientY } = pointer;
      const rect = card.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 14;
      const rotateY = -(x - centerX) / 14;
      const bgX = (x / rect.width) * 100;
      const bgY = (y / rect.height) * 100;

      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      card.style.setProperty("--bg-x", `${bgX}%`);
      card.style.setProperty("--bg-y", `${bgY}%`);
      frameRef.current = null;
    });
  }

  function handleMouseLeave(event: MouseEvent<HTMLDivElement>) {
    if (frameRef.current) {
      window.cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }
    pointerRef.current = null;
    event.currentTarget.style.transform = "rotateX(0deg) rotateY(0deg)";
  }

  return (
    <div className={`about-holo-wrap h-full ${className}`} data-scroll-reveal>
      <div
        className="about-holo-card h-full min-h-[300px] rounded-[2rem] border border-[var(--about-surface-container-highest)] p-8 shadow-[0_18px_40px_-28px_rgba(0,0,0,0.28)] max-[340px]:min-h-[358px] md:min-h-[316px] md:p-10"
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
    building: (
      <>
        <path d="M4 20V9l8-5 8 5v11" />
        <path d="M9 20v-7h6v7" />
        <path d="M8 10h.01M12 10h.01M16 10h.01" />
      </>
    ),
    interior: (
      <>
        <path d="M5 12V8a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v4" />
        <path d="M4 13h16v5H4z" />
        <path d="M6 18v2M18 18v2" />
        <path d="M8 9h8" />
      </>
    ),
    urban: (
      <>
        <path d="M3 20h18" />
        <path d="M5 20V8h5v12" />
        <path d="M14 20V4h5v16" />
        <path d="M7 11h1M7 14h1M16 8h1M16 11h1M16 14h1" />
      </>
    ),
    planning: (
      <>
        <path d="M5 4h14v16H5z" />
        <path d="M8 8h8M8 12h5M8 16h8" />
        <path d="M17 3v3M7 3v3" />
      </>
    ),
    modeling: (
      <>
        <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3z" />
        <path d="M12 12 4 7.5M12 12l8-4.5M12 12v9" />
        <path d="m8 5.5 8 4.5" />
      </>
    ),
    decor: (
      <>
        <path d="M5 4h14v10H5z" />
        <path d="M8 20h8" />
        <path d="M12 14v6" />
        <path d="m8 8 2.2 2.2L15.5 6" />
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
