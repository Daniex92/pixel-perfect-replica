import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { contact, contactSection, socials } from "@/data/site";
import { Reveal, RevealLines } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const projectTypes = [
  "Desarrollo web",
  "Fotografía",
  "Contenido visual",
  "Otro",
] as const;

const schema = z.object({
  name: z.string().min(2, "Escribe tu nombre."),
  email: z.string().email("Escribe una dirección de correo válida."),
  projectType: z.enum(projectTypes, { message: "Elige un tipo de proyecto." }),
  message: z.string().min(10, "Añade algunos detalles más (mínimo 10 caracteres)."),
});

type FormValues = z.infer<typeof schema>;

const fieldClass =
  "w-full border-b border-input bg-transparent px-0 py-3 text-base text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-violet focus:outline-none";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: FormValues) => {
    // TODO: Connect this stub to a real endpoint, inbox or form service.
    await new Promise((resolve) => setTimeout(resolve, 900));
    console.info("Contact submission (stub):", values);
    setStatus("success");
    reset();
  };

  return (
    <section id="contact" className="border-t border-border">
      <div className="shell py-24 lg:py-36">
        <Reveal>
          <p className="label-mono">07 / CONTACTO</p>
        </Reveal>

        <div className="mt-6 grid gap-12 lg:grid-cols-12 lg:gap-x-10">
          <div className="lg:col-span-5">
            <h2 className="display-lg">
              <RevealLines
                lines={contactSection.lines}
                lineClassName="[&:nth-child(2)]:text-muted-foreground"
              />
            </h2>
            <Reveal delay={0.2}>
              <p className="body-lg mt-8 max-w-sm">{contactSection.text}</p>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="lg:col-span-5 lg:col-start-8 lg:pt-3">
              <dl className="mt-12 space-y-5">
                <div>
                  <dt className="label-mono">CORREO</dt>
                  <dd className="mt-1">
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-foreground transition-colors hover:text-violet"
                    >
                      {contact.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="label-mono">WHATSAPP</dt>
                  <dd className="mt-1 text-foreground">{contact.whatsapp}</dd>
                </div>
                <div>
                  <dt className="label-mono">UBICACIÓN</dt>
                  <dd className="mt-1 text-foreground">{contact.location}</dd>
                </div>
              </dl>

              <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} className="label-mono transition-colors hover:text-foreground">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
