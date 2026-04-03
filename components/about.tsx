import { aboutStory, profile } from "@/data/profile";
import { Reveal } from "./reveal";

export function AboutSection() {
  return (
    <section id="about" className="section-wrap">
      <Reveal>
        <p className="section-kicker">About / Story</p>
        <h2 className="section-title">From quiet builder to clear communicator and team leader.</h2>
      </Reveal>

      <div className="mt-8 grid gap-8 md:grid-cols-[1fr_320px]">
        <Reveal className="space-y-5 text-[color:var(--muted)]" delay={0.05}>
          {aboutStory.map((paragraph) => (
            <p key={paragraph} className="leading-7">
              {paragraph}
            </p>
          ))}
        </Reveal>

        <Reveal className="glass-card rounded-2xl p-5" delay={0.1}>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">Profile Snapshot</p>
          <div className="mt-4 space-y-3 text-sm">
            <div>
              <p className="text-[color:var(--muted)]">Name</p>
              <p className="font-medium">{profile.name}</p>
            </div>
            <div>
              <p className="text-[color:var(--muted)]">Base</p>
              <p className="font-medium">{profile.location}</p>
            </div>
            <div>
              <p className="text-[color:var(--muted)]">Current arc</p>
              <p className="font-medium">Senior Engineer to Tech Leadership</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
