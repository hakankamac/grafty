"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { NAV } from "@/lib/site";

const EASE = [0.76, 0, 0.24, 1] as const;
const DURATION = 1.5;
const pad = (n: number) => String(n).padStart(2, "0");

type Payload = {
  id: number;
  label: string;
  index: number;
  total: number;
};

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const firstMount = useRef(true);
  const [payload, setPayload] = useState<Payload | null>(null);

  useEffect(() => {
    if (firstMount.current) {
      firstMount.current = false;
      return;
    }
    const idx = NAV.findIndex((n) => n.href === pathname);
    if (idx === -1) return;
    setPayload({
      id: Date.now(),
      label: NAV[idx].label,
      index: idx + 1,
      total: NAV.length,
    });
  }, [pathname]);

  return (
    <>
      {children}
      <AnimatePresence>
        {payload && (
          <div
            key={payload.id}
            aria-hidden="true"
            className="fixed inset-0 z-[100] pointer-events-none"
          >
            {/* Black curtain — sweeps in, holds, sweeps out */}
            <motion.div
              className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(72,60,42,0.28)_0%,rgba(28,26,21,0.22)_34%,transparent_62%),linear-gradient(135deg,#0b0b0c_0%,#151410_48%,#1d1a14_100%)]"
              initial={{ x: "-100%" }}
              animate={{ x: ["-100%", "0%", "0%", "100%"] }}
              transition={{
                duration: DURATION,
                times: [0, 0.3, 0.7, 1],
                ease: EASE,
              }}
              onAnimationComplete={() => setPayload(null)}
            />

            {/* Editorial overlay content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
              {/* Number indicator */}
              <motion.div
                className="text-[11px] tracking-[0.32em] uppercase text-white/60 mb-6"
                initial={{ opacity: 0, y: 16 }}
                animate={{
                  opacity: [0, 0, 1, 1, 0],
                  y: [16, 16, 0, 0, -8],
                }}
                transition={{
                  duration: DURATION,
                  times: [0, 0.3, 0.5, 0.72, 0.88],
                  ease: EASE,
                }}
              >
                — {pad(payload.index)} / {pad(payload.total)} —
              </motion.div>

              {/* Big title — rises from below, continues up to leave */}
              <div className="overflow-hidden pb-[0.1em]">
                <motion.div
                  className="font-display font-black uppercase tracking-[-0.04em] leading-none text-white inline-block"
                  style={{ fontSize: "clamp(2.6rem, 8.5vw, 6.6rem)" }}
                  initial={{ y: "110%" }}
                  animate={{ y: ["110%", "110%", "0%", "0%", "-110%"] }}
                  transition={{
                    duration: DURATION,
                    times: [0, 0.32, 0.55, 0.72, 0.95],
                    ease: EASE,
                  }}
                >
                  {payload.label}
                </motion.div>
              </div>

              {/* Decorative line — draws then collapses */}
              <motion.div
                className="mt-8 h-px bg-white/60 origin-center"
                style={{ width: 72 }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: [0, 0, 1, 1, 0] }}
                transition={{
                  duration: DURATION,
                  times: [0, 0.42, 0.62, 0.72, 0.88],
                  ease: EASE,
                }}
              />
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
