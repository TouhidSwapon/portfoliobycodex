import { identityNowBuilding, talentSegments } from "@/data/profile";
import { Reveal } from "./reveal";

const statusTone: Record<string, string> = {
  Proven: "bg-emerald-100 text-emerald-900 dark:bg-emerald-900/40 dark:text-emerald-100",
  "Proven Foundation": "bg-teal-100 text-teal-900 dark:bg-teal-900/40 dark:text-teal-100",
  "In Progress": "bg-amber-100 text-amber-900 dark:bg-amber-900/40 dark:text-amber-100"
};

export function IdentitySegmentsSection() {
  const provenSegments = talentSegments.filter((segment) => segment.maturity === "proven");
  const inProgressSegments = talentSegments.filter((segment) => segment.maturity === "in_progress");

  return (
    <section id="identity" className="section-wrap">
      <Reveal>
        <p className="section-kicker">Identity Map</p>
        <h2 className="section-title">One person. Multiple lanes. Clear levels.</h2>
      </Reveal>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <Reveal className="rounded-2xl border border-emerald-200/70 bg-emerald-50/55 p-5 dark:border-emerald-900/50 dark:bg-emerald-950/20">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[color:var(--muted)]">Proven Lanes</p>
          <div className="mt-4 grid gap-4">
            {provenSegments.map((segment) => (
              <article key={segment.title} className="glass-card rounded-xl border border-[color:var(--edge)] p-4">
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

        <Reveal
          delay={0.06}
          className="rounded-2xl border border-amber-200/70 bg-amber-50/55 p-5 dark:border-amber-900/50 dark:bg-amber-950/20"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[color:var(--muted)]">Emerging Lanes</p>
          <div className="mt-4 grid gap-4">
            {inProgressSegments.map((segment) => (
              <article key={segment.title} className="glass-card rounded-xl border border-[color:var(--edge)] p-4">
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
          <p className="mt-4 rounded-xl border border-[color:var(--edge)] bg-white/70 p-3 text-xs leading-6 text-[color:var(--muted)] dark:bg-slate-950/45">
            These are active growth tracks, not presented as past professional achievements yet.
          </p>
        </Reveal>
      </div>

      <Reveal className="mt-6 rounded-2xl border border-[color:var(--edge)] bg-white/65 p-5 dark:bg-slate-950/50">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[color:var(--muted)]">Now Building</p>
        <ul className="mt-3 grid gap-3 md:grid-cols-2">
          {identityNowBuilding.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-6 text-[color:var(--muted)]">
              <span className="mt-2 inline-block h-2 w-2 rounded-full bg-cyan-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
