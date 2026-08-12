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
    <section id="about" className="mx-auto max-w-7xl px-5 py-16 sm:py-24">
      <div className="grid items-center gap-10 sm:gap-16 lg:grid-cols-2">
        <div className="relative order-2 lg:order-1">
          <img
            src={PROPERTIES[3]!.images[5]}
            alt="Banquet and dining space"
            loading="lazy"
            className="h-64 w-full rounded-xl object-cover shadow-lift sm:h-[520px] sm:rounded-tr-[80px]"
          />
          <img
            src={PROPERTIES[1]!.images[6]}
            alt="Event seating setup"
            loading="lazy"
            className="absolute -bottom-8 -left-4 hidden h-44 w-64 rounded-xl border-4 border-background object-cover shadow-lift md:block"
          />
          <div className="absolute -bottom-8 right-6 hidden items-center gap-3 rounded-xl border-2 border-gold bg-card px-6 py-4 shadow-soft md:flex">
            <span className="font-display text-4xl font-extrabold text-gradient-gold">5+</span>
            <span className="text-sm font-semibold leading-tight text-foreground">
              Years of
              <br />
              experience
            </span>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="rounded-xl bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-[0.28em] text-accent-foreground">
            About Us
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-foreground sm:mt-5 sm:text-4xl md:text-5xl">
            The Perfect Venue for Every Occasion
          </h2>

          <div className="mt-8 space-y-4 sm:mt-10 sm:space-y-5">
            {items.map((i) => (
              <div
                key={i.title}
                className="flex gap-4 rounded-xl border border-border bg-card p-5 transition-shadow hover:shadow-soft sm:gap-5 sm:p-6"
              >
                <i.icon className="h-7 w-7 shrink-0 text-gold sm:h-8 sm:w-8" />
                <div>
                  <h3 className="font-display text-base font-bold text-foreground sm:text-lg">{i.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground sm:mt-2">{i.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
