import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Founders } from "@/components/site/Founders";
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

      <section className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-extrabold leading-tight text-foreground md:text-4xl">
            Hospitality, run like a neighbourhood business
          </h2>
          <p className="mt-6 leading-8 text-muted-foreground">{GROUP.about}</p>
          <p className="mt-4 leading-8 text-muted-foreground">
            We started in 2019 with a single property in Ameerpet and grew by fixing the things
            guests complained about most: unclear pricing, slow check-ins and rooms that looked
            nothing like their photographs. Every hotel we have added since is held to that same
            list.
          </p>
          <Link
            to="/properties"
            className="mt-8 inline-flex rounded-xl bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Explore our hotels
          </Link>
        </div>
        <img
          src={PROPERTIES[1]!.images[2]}
          alt="A Cinco Group hotel interior"
          loading="lazy"
          className="h-[480px] w-full rounded-3xl object-cover shadow-lift"
        />
      </section>

      <section className="bg-sand py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 md:grid-cols-3">
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
            <div key={v.t} className="rounded-2xl bg-card p-8 shadow-soft">
              <h3 className="font-display text-lg font-bold text-foreground">{v.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      <Founders />
    </>
  );
}
