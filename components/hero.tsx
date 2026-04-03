"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setWordIndex((current) => (current + 1) % profile.heroRotator.length);
    }, 2400);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="top" className="relative overflow-hidden px-6 pb-20 pt-20 md:pt-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-20 top-8 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-emerald-300/10 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_320px] md:items-end">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]"
          >
            {profile.role}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl"
          >
            {profile.heroStatement}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 flex flex-wrap items-center gap-3 text-sm text-[color:var(--muted)]"
          >
            <span className="rounded-full border border-[color:var(--edge)] px-3 py-1">{profile.headline}</span>
            <span className="rounded-full border border-[color:var(--edge)] px-3 py-1">{profile.location}</span>
          </motion.div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-900 dark:hover:bg-cyan-200"
            >
              Start a Strategic Conversation
            </a>
            <a
              href="#projects"
              className="rounded-full border border-[color:var(--edge)] px-6 py-3 text-sm font-medium text-[color:var(--text)] transition hover:-translate-y-0.5"
            >
              Explore Work
            </a>
          </div>
        </div>

        <motion.aside
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="glass-card rounded-3xl p-6"
        >
          <div className="relative mb-5 overflow-hidden rounded-2xl border border-[color:var(--edge)] shadow-glow">
            <Image
              src="/images/highlights/profile/desk-profile.jpg"
              alt="Touhid Swapon portrait"
              width={640}
              height={420}
              sizes="(min-width: 768px) 320px, 100vw"
              quality={72}
              className="h-56 w-full object-cover"
              style={{ objectPosition: "50% 16%" }}
              priority
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950/45 to-transparent" />
          </div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">Identity Signal</p>
          <div className="relative mt-4 min-h-12 text-xl font-medium text-[color:var(--text)]">
            <AnimatePresence mode="wait">
              <motion.span
                key={profile.heroRotator[wordIndex]}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.24 }}
                className="absolute left-0 top-0"
              >
                {profile.heroRotator[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
          <p className="mt-4 text-sm text-[color:var(--muted)]">
            Senior engineer evolving from delivery execution into people leadership and AI-era product strategy.
          </p>
        </motion.aside>
      </div>
    </section>
  );
}
