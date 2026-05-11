"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SLIDES, EASING } from "@/lib/site";

const SLIDE_MS = 6500;
const pad = (n: number) => String(n).padStart(2, "0");

export function Hero() {
  const [index, setIndex] = useState(0);
  const [tick, setTick] = useState(0);
  const [leanMotion, setLeanMotion] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isInitialSlide = tick === 0;

  useEffect(() => {
    const query = window.matchMedia(
      "(max-width: 768px), (prefers-reduced-motion: reduce)"
    );
    const update = () => setLeanMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
      setTick((t) => t + 1);
    }, SLIDE_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const jump = (delta: number) => {
    setIndex((i) => (i + delta + SLIDES.length) % SLIDES.length);
    setTick((t) => t + 1);
  };

  return (
    <section
      aria-label="Modern villa housing hero"
      className="relative w-screen h-[100svh] min-h-[560px] overflow-hidden isolate md:min-h-[640px]"
    >
      {/* Layered backgrounds — full-bleed crossfade + Ken Burns */}
      <div aria-hidden="true" className="absolute inset-0 -z-30 bg-black">
        <AnimatePresence>
          <motion.div
            key={index}
            className="absolute inset-0 will-change-[opacity,transform]"
            initial={
              isInitialSlide || leanMotion
                ? { opacity: 1, scale: 1.08, x: 0, filter: "blur(0px)" }
                : { opacity: 0, scale: 1.06, x: 22, filter: "blur(4px)" }
            }
            animate={{
              opacity: 1,
              scale: leanMotion ? 1.08 : 1.13,
              x: 0,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              scale: 1.1,
              x: leanMotion ? 0 : -12,
              filter: "blur(0px)",
            }}
            transition={{
              opacity: { duration: leanMotion ? 0.45 : 0.8, ease: EASING },
              x: { duration: leanMotion ? 0.45 : 0.85, ease: EASING },
              filter: { duration: leanMotion ? 0 : 0.6, ease: EASING },
              scale: { duration: leanMotion ? 0.45 : 8, ease: "easeOut" },
            }}
          >
            <Image
              src={SLIDES[index].src}
              alt=""
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
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
        {!isInitialSlide && !leanMotion && (
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
      <div className="absolute inset-0 grid place-items-center text-center px-6 z-10 md:px-6">
        <div key={tick} className="w-full max-w-[1180px] mx-auto">
          <motion.p
            className="eyebrow-line hero-kicker mx-auto max-w-[300px] text-[10px] uppercase tracking-[0.08em] leading-relaxed text-white/70 mb-4 md:max-w-none md:text-[12px] md:tracking-[0.32em] md:mb-6"
            initial={
              isInitialSlide || leanMotion
                ? false
                : { opacity: 0, y: 18, filter: "blur(3px)" }
            }
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              delay: leanMotion ? 0 : 0.08,
              duration: 0.5,
              ease: EASING,
            }}
          >
            İç Mekan · Mimari Proje - Yaşam Alanları
          </motion.p>

          <h1
            className="mx-auto max-w-[310px] font-display font-black uppercase leading-[1.05] text-white title-shadow md:max-w-none"
            style={{ fontSize: "clamp(1.9rem, 8.5vw, 5.9rem)" }}
          >
            <span className="block overflow-hidden pb-[0.08em]">
              <motion.span
                className="block w-full whitespace-normal md:inline-block md:whitespace-nowrap"
                initial={
                  isInitialSlide || leanMotion
                    ? false
                    : { y: "112%", filter: "blur(4px)" }
                }
                animate={{ y: 0, filter: "blur(0px)" }}
                transition={{
                  delay: leanMotion ? 0 : 0.14,
                  duration: 0.55,
                  ease: EASING,
                }}
              >
                {SLIDES[index].line1}
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-[0.08em]">
              <motion.span
                className="block w-full whitespace-normal md:inline-block md:whitespace-nowrap"
                initial={
                  isInitialSlide || leanMotion
                    ? false
                    : { y: "112%", filter: "blur(4px)" }
                }
                animate={{ y: 0, filter: "blur(0px)" }}
                transition={{
                  delay: leanMotion ? 0 : 0.2,
                  duration: 0.55,
                  ease: EASING,
                }}
              >
                {SLIDES[index].line2}
              </motion.span>
            </span>
          </h1>

          <motion.p
            className="mt-4 mx-auto w-full max-w-[310px] font-light text-white/75 leading-relaxed md:mt-6 md:max-w-[520px]"
            style={{ fontSize: "clamp(15px, 4vw, 18px)" }}
            initial={
              isInitialSlide || leanMotion
                ? false
                : { opacity: 0, y: 16, filter: "blur(3px)" }
            }
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              delay: leanMotion ? 0 : 0.26,
              duration: 0.5,
              ease: EASING,
            }}
          >
            {SLIDES[index].subtitle}
          </motion.p>

          <motion.div
            aria-hidden="true"
            className="mx-auto mt-7 w-px bg-white/40 origin-top max-md:hidden md:mt-9"
            initial={isInitialSlide || leanMotion ? false : { scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{
              delay: leanMotion ? 0 : 0.32,
              duration: 0.6,
              ease: EASING,
            }}
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

        <div className="flex flex-col items-end gap-3.5 max-md:w-full max-md:flex-row max-md:items-center max-md:justify-between">
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

          <div className="flex gap-2 max-md:shrink-0 md:gap-2.5">
            <button
              type="button"
              onClick={() => jump(-1)}
              aria-label="Previous slide"
              className="w-12 h-12 rounded-full bg-white text-ink grid place-items-center transition-transform duration-300 ease-smooth hover:-translate-x-[3px] max-md:hidden"
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
              className="w-12 h-12 rounded-full bg-black/25 border border-white/70 text-white grid place-items-center backdrop-blur-sm transition-[transform,background] duration-300 ease-smooth hover:translate-x-[3px] hover:bg-white/[0.12] max-md:h-11 max-md:w-11"
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
