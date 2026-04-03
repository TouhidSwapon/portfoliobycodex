import { talentSegments } from "@/data/profile";
import { Reveal } from "./reveal";

const statusTone: Record<string, string> = {
  "Core Profession": "bg-cyan-100 text-cyan-900 dark:bg-cyan-900/40 dark:text-cyan-100",
  Active: "bg-emerald-100 text-emerald-900 dark:bg-emerald-900/40 dark:text-emerald-100",
  "Legacy with momentum": "bg-indigo-100 text-indigo-900 dark:bg-indigo-900/40 dark:text-indigo-100",
  "Operating system": "bg-amber-100 text-amber-900 dark:bg-amber-900/40 dark:text-amber-100",
  "Emerging track": "bg-fuchsia-100 text-fuchsia-900 dark:bg-fuchsia-900/40 dark:text-fuchsia-100",
  "Strategic growth": "bg-sky-100 text-sky-900 dark:bg-sky-900/40 dark:text-sky-100"
};

export function IdentitySegmentsSection() {
  return (
    <section id="identity" className="section-wrap">
      <Reveal>
        <p className="section-kicker">Identity Map</p>
        <h2 className="section-title">One person, multiple high-signal lanes with clear proof.</h2>
      </Reveal>

      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {talentSegments.map((segment, index) => (
          <Reveal
            key={segment.title}
            delay={index * 0.05}
            className="glass-card rounded-2xl border border-[color:var(--edge)] p-5"
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-lg font-semibold">{segment.title}</h3>
              <span
                className={`rounded-full px-3 py-1 text-[11px] font-medium tracking-[0.08em] ${statusTone[segment.status]}`}
              >
                {segment.status}
              </span>
            </div>
            <p className="mt-4 text-sm leading-6 text-[color:var(--muted)]">{segment.description}</p>
            <a
              href={segment.href}
              className="mt-5 inline-flex text-sm font-medium text-cyan-700 transition hover:underline dark:text-cyan-300"
            >
              {segment.proofLabel}
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-6 rounded-2xl border border-[color:var(--edge)] bg-white/65 p-5 dark:bg-slate-950/50">
        <p className="text-sm leading-7 text-[color:var(--muted)]">
          This portfolio is intentionally segmented so visitors can quickly see technical depth, leadership signal,
          communication strengths, and growth directions without losing a coherent personal brand narrative.
        </p>
      </Reveal>
    </section>
  );
}
