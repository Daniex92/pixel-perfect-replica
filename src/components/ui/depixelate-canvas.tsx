import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { SmartImage } from "./smart-image";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

/**
 * A pixel grid that de-pixelates into the photograph when it enters the
 * viewport. Falls back to the plain photo when motion is reduced or the
 * canvas cannot be drawn.
 */
export function DepixelateCanvas({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [done, setDone] = useState(false);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) {
      setDone(true);
      return;
    }
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      setDone(true);
      return;
    }

    let raf = 0;
    let started = false;
    const img = new Image();
    img.crossOrigin = "anonymous";

    const run = () => {
      const rect = wrap.getBoundingClientRect();
      canvas.width = Math.max(1, Math.round(rect.width));
      canvas.height = Math.max(1, Math.round(rect.height));
      const start = performance.now();

      const draw = (now: number) => {
        const t = Math.min(1, (now - start) / 1400);
        const eased = 1 - Math.pow(1 - t, 3);
        const block = Math.max(1, Math.round(28 - eased * 27));
        const w = Math.max(1, Math.floor(canvas.width / block));
        const h = Math.max(1, Math.floor(canvas.height / block));
        try {
          ctx.imageSmoothingEnabled = false;
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, 0, 0, w, h);
          ctx.drawImage(canvas, 0, 0, w, h, 0, 0, canvas.width, canvas.height);
        } catch {
          setDone(true);
          return;
        }
        if (t < 1) raf = requestAnimationFrame(draw);
        else setDone(true);
      };
      raf = requestAnimationFrame(draw);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && !started && img.complete) {
          started = true;
          run();
        }
      },
      { threshold: 0.35 },
    );

    img.onload = () => {
      io.observe(wrap);
    };
    img.onerror = () => setDone(true);
    img.src = src;

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [src, reduced]);

  return (
    <div ref={wrapRef} className={cn("relative overflow-hidden bg-surface", className)}>
      <div
        className={cn(
          "h-full w-full transition-opacity duration-700",
          done ? "opacity-100" : "opacity-0",
        )}
      >
        <SmartImage src={src} alt={alt} />
      </div>
      <canvas
        ref={canvasRef}
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 h-full w-full transition-opacity duration-500",
          done ? "opacity-0" : "opacity-100",
        )}
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 pixel-grid opacity-40" />
    </div>
  );
}
