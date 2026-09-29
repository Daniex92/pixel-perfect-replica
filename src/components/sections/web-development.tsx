import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { webdev } from "@/data/site";
import { Reveal, RevealLines } from "@/components/ui/reveal";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

/** Pure CSS/SVG browser chrome — no generated images. */
function BrowserMockup({ variant }: { variant: 1 | 2 }) {
  return (
    <div className="border border-border bg-surface shadow-[var(--shadow-cinematic)]">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="h-1.5 w-1.5 rounded-full bg-foreground/25" />
        <span className="h-1.5 w-1.5 rounded-full bg-foreground/25" />
        <span className="h-1.5 w-1.5 rounded-full bg-violet/70" />
        <span className="ml-3 h-4 flex-1 border border-border" />
      </div>
      <div className="relative p-6 pixel-grid">
        {variant === 1 ? (
          <div className="space-y-4">
            <span className="block h-2 w-20 bg-foreground/20" />
            <span className="block h-7 w-3/4 bg-foreground/30" />
            <span className="block h-7 w-1/2 bg-foreground/15" />
            <div className="grid grid-cols-3 gap-3 pt-4">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="block aspect-[4/3] border border-border"
                  style={{ background: i === 1 ? "rgba(139,92,246,0.08)" : "transparent" }}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-5 gap-3">
            <div className="col-span-2 space-y-3">
              <span className="block h-2 w-14 bg-violet/60" />
              <span className="block h-4 w-full bg-foreground/25" />
              <span className="block h-4 w-4/5 bg-foreground/15" />
              <span className="block h-4 w-2/3 bg-foreground/10" />
            </div>
            <div className="col-span-3 aspect-[16/10] border border-border pixel-grid-fine" />
          </div>
        )}
        <svg
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full"
          preserveAspectRatio="none"
        >
          <line x1="0" y1="0" x2="100%" y2="0" stroke="rgba(34,211,238,0.18)" strokeWidth="1" />
        </svg>
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
  const y2 = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 30]);

  return (
    <section id="web" className="border-t border-border">
      <div ref={ref} className="shell py-24 lg:py-36">
        <Reveal>
          <p className="label-mono">05 / WEB DEVELOPMENT</p>
        </Reveal>
        <h2 className="mt-6 display-lg">
          <RevealLines
            lines={webdev.lines}
            lineClassName="[&:nth-child(2)]:text-muted-foreground"
          />
        </h2>

        <div className="mt-16 grid gap-16 lg:grid-cols-12 lg:gap-x-10">
          <div className="space-y-8 lg:col-span-7">
            <motion.div style={{ y: y1 }}>
              <BrowserMockup variant={1} />
            </motion.div>
            <motion.div style={{ y: y2 }} className="lg:ml-16">
              <BrowserMockup variant={2} />
            </motion.div>
          </div>

          <ul className="lg:col-span-4 lg:col-start-9">
            {webdev.focus.map((f, i) => (
              <Reveal as="li" key={f.title} delay={i * 0.07}>
                <div className="border-t border-border py-6">
                  <div className="flex items-baseline gap-3">
                    <span aria-hidden className="h-1 w-1 bg-violet" />
                    <h3 className="text-base font-normal uppercase tracking-[0.12em]">
                      {f.title}
                    </h3>
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
