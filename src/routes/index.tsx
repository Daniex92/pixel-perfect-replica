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
  head: () => ({
    meta: [
      { title: site.title },
      { name: "description", content: site.description },
      { property: "og:title", content: site.title },
      { property: "og:description", content: site.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
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
