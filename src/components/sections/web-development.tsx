import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { webdev } from "@/data/site";
import { Reveal, RevealLines } from "@/components/ui/reveal";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

const previewUrl = "https://elaltoeventos.com/";

function BrowserPreview() {
  return (
    <div className="overflow-hidden border border-border bg-surface shadow-[var(--shadow-cinematic)]">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-foreground/25" />
        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-foreground/25" />
        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-violet/70" />
        <div className="ml-3 flex h-7 min-w-0 flex-1 items-center border border-border px-3">
          <span className="label-mono truncate text-muted-foreground">elaltoeventos.com</span>
        </div>
        <a
          href={previewUrl}
          target="_blank"
          rel="noreferrer"
          className="label-mono shrink-0 text-muted-foreground transition-colors hover:text-foreground"
        >
          VISITAR ↗
        </a>
      </div>
      <div className="relative aspect-[16/10] bg-background pixel-grid">
        <iframe
          src={previewUrl}
          title="Vista previa interactiva de El Alto Cocina de Entorno"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          className="absolute inset-0 h-full w-full border-0 bg-background"
        />
      </div>
    </div>
  );
}

export function WebDevelopment() {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduced = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : -40]);

  return (
    <section id="web" className="border-t border-border">
      <div ref={ref} className="shell py-24 lg:py-36">
        <Reveal>
          <p className="label-mono">05 / DESARROLLO WEB</p>
        </Reveal>
        <h2 className="mt-6 display-lg">
          <RevealLines
            lines={webdev.lines}
            lineClassName="[&:nth-child(2)]:text-muted-foreground"
          />
        </h2>

        <div className="mt-16 grid gap-16 lg:grid-cols-12 lg:gap-x-10">
          <div className="lg:col-span-7">
            <motion.div style={{ y: y1 }}>
              <BrowserPreview />
            </motion.div>
          </div>

          <ul className="lg:col-span-4 lg:col-start-9">
            {webdev.focus.map((f, i) => (
              <Reveal as="li" key={f.title} delay={i * 0.07}>
                <div className="border-t border-border py-6">
                  <div className="flex items-baseline gap-3">
                    <span aria-hidden className="h-1 w-1 bg-violet" />
                    <h3 className="text-base font-normal uppercase tracking-[0.12em]">{f.title}</h3>
                  </div>
                  <p className="body-lg mt-2 text-[0.95rem]">{f.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
