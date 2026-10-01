export type ImageEntry = {
  url: string;
  alt: string;
  credit: string;
};

export type Project = {
  id: string;
  name: string;
  category: string;
  year: string;
  meta: string[];
  image: ImageEntry;
  /** Layout hints for the asymmetric editorial grid. */
  span: string;
  aspect: string;
  offset?: string;
};

/* TODO: Replace with real PIXEL STUDIO photography. */
export const heroImage: ImageEntry = {
  url: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=2000&q=80&auto=format&fit=crop",
  alt: "City skyline at night with lit towers above dark water",
  credit: "Dan Freeman — Unsplash",
};

/* TODO: Replace with real PIXEL STUDIO photography. */
export const aboutImage: ImageEntry = {
  url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1400&q=80&auto=format&fit=crop",
  alt: "Code on a dark screen reflected in a dim workspace",
  credit: "Christopher Gower — Unsplash",
};

export const workHeading = "SELECTED WORK";

/* TODO: Replace with real PIXEL STUDIO photography. */
export const projects: Project[] = [
  {
    id: "raquira",
    name: "RÁQUIRA",
    category: "Photography / Visual Storytelling",
    year: "2026",
    meta: ["DOCUMENTARY", "35MM", "NATURAL LIGHT"],
    image: {
      url: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1800&q=80&auto=format&fit=crop",
      alt: "Aerial view of a dense city skyline at dusk beside the water",
      credit: "Pedro Lastra — Unsplash",
    },
    span: "lg:col-span-8",
    aspect: "aspect-[16/10]",
  },
  {
    id: "el-alto",
    name: "EL ALTO",
    category: "Hospitality / Web Design",
    year: "2026",
    meta: ["INTERIORS", "ART DIRECTION", "WEB"],
    image: {
      url: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1400&q=80&auto=format&fit=crop",
      alt: "Moody bar interior with low amber lighting",
      credit: "Adam Jaime — Unsplash",
    },
    span: "lg:col-span-4",
    aspect: "aspect-[3/4]",
    offset: "lg:mt-32",
  },
  {
    id: "digital-identity",
    name: "DIGITAL IDENTITY",
    category: "Web Development / Branding",
    year: "2026",
    meta: ["DESIGN SYSTEM", "TYPE", "MOTION"],
    image: {
      url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1800&q=80&auto=format&fit=crop",
      alt: "Lines of code glowing on a dark monitor",
      credit: "Florian Olivo — Unsplash",
    },
    span: "lg:col-span-7 lg:col-start-5",
    aspect: "aspect-[4/3]",
    offset: "lg:-mt-16",
  },
];
