import { useState } from "react";
import { services, servicesHeading } from "@/data/services";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

function MiniPixelGrid({ active }: { active: boolean }) {
  return (
    <div aria-hidden className="grid w-fit grid-cols-4 gap-1">
      {Array.from({ length: 16 }).map((_, i) => (
        <span
          key={i}
          className={cn(
            "h-1 w-1 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
            active ? "bg-violet" : "bg-foreground/20",
          )}
          style={{
            transitionDelay: `${(i % 4) * 40 + Math.floor(i / 4) * 30}ms`,
            opacity: active ? (i % 3 === 0 ? 0.9 : 0.4) : 0.35,
          }}
        />
      ))}
    </div>
  );
}

export function Services() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="services" className="border-t border-border">
      <div className="shell py-24 lg:py-36">
        <Reveal>
          <p className="label-mono">02 / SERVICIOS</p>
          <h2 className="mt-6 display-md">{servicesHeading}</h2>
        </Reveal>

        <ul className="mt-16 grid gap-px border-t border-border lg:grid-cols-3">
          {services.map((service, i) => {
            const active = hovered === service.number;
            return (
              <Reveal as="li" key={service.number} delay={i * 0.08}>
                <div
                  onMouseEnter={() => setHovered(service.number)}
                  onMouseLeave={() => setHovered(null)}
                  onFocus={() => setHovered(service.number)}
                  onBlur={() => setHovered(null)}
                  tabIndex={0}
                  className={cn(
                    "group flex h-full flex-col justify-between gap-16 border-b border-l border-border p-7 transition-colors duration-500 lg:min-h-[26rem] lg:p-9",
                    active ? "border-violet/50" : "",
                  )}
                >
                  <div className="flex items-start justify-between gap-6">
                    <span
                      className={cn(
                        "block font-extralight leading-none transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                        "text-[4.5rem] lg:text-[6rem]",
                        active
                          ? "-translate-y-1 text-foreground"
                          : "translate-y-0 text-foreground/15",
                      )}
                    >
                      {service.number}
                    </span>
                    <MiniPixelGrid active={active} />
                  </div>

                  <div>
                    <h3 className="text-lg font-normal uppercase tracking-[0.12em]">
                      {service.title}
                    </h3>
                    <p className="body-lg mt-4 text-[0.95rem]">{service.text}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
