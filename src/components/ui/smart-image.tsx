import { useState } from "react";
import { cn } from "@/lib/utils";

type SmartImageProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  width?: number;
  height?: number;
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
}: SmartImageProps) {
  const [state, setState] = useState<"loading" | "loaded" | "error">("loading");

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
    <div className="relative h-full w-full overflow-hidden bg-surface">
      {state === "loading" && (
        <div aria-hidden className="absolute inset-0 bg-surface pixel-grid-fine" />
      )}
      <img
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
          "h-full w-full object-cover transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
          state === "loaded" ? "opacity-100" : "opacity-0",
          className,
        )}
      />
    </div>
  );
}
