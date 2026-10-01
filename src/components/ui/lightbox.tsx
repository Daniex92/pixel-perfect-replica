import { useCallback, useEffect, useRef } from "react";
import { SmartImage } from "./smart-image";
import type { GalleryItem } from "@/data/gallery";

type LightboxProps = {
  items: GalleryItem[];
  index: number;
  onClose: () => void;
  onIndexChange: (index: number) => void;
};

/** Fullscreen photo viewer with arrows, focus trap and Esc to close. */
export function Lightbox({ items, index, onClose, onIndexChange }: LightboxProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const item = items[index];

  const next = useCallback(
    () => onIndexChange((index + 1) % items.length),
    [index, items.length, onIndexChange],
  );
  const prev = useCallback(
    () => onIndexChange((index - 1 + items.length) % items.length),
    [index, items.length, onIndexChange],
  );

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    containerRef.current?.querySelector<HTMLElement>("button")?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Tab") {
        const focusables = containerRef.current?.querySelectorAll<HTMLElement>("button");
        if (!focusables?.length) return;
        const first = focusables[0]!;
        const last = focusables[focusables.length - 1]!;
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
      previouslyFocused?.focus?.();
    };
  }, [onClose, next, prev]);

  if (!item) return null;

  return (
    <div
      ref={containerRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Photograph ${index + 1} of ${items.length}: ${item.alt}`}
      className="fixed inset-0 z-[150] flex flex-col bg-background/96 backdrop-blur-sm"
    >
      <div className="flex items-center justify-between gap-4 px-6 py-5 lg:px-10">
        <p className="label-mono">
          {item.category} / {String(index + 1).padStart(2, "0")} —{" "}
          {String(items.length).padStart(2, "0")}
        </p>
        <button
          type="button"
          onClick={onClose}
          className="label-mono border border-border px-3 py-2 text-foreground transition-colors hover:border-violet"
        >
          CLOSE ESC
        </button>
      </div>

      <div className="relative flex min-h-0 flex-1 items-center justify-center px-6 pb-4 lg:px-20">
        <div className="max-h-full w-full max-w-5xl">
          <div className="max-h-[70svh] overflow-hidden">
            <SmartImage src={item.url} alt={item.alt} priority className="object-contain" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 px-6 py-6 lg:px-10">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous photograph"
          className="label-mono border border-border px-4 py-3 text-foreground transition-colors hover:border-violet"
        >
          ← PREV
        </button>
        <div className="min-w-0 text-center">
          <p className="truncate text-sm text-foreground">{item.caption}</p>
          <p className="label-mono mt-1 truncate">{item.credit}</p>
        </div>
        <button
          type="button"
          onClick={next}
          aria-label="Next photograph"
          className="label-mono border border-border px-4 py-3 text-foreground transition-colors hover:border-violet"
        >
          NEXT →
        </button>
      </div>
    </div>
  );
}
