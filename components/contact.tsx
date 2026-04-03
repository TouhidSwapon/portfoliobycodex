import { profile } from "@/data/profile";
import { Reveal } from "./reveal";

export function ContactSection() {
  return (
    <section id="contact" className="section-wrap pb-24">
      <Reveal className="rounded-3xl border border-[color:var(--edge)] bg-slate-900 p-8 text-slate-50 dark:bg-cyan-100 dark:text-slate-900 md:p-10">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-300 dark:text-slate-600">Contact</p>
        <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">
          Building teams, products, or AI-era workflows that need senior execution and leadership thinking?
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 dark:text-slate-700">
          Reach out with context. I prefer concrete discussions around product outcomes, architecture direction, and team growth.
        </p>

        <div className="mt-8 flex flex-wrap gap-3 text-sm">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-white px-5 py-2 font-medium text-slate-900 transition hover:-translate-y-0.5"
          >
            {profile.email}
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/30 px-5 py-2 transition hover:-translate-y-0.5"
          >
            LinkedIn
          </a>
          <a
            href={profile.socials.youtube}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/30 px-5 py-2 transition hover:-translate-y-0.5"
          >
            YouTube
          </a>
          <a
            href={profile.socials.facebook}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/30 px-5 py-2 transition hover:-translate-y-0.5"
          >
            Facebook
          </a>
        </div>
      </Reveal>
    </section>
  );
}
