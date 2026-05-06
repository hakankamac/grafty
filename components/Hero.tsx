"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SLIDES, EASING } from "@/lib/site";

const SLIDE_MS = 6500;
const pad = (n: number) => String(n).padStart(2, "0");

export function Hero() {
  const [index, setIndex] = useState(0);
  const [tick, setTick] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isInitialSlide = tick === 0;

  useEffect(() => {
    SLIDES.forEach((s) => {
      const img = new window.Image();
      img.src = s.src;
    });
  }, []);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
      setTick((t) => t + 1);
    }, SLIDE_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [tick]);

  const jump = (delta: number) => {
    setIndex((i) => (i + delta + SLIDES.length) % SLIDES.length);
    setTick((t) => t + 1);
  };

  return (
    <section
      aria-label="Modern villa housing hero"
      className="relative w-screen h-screen min-h-[640px] overflow-hidden isolate"
    >
      {/* Layered backgrounds — full-bleed crossfade + Ken Burns */}
      <div aria-hidden="true" className="absolute inset-0 -z-30 bg-black">
        <AnimatePresence>
          <motion.div
            key={index}
            className="absolute inset-0 bg-cover bg-center will-change-[opacity,filter,transform]"
            style={{ backgroundImage: `url(${SLIDES[index].src})` }}
            initial={
              isInitialSlide
                ? { opacity: 1, scale: 1.08, x: 0, filter: "blur(0px)" }
                : { opacity: 0, scale: 1.08, x: 34, filter: "blur(12px)" }
            }
            animate={{ opacity: 1, scale: 1.16, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.12, x: -22, filter: "blur(6px)" }}
            transition={{
              opacity: { duration: 1.05, ease: EASING },
              x: { duration: 1.35, ease: EASING },
              filter: { duration: 1.15, ease: EASING },
              scale: { duration: 9, ease: "easeOut" },
            }}
          />
        </AnimatePresence>
      </div>

      {/* Gradient overlay */}
      <div aria-hidden="true" className="absolute inset-0 -z-20 hero-overlay" />

      {/* Grain */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 pointer-events-none opacity-[0.07] mix-blend-overlay grain"
      />

      {/* Cinematic architectural wipe */}
      <AnimatePresence>
        {!isInitialSlide && (
          <motion.div
            key={`wipe-${tick}`}
            aria-hidden="true"
            className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 1.15, duration: 0.25, ease: EASING }}
          >
            <motion.div
              className="absolute -top-[18%] bottom-[-18%] left-0 w-[48vw] min-w-[420px] bg-[linear-gradient(90deg,transparent_0%,rgba(9,9,10,0.18)_18%,rgba(255,255,255,0.16)_50%,rgba(9,9,10,0.34)_82%,transparent_100%)] backdrop-blur-[2px]"
              initial={{ x: "-120%", skewX: -12 }}
              animate={{ x: "245%", skewX: -12 }}
              transition={{ duration: 1.35, ease: EASING }}
            />
            <motion.div
              className="absolute inset-y-0 left-0 w-px bg-white/35"
              initial={{ x: "18vw", opacity: 0 }}
              animate={{ x: "82vw", opacity: [0, 0.85, 0] }}
              transition={{ duration: 1.1, ease: EASING }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Side rail */}
      <aside
        aria-hidden="true"
        className="absolute left-10 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-4 text-white/70 text-[12px] uppercase tracking-[0.18em] max-[1460px]:hidden"
      >
        <motion.span
          className="block w-px bg-white/35 mb-1.5 origin-top"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.1, ease: EASING }}
          style={{ height: 56 }}
        />
        <motion.span
          className="vertical-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9, ease: EASING }}
        >
          2023 — Mimarlık Stüdyosu
        </motion.span>
      </aside>

      {/* Right meta */}
      <aside
        aria-hidden="true"
        className="absolute right-10 top-1/2 -translate-y-1/2 z-30 flex flex-col items-end gap-1.5 max-[1460px]:hidden"
      >
        <motion.span
          className="font-display font-extrabold text-[44px] tracking-[-0.04em] leading-none"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASING }}
        >
          {pad(SLIDES.length)}
        </motion.span>
        <motion.span
          className="text-[11px] tracking-[0.28em] uppercase text-white/70"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ delay: 0.25, duration: 0.9, ease: EASING }}
        >
          Öne Çıkan Projeler
        </motion.span>
      </aside>

      {/* Stage — re-key on tick to retrigger title rise */}
      <div className="absolute inset-0 grid place-items-center text-center px-6 z-10">
        <div key={tick} className="w-full max-w-[1180px] mx-auto">
          <motion.p
            className="eyebrow-line text-[12px] uppercase tracking-[0.32em] text-white/70 mb-6"
            initial={{ opacity: 0, y: 34, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.42, duration: 1.05, ease: EASING }}
          >
            Mimari · İç Tasarım · Peyzaj
          </motion.p>

          <h1
            className="font-display font-black uppercase tracking-[-0.04em] leading-[1.05] text-white title-shadow"
            style={{ fontSize: "clamp(1.9rem, 6.3vw, 5.9rem)" }}
          >
            <span className="block overflow-hidden pb-[0.08em]">
              <motion.span
                className="inline-block whitespace-nowrap"
                initial={{ y: "112%", filter: "blur(7px)" }}
                animate={{ y: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.62, duration: 1.15, ease: EASING }}
              >
                {SLIDES[index].line1}
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-[0.08em]">
              <motion.span
                className="inline-block whitespace-nowrap"
                initial={{ y: "112%", filter: "blur(7px)" }}
                animate={{ y: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.8, duration: 1.15, ease: EASING }}
              >
                {SLIDES[index].line2}
              </motion.span>
            </span>
          </h1>

          <motion.p
            className="mt-6 mx-auto font-light text-white/70 max-w-[520px] leading-relaxed"
            style={{ fontSize: "clamp(15px, 1.15vw, 18px)" }}
            initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 1.03, duration: 0.95, ease: EASING }}
          >
            {SLIDES[index].subtitle}
          </motion.p>

          <motion.div
            aria-hidden="true"
            className="mx-auto mt-9 w-px bg-white/40 origin-top"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 1.4, duration: 1, ease: EASING }}
            style={{ height: 48 }}
          />
        </div>
      </div>

      {/* Footer controls */}
      <footer className="absolute left-0 right-0 bottom-0 px-6 md:px-10 pt-7 pb-9 flex justify-between items-end z-30 max-md:flex-col max-md:items-stretch max-md:gap-5">
        <div className="flex gap-2.5 flex-wrap max-md:justify-center">
          <button
            type="button"
            className="px-[22px] py-2.5 border border-white/55 rounded-full text-white text-[13px] font-medium tracking-[0.02em] bg-white/[0.16] backdrop-blur-sm transition-[background,border-color] duration-300 ease-smooth hover:bg-white/[0.2] hover:border-white"
          >
            Mimarlık
          </button>
          <button
            type="button"
            className="px-[22px] py-2.5 border border-white/55 rounded-full text-white text-[13px] font-medium tracking-[0.02em] bg-transparent backdrop-blur-sm transition-[background,border-color] duration-300 ease-smooth hover:bg-white/[0.12] hover:border-white"
          >
            İç Tasarım
          </button>
        </div>

        <div className="flex flex-col items-end gap-3.5 max-md:flex-row max-md:items-center max-md:justify-between">
          <span className="font-display font-semibold text-[13px] tracking-[0.04em] text-white/70">
            <strong className="text-white text-[18px] mr-1.5">
              {pad(index + 1)}
            </strong>
            / {pad(SLIDES.length)}
          </span>

          <div
            aria-hidden="true"
            className="w-[140px] h-px bg-white/25 overflow-hidden relative max-md:hidden"
          >
            <motion.span
              key={tick}
              className="block h-full bg-white"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: SLIDE_MS / 1000, ease: "linear" }}
            />
          </div>

          <div className="flex gap-2.5">
            <button
              type="button"
              onClick={() => jump(-1)}
              aria-label="Previous slide"
              className="w-12 h-12 rounded-full bg-white text-ink grid place-items-center transition-transform duration-300 ease-smooth hover:-translate-x-[3px]"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-[18px] h-[18px]"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => jump(1)}
              aria-label="Next slide"
              className="w-12 h-12 rounded-full bg-black/25 border border-white/70 text-white grid place-items-center backdrop-blur-sm transition-[transform,background] duration-300 ease-smooth hover:translate-x-[3px] hover:bg-white/[0.12]"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-[18px] h-[18px]"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </footer>
    </section>
  );
}
