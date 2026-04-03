import { projects } from "@/data/profile";
import Image from "next/image";
import { Reveal } from "./reveal";

const projectVisualMap: Record<string, { src: string; focus: string; note: string }> = {
  "Mobile Product Reliability Program": {
    src: "/images/legacy/folio-4.jpg",
    focus: "52% 40%",
    note: "Reliability and release excellence"
  },
  "Cross-Platform Delivery Evolution": {
    src: "/images/legacy/folio-1.jpg",
    focus: "50% 44%",
    note: "Cross-platform engineering transition"
  },
  "Mentor-Led Capability Building": {
    src: "/images/legacy/folio-6.jpg",
    focus: "48% 30%",
    note: "Mentorship-led team growth"
  }
};

const fallbackVisual = {
  src: "/images/legacy/folio-5.jpg",
  focus: "50% 40%",
  note: "Product delivery narrative"
};

export function ProjectsSection() {
  return (
    <section id="projects" className="section-wrap">
      <Reveal>
        <p className="section-kicker">Projects</p>
        <h2 className="section-title">Work stories in problem, solution, and impact.</h2>
      </Reveal>

      <div className="mt-8 grid gap-6">
        {projects.map((project, index) => {
          const visual = projectVisualMap[project.title] ?? fallbackVisual;

          return (
          <Reveal
            key={project.title}
            delay={index * 0.06}
            className="glass-card rounded-2xl border border-[color:var(--edge)] p-6"
          >
            <div className="grid gap-5 md:grid-cols-[230px_1fr]">
              <div className="overflow-hidden rounded-xl border border-[color:var(--edge)]">
                <Image
                  src={visual.src}
                  alt={`${project.title} visual`}
                  width={460}
                  height={340}
                  sizes="(min-width: 768px) 230px, 100vw"
                  quality={70}
                  className="h-full min-h-44 w-full object-cover"
                  style={{ objectPosition: visual.focus }}
                />
                <p className="border-t border-[color:var(--edge)] px-3 py-2 text-[11px] uppercase tracking-[0.12em] text-[color:var(--muted)]">
                  {visual.note}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <div className="mt-4 grid gap-4 text-sm leading-6 text-[color:var(--muted)] md:grid-cols-3">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[color:var(--text)]">Problem</p>
                    <p className="mt-2">{project.challenge}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[color:var(--text)]">Solution</p>
                    <p className="mt-2">{project.solution}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[color:var(--text)]">Impact</p>
                    <p className="mt-2">{project.impact}</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
          );
        })}
      </div>
    </section>
  );
}
