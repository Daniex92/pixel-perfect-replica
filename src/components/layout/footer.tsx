import { site, socials } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="shell flex flex-col gap-10 py-14 lg:flex-row lg:items-end lg:justify-between lg:py-20">
        <div>
          <div className="flex items-center gap-3">
            <span
              aria-hidden
              className="h-1.5 w-1.5 bg-violet"
              style={{ boxShadow: "var(--glow-dot)" }}
            />
            <p className="text-2xl font-extralight tracking-[0.12em]">{site.name}</p>
          </div>
          <p className="label-mono mt-4">{site.disciplines}</p>
        </div>

        <div className="flex flex-col gap-6 lg:items-end">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  className="label-mono transition-colors hover:text-foreground"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="label-mono">{site.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
