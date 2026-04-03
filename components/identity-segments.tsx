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

const laneOrder = ["Build", "Lead", "Communicate", "Discipline"] as const;

const laneHeading: Record<(typeof laneOrder)[number], string> = {
  Build: "Build",
  Lead: "Lead",
  Communicate: "Communicate",
  Discipline: "Discipline"
};

const laneTone: Record<(typeof laneOrder)[number], string> = {
  Build: "border-cyan-200/70 bg-cyan-50/55 dark:border-cyan-900/50 dark:bg-cyan-950/20",
  Lead: "border-emerald-200/70 bg-emerald-50/55 dark:border-emerald-900/50 dark:bg-emerald-950/20",
  Communicate: "border-indigo-200/70 bg-indigo-50/55 dark:border-indigo-900/50 dark:bg-indigo-950/20",
  Discipline: "border-amber-200/70 bg-amber-50/55 dark:border-amber-900/50 dark:bg-amber-950/20"
};

export function IdentitySegmentsSection() {
  const groupedSegments = laneOrder.map((lane) => ({
    lane,
    items: talentSegments.filter((segment) => segment.lane === lane)
  }));

  return (
    <section id="identity" className="section-wrap">
      <Reveal>
        <p className="section-kicker">Identity Map</p>
        <h2 className="section-title">One person. Multiple lanes. Clear proof.</h2>
      </Reveal>

      <div className="mt-8 grid gap-5 lg:grid-cols-4">
        {groupedSegments.map(({ lane, items }, laneIndex) => (
          <Reveal
            key={lane}
            delay={laneIndex * 0.06}
            className={`rounded-2xl border p-4 ${laneTone[lane]}`}
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[color:var(--muted)]">
              {laneHeading[lane]} Lane
            </p>
            <div className="mt-3 space-y-4">
              {items.map((segment) => (
                <article
                  key={segment.title}
                  className="glass-card rounded-xl border border-[color:var(--edge)] p-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-base font-semibold">{segment.title}</h3>
                    <span
                      className={`rounded-full px-2.5 py-1 text-[10px] font-medium tracking-[0.08em] ${statusTone[segment.status]}`}
                    >
                      {segment.status}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">{segment.description}</p>
                  <a
                    href={segment.href}
                    className="mt-4 inline-flex text-sm font-medium text-cyan-700 transition hover:underline dark:text-cyan-300"
                  >
                    {segment.proofLabel}
                  </a>
                </article>
              ))}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-6 rounded-2xl border border-[color:var(--edge)] bg-white/65 p-5 dark:bg-slate-950/50">
        <p className="text-sm leading-7 text-[color:var(--muted)]">
          The layout is intentionally segmented so visitors can quickly map your technical core, leadership history,
          communication evolution, and disciplined personal operating system in one structured scan.
        </p>
      </Reveal>
    </section>
  );
}
