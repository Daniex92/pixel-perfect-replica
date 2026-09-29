import { intro } from "@/data/site";
import { Reveal, RevealLines } from "@/components/ui/reveal";

export function Intro() {
  return (
    <section className="shell py-32 lg:py-52">
      <div className="grid gap-16 lg:grid-cols-12">
        <h2 className="display-lg lg:col-span-9">
          <RevealLines
            lines={intro.lines}
            lineClassName="[&:nth-child(2)]:text-muted-foreground"
          />
        </h2>
        <Reveal delay={0.3} className="lg:col-span-4 lg:col-start-9">
          <span aria-hidden className="mb-6 block h-px w-16 bg-violet/60" />
          <p className="body-lg">{intro.paragraph}</p>
        </Reveal>
      </div>
    </section>
  );
}
