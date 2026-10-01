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

        <div className="mt-6 grid gap-16 lg:grid-cols-12 lg:gap-x-10">
          <div className="lg:col-span-5">
            <h2 className="display-lg">
              <RevealLines
                lines={contactSection.lines}
                lineClassName="[&:nth-child(2)]:text-muted-foreground"
              />
            </h2>
            <Reveal delay={0.2}>
              <p className="body-lg mt-8 max-w-sm">{contactSection.text}</p>

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

          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <form
              noValidate
              onSubmit={handleSubmit(onSubmit)}
              className="border border-border p-6 lg:p-10"
            >
              <div className="space-y-9">
                <div>
                  <label htmlFor="name" className="label-mono">
                    NOMBRE
                  </label>
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Tu nombre"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={cn(fieldClass, errors.name && "border-destructive")}
                    {...register("name")}
                  />
                  {errors.name && (
                    <p id="name-error" className="label-mono mt-2 text-destructive">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="label-mono">
                    CORREO
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@studio.com"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={cn(fieldClass, errors.email && "border-destructive")}
                    {...register("email")}
                  />
                  {errors.email && (
                    <p id="email-error" className="label-mono mt-2 text-destructive">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="projectType" className="label-mono">
                    TIPO DE PROYECTO
                  </label>
                  <select
                    id="projectType"
                    defaultValue=""
                    aria-invalid={Boolean(errors.projectType)}
                    aria-describedby={errors.projectType ? "projectType-error" : undefined}
                    className={cn(fieldClass, errors.projectType && "border-destructive")}
                    {...register("projectType")}
                  >
                    <option value="" disabled>
                      Selecciona una opción
                    </option>
                    {projectTypes.map((t) => (
                      <option key={t} value={t} className="bg-surface">
                        {t}
                      </option>
                    ))}
                  </select>
                  {errors.projectType && (
                    <p id="projectType-error" className="label-mono mt-2 text-destructive">
                      {errors.projectType.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="label-mono">
                    MENSAJE
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Cuéntanos sobre el proyecto"
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={cn(fieldClass, "resize-none", errors.message && "border-destructive")}
                    {...register("message")}
                  />
                  {errors.message && (
                    <p id="message-error" className="label-mono mt-2 text-destructive">
                      {errors.message.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-5">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="label-mono min-h-[44px] border border-violet/50 bg-violet/10 px-6 py-4 text-foreground transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:glow-violet disabled:opacity-50"
                >
                  {isSubmitting ? "ENVIANDO…" : contactSection.cta}
                </button>
                <p aria-live="polite" className="label-mono">
                  {status === "success" ? "MENSAJE ENVIADO — NOS PONDREMOS EN CONTACTO." : ""}
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
