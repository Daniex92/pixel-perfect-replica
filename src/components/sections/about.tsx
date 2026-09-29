import { about } from "@/data/site";
import { aboutImage } from "@/data/projects";
import { DepixelateCanvas } from "@/components/ui/depixelate-canvas";
import { Reveal, RevealLines } from "@/components/ui/reveal";

export function About() {
  return (
    <section id="about" className="border-t border-border">
      <div className="shell py-24 lg:py-36">
        <Reveal>
          <p className="label-mono">06 / ABOUT</p>
        </Reveal>

        <div className="mt-6 grid gap-16 lg:grid-cols-12 lg:gap-x-10">
          <div className="lg:col-span-6">
            <h2 className="display-lg">
              <RevealLines
                lines={about.lines}
                lineClassName="[&:nth-child(2)]:text-muted-foreground"
              />
            </h2>
            <div className="mt-10 max-w-md space-y-6">
              {about.paragraphs.map((p, i) => (
                <Reveal key={i} delay={0.15 + i * 0.1}>
                  <p className="body-lg">{p}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.2} className="lg:col-span-5 lg:col-start-8 lg:mt-10">
            <div className="crop-marks">
              <DepixelateCanvas
                src={aboutImage.url}
                alt={aboutImage.alt}
                className="aspect-[4/5]"
              />
            </div>
            <p className="label-mono mt-4">{aboutImage.credit}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
