import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type SmartImageProps = {
  src: string;
  alt: string;
  className?: string | undefined;
  sizes?: string | undefined;
  priority?: boolean | undefined;
  width?: number | undefined;
  height?: number | undefined;
  fit?: "cover" | "contain" | undefined;
};

/**
 * Remote photo with a dark placeholder while loading and a pixel-grid
 * fallback surface if the URL ever fails.
 */
export function SmartImage({
  src,
  alt,
  className,
  sizes,
  priority = false,
  width = 1600,
  height = 1200,
  fit = "cover",
}: SmartImageProps) {
  const [state, setState] = useState<"loading" | "loaded" | "error">("loading");
  const imgRef = useRef<HTMLImageElement | null>(null);

  // Images cached or completed before hydration never fire onLoad.
  useEffect(() => {
    const el = imgRef.current;
    if (el?.complete) setState(el.naturalWidth > 0 ? "loaded" : "error");
  }, [src]);

  if (state === "error") {
    return (
      <div
        role="img"
        aria-label={alt}
        className={cn("h-full w-full bg-surface pixel-grid-fine", className)}
      />
    );
  }

  return (
    <div
      className={cn(
        "relative h-full w-full overflow-hidden",
        fit === "contain" ? "bg-transparent" : "bg-surface",
        fit === "contain" && "flex items-center justify-center",
      )}
    >
      {state === "loading" && (
        <div
          aria-hidden
          className={cn(
            "absolute inset-0 pixel-grid-fine",
            fit === "contain" ? "bg-transparent" : "bg-surface",
          )}
        />
      )}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        fetchPriority={priority ? "high" : "auto"}
        crossOrigin="anonymous"
        onLoad={() => setState("loaded")}
        onError={() => setState("error")}
        className={cn(
          fit === "contain"
            ? "h-auto w-auto max-h-full max-w-full object-contain"
            : "h-full w-full object-cover",
          "transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
          state === "loaded" ? "opacity-100" : "opacity-0",
          className,
        )}
      />
    </div>
  );
}
