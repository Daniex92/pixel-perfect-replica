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
  url: "/",
  alt: "Calle del centro de la ciudad al anochecer, entre edificios iluminados",
  credit: "Unsplash",
};

/* TODO: Replace with real PIXEL STUDIO photography. */
export const aboutImage: ImageEntry = {
  url: "/",
  alt: "Código en una pantalla oscura, reflejado en un espacio de trabajo tenue",
  credit: "Daniex_Photo — Pixel Studio",
};

export const workHeading = "PROYECTOS DESTACADOS";

/* TODO: Replace with real PIXEL STUDIO photography. */
export const projects: Project[] = [
  {
    id: "raquira",
    name: "Atardecer en Ráquira",
    category: "Fotografía / Paisaje-Natural",
    year: "2026",
    meta: ["Paisaje", "24 MM", "F/1.7","Drone"],
    image: {
      url: "src/assets/paisaje01.jpg",
      alt: "Vista aérea de una ciudad junto al agua al anochecer",
      credit: "Pedro Lastra — Unsplash",
    },
    span: "lg:col-span-8",
    aspect: "aspect-[16/10]",
  },
  {
    id: "retrato-nocturno",
    name: "Retrato Nocturno",
    category: "Fotografía / Retrato",
    year: "2026",
    meta: ["Retrato", "36 MM", "F/5.6","Cámara a mano"],
    image: {
      url: "src/assets/retrato01.jpg",
      alt: "Interior de un bar con luz ámbar tenue y ambiente íntimo",
      credit: "Adam Jaime — Unsplash",
    },
    span: "lg:col-span-4",
    aspect: "aspect-[3/4]",
    offset: "lg:mt-32",
  },
  {
    id: "xv-años",
    name: "XV Años",
    category: "Fotografía / Retrato",
    year: "2026",
    meta: ["XV Años", "50 MM", "F/2.5","Cámara a mano"],
    image: {
      url: "src/assets/xvaños.jpg",
      alt: "Líneas de código iluminadas en un monitor oscuro",
      credit: "Florian Olivo — Unsplash",
    },
    span: "lg:col-span-7 lg:col-start-5",
    aspect: "aspect-[3/4]",
    offset: "lg:-mt-16",
  },
];
