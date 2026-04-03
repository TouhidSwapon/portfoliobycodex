import { community, experiences } from "@/data/profile";
import { Reveal } from "./reveal";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-wrap">
      <Reveal>
        <p className="section-kicker">Experience</p>
        <h2 className="section-title">Impact timeline across delivery, leadership, and community.</h2>
      </Reveal>

      <div className="mt-8 grid gap-7 lg:grid-cols-2">
        <Reveal className="rounded-2xl border border-[color:var(--edge)] bg-white/60 p-6 dark:bg-slate-950/50">
          <h3 className="text-lg font-semibold">Professional Journey</h3>
          <div className="mt-6 space-y-5">
            {experiences.map((item) => (
              <article key={`${item.role}-${item.period}`} className="relative pl-5">
                <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-cyan-400" />
                <p className="text-xs uppercase tracking-[0.16em] text-[color:var(--muted)]">{item.period}</p>
                <h4 className="mt-1 font-semibold">
                  {item.role} <span className="text-[color:var(--muted)]">({item.level})</span>
                </h4>
                <p className="text-sm text-[color:var(--muted)]">{item.company}</p>
                <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">{item.impact}</p>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal className="rounded-2xl border border-[color:var(--edge)] bg-white/60 p-6 dark:bg-slate-950/50" delay={0.08}>
          <h3 className="text-lg font-semibold">Mentorship & Community</h3>
          <div className="mt-6 space-y-4">
            {community.map((item) => (
              <article key={`${item.title}-${item.period}`} className="glass-card rounded-xl p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-[color:var(--muted)]">{item.period}</p>
                <h4 className="mt-1 font-semibold">{item.title}</h4>
                <p className="mt-1 text-sm text-[color:var(--text)]">{item.event}</p>
                <p className="mt-2 text-sm text-[color:var(--muted)]">{item.note}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
