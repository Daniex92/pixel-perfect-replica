import type { ImageEntry } from "./projects";
import RetratoPareja from "@/assets/retrato-pareja.jpg";
import ParejaDico01 from "@/assets/retrato-pareja-discoteca.jpg";
import DJDiscoteca from "@/assets/dj-tabu-disco.jpg";
import ParquePrincipal from "@/assets/paisaje-raquira-01.jpg";
import MesaCanapes from "@/assets/mesa-canapes.jpg";

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

export const photographyHeading = ["CADA IMAGEN", "CUENTA UNA HISTORIA."];

/* TODO: Replace with real PIXEL STUDIO photography. */
export const gallery: GalleryItem[] = [
  {
    id: "p-01",
    category: "PORTRAIT",
    caption: "Retrato de pareja, una sola fuente de luz",
    url: RetratoPareja,
    alt: "Retrato de pedida de pareja, iluminados por una sola fuente de luz",
    credit: "Daniel Sierra - @daniex_photo",
    span: "lg:col-span-4",
    aspect: "aspect-[3/4]",
  },
  {
    id: "p-02",
    category: "PORTRAIT",
    caption: "Foto de pareja en discoteca, luz de relleno y luz de fondo",
    url: ParejaDico01,
    alt: "Retrato de pareja en discoteca, iluminados por luz de relleno y luz de fondo",
    credit: "Daniel Sierra - @daniex_photo",
    span: "lg:col-span-4",
    aspect: "aspect-[3/4]",
  },
  {
    id: "l-01",
    category: "EVENTS",
    caption: "DJ en discoteca, luces de escenario",
    url: DJDiscoteca,
    alt: "Foto de DJ en discoteca, iluminado por luces de escenario - Tabú Studio Bogotá Bar Bogotá",
    credit: "Daniel Sierra - @daniex_photo",
    span: "lg:col-span-4",
    aspect: "aspect-[3/4]",
  },
  {
    id: "l-02",
    category: "LANDSCAPE",
    caption: "Parque principal Ráquira, luz natural",
    url: ParquePrincipal,
    alt: "Foto del parque principal de Ráquira, con la iglesia al fondo y luz de atardecer",
    credit: "Daniel Sierra - @daniex_photo",
    span: "lg:col-span-7",
    aspect: "aspect-[16/9]",
  },
  {
    id: "h-01",
    category: "HOSPITALITY",
    caption: "Mesa de canapés, luz direccional",
    url: MesaCanapes,
    alt: "Mesa de canapés al aire libre, iluminada por luz direccional",
    credit: "Jason Leung — Unsplash",
    span: "lg:col-span-5",
    aspect: "aspect-[2/3]",
  },
  {
    id: "h-02",
    category: "HOSPITALITY",
    caption: "Espresso, turno de mañana",
    url: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=1200&q=80&auto=format&fit=crop",
    alt: "Taza de café sobre la barra oscura de una cafetería",
    credit: "Nathan Dumlao — Unsplash",
    span: "lg:col-span-3",
    aspect: "aspect-square",
  },
  {
    id: "pr-01",
    category: "PRODUCT",
    caption: "Calzado sobre fondo negro",
    url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&q=80&auto=format&fit=crop",
    alt: "Zapatilla roja fotografiada sobre un fondo oscuro",
    credit: "Mnz — Unsplash",
    span: "lg:col-span-4",
    aspect: "aspect-[4/5]",
  },
  {
    id: "pr-02",
    category: "PRODUCT",
    caption: "Reloj, detalle macro",
    url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&q=80&auto=format&fit=crop",
    alt: "Reloj de pulsera sobre una superficie oscura con luz direccional",
    credit: "Aleksander Fox — Unsplash",
    span: "lg:col-span-4",
    aspect: "aspect-square",
  },
  {
    id: "e-01",
    category: "EVENTS",
    caption: "Luces del escenario, segundo concierto",
    url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&q=80&auto=format&fit=crop",
    alt: "Público de espaldas frente al escenario iluminado de un evento",
    credit: "Product School — Unsplash",
    span: "lg:col-span-7",
    aspect: "aspect-[16/9]",
  },
  {
    id: "e-02",
    category: "EVENTS",
    caption: "Público, primera fila",
    url: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1400&q=80&auto=format&fit=crop",
    alt: "Siluetas del público frente a un escenario muy iluminado",
    credit: "Anthony Delanoix — Unsplash",
    span: "lg:col-span-5",
    aspect: "aspect-[3/2]",
  },
  {
    id: "s-01",
    category: "STREET",
    caption: "Cruce, después de la lluvia",
    url: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1600&q=80&auto=format&fit=crop",
    alt: "Calle de la ciudad de noche, con reflejos sobre el asfalto mojado",
    credit: "Alex Knight — Unsplash",
    span: "lg:col-span-6",
    aspect: "aspect-[3/2]",
  },
  {
    id: "s-02",
    category: "STREET",
    caption: "Avenida, hora azul",
    url: "https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=1600&q=80&auto=format&fit=crop",
    alt: "Edificios altos al anochecer con las ventanas iluminadas",
    credit: "Denys Nevozhai — Unsplash",
    span: "lg:col-span-6",
    aspect: "aspect-[3/2]",
  },
  {
    id: "s-03",
    category: "STREET",
    caption: "Escaparate, hora de cierre",
    url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1400&q=80&auto=format&fit=crop",
    alt: "Fachada de una tienda iluminada desde dentro en una calle oscura",
    credit: "Ashim D'Silva — Unsplash",
    span: "lg:col-span-4",
    aspect: "aspect-[4/3]",
  },
  {
    id: "l-03",
    category: "LANDSCAPE",
    caption: "Costa, últimas luces del día",
    url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=1600&q=80&auto=format&fit=crop",
    alt: "Costa rocosa y oscura bajo un cielo que se apaga",
    credit: "Luca Bravo — Unsplash",
    span: "lg:col-span-8",
    aspect: "aspect-[16/10]",
  },
];
