import { LockKeyhole } from "lucide-react";
import { photographyHeading } from "@/data/gallery";
import { Reveal, RevealLines } from "@/components/ui/reveal";

export function Photography() {
  return (
    <section id="photography" className="border-t border-border bg-surface/40">
      <div className="shell py-24 lg:py-36">
        <Reveal>
          <p className="label-mono">04 / FOTOGRAFÍA</p>
        </Reveal>
        <h2 className="mt-6 display-lg">
          <RevealLines
            lines={photographyHeading}
            lineClassName="[&:nth-child(2)]:text-muted-foreground"
          />
        </h2>

        <div className="mt-12 flex min-h-64 items-center border-y border-border py-12">
          <div className="flex items-start gap-5 sm:gap-8">
            <LockKeyhole
              aria-hidden="true"
              className="mt-1 size-5 shrink-0 text-muted-foreground"
              strokeWidth={1.5}
            />
            <div>
              <p className="label-mono text-muted-foreground">GALERÍA EN DESARROLLO</p>
              <h3 className="mt-4 text-2xl font-light uppercase sm:text-3xl">
                Estamos preparando esta selección.
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Pronto podrás explorar aquí nuestro trabajo fotográfico.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
