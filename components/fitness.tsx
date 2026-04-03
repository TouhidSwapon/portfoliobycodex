import Image from "next/image";
import { Reveal } from "./reveal";

const fitnessGallery = [
  {
    src: "/images/highlights/fitness/fitness-1.jpg",
    alt: "Touhid Swapon training with dumbbells",
    focus: "50% 22%"
  },
  {
    src: "/images/highlights/fitness/fitness-2.jpg",
    alt: "Touhid Swapon after a gym set",
    focus: "50% 22%"
  },
  {
    src: "/images/highlights/fitness/fitness-3.jpeg",
    alt: "Mirror selfie in gym before workout",
    focus: "50% 20%"
  },
  {
    src: "/images/highlights/fitness/fitness-4.jpeg",
    alt: "Gym progress photo with dumbbell rack",
    focus: "50% 28%"
  },
  {
    src: "/images/highlights/fitness/fitness-5.jpeg",
    alt: "Workout session mirror capture",
    focus: "50% 20%"
  },
  {
    src: "/images/highlights/fitness/fitness-6.jpeg",
    alt: "Gym floor training snapshot",
    focus: "50% 20%"
  },
  {
    src: "/images/highlights/fitness/fitness-7.jpeg",
    alt: "Battle rope workout in progress",
    focus: "50% 30%"
  }
];

export function FitnessSection() {
  const [primaryImage, ...secondaryImages] = fitnessGallery;

  return (
    <section id="fitness" className="section-wrap">
      <Reveal>
        <p className="section-kicker">Fitness & Discipline</p>
        <h2 className="section-title">Discipline from fitness that strengthens leadership.</h2>
      </Reveal>

      <Reveal className="mt-8 glass-card rounded-2xl p-5">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[color:var(--muted)]">
          Workout Moments
        </p>
        <div className="mt-4 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="overflow-hidden rounded-xl border border-[color:var(--edge)]">
              <Image
                src={primaryImage.src}
                alt={primaryImage.alt}
                width={960}
                height={1280}
                sizes="(min-width: 1024px) 42vw, (min-width: 768px) 50vw, 100vw"
                quality={70}
                className="aspect-[4/5] w-full object-cover"
                style={{ objectPosition: primaryImage.focus }}
              />
            </div>

            <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {secondaryImages.map((image, index) => (
                <div key={image.src} className="overflow-hidden rounded-xl border border-[color:var(--edge)]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={960}
                    height={1280}
                    sizes="(min-width: 1024px) 13vw, (min-width: 640px) 28vw, 45vw"
                    quality={68}
                    loading={index < 2 ? "eager" : "lazy"}
                    className="aspect-[4/5] w-full object-cover transition duration-300 hover:scale-[1.02]"
                    style={{ objectPosition: image.focus }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-[color:var(--edge)] bg-white/60 p-5 dark:bg-slate-950/45">
            <p className="text-sm leading-7 text-[color:var(--muted)]">
              These are real workout moments from my routine. Fitness keeps me grounded in process over mood. It
              reinforces patience, repetition, and measurable progression, the same behaviors needed for mentoring
              teams and delivering high-quality software under real constraints.
            </p>
            <p className="mb-4 mt-5 font-mono text-[11px] uppercase tracking-[0.16em] text-[color:var(--muted)]">
              Discipline Signals
            </p>
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
          </div>
        </div>
      </Reveal>
    </section>
  );
}
