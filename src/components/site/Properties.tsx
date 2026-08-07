import { ArrowUpRight } from "lucide-react";
import { PROPERTIES } from "@/data/site";

export function Properties() {
  return (
    <section id="properties" className="mx-auto max-w-7xl px-5 py-24">
      <div className="mb-14 text-center">
        <span className="rounded-xl bg-secondary px-3 py-1 text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
          Our Properties
        </span>
        <h2 className="mt-5 font-display text-4xl font-extrabold text-foreground md:text-5xl">
          Five Stays Across Hyderabad
        </h2>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {PROPERTIES.map((p) => (
          <article
            key={p.name}
            className="group relative overflow-hidden rounded-xl bg-card shadow-soft transition-shadow hover:shadow-lift"
          >
            <div className="h-72 overflow-hidden">
              <img
                src={p.images[0]}
                alt={p.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="relative mx-5 -mt-16 rounded-xl bg-card p-6 shadow-soft">
              <span className="border-b-2 border-gold pb-0.5 text-sm font-semibold text-primary">
                {p.area}
              </span>
              <div className="mt-4 flex items-end justify-between gap-4">
                <h3 className="font-display text-lg font-bold leading-snug text-foreground">
                  {p.name}
                </h3>
                <a
                  href={p.bookLink}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Book ${p.name}`}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
                >
                  <ArrowUpRight className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div className="h-6" />
          </article>
        ))}
      </div>
    </section>
  );
}
