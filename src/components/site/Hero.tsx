import { CalendarDays, ChevronLeft, ChevronRight, MapPin, Search, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { PROPERTIES } from "@/data/site";

const slides = [
  { image: PROPERTIES[1]!.images[0]!, title: "Stay Elevated in Hyderabad" },
  { image: PROPERTIES[3]!.images[3]!, title: "Five Properties, One Standard" },
  { image: PROPERTIES[0]!.images[1]!, title: "Comfort That Feels Like Home" },
];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, []);

  const go = (d: number) => setIndex((i) => (i + d + slides.length) % slides.length);

  return (
    <section className="relative">
      <div className="relative h-[560px] w-full overflow-hidden md:h-[640px]">
        {slides.map((s, i) => (
          <img
            key={s.image}
            src={s.image}
            alt={s.title}
            loading={i === 0 ? "eager" : "lazy"}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-linear-to-r from-deep/85 via-deep/55 to-transparent" />

        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-5 pb-32">
          <span className="mb-4 w-fit rounded-sm border border-gold/60 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.3em] text-gold">
            The Cinco Group of Hotels
          </span>
          <h1 className="max-w-3xl font-display text-4xl font-extrabold leading-[1.08] text-deep-foreground md:text-6xl">
            {slides[index]!.title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-deep-foreground/80">
            Five thoughtfully located hotels across Hyderabad, blending modern luxury with
            authentic Indian warmth — and priced for the way you travel.
          </p>
        </div>

        <button
          aria-label="Previous slide"
          onClick={() => go(-1)}
          className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-background/85 text-foreground transition-colors hover:bg-background"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          aria-label="Next slide"
          onClick={() => go(1)}
          className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-background/85 text-foreground transition-colors hover:bg-background"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="mx-auto -mt-24 max-w-6xl px-5">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="grid grid-cols-1 overflow-hidden rounded-sm bg-card shadow-lift md:grid-cols-[1.1fr_1fr_0.9fr_auto]"
        >
          <label className="flex items-center gap-3 border-b border-border px-6 py-5 md:border-b-0 md:border-r">
            <MapPin className="h-5 w-5 shrink-0 text-primary" />
            <span className="w-full">
              <span className="block text-xs font-medium text-muted-foreground">Location</span>
              <select className="w-full bg-transparent text-sm font-bold text-foreground outline-hidden">
                <option>Choose a property</option>
                {PROPERTIES.map((p) => (
                  <option key={p.name}>{p.name}</option>
                ))}
              </select>
            </span>
          </label>

          <label className="flex items-center gap-3 border-b border-border px-6 py-5 md:border-b-0 md:border-r">
            <CalendarDays className="h-5 w-5 shrink-0 text-primary" />
            <span className="w-full">
              <span className="block text-xs font-medium text-muted-foreground">Select Date</span>
              <input
                type="date"
                className="w-full bg-transparent text-sm font-bold text-foreground outline-hidden"
              />
            </span>
          </label>

          <label className="flex items-center gap-3 border-b border-border px-6 py-5 md:border-b-0 md:border-r">
            <Users className="h-5 w-5 shrink-0 text-primary" />
            <span className="w-full">
              <span className="block text-xs font-medium text-muted-foreground">Guests</span>
              <input
                type="number"
                min={1}
                defaultValue={2}
                className="w-full bg-transparent text-sm font-bold text-foreground outline-hidden"
              />
            </span>
          </label>

          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-primary px-10 py-5 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Search className="h-4 w-4" /> Search
          </button>
        </form>
      </div>
    </section>
  );
}
