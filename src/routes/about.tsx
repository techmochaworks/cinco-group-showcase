import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { GROUP, PROPERTIES } from "@/data/site";

const title = "About Us | The Cinco Group of Hotels, Hyderabad";
const description =
  "How Our hotels across Hyderabad came to be run to one standard — the story, the people and the promises behind The Cinco Group.";

export const Route = createFileRoute("/about")({
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
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="One standard,Multiple addresses"
        image={PROPERTIES[0]!.images[3]!}
      />

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 sm:gap-14 sm:py-20 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl font-extrabold leading-tight text-foreground sm:text-3xl md:text-4xl">
            Hospitality, run like a neighbourhood business
          </h2>
          <p className="mt-4 text-sm leading-7 text-muted-foreground sm:mt-6 sm:text-base sm:leading-8">{GROUP.about}</p>
          <p className="mt-3 text-sm leading-7 text-muted-foreground sm:mt-4 sm:text-base sm:leading-8">
            We started in 2019 with a single property in Ameerpet and grew by fixing the things
            guests complained about most: unclear pricing, slow check-ins and rooms that looked
            nothing like their photographs. Every hotel we have added since is held to that same
            list.
          </p>
          <Link
            to="/properties"
            className="mt-6 inline-flex rounded-xl bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90 sm:mt-8"
          >
            Explore our hotels
          </Link>
        </div>
        <img
          src={PROPERTIES[1]!.images[2]}
          alt="A Cinco Group hotel interior"
          loading="lazy"
          className="h-72 w-full rounded-2xl object-cover shadow-lift sm:h-[480px] sm:rounded-3xl"
        />
      </section>

      <section className="bg-sand py-12 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:gap-6 md:grid-cols-3">
          {[
            {
              t: "Clean, always",
              d: "Rooms are inspected before every check-in, not just cleaned. Linen is changed daily on every stay.",
            },
            {
              t: "Honest pricing",
              d: "The rate you see is the rate you pay. No resort fees, no surprise charges at checkout.",
            },
            {
              t: "Answered at any hour",
              d: "Front desks are staffed 24x7 across all Our properties, including the early-train arrivals.",
            },
          ].map((v) => (
            <div key={v.t} className="rounded-xl bg-card p-6 shadow-soft sm:rounded-2xl sm:p-8">
              <h3 className="font-display text-base font-bold text-foreground sm:text-lg">{v.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:mt-3">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

    </>
  );
}
