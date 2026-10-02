import paisajeImage from "@/assets/paisaje01.jpg";
import retratoImage from "@/assets/retrato01.jpg";
import xvAnosImage from "@/assets/retrato-red.jpg";
import DJDiscoteca from "@/assets/dj-tabu-disco.jpg";
import RetatoYeison from "@/assets/retrato-yeison.jpg";


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
    id: "Retrato Artista",
    name: "Retrato Artista",
    category: "Fotografía / Retrato",
    year: "2026",
    meta: ["Retrato", "200 MM", "F/6.5","Cámara a mano"],
    image: {
      url: RetatoYeison,
      alt: "Líneas de código iluminadas en un monitor oscuro",
      credit: "Daniel Sierra - @daniex_photo",
    },
    span: "lg:col-span-3 ",
    aspect: "aspect-[3/4]",
  },
  {
    id: "retrato-nocturno",
    name: "Retrato Nocturno",
    category: "Fotografía / Retrato",
    year: "2026",
    meta: ["Retrato", "36 MM", "F/5.6","Cámara a mano"],
    image: {
      url: retratoImage,
      alt: "Interior de un bar con luz ámbar tenue y ambiente íntimo",
      credit: "Daniel Sierra - @daniex_photo",
    },
    span: "lg:col-span-3",
    aspect: "aspect-[3/4]",
    offset: "lg:mt-32",
  },
  {
    id: "Retrato Contraste de Luz roja",
    name: "Retrato Contraste de Luz roja",
    category: "Fotografía / Retrato",
    year: "2026",
    meta: ["Retrato", "35 MM", "F/1.5","Cámara a mano"],
    image: {
      url: xvAnosImage,
      alt: "Líneas de código iluminadas en un monitor oscuro",
      credit: "Daniel Sierra - @daniex_photo",
    },
    span: "lg:col-span-3",
    aspect: "aspect-[3/4]",
  },
  {
    id: "Foto Discoteca",
    name: "Foto Discoteca",
    category: "Fotografía / Evento",
    year: "2026",
    meta: ["Evento", "35 MM", "F/2.5","Cámara a mano"],
    image: {
      url: DJDiscoteca,
      alt: "Líneas de código iluminadas en un monitor oscuro",
      credit: "Daniel Sierra - @daniex_photo",
    },
    span: "lg:col-span-3 ",
    aspect: "aspect-[3/4]",
    offset: "lg:mt-32",
  },
 
];
