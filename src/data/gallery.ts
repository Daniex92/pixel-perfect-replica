import type { ImageEntry } from "./projects";

export const galleryCategories = [
  "ALL",
  "PORTRAIT",
  "LANDSCAPE",
  "HOSPITALITY",
  "PRODUCT",
  "EVENTS",
  "STREET",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export type GalleryItem = ImageEntry & {
  id: string;
  category: Exclude<GalleryCategory, "ALL">;
  caption: string;
  /** Editorial grid hints. */
  span?: string;
  aspect: string;
};

export const photographyHeading = ["EVERY IMAGE", "TELLS A STORY."];

/* TODO: Replace with real PIXEL STUDIO photography. */
export const gallery: GalleryItem[] = [
  {
    id: "p-01",
    category: "PORTRAIT",
    caption: "Studio portrait, single source",
    url: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?w=1200&q=80&auto=format&fit=crop",
    alt: "Portrait of a man lit by a single hard light against darkness",
    credit: "Ayo Ogunseinde — Unsplash",
    span: "lg:col-span-4",
    aspect: "aspect-[3/4]",
  },
  {
    id: "p-02",
    category: "PORTRAIT",
    caption: "Available light, late afternoon",
    url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&q=80&auto=format&fit=crop",
    alt: "Portrait of a woman turned toward soft window light",
    credit: "Ivana Cajina — Unsplash",
    span: "lg:col-span-3",
    aspect: "aspect-square",
  },
  {
    id: "l-01",
    category: "LANDSCAPE",
    caption: "Ridge line, blue hour",
    url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1600&q=80&auto=format&fit=crop",
    alt: "Fog drifting between dark forested mountain ridges",
    credit: "Sebastian Unrau — Unsplash",
    span: "lg:col-span-5",
    aspect: "aspect-[4/3]",
  },
  {
    id: "l-02",
    category: "LANDSCAPE",
    caption: "Valley at dusk",
    url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80&auto=format&fit=crop",
    alt: "Mountain lake at dusk under a heavy sky",
    credit: "Kalen Emsley — Unsplash",
    span: "lg:col-span-7",
    aspect: "aspect-[16/9]",
  },
  {
    id: "h-01",
    category: "HOSPITALITY",
    caption: "Counter service, low light",
    url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1400&q=80&auto=format&fit=crop",
    alt: "Restaurant interior with warm pendant lights over tables",
    credit: "Jason Leung — Unsplash",
    span: "lg:col-span-5",
    aspect: "aspect-[3/2]",
  },
  {
    id: "h-02",
    category: "HOSPITALITY",
    caption: "Espresso, morning shift",
    url: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=1200&q=80&auto=format&fit=crop",
    alt: "Cup of coffee on a dark cafe counter",
    credit: "Nathan Dumlao — Unsplash",
    span: "lg:col-span-3",
    aspect: "aspect-square",
  },
  {
    id: "pr-01",
    category: "PRODUCT",
    caption: "Footwear on black",
    url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&q=80&auto=format&fit=crop",
    alt: "Red sneaker photographed on a dark background",
    credit: "Mnz — Unsplash",
    span: "lg:col-span-4",
    aspect: "aspect-[4/5]",
  },
  {
    id: "pr-02",
    category: "PRODUCT",
    caption: "Timepiece, macro detail",
    url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&q=80&auto=format&fit=crop",
    alt: "Wristwatch on a dark surface with directional light",
    credit: "Aleksander Fox — Unsplash",
    span: "lg:col-span-4",
    aspect: "aspect-square",
  },
  {
    id: "e-01",
    category: "EVENTS",
    caption: "Stage lights, second set",
    url: "https://images.unsplash.com/photo-1470229722913-7ea0d7ac6b1a?w=1600&q=80&auto=format&fit=crop",
    alt: "Concert stage seen through a crowd with beams of light",
    credit: "Aranxa Esteve — Unsplash",
    span: "lg:col-span-7",
    aspect: "aspect-[16/9]",
  },
  {
    id: "e-02",
    category: "EVENTS",
    caption: "Crowd, front row",
    url: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1400&q=80&auto=format&fit=crop",
    alt: "Audience silhouettes in front of a brightly lit stage",
    credit: "Anthony Delanoix — Unsplash",
    span: "lg:col-span-5",
    aspect: "aspect-[3/2]",
  },
  {
    id: "s-01",
    category: "STREET",
    caption: "Crossing, after rain",
    url: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1600&q=80&auto=format&fit=crop",
    alt: "City street at night with reflections on wet asphalt",
    credit: "Alex Knight — Unsplash",
    span: "lg:col-span-6",
    aspect: "aspect-[3/2]",
  },
  {
    id: "s-02",
    category: "STREET",
    caption: "Avenue, blue hour",
    url: "https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=1600&q=80&auto=format&fit=crop",
    alt: "Tall buildings at dusk with lit windows",
    credit: "Denys Nevozhai — Unsplash",
    span: "lg:col-span-6",
    aspect: "aspect-[3/2]",
  },
  {
    id: "s-03",
    category: "STREET",
    caption: "Storefront, closing time",
    url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1400&q=80&auto=format&fit=crop",
    alt: "Shop front lit from inside on a dark street",
    credit: "Ashim D'Silva — Unsplash",
    span: "lg:col-span-4",
    aspect: "aspect-[4/3]",
  },
  {
    id: "l-03",
    category: "LANDSCAPE",
    caption: "Coastline, last light",
    url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=1600&q=80&auto=format&fit=crop",
    alt: "Dark rocky coastline under a fading sky",
    credit: "Luca Bravo — Unsplash",
    span: "lg:col-span-8",
    aspect: "aspect-[16/10]",
  },
];
