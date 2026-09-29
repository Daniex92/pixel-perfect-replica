export type NavItem = { label: string; href: string };

export const site = {
  name: "PIXEL STUDIO",
  title: "PIXEL STUDIO — Digital Experiences & Visual Stories",
  description:
    "PIXEL STUDIO creates digital experiences, websites and professional visual content through technology, photography and creative direction.",
  label: "CREATIVE STUDIO / 2026",
  disciplines: "WEB DEVELOPMENT · PHOTOGRAPHY · VISUAL CONTENT",
  copyright: "© 2026 PIXEL STUDIO",
};

export const nav: NavItem[] = [
  { label: "WORK", href: "#work" },
  { label: "SERVICES", href: "#services" },
  { label: "ABOUT", href: "#about" },
  { label: "CONTACT", href: "#contact" },
];

/** TODO: Replace placeholders with real PIXEL STUDIO contact details. */
export const contact = {
  email: "hello@pixelstudio.example",
  whatsapp: "+00 000 000 0000",
  location: "Available worldwide / remote",
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
  tagline: "DIGITAL EXPERIENCES. VISUAL STORIES.",
  text: "Web experiences and visual content built with technology, creativity and intention.",
  primaryCta: "EXPLORE WORK",
  ghostCta: "START A PROJECT",
  scrollIndicator: "SCROLL TO EXPLORE ↓",
};

export const intro = {
  lines: ["WE TURN IDEAS", "INTO DIGITAL", "EXPERIENCES."],
  paragraph:
    "PIXEL STUDIO combines web development and photography to create digital experiences and visual identities.",
};

export const about = {
  lines: ["PIXEL IS WHERE", "IMAGE MEETS CODE."],
  paragraphs: [
    "We work slowly on purpose. A frame is chosen, a line of code is written, and both carry the same intention: to say something true about the work in front of us.",
    "Photography taught us to look. Development taught us to build. The pixel is where those two habits meet — small enough to be invisible, precise enough to change everything.",
  ],
};

export const webdev = {
  lines: ["BUILT FOR THE", "DIGITAL WORLD."],
  focus: [
    {
      title: "Visual identity",
      text: "Every interface is designed around the character of the project it belongs to.",
    },
    {
      title: "Performance",
      text: "Light pages, fast first paint, no weight that does not earn its place.",
    },
    {
      title: "Responsive design",
      text: "Layouts rethought per screen, not compressed versions of the desktop.",
    },
    {
      title: "User experience",
      text: "Clear structure, readable type and motion that guides instead of decorating.",
    },
    {
      title: "Modern technologies",
      text: "A current, typed front-end stack chosen for longevity and maintainability.",
    },
  ],
};

export const contactSection = {
  lines: ["LET'S CREATE", "SOMETHING DISTINCT."],
  text: "Have an idea, project or story worth bringing to life?",
  cta: "START A PROJECT",
};
