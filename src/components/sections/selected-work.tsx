import { useState } from "react";
import { motion } from "motion/react";
import { projects, workHeading } from "@/data/projects";
import { PixelCanvas } from "@/components/ui/pixel-canvas";
import { PixelParticles } from "@/components/ui/pixel-particles";
import { Reveal } from "@/components/ui/reveal";
import { Lightbox, type LightboxItem } from "@/components/ui/lightbox";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

const lightboxItems: LightboxItem[] = projects.map((project) => ({
  url: project.image.url,
  alt: project.image.alt,
  category: project.category,
  caption: project.name,
  credit: project.image.credit,
  year: project.year,
  meta: project.meta,
}));

export function SelectedWork() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="work" className="border-t border-border">
      <div className="shell py-24 lg:py-36">
        <Reveal>
          <p className="label-mono">03 / PROYECTOS</p>
          <h2 className="mt-6 display-md">{workHeading}</h2>
        </Reveal>

        <div className="mt-16 grid gap-14 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-28">
          {projects.map((project, i) => {
            const active = hovered === project.id;
            return (
              <article
                key={project.id}
                className={cn("group", project.span, project.offset)}
                onMouseEnter={() => setHovered(project.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <motion.button
                  type="button"
                  onClick={() => setOpenIndex(i)}
                  aria-label={`Abrir proyecto: ${project.name}`}
                  initial={{ clipPath: "inset(0 0 100% 0)", opacity: 0 }}
                  whileInView={{ clipPath: "inset(0 0 0% 0)", opacity: 1 }}
                  viewport={{ once: true, margin: "-8% 0px" }}
                  transition={{ duration: 1, delay: i * 0.06, ease: EASE }}
                  className={cn(
                    "relative block w-full crop-marks overflow-hidden text-left",
                    project.aspect,
                  )}
                  data-cursor-label="VER"
                >
                  <PixelCanvas
                    src={project.image.url}
                    alt={project.image.alt}
                    hovered={active}
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                  <PixelParticles active={active} />
                  <div
                    aria-hidden
                    className={cn(
                      "pointer-events-none absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent transition-opacity duration-700",
                      active ? "opacity-100" : "opacity-60",
                    )}
                  />
                  <div
                    className={cn(
                      "pointer-events-none absolute inset-x-0 bottom-0 p-5 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] lg:p-7",
                      active
                        ? "translate-y-0 opacity-100"
                        : "translate-y-2 opacity-0 lg:opacity-0",
                      "max-lg:translate-y-0 max-lg:opacity-100",
                    )}
                  >
                    <ul className="flex flex-wrap gap-x-4 gap-y-1">
                      {project.meta.map((m) => (
                        <li key={m} className="label-mono text-foreground/70">
                          {m}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.button>

                <div className="mt-5 flex items-baseline justify-between gap-6 border-t border-border pt-4">
                  <div>
                    <h3 className="text-xl font-light uppercase tracking-[0.14em] lg:text-2xl">
                      {project.name}
                    </h3>
                    <p className="label-mono mt-2">{project.category}</p>
                  </div>
                  <p className="label-mono">{project.year}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {openIndex !== null && (
        <Lightbox
          items={lightboxItems}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onIndexChange={setOpenIndex}
        />
      )}
    </section>
  );
}
