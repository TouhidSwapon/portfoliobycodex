import { capabilities } from "@/data/profile";
import { Reveal } from "./reveal";

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="section-wrap">
      <Reveal>
        <p className="section-kicker">Capabilities</p>
        <h2 className="section-title">Beyond tools: capability clusters that drive delivery and leadership.</h2>
      </Reveal>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {capabilities.map((capability, index) => (
          <Reveal key={capability.title} delay={index * 0.06} className="glass-card rounded-2xl p-6">
            <h3 className="text-xl font-semibold">{capability.title}</h3>
            <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">{capability.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {capability.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[color:var(--edge)] bg-white/50 px-3 py-1 text-xs text-[color:var(--muted)] dark:bg-slate-900/40"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
