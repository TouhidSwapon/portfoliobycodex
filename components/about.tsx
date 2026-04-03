import { aboutStory, profile } from "@/data/profile";
import Image from "next/image";
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
          <div className="relative mb-4 overflow-hidden rounded-xl border border-[color:var(--edge)]">
            <Image
              src="/images/highlights/profile/desk-profile.jpg"
              alt="Touhid Swapon profile photo"
              width={520}
              height={420}
              className="h-52 w-full object-cover"
              style={{ objectPosition: "50% 18%" }}
            />
          </div>
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
