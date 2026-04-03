import { nowFocus } from "@/data/profile";
import { Reveal } from "./reveal";

export function NowFocusSection() {
  return (
    <section id="now" className="section-wrap">
      <Reveal>
        <p className="section-kicker">Now / Current Focus</p>
        <h2 className="section-title">What I am building and practicing now.</h2>
      </Reveal>

      <Reveal className="mt-8 rounded-2xl border border-[color:var(--edge)] bg-white/70 p-6 dark:bg-slate-950/60">
        <ul className="grid gap-4 md:grid-cols-2">
          {nowFocus.map((item) => (
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
