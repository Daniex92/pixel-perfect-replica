import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import {
  useFinePointer,
  usePrefersReducedMotion,
} from "@/hooks/use-prefers-reduced-motion";

const COUNT = 36;
const COLORS = ["139,92,246", "34,211,238"];

/** Sparse 1-2px drifting particles. Paused off-screen and on reduced motion. */
export function PixelParticles({
  active,
  className,
}: {
  active: boolean;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const reduced = usePrefersReducedMotion();
  const fine = useFinePointer();
  const enabled = active && fine && !reduced;

  useEffect(() => {
    if (!enabled) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let inView = true;
    const io = new IntersectionObserver(([e]) => {
      inView = Boolean(e?.isIntersecting);
    });
    io.observe(canvas);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.max(1, Math.round(rect.width));
      canvas.height = Math.max(1, Math.round(rect.height));
    };
    resize();

    const particles = Array.from({ length: COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      s: Math.random() < 0.5 ? 1 : 2,
      vy: -0.12 - Math.random() * 0.35,
      vx: (Math.random() - 0.5) * 0.18,
      o: 0.15 + Math.random() * 0.45,
      c: COLORS[Math.floor(Math.random() * COLORS.length)],
    }));

    const tick = () => {
      if (inView) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (const p of particles) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.y < -4) p.y = canvas.height + 4;
          if (p.x < -4) p.x = canvas.width + 4;
          if (p.x > canvas.width + 4) p.x = -4;
          ctx.fillStyle = `rgba(${p.c},${p.o})`;
          ctx.fillRect(Math.round(p.x), Math.round(p.y), p.s, p.s);
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, [enabled]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full transition-opacity duration-500",
        enabled ? "opacity-100" : "opacity-0",
        className,
      )}
    />
  );
}
