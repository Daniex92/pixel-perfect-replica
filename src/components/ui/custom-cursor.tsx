import { useEffect, useRef, useState } from "react";
import {
  useFinePointer,
  usePrefersReducedMotion,
} from "@/hooks/use-prefers-reduced-motion";

/**
 * Dot plus a lagging ring. Fine pointers only; the native cursor is never
 * hidden, so inputs and links stay usable.
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const [label, setLabel] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);
  const fine = useFinePointer();
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (!fine || reduced) return;
    let x = 0;
    let y = 0;
    let rx = 0;
    let ry = 0;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      setVisible(true);
      const target = (e.target as HTMLElement | null)?.closest?.("[data-cursor-label]");
      setLabel(target ? target.getAttribute("data-cursor-label") : null);
    };
    const onLeave = () => setVisible(false);

    const loop = () => {
      rx += (x - rx) * 0.14;
      ry += (y - ry) * 0.14;
      if (dotRef.current) dotRef.current.style.transform = `translate3d(${x}px,${y}px,0)`;
      if (ringRef.current) ringRef.current.style.transform = `translate3d(${rx}px,${ry}px,0)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener("pointermove", onMove);
    document.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, [fine, reduced]);

  if (!fine || reduced) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[120] hidden lg:block">
      <div
        ref={dotRef}
        className="absolute -left-[2px] -top-[2px] h-1 w-1 bg-violet transition-opacity duration-300"
        style={{ opacity: visible ? 1 : 0, boxShadow: "var(--glow-dot)" }}
      />
      <div
        ref={ringRef}
        className="absolute left-0 top-0 flex items-center justify-center transition-opacity duration-300"
        style={{ opacity: visible ? 1 : 0 }}
      >
        <div
          className="flex items-center justify-center rounded-full border border-violet/60 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            width: label ? 72 : 28,
            height: label ? 72 : 28,
            marginLeft: label ? -36 : -14,
            marginTop: label ? -36 : -14,
            backgroundColor: label ? "rgba(139,92,246,0.12)" : "transparent",
          }}
        >
          {label && <span className="label-mono text-foreground">{label}</span>}
        </div>
      </div>
    </div>
  );
}
