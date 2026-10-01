import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { SmartImage } from "./smart-image";
import {
  useFinePointer,
  usePrefersReducedMotion,
} from "@/hooks/use-prefers-reduced-motion";

const DURATION = 600;
const MAX_BLOCK = 22;
const MIN_BLOCK = 2;

type PixelCanvasProps = {
  src: string;
  alt: string;
  hovered: boolean;
  priority?: boolean;
  className?: string;
  sizes?: string;
};

/**
 * On hover, draws the photo in large pixel blocks and eases it back to full
 * resolution. Falls back to a plain CSS scale when canvas drawing is not
 * possible (tainted canvas, touch input, reduced motion).
 */
export function PixelCanvas({
  src,
  alt,
  hovered,
  priority,
  className,
  sizes,
}: PixelCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const rafRef = useRef(0);
  const [canvasReady, setCanvasReady] = useState(false);
  const [visible, setVisible] = useState(false);
  const inView = useRef(true);

  const reduced = usePrefersReducedMotion();
  const fine = useFinePointer();
  const enabled = fine && !reduced;

  // Load the source image once, off-screen.
  useEffect(() => {
    if (!enabled) return;
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      imageRef.current = img;
      setCanvasReady(true);
    };
    img.onerror = () => setCanvasReady(false);
    img.src = src;
    return () => {
      img.onload = null;
      img.onerror = null;
      imageRef.current = null;
    };
  }, [src, enabled]);

  // Pause work when off-screen.
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        inView.current = Boolean(entry?.isIntersecting);
      },
      { rootMargin: "200px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!enabled || !canvasReady || !hovered || !inView.current) return;
    const canvas = canvasRef.current;
    const img = imageRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !img || !wrap) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = wrap.getBoundingClientRect();
    canvas.width = Math.max(1, Math.round(rect.width));
    canvas.height = Math.max(1, Math.round(rect.height));
    setVisible(true);

    const start = performance.now();
    let failed = false;

    const draw = (now: number) => {
      if (failed || !inView.current) return;
      const t = Math.min(1, (now - start) / DURATION);
      const eased = 1 - Math.pow(1 - t, 3);
      const block = Math.max(MIN_BLOCK, Math.round(MAX_BLOCK - eased * (MAX_BLOCK - MIN_BLOCK)));
      const w = Math.max(1, Math.floor(canvas.width / block));
      const h = Math.max(1, Math.floor(canvas.height / block));

      try {
        ctx.imageSmoothingEnabled = false;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Downscale then blow back up for the pixel-block look.
        ctx.drawImage(img, 0, 0, w, h);
        const shift = (1 - eased) * 4;
        ctx.drawImage(
          canvas,
          0,
          0,
          w,
          h,
          -shift,
          0,
          canvas.width + shift * 2,
          canvas.height,
        );
      } catch {
        failed = true;
        setVisible(false);
        setCanvasReady(false);
        return;
      }

      if (t < 1) {
        rafRef.current = requestAnimationFrame(draw);
      } else {
        setVisible(false);
      }
    };

    rafRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafRef.current);
  }, [hovered, canvasReady, enabled]);

  return (
    <div ref={wrapRef} className={cn("relative h-full w-full overflow-hidden", className)}>
      <SmartImage
        src={src}
        alt={alt}
        priority={priority}
        sizes={sizes}
        className={cn(
          "transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
          hovered && "scale-[1.04]",
        )}
      />
      <canvas
        ref={canvasRef}
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 h-full w-full transition-opacity duration-200",
          visible ? "opacity-100" : "opacity-0",
        )}
      />
    </div>
  );
}
