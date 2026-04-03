import { insights } from "@/data/profile";
import { Reveal } from "./reveal";

export function ThinkingSection() {
  return (
    <section id="thinking" className="section-wrap">
      <Reveal>
        <p className="section-kicker">Thinking</p>
        <h2 className="section-title">Notes on AI, career durability, and technical leadership.</h2>
      </Reveal>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {insights.map((insight, index) => (
          <Reveal
            key={insight.title}
            delay={index * 0.07}
            className="rounded-2xl border border-[color:var(--edge)] bg-white/70 p-6 dark:bg-slate-950/60"
          >
            <h3 className="text-lg font-semibold leading-tight">{insight.title}</h3>
            <p className="mt-4 text-sm leading-6 text-[color:var(--muted)]">{insight.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
