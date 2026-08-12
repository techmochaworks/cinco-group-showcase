import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, MapPin } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { PROPERTIES } from "@/data/site";

const title = "Our Properties | The Cinco Group of Hotels, Hyderabad";
const description =
  "Our Cinco Group hotels across Hyderabad — Ameerpet, Kondapur, Begumpet, Gachibowli and Secunderabad. Compare rooms, locations and book direct.";

export const Route = createFileRoute("/properties")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PropertiesPage,
});

function PropertiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Properties"
        title="Multiple addresses across Hyderabad"
        intro="Each property is run to the same standard — clean rooms, honest pricing and a team that answers at any hour."
        image={PROPERTIES[1]!.images[0]!}
      />

      <section className="mx-auto max-w-7xl space-y-8 px-5 py-12 sm:space-y-10 sm:py-20">
        {PROPERTIES.map((p, i) => (
          <article
            key={p.slug}
            className={`grid items-center gap-6 overflow-hidden rounded-2xl bg-card p-5 shadow-soft sm:gap-10 sm:rounded-3xl sm:p-6 md:grid-cols-2 md:p-8 ${
              i % 2 ? "md:[&>div:first-child]:order-2" : ""
            }`}
          >
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              <img
                src={p.images[0]}
                alt={p.name}
                loading="lazy"
                className="col-span-2 h-48 w-full rounded-xl object-cover sm:h-64 sm:rounded-2xl"
              />
              <img
                src={p.images[1]}
                alt=""
                aria-hidden
                loading="lazy"
                className="h-20 w-full rounded-lg object-cover sm:h-28 sm:rounded-xl"
              />
              <img
                src={p.images[2]}
                alt=""
                aria-hidden
                loading="lazy"
                className="h-20 w-full rounded-lg object-cover sm:h-28 sm:rounded-xl"
              />
            </div>

            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-[10px] font-bold text-primary sm:px-4 sm:text-xs">
                <MapPin className="h-3 w-3 sm:h-3.5 sm:w-3.5" /> {p.area}
              </span>
              <h2 className="mt-3 font-display text-xl font-extrabold leading-snug text-foreground sm:mt-4 sm:text-2xl">
                {p.name}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base">{p.description}</p>
              <div className="mt-5 flex flex-wrap gap-2.5 sm:mt-7 sm:gap-3">
                <Link
                  to="/property/$slug"
                  params={{ slug: p.slug }}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-xs font-bold text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto sm:px-6 sm:text-sm"
                >
                  View property <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </Link>
                <a
                  href={p.bookLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-xl border border-border px-5 py-3 text-xs font-bold text-foreground transition-colors hover:border-primary hover:text-primary sm:w-auto sm:px-6 sm:text-sm"
                >
                  Book now
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
