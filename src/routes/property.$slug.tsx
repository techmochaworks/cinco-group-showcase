import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check, MapPin, Phone } from "lucide-react";
import { PROPERTIES, AMENITIES, GROUP } from "@/data/site";

export const Route = createFileRoute("/property/$slug")({
  loader: ({ params }) => {
    const property = PROPERTIES.find((p) => p.slug === params.slug);
    if (!property) throw notFound();
    return { property };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Property not found" }, { name: "robots", content: "noindex" }],
      };
    }
    const p = loaderData.property;
    const t = `${p.name} | The Cinco Group of Hotels`;
    const d = p.description;
    return {
      meta: [
        { title: t },
        { name: "description", content: d },
        { property: "og:title", content: t },
        { property: "og:description", content: d },
        { property: "og:type", content: "website" },
        { property: "og:image", content: p.images[0]! },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: p.images[0]! },
      ],
    };
  },
  notFoundComponent: PropertyNotFound,
  component: PropertyPage,
});

function PropertyNotFound() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-32 text-center">
      <h1 className="font-display text-3xl font-extrabold text-foreground">
        We couldn&apos;t find that property
      </h1>
      <Link
        to="/properties"
        className="mt-8 inline-flex rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground"
      >
        See all properties
      </Link>
    </div>
  );
}

function PropertyPage() {
  const { property: p } = Route.useLoaderData();
  const others = PROPERTIES.filter((x) => x.slug !== p.slug).slice(0, 3);

  return (
    <>
      <section className="relative h-[420px] overflow-hidden md:h-[520px]">
        <img src={p.images[0]} alt={p.name} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-linear-to-t from-deep/90 via-deep/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto max-w-7xl px-5 pb-12">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gold px-4 py-1 text-xs font-bold text-gold-foreground">
              <MapPin className="h-3.5 w-3.5" /> {p.area}, Hyderabad
            </span>
            <h1 className="mt-4 max-w-3xl font-display text-3xl font-extrabold text-deep-foreground md:text-5xl">
              {p.name}
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1.6fr_1fr]">
        <div>
          <h2 className="font-display text-2xl font-extrabold text-foreground">About this hotel</h2>
          <p className="mt-5 leading-8 text-muted-foreground">{p.description}</p>
          <p className="mt-4 leading-8 text-muted-foreground">
            Rooms are serviced daily and the front desk stays staffed through the night, so a late
            check-in never becomes a problem. Airport transfers, laundry and in-room dining can be
            arranged at the desk.
          </p>

          <h3 className="mt-12 font-display text-xl font-extrabold text-foreground">Amenities</h3>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {AMENITIES.map((a) => (
              <li key={a} className="flex items-center gap-3 text-sm text-foreground">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-primary">
                  <Check className="h-3.5 w-3.5" />
                </span>
                {a}
              </li>
            ))}
          </ul>

          <h3 className="mt-12 font-display text-xl font-extrabold text-foreground">Photos</h3>
          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
            {p.images.slice(1, 10).map((src: string, i: number) => (
              <img
                key={src}
                src={src}
                alt={`${p.name} photo ${i + 1}`}
                loading="lazy"
                className="h-40 w-full rounded-xl object-cover md:h-48"
              />
            ))}
          </div>
        </div>

        <aside className="h-fit rounded-3xl bg-card p-8 shadow-lift lg:sticky lg:top-28">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-muted-foreground">
            Reserve your stay
          </p>
          <p className="mt-3 font-display text-xl font-extrabold text-foreground">{p.name}</p>
          <p className="mt-2 text-sm text-muted-foreground">{p.area}, Hyderabad</p>
          <a
            href={p.bookLink}
            target="_blank"
            rel="noreferrer"
            className="mt-7 flex items-center justify-center rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Book this hotel
          </a>
          <Link
            to="/contact"
            className="mt-3 flex items-center justify-center rounded-xl border border-border px-6 py-3.5 text-sm font-bold text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            Enquire with us
          </Link>
          <p className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
            <Phone className="h-4 w-4 text-primary" /> {GROUP.phone}
          </p>
        </aside>
      </section>

      <section className="bg-sand py-20">
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="font-display text-2xl font-extrabold text-foreground">
            Other hotels in the group
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                to="/property/$slug"
                params={{ slug: o.slug }}
                className="group overflow-hidden rounded-2xl bg-card shadow-soft transition-shadow hover:shadow-lift"
              >
                <img
                  src={o.images[0]}
                  alt={o.name}
                  loading="lazy"
                  className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="p-5">
                  <p className="text-xs font-semibold text-primary">{o.area}</p>
                  <p className="mt-2 font-display font-bold text-foreground">{o.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
