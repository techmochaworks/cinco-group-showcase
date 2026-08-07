import { FOUNDERS } from "@/data/site";

export function Founders() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24">
      <div className="mb-14 text-center">
        <span className="rounded-xl bg-secondary px-3 py-1 text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
          Leadership
        </span>
        <h2 className="mt-5 font-display text-4xl font-extrabold text-foreground md:text-5xl">
          Meet Our Founders
        </h2>
        <p className="mx-auto mt-5 max-w-2xl leading-8 text-muted-foreground">
          Five partners, one shared belief — that great hospitality should be within everyone's
          reach.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
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
