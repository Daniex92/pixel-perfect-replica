import type { ImageEntry } from "./projects";
import ParejaDico01 from "@/assets/retrato-pareja-discoteca.jpg";
import DJDiscoteca from "@/assets/dj-tabu-disco.jpg";
import ParquePrincipal from "@/assets/paisaje-raquira-01.jpg";
import MesaCanapes from "@/assets/mesa-canapes.jpg";

/* Fotos */

/* Retratos */
import RetratoPareja0 from "@/assets/Foto_Pareja0.webp";
import RetratoPareja01 from "@/assets/Foto_Pareja01.webp";
import RetratoPareja02 from "@/assets/Foto_Pareja02.webp";
import RetratoPareja03 from "@/assets/Foto_Pareja03.webp";
import RetratoPareja04 from "@/assets/Foto_Pareja04.webp";
import RetratoPareja05 from "@/assets/Foto_Pareja05.webp";

/* Quince Años */
import FotoQuince00 from "@/assets/Foto_XV0.webp";
import FotoQuince01 from "@/assets/Foto_XV01.webp";
import FotoQuince02 from "@/assets/Foto_XV02.webp";
import FotoQuince03 from "@/assets/Foto_XV03.webp";
import FotoQuince04 from "@/assets/Foto_XV04.webp";
import FotoQuince05 from "@/assets/Foto_XV05.webp";

/* Street */
import FotoStreet00 from "@/assets/Foto_Street0.webp";
import DJDiscoteca01 from "@/assets/Retrato-DJ01.webp";
import DJDiscoteca02 from "@/assets/dj-tabu-disco.jpg";
import Paisaje01 from "@/assets/paisaje-raquira-01.webp";


