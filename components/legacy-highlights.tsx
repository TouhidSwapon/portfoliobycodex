import { awardGallery, communityGallery } from "@/data/profile";
import Image from "next/image";
import { Reveal } from "./reveal";

export function LegacyHighlightsSection() {
  return (
    <section id="highlights" className="section-wrap">
      <Reveal>
        <p className="section-kicker">Visual Proof</p>
        <h2 className="section-title">Selected award and community moments from your real journey.</h2>
      </Reveal>

      <div className="mt-8 rounded-3xl border border-[color:var(--edge)] bg-white/65 p-6 dark:bg-slate-950/55">
        <div className="mb-5 flex items-center justify-between gap-3">
          <h3 className="text-xl font-semibold">Awards</h3>
          <span className="rounded-full border border-[color:var(--edge)] px-3 py-1 text-xs text-[color:var(--muted)]">
            Recognition snapshots
          </span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {awardGallery.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 0.04}
              className="overflow-hidden rounded-2xl border border-[color:var(--edge)] bg-white/80 dark:bg-slate-900/50"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={640}
                height={420}
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 48vw, 100vw"
                quality={70}
                className="h-48 w-full object-cover"
              />
              <p className="px-4 py-3 text-sm leading-6 text-[color:var(--muted)]">{item.title}</p>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-6 rounded-3xl border border-[color:var(--edge)] bg-white/65 p-6 dark:bg-slate-950/55">
        <div className="mb-5 flex items-center justify-between gap-3">
          <h3 className="text-xl font-semibold">Community Activities</h3>
          <span className="rounded-full border border-[color:var(--edge)] px-3 py-1 text-xs text-[color:var(--muted)]">
            Speaking, mentoring, hosting
          </span>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {communityGallery.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 0.03}
              className="overflow-hidden rounded-2xl border border-[color:var(--edge)] bg-white/80 dark:bg-slate-900/50"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={640}
                height={420}
                sizes="(min-width: 1024px) 30vw, (min-width: 768px) 48vw, 100vw"
                quality={70}
                className="h-44 w-full object-cover"
              />
              <p className="px-4 py-3 text-sm leading-6 text-[color:var(--muted)]">{item.title}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
