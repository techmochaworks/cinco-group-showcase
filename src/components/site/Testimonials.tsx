import { Quote, Star } from "lucide-react";
import { useState } from "react";
import { TESTIMONIALS } from "@/data/site";

export function Testimonials() {
  const [active, setActive] = useState(0);
  const t = TESTIMONIALS[active]!;

  return (
    <section className="bg-sand py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2">
        <div>
          <span className="rounded-xl bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-[0.28em] text-accent-foreground">
            Our Testimonials
          </span>
          <h2 className="mt-5 font-display text-4xl font-extrabold leading-tight text-foreground md:text-5xl">
            What Our Guests Say About Us
          </h2>
          <p className="mt-6 max-w-md leading-8 text-muted-foreground">
            From seamless bookings to memorable stays, our guests love the comfort, hospitality and
            convenience we provide. Here's what they have to share:
          </p>
          <div className="mt-8 flex gap-2">
            {TESTIMONIALS.map((item, i) => (
              <button
                key={item.name}
                aria-label={`Show review from ${item.name}`}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all ${
                  i === active ? "w-10 bg-primary" : "w-4 bg-border"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-xl bg-card p-10 shadow-lift">
            <span className="absolute right-0 top-0 flex h-24 w-24 items-start justify-end rounded-bl-full bg-gold p-4">
              <Quote className="h-6 w-6 text-gold-foreground" />
            </span>
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-gold text-gold" />
              ))}
            </div>
            <p className="mt-6 max-w-lg text-lg leading-9 text-foreground">{t.quote}</p>
          </div>
          <div className="ml-10 -mt-2 w-fit rounded-b-sm border-t-2 border-gold bg-card px-8 py-5 shadow-soft">
            <p className="font-display text-lg font-bold text-foreground">{t.name}</p>
            <p className="text-sm text-muted-foreground">{t.city}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
