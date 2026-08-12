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

      <section className="mx-auto max-w-7xl space-y-10 px-5 py-20">
        {PROPERTIES.map((p, i) => (
          <article
            key={p.slug}
            className={`grid items-center gap-10 overflow-hidden rounded-3xl bg-card p-6 shadow-soft md:grid-cols-2 md:p-8 ${
              i % 2 ? "md:[&>div:first-child]:order-2" : ""
            }`}
          >
            <div className="grid grid-cols-2 gap-3">
              <img
                src={p.images[0]}
                alt={p.name}
                loading="lazy"
                className="col-span-2 h-64 w-full rounded-2xl object-cover"
              />
              <img
                src={p.images[1]}
                alt=""
                aria-hidden
                loading="lazy"
                className="h-28 w-full rounded-xl object-cover"
              />
              <img
                src={p.images[2]}
                alt=""
                aria-hidden
                loading="lazy"
                className="h-28 w-full rounded-xl object-cover"
              />
            </div>

            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-4 py-1 text-xs font-bold text-primary">
                <MapPin className="h-3.5 w-3.5" /> {p.area}
              </span>
              <h2 className="mt-4 font-display text-2xl font-extrabold leading-snug text-foreground">
                {p.name}
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{p.description}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/property/$slug"
                  params={{ slug: p.slug }}
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  View property <ArrowUpRight className="h-4 w-4" />
                </Link>
                <a
                  href={p.bookLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-xl border border-border px-6 py-3 text-sm font-bold text-foreground transition-colors hover:border-primary hover:text-primary"
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
