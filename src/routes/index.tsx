import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Intro } from "@/components/sections/intro";
import { Services } from "@/components/sections/services";
import { SelectedWork } from "@/components/sections/selected-work";
import { Photography } from "@/components/sections/photography";
import { WebDevelopment } from "@/components/sections/web-development";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { site } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => {
    const canonicalUrl = new URL("/", site.url).href;
    const ogImageUrl = new URL(site.ogImage, site.url).href;

    return {
      meta: [
        { title: site.title },
        { name: "description", content: site.description },
        { property: "og:title", content: site.title },
        { property: "og:description", content: site.description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: canonicalUrl },
        { property: "og:image", content: ogImageUrl },
        {
          property: "og:image:alt",
          content: `${site.name} — páginas web y fotografía profesional`,
        },
        { property: "og:locale", content: site.locale },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: site.title },
        { name: "twitter:description", content: site.description },
        { name: "twitter:image", content: ogImageUrl },
      ],
      links: [{ rel: "canonical", href: canonicalUrl }],
    };
  },
  component: Index,
});

function Index() {
  useSmoothScroll();

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <CustomCursor />
      <Navbar />
      <main id="main">
        <Hero />
        <Intro />
        <Services />
        <SelectedWork />
        <Photography />
        <WebDevelopment />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
