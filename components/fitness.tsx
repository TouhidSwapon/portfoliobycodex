import Image from "next/image";
import { Reveal } from "./reveal";

export function FitnessSection() {
  return (
    <section id="fitness" className="section-wrap">
      <Reveal>
        <p className="section-kicker">Fitness & Discipline</p>
        <h2 className="section-title">Physical discipline is how I train consistency for leadership.</h2>
      </Reveal>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <Reveal className="glass-card rounded-2xl p-6">
          <div className="mb-4 overflow-hidden rounded-xl border border-[color:var(--edge)]">
            <Image
              src="/images/highlights/community/community-hosting-session-2.jpg"
              alt="Touhid Swapon on stage during a community program"
              width={640}
              height={360}
              className="h-44 w-full object-cover"
              style={{ objectPosition: "50% 28%" }}
            />
          </div>
          <p className="text-sm leading-7 text-[color:var(--muted)]">
            Fitness keeps me grounded in process over mood. It reinforces patience, repetition, and measurable progression, the
            same behaviors needed for mentoring teams and delivering high-quality software under real constraints.
          </p>
        </Reveal>
        <Reveal className="glass-card rounded-2xl p-6" delay={0.08}>
          <ul className="space-y-3 text-sm text-[color:var(--muted)]">
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-400" />
              <span>Consistency over intensity: sustainable systems beat short bursts.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-400" />
              <span>Process creates confidence: discipline compounds in both health and engineering.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-400" />
              <span>Leadership energy is physical too: strong output requires sustainable routines.</span>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
