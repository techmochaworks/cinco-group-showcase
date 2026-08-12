import { FOUNDERS } from "@/data/site";

export function Founders() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:py-24">
      <div className="mb-10 text-center sm:mb-14">
        <span className="rounded-xl bg-secondary px-3 py-1 text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
          Leadership
        </span>
        <h2 className="mt-4 font-display text-3xl font-extrabold text-foreground sm:mt-5 sm:text-4xl md:text-5xl">
          Meet Our Founders
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:mt-5 sm:text-base sm:leading-8">
          Five partners, one shared belief — that great hospitality should be within everyone's
          reach.
        </p>
      </div>

      <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory -mx-5 px-5 md:hidden">
        {FOUNDERS.map((f) => (
          <div key={f.name} className="group w-48 shrink-0 snap-center text-center">
            <div className="overflow-hidden rounded-xl bg-secondary">
              <img
                src={f.image}
                alt={f.name}
                loading="lazy"
                className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <h3 className="mt-4 font-display text-sm font-bold text-foreground">{f.name}</h3>
            <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              {f.role}
            </p>
          </div>
        ))}
      </div>

      <div className="hidden grid-cols-2 gap-8 md:grid lg:grid-cols-5">
        {FOUNDERS.map((f) => (
          <div key={f.name} className="group text-center">
            <div className="overflow-hidden rounded-xl bg-secondary">
              <img
                src={f.image}
                alt={f.name}
                loading="lazy"
                className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <h3 className="mt-5 font-display text-base font-bold text-foreground">{f.name}</h3>
            <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {f.role}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
