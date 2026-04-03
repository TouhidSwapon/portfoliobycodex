import { projects } from "@/data/profile";
import Image from "next/image";
import { Reveal } from "./reveal";

const projectVisuals = ["/images/legacy/folio-1.jpg", "/images/legacy/folio-4.jpg", "/images/legacy/folio-5.jpg"];

export function ProjectsSection() {
  return (
    <section id="projects" className="section-wrap">
      <Reveal>
        <p className="section-kicker">Projects</p>
        <h2 className="section-title">Representative work framed by problem, solution, and impact.</h2>
      </Reveal>

      <div className="mt-8 grid gap-6">
        {projects.map((project, index) => (
          <Reveal
            key={project.title}
            delay={index * 0.06}
            className="glass-card rounded-2xl border border-[color:var(--edge)] p-6"
          >
            <div className="grid gap-5 md:grid-cols-[230px_1fr]">
              <div className="overflow-hidden rounded-xl border border-[color:var(--edge)]">
                <Image
                  src={projectVisuals[index % projectVisuals.length]}
                  alt={`${project.title} visual`}
                  width={460}
                  height={340}
                  className="h-full min-h-44 w-full object-cover"
                />
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
        ))}
      </div>
    </section>
  );
}
