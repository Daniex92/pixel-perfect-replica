import { motion, useScroll, useTransform } from "motion/react";
import { hero, site } from "@/data/site";
import { heroImage } from "@/data/projects";
import { SmartImage } from "@/components/ui/smart-image";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const { scrollY } = useScroll();
  const reduced = usePrefersReducedMotion();
  const y = useTransform(scrollY, [0, 900], [0, reduced ? 0 : 40]);

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden film-grain"
    >
      <motion.div style={{ y }} className="absolute inset-0 -z-10 scale-105">
        <SmartImage
          src={heroImage.url}
          alt={heroImage.alt}
          priority
          sizes="100vw"
          width={2000}
          height={1333}
        />
      </motion.div>
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-background/80 to-background/45"
      />
      <div aria-hidden className="absolute inset-0 -z-10 pixel-grid opacity-30" />

      <div className="shell pb-16 pt-32 lg:pb-24">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="label-mono"
        >
          {site.label}
        </motion.p>

        <h1 className="mt-8 display-xl">
          <span className="block overflow-hidden pb-[0.05em]">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: "0.6em" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: EASE }}
            >
              {hero.titleTop}
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-[0.05em]">
            <motion.span
              className="block text-muted-foreground"
              initial={{ opacity: 0, y: "0.6em" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: EASE }}
            >
              {hero.titleBottom}
            </motion.span>
          </span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: EASE }}
          className="mt-10 grid gap-8 lg:grid-cols-12"
        >
          <div className="lg:col-span-5">
            <p className="label-mono text-foreground">{hero.tagline}</p>
            <p className="body-lg mt-5 max-w-md">{hero.text}</p>
          </div>

          <div className="flex flex-wrap items-start gap-3 lg:col-span-6 lg:col-start-7 lg:justify-end">
            <a
              href="#work"
              className="label-mono border border-violet/50 bg-violet/10 px-6 py-4 text-foreground transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:glow-violet"
            >
              {hero.primaryCta}
            </a>
            <a
              href="#contact"
              className="label-mono border border-border px-6 py-4 text-foreground transition-colors duration-500 hover:border-violet"
            >
              {hero.ghostCta}
            </a>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="label-mono mt-16"
        >
          {hero.scrollIndicator}
        </motion.p>
      </div>
    </section>
  );
}
