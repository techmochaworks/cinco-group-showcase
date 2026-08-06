import { BedDouble, IndianRupee, PartyPopper } from "lucide-react";
import { PROPERTIES } from "@/data/site";

const items = [
  {
    icon: BedDouble,
    title: "Banquet Halls",
    text: "Ideal for birthday parties, kitty parties, corporate meetings, family gatherings and special events.",
  },
  {
    icon: PartyPopper,
    title: "Corporate Customisable Packages",
    text: "Long-stay corporate rates with hygiene and guest comfort as our top priorities.",
  },
  {
    icon: IndianRupee,
    title: "Affordable & Flexible Packages",
    text: "Premium services at budget-friendly rates, with free cancellation on most bookings.",
  },
];

export function Venue() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-24">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <div className="relative">
          <img
            src={PROPERTIES[3]!.images[5]}
            alt="Banquet and dining space"
            loading="lazy"
            className="h-[520px] w-full rounded-tr-[80px] rounded-sm object-cover shadow-lift"
          />
          <img
            src={PROPERTIES[1]!.images[6]}
            alt="Event seating setup"
            loading="lazy"
            className="absolute -bottom-8 -left-4 hidden h-44 w-64 rounded-sm border-4 border-background object-cover shadow-lift md:block"
          />
          <div className="absolute -bottom-8 right-6 hidden items-center gap-3 rounded-sm border-2 border-gold bg-card px-6 py-4 shadow-soft md:flex">
            <span className="font-display text-4xl font-extrabold text-gradient-gold">5+</span>
            <span className="text-sm font-semibold leading-tight text-foreground">
              Years of
              <br />
              experience
            </span>
          </div>
        </div>

        <div>
          <span className="rounded-sm bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-[0.28em] text-accent-foreground">
            About Us
          </span>
          <h2 className="mt-5 font-display text-4xl font-extrabold leading-tight text-foreground md:text-5xl">
            The Perfect Venue for Every Occasion
          </h2>

          <div className="mt-10 space-y-5">
            {items.map((i) => (
              <div
                key={i.title}
                className="flex gap-5 rounded-sm border border-border bg-card p-6 transition-shadow hover:shadow-soft"
              >
                <i.icon className="h-8 w-8 shrink-0 text-gold" />
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground">{i.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{i.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