export const galleryCategories = [
  "ALL",
  "PORTRAIT",
  "LANDSCAPE",
  "OTHERS",
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

export const photographyHeading = ["CADA IMAGEN", "CUENTA UNA HISTORIA."];

/* TODO: Replace with real PIXEL STUDIO photography. */
export const gallery: GalleryItem[] = [
  {
    id: "p-00",
    category: "PORTRAIT",
    caption: "La pregunta bajo las luces",
    url: RetratoPareja0,
    alt: "Propuesta de matrimonio bajo una estructura iluminada con guirnaldas, de noche",
    credit: "Daniel Sierra - @daniex_photo",
    span: "lg:col-span-4",
    aspect: "aspect-[3/4]",
  },
  {
    id: "p-01",
    category: "PORTRAIT",
    caption: "Un abrazo en la noche",
    url: RetratoPareja01,
    alt: "Pareja abrazada bajo luces cálidas durante una sesión nocturna",
    credit: "Daniel Sierra - @daniex_photo",
    span: "lg:col-span-4",
    aspect: "aspect-[3/4]",
  },
  {
    id: "p-02",
    category: "PORTRAIT",
    caption: "Entre luces y complicidad",
    url: RetratoPareja02,
    alt: "Mujer que abraza a su pareja por detrás, con luces desenfocadas al fondo",
    credit: "Daniel Sierra - @daniex_photo",
    span: "lg:col-span-4",
    aspect: "aspect-[3/4]",
  },
  {
    id: "p-03",
    category: "PORTRAIT",
    caption: "El instante del beso",
    url: RetratoPareja03,
    alt: "Pareja besándose de noche bajo guirnaldas de luces",
    credit: "Daniel Sierra - @daniex_photo",
    span: "lg:col-span-4",
    aspect: "aspect-[3/4]",
  },
  {
    id: "P-04",
    category: "PORTRAIT",
    caption: "Frente a frente",
    url: RetratoPareja04,
    alt: "Pareja frente a frente durante un retrato nocturno, con luces cálidas al fondo",
    credit: "Daniel Sierra - @daniex_photo",
    span: "lg:col-span-4",
    aspect: "aspect-[3/4]",
  },
  {
    id: "P-05",
    category: "PORTRAIT",
    caption: "Refugio de luces",
    url: RetratoPareja05,
    alt: "Pareja sentada bajo una estructura de madera iluminada con guirnaldas",
    credit: "Daniel Sierra - @daniex_photo",
    span: "lg:col-span-4",
    aspect: "aspect-[3/4]",
  },
  {
    id: "e-00",
    category: "EVENTS",
    caption: "Retrato en el patio colonial",
    url: FotoQuince00,
    alt: "Quinceañera con vestido violeta posa bajo un arco de piedra",
    credit: "Daniel Sierra - @daniex_photo",
    span: "lg:col-span-4",
    aspect: "aspect-[3/4]",
  },
  {
    id: "e-01",
    category: "EVENTS",
    caption: "Bajo las luces de la celebración",
    url: FotoQuince02,
    alt: "Quinceañera de vestido violeta junto a una estructura iluminada en el jardín",
    credit: "Daniel Sierra - @daniex_photo",
    span: "lg:col-span-4",
    aspect: "aspect-[4/3]",
  },
  {
    id: "e-02",
    category: "EVENTS",
    caption: "Un instante para celebrar",
    url: FotoQuince01,
    alt: "Quinceañera sentada en un sillón, rodeada de globos violetas y decoración festiva",
    credit: "Daniel Sierra - @daniex_photo",
    span: "lg:col-span-4",
    aspect: "aspect-[3/4]",
  },
  {
    id: "e-03",
    category: "EVENTS",
    caption: "En torno a la mesa",
    url: FotoQuince03,
    alt: "Invitados conversan alrededor de una mesa durante la recepción",
    credit: "Daniel Sierra - @daniex_photo",
    span: "lg:col-span-4",
    aspect: "aspect-[3/4]",
  },
  {
    id: "e-04",
    category: "EVENTS",
    caption: "Un baile para recordar",
    url: FotoQuince04,
    alt: "Joven festejada baila con un invitado en medio de los asistentes",
    credit: "Daniel Sierra - @daniex_photo",
    span: "lg:col-span-4",
    aspect: "aspect-[4/3]",
  },
  {
    id: "e-05",
    category: "EVENTS",
    caption: "Ritmo y complicidad",
    url: FotoQuince05,
    alt: "Pareja baila entre los invitados bajo la decoración de la fiesta",
    credit: "Daniel Sierra - @daniex_photo",
    span: "lg:col-span-4",
    aspect: "aspect-[3/4]",
  },
  {
    id: "s-00",
    category: "STREET",
    caption: "Oso entre luces de neón",
    url: FotoStreet00,
    alt: "Oso animando entre luces de neón en una calle",
    credit: "Daniel Sierra - @daniex_photo",
    span: "lg:col-span-4",
    aspect: "aspect-[3/4]",
  },
  {
    id: "s-02",
    category: "OTHERS",
    caption: "DJ con barrida de luces",
    url: DJDiscoteca01,
    alt: "DJ en una discoteca con luces de colores y humo",
    credit: "Ashim D'Silva — Unsplash",
    span: "lg:col-span-4",
    aspect: "aspect-[4/3]",
  },
  {
    id: "s-03",
    category: "OTHERS",
    caption: "Plano cenital de dj con luces de colores",
    url: DJDiscoteca02,
    alt: "DJ en una discoteca con luces de colores y humo",
    credit: "Ashim D'Silva — Unsplash",
    span: "lg:col-span-4",
    aspect: "aspect-[3/4]",
  },
  {
    id: "l-00",
    category: "LANDSCAPE",
    caption: "Paisaje de Raquira",
    url: Paisaje01,
    alt: "Paisaje de la plaza principal de Raquira, Colombia, con iglesia y montañas al fondo",
    credit: "Daniel Sierra - @daniex_photo",
    span: "lg:col-span-10 lg:col-start-2",
    aspect: "aspect-[16/9]",
  }
];
