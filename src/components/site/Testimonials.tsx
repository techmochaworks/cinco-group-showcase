import { Quote, Star } from "lucide-react";
import { useState, useEffect } from "react";
import { TESTIMONIALS } from "@/data/site";

export function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const t = TESTIMONIALS[active]!;

  return (
    <section className="bg-sand py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:gap-14 lg:grid-cols-2">
        <div>
          <span className="rounded-xl bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-[0.28em] text-accent-foreground">
            Our Testimonials
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-foreground sm:mt-5 sm:text-4xl md:text-5xl">
            What Our Guests Say About Us
          </h2>
          <p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground sm:mt-6 sm:text-base sm:leading-8">
            From seamless bookings to memorable stays, our guests love the comfort, hospitality and
            convenience we provide. Here's what they have to share:
          </p>
          <div className="mt-6 flex gap-2 sm:mt-8">
            {TESTIMONIALS.map((item, i) => (
              <button
                key={item.name}
                aria-label={`Show review from ${item.name}`}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all ${
                  i === active ? "w-8 bg-primary sm:w-10" : "w-3 bg-border sm:w-4"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-xl bg-card p-6 shadow-lift sm:p-10">
            <span className="absolute right-0 top-0 flex h-16 w-16 items-start justify-end rounded-bl-full bg-gold p-3 sm:h-24 sm:w-24 sm:p-4">
              <Quote className="h-5 w-5 text-gold-foreground sm:h-6 sm:w-6" />
            </span>
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold text-gold sm:h-5 sm:w-5" />
              ))}
            </div>
            <p className="mt-4 text-base leading-7 text-foreground sm:mt-6 sm:max-w-lg sm:text-lg sm:leading-9">{t.quote}</p>
          </div>
          <div className="ml-6 -mt-2 w-fit rounded-b-sm border-t-2 border-gold bg-card px-6 py-4 shadow-soft sm:ml-10 sm:px-8 sm:py-5">
            <p className="font-display text-base font-bold text-foreground sm:text-lg">{t.name}</p>
            <p className="text-xs text-muted-foreground sm:text-sm">{t.city}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
