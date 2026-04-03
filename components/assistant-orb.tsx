"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const hints = [
  "Now: guiding teams into AI-native delivery",
  "Signal: product decisions over code volume",
  "Focus: mentorship + system clarity",
  "Mode: calm, consistent execution"
];

export function AssistantOrb() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % hints.length);
    }, 3000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="pointer-events-none fixed bottom-5 right-5 z-30 hidden w-[280px] md:block">
      <div className="rounded-2xl border border-cyan-300/30 bg-slate-950/70 p-4 shadow-glow backdrop-blur-xl">
        <div className="mb-3 flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-cyan-200/80">
          <span className="relative inline-flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-300" />
          </span>
          AI Readout
        </div>
        <AnimatePresence mode="wait">
          <motion.p
            key={hints[index]}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="text-sm text-cyan-50"
          >
            {hints[index]}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}
