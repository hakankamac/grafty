"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV } from "@/lib/site";

const EASE = [0.76, 0, 0.24, 1] as const;
const WIPE_EASE = [0.65, 0, 0.35, 1] as const;
const pad = (n: number) => String(n).padStart(2, "0");

export function MenuOverlay({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [hoveredIdx, setHoveredIdx] = useState(0);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && [
        // Right: image preview panel — slides in from right
        <motion.aside
          key="image-panel"
          aria-hidden="true"
          className="fixed inset-y-0 right-0 w-[38%] min-[1464px]:w-1/2 z-[90] bg-black overflow-hidden hidden md:block"
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <AnimatePresence>
            <motion.div
              key={hoveredIdx}
              className="absolute inset-0 bg-cover bg-center will-change-[clip-path,transform]"
              style={{ backgroundImage: `url(${NAV[hoveredIdx].preview})` }}
              initial={{ clipPath: "inset(0 0 100% 0)", scale: 1.12 }}
              animate={{ clipPath: "inset(0 0 0% 0)", scale: 1 }}
              exit={{ clipPath: "inset(100% 0 0 0)" }}
              transition={{
                clipPath: { duration: 0.85, ease: WIPE_EASE },
                scale: { duration: 6, ease: "easeOut" },
              }}
            />
          </AnimatePresence>

          {/* Edge vignette toward glass side, soft bottom shade */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-transparent to-black/15 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/55 pointer-events-none" />

          {/* Slide caption */}
          <motion.div
            className="absolute left-12 right-12 bottom-12 flex justify-between items-end text-white/85 text-[11px] tracking-[0.32em] uppercase"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 14 }}
            transition={{ delay: 0.7, duration: 0.6, ease: EASE }}
          >
            <span className="flex items-center gap-3">
              <span className="block w-7 h-px bg-white/55" />
              {NAV[hoveredIdx].label}
            </span>
            <span>
              {pad(hoveredIdx + 1)} / {pad(NAV.length)}
            </span>
          </motion.div>
        </motion.aside>,

        // Left: frosted glass panel — slides in from left
        <motion.aside
          key="glass-panel"
          role="dialog"
          aria-modal="true"
          aria-label="Site menüsü"
          className="menu-panel fixed inset-y-0 left-0 w-full md:w-[62%] min-[1464px]:w-1/2 z-[91] overflow-hidden bg-black/40 backdrop-blur-2xl border-r border-white/10"
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          {/* Inner glass highlights */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.07] via-transparent to-white/[0.02] pointer-events-none" />
          <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-white/30 via-white/10 to-transparent pointer-events-none" />

          <div className="menu-panel-inner relative h-full flex flex-col justify-center px-10 md:px-20 py-24 max-h-screen overflow-y-auto">
            {/* Eyebrow */}
            <motion.div
              className="text-[11px] uppercase tracking-[0.32em] text-white/55 mb-10 flex items-center gap-3"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ delay: 0.5, duration: 0.6, ease: EASE }}
            >
              <span className="block w-7 h-px bg-white/40" />
              Menü
            </motion.div>

            {/* Links */}
            <ul className="flex flex-col gap-2 list-none p-0 m-0">
              {NAV.map((item, i) => (
                <li key={item.href} className="overflow-visible">
                  <motion.div
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    exit={{ y: "110%" }}
                    transition={{
                      delay: 0.55 + i * 0.08,
                      duration: 0.75,
                      ease: EASE,
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      onMouseEnter={() => setHoveredIdx(i)}
                      onFocus={() => setHoveredIdx(i)}
                      className="group flex items-baseline gap-5 py-2.5 min-w-0 max-[1463px]:gap-3"
                    >
                      <span className="text-[12px] tracking-[0.28em] uppercase text-white/35 group-hover:text-white/85 transition-colors duration-300">
                        {pad(i + 1)}
                      </span>
                      <span
                        className="menu-link-label font-display font-black uppercase leading-[0.95] text-white/55 group-hover:text-white transition-colors duration-300 pb-[0.06em]"
                      >
                        {item.label}
                      </span>
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>

            {/* Footer info */}
            <motion.div
              className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-md text-[13px] leading-relaxed text-white/65"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ delay: 0.95, duration: 0.7, ease: EASE }}
            >
              <div>
                <div className="text-[10px] uppercase tracking-[0.32em] text-white/40 mb-2">
                  İletişim
                </div>
                hello@grafty.studio
                <br />
                +90 212 000 00 00
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.32em] text-white/40 mb-2">
                  Stüdyo
                </div>
                Karaköy, İstanbul
                <br />
                Mim Sin Caddesi 12
              </div>
            </motion.div>
          </div>
        </motion.aside>,

        // Close button — top right
        <motion.button
          key="close-btn"
          type="button"
          onClick={onClose}
          aria-label="Menüyü kapat"
          className="fixed top-7 right-10 z-[92] w-12 h-12 rounded-full bg-white/10 text-white grid place-items-center backdrop-blur-xl border border-white/25 shadow-[0_8px_24px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.18)] transition-[transform,background,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:rotate-90 hover:bg-white/15 hover:border-white/40 max-md:top-5 max-md:right-5 max-md:w-11 max-md:h-11"
          initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.5, rotate: 90 }}
          transition={{ delay: 0.55, duration: 0.5, ease: EASE }}
        >
          <svg
            viewBox="0 0 24 24"
            className="w-[18px] h-[18px]"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </motion.button>,
      ]}
    </AnimatePresence>
  );
}
