import { cn } from "@/lib/utils";
import { SmartImage } from "./smart-image";

type PixelCanvasProps = {
  src: string;
  alt: string;
  hovered: boolean;
  priority?: boolean;
  className?: string;
  sizes?: string;
};

export function PixelCanvas({
  src,
  alt,
  hovered,
  priority,
  className,
  sizes,
}: PixelCanvasProps) {
  return (
    <div className={cn("relative h-full w-full overflow-hidden", className)}>
      <SmartImage
        src={src}
        alt={alt}
        priority={priority}
        sizes={sizes}
        className={cn(
          "transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
          hovered && "scale-[1.025]",
        )}
      />
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 bg-violet transition-opacity duration-500",
          hovered ? "opacity-[0.1]" : "opacity-0",
        )}
      />
    </div>
  );
}
