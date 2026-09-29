import { useEffect } from "react";
import { usePrefersReducedMotion } from "./use-prefers-reduced-motion";

/** Lenis smooth scroll, loaded after hydration and disabled for reduced motion. */
export function useSmoothScroll() {
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    let raf = 0;
    let destroy: (() => void) | undefined;

    void (async () => {
      const { default: Lenis } = await import("lenis");
      const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
      const loop = (time: number) => {
        lenis.raf(time);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
      destroy = () => lenis.destroy();
    })();

    return () => {
      cancelAnimationFrame(raf);
      destroy?.();
    };
  }, [reduced]);
}
