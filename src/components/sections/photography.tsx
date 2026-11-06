import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  gallery,
  galleryCategories,
  photographyHeading,
  type GalleryCategory,
} from "@/data/gallery";
import { SmartImage } from "@/components/ui/smart-image";
import { Lightbox } from "@/components/ui/lightbox";
import { Reveal, RevealLines } from "@/components/ui/reveal";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

const categoryLabels: Record<GalleryCategory, string> = {
  ALL: "TODAS",
  PORTRAIT: "RETRATO",
  LANDSCAPE: "PAISAJE",
  OTHERS: "OTROS",
  EVENTS: "EVENTOS",
  STREET: "CALLE",
};

export function Photography() {
  const [filter, setFilter] = useState<GalleryCategory>("ALL");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeRippleId, setActiveRippleId] = useState<string | null>(null);
  const reducedMotion = usePrefersReducedMotion();

  const items = useMemo(
    () => (filter === "ALL" ? gallery : gallery.filter((g) => g.category === filter)),
    [filter],
  );

  return (
    <section id="photography" className="border-t border-border bg-surface/40">
      <div className="shell py-24 lg:py-36">
        <Reveal>
          <p className="label-mono">04 / FOTOGRAFÍA</p>
        </Reveal>
        <h2 className="mt-6 display-lg">
          <RevealLines
            lines={photographyHeading}
            lineClassName="[&:nth-child(2)]:text-muted-foreground"
          />
        </h2>

        <div
          role="tablist"
          aria-label="Filtrar fotografías por categoría"
          className="no-scrollbar mt-12 flex gap-2 overflow-x-auto pb-1"
        >
          {galleryCategories.map((cat) => {
            const selected = filter === cat;
            return (
              <button
                key={cat}
                role="tab"
                type="button"
                aria-selected={selected}
                onClick={() => setFilter(cat)}
                className={cn(
                  "label-mono shrink-0 border px-4 py-3 transition-all duration-400",
                  selected
                    ? "border-violet/60 bg-violet/10 text-foreground"
                    : "border-border hover:border-violet/40 hover:text-foreground",
                )}
              >
                {categoryLabels[cat]}
              </button>
            );
          })}
        </div>

        {/* Mobile: horizontal snap scroll. Desktop: editorial grid. */}
        <div className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 lg:hidden">
          {items.map((item, i) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setOpenIndex(i)}
              className="relative w-[78vw] shrink-0 snap-center text-left"
            >
              <div className={cn("overflow-hidden", item.aspect)}>
                <SmartImage src={item.url} alt={item.alt} />
              </div>
              <p className="label-mono mt-3 block text-muted-foreground">
                {categoryLabels[item.category]} — {item.caption}
              </p>
            </button>
          ))}
        </div>

        <motion.div layout className="mt-12 hidden grid-cols-12 gap-x-6 gap-y-16 lg:grid">
          <AnimatePresence mode="popLayout">
            {items.map((item, i) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.6, delay: (i % 4) * 0.05, ease: EASE }}
                className={cn("relative", item.span ?? "col-span-4")}
              >
                {activeRippleId === item.id && !reducedMotion && (
                  <svg key={item.id} aria-hidden="true" className="absolute h-0 w-0">
                    <filter
                      id={`gallery-ripple-filter-${item.id}`}
                      x="-10%"
                      y="-10%"
                      width="120%"
                      height="120%"
                    >
                      <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.012 0.025"
                        numOctaves="1"
                        seed={i + 1}
                        result="ripple-noise"
                      />
                      <feDisplacementMap
                        in="SourceGraphic"
                        in2="ripple-noise"
                        scale="0"
                        xChannelSelector="R"
                        yChannelSelector="G"
                      >
                        <animate
                          attributeName="scale"
                          values="0;8;0"
                          dur="1s"
                          repeatCount="1"
                          fill="freeze"
                        />
                      </feDisplacementMap>
                    </filter>
                  </svg>
                )}
                <button
                  type="button"
                  onClick={() => setOpenIndex(i)}
                  onMouseEnter={() => setActiveRippleId(item.id)}
                  onMouseLeave={() => setActiveRippleId(null)}
                  onFocus={() => setActiveRippleId(item.id)}
                  onBlur={() => setActiveRippleId(null)}
                  data-cursor-label="VER"
                  className="group block w-full text-left"
                  aria-label={`Abrir fotografía: ${item.alt}`}
                >
                  <div className={cn("relative overflow-hidden", item.aspect)}>
                    <div
                      className="h-full w-full"
                      style={{
                        filter:
                          activeRippleId === item.id && !reducedMotion
                            ? `url(#gallery-ripple-filter-${item.id})`
                            : undefined,
                      }}
                    >
                      <SmartImage
                        src={item.url}
                        alt={item.alt}
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                      />
                    </div>
                    <span aria-hidden="true" className="gallery-ripple" />
                  </div>
                  <p className="label-mono mt-3 block text-muted-foreground transition-colors group-hover:text-foreground">
                    {categoryLabels[item.category]} — {item.caption}
                  </p>
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {openIndex !== null && (
        <Lightbox
          items={items}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onIndexChange={setOpenIndex}
        />
      )}
    </section>
  );
}
