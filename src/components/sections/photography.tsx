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
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Photography() {
  const [filter, setFilter] = useState<GalleryCategory>("ALL");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = useMemo(
    () => (filter === "ALL" ? gallery : gallery.filter((g) => g.category === filter)),
    [filter],
  );

  return (
    <section id="photography" className="border-t border-border bg-surface/40">
      <div className="shell py-24 lg:py-36">
        <Reveal>
          <p className="label-mono">04 / PHOTOGRAPHY</p>
        </Reveal>
        <h2 className="mt-6 display-lg">
          <RevealLines
            lines={photographyHeading}
            lineClassName="[&:nth-child(2)]:text-muted-foreground"
          />
        </h2>

        <div
          role="tablist"
          aria-label="Filter photographs by category"
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
                {cat}
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
              <p className="label-mono mt-3">
                {item.category} — {item.caption}
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
                <button
                  type="button"
                  onClick={() => setOpenIndex(i)}
                  data-cursor-label="VIEW"
                  className="group block w-full text-left"
                  aria-label={`Open photograph: ${item.alt}`}
                >
                  <div className={cn("overflow-hidden", item.aspect)}>
                    <SmartImage
                      src={item.url}
                      alt={item.alt}
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                    />
                  </div>
                  <p className="label-mono -mt-3 ml-3 inline-block bg-background px-3 py-2 transition-colors group-hover:text-foreground">
                    {item.category} — {item.caption}
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
