"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { PAGE_TRANSITIONS } from "@/lib/site";

const EASE = [0.76, 0, 0.24, 1] as const;
const DURATION = 0.82;

type Payload = {
  id: number;
  label: string;
};

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const firstMount = useRef(true);
  const [canAnimate, setCanAnimate] = useState(false);
  const [payload, setPayload] = useState<Payload | null>(null);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 768px)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      setCanAnimate(!mobileQuery.matches && !motionQuery.matches);
    };

    update();
    mobileQuery.addEventListener("change", update);
    motionQuery.addEventListener("change", update);

    return () => {
      mobileQuery.removeEventListener("change", update);
      motionQuery.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    if (firstMount.current) {
      firstMount.current = false;
      return;
    }

    if (!canAnimate) return;

    const current = PAGE_TRANSITIONS.find((item) => item.href === pathname);
    if (!current) return;

    setPayload({
      id: Date.now(),
      label: current.label,
    });
  }, [canAnimate, pathname]);

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
            <motion.div
              className="absolute inset-0 bg-[#06140d]"
              initial={{ x: "-100%" }}
              animate={{ x: ["-100%", "0%", "0%", "100%"] }}
              transition={{
                duration: DURATION,
                times: [0, 0.34, 0.62, 1],
                ease: EASE,
              }}
              onAnimationComplete={() => setPayload(null)}
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
              <div className="overflow-hidden pb-[0.1em]">
                <motion.div
                  className="font-display inline-block text-white"
                  style={{
                    fontSize: "clamp(2.4rem, 7vw, 5.5rem)",
                    fontWeight: 900,
                    lineHeight: 0.98,
                    textTransform: "uppercase",
                  }}
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{
                    y: ["110%", "0%", "0%", "-110%"],
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{
                    duration: DURATION,
                    times: [0, 0.42, 0.68, 0.96],
                    ease: EASE,
                  }}
                >
                  {payload.label}
                </motion.div>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
