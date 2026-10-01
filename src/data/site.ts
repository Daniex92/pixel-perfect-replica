export type NavItem = { label: string; href: string };

export const site = {
  name: "PIXEL STUDIO",
  title: "PIXEL STUDIO — Experiencias digitales e historias visuales",
  description:
    "PIXEL STUDIO crea experiencias digitales, sitios web y contenido visual profesional mediante tecnología, fotografía y dirección creativa.",
  label: "ESTUDIO CREATIVO / 2026",
  disciplines: "DESARROLLO WEB · FOTOGRAFÍA · CONTENIDO VISUAL",
  copyright: "© 2026 PIXEL STUDIO",
};

export const nav: NavItem[] = [
  { label: "INICIO", href: "/" },
  { label: "SERVICIOS", href: "#services" },
  { label: "PROYECTOS", href: "#work" },
  { label: "ESTUDIO", href: "#about" },
  { label: "CONTACTO", href: "#contact" },
];

/** TODO: Replace placeholders with real PIXEL STUDIO contact details. */
export const contact = {
  email: "hello@pixelstudio.example",
  whatsapp: "+00 000 000 0000",
  location: "Disponible en todo el mundo / remoto",
};

/** TODO: Replace placeholders with real PIXEL STUDIO social profiles. */
export const socials = [
  { label: "Instagram", href: "#" },
  { label: "Behance", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "GitHub", href: "#" },
];

export const hero = {
  titleTop: "PIXEL",
  titleBottom: "STUDIO",
  tagline: "EXPERIENCIAS DIGITALES. HISTORIAS VISUALES.",
  text: "Experiencias web y contenido visual creados con tecnología, creatividad e intención.",
  primaryCta: "VER PROYECTOS",
  ghostCta: "INICIAR UN PROYECTO",
  scrollIndicator: "DESPLÁZATE PARA EXPLORAR ↓",
};

export const intro = {
  lines: ["TRANSFORMAMOS IDEAS", "EN EXPERIENCIAS", "DIGITALES."],
  paragraph:
    "PIXEL STUDIO combina el desarrollo web y la fotografía para crear experiencias digitales e identidades visuales.",
};

export const about = {
  lines: ["PIXEL ES DONDE", "LA IMAGEN SE UNE AL CÓDIGO."],
  paragraphs: [
    "Trabajamos sin prisa, a propósito. Elegimos un encuadre, escribimos una línea de código y ambos nacen de la misma intención: expresar algo auténtico sobre el trabajo que tenemos delante.",
    "La fotografía nos enseñó a mirar. El desarrollo, a construir. El píxel es el punto donde se encuentran ambos hábitos: tan pequeño que pasa inadvertido y tan preciso que puede cambiarlo todo.",
  ],
};

export const webdev = {
  lines: ["CREADO PARA EL", "MUNDO DIGITAL."],
  focus: [
    {
      title: "Identidad visual",
      text: "Cada interfaz se diseña en torno a la personalidad del proyecto al que pertenece.",
    },
    {
      title: "Rendimiento",
      text: "Páginas ligeras, carga inicial rápida y nada de peso innecesario.",
    },
    {
      title: "Diseño adaptable",
      text: "Diseños pensados para cada pantalla, no versiones comprimidas del escritorio.",
    },
    {
      title: "Experiencia de usuario",
      text: "Estructura clara, tipografía legible y movimiento que guía en lugar de decorar.",
    },
    {
      title: "Tecnologías modernas",
      text: "Herramientas actuales y tipadas, elegidas para facilitar la evolución y el mantenimiento.",
    },
  ],
};

export const contactSection = {
  lines: ["CREEMOS", "ALGO ÚNICO."],
  text: "¿Tienes una idea, un proyecto o una historia que merece cobrar vida?",
  cta: "INICIAR UN PROYECTO",
};
