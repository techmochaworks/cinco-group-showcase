import { PROPERTIES } from "@/data/site";

export function Achievements() {
  return (
    <section className="bg-sand py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2">
        <div>
          <span className="rounded-xl bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-[0.28em] text-accent-foreground">
            Highlights
          </span>
          <h2 className="mt-5 font-display text-4xl font-extrabold text-foreground md:text-5xl">
            Our Achievements
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground">
            Recognised three years running for guest satisfaction across Hyderabad's budget-premium
            segment, The Cinco Group has hosted over 120,000 stays with a 4.5+ average rating. Our
            teams are trained on a single standard — clean rooms, honest pricing and service that
            anticipates rather than reacts.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6">
            {[
              { k: "5", v: "Properties" },
              { k: "120K+", v: "Happy Stays" },
              { k: "4.5★", v: "Avg. Rating" },
            ].map((s) => (
              <div key={s.v}>
                <p className="font-display text-3xl font-extrabold text-primary">{s.k}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.v}</p>
              </div>
            ))}
          </div>
          <a
            href="/contact"
            className="mt-10 inline-flex rounded-xl bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Contact Us Now
          </a>
        </div>

        <div className="relative">
          <img
            src={PROPERTIES[2]!.images[2]}
            alt="The Cinco Group property interior"
            loading="lazy"
            className="h-[520px] w-full rounded-xl object-cover shadow-lift"
          />
          <div className="absolute -bottom-6 -left-6 hidden rounded-xl surface-deep px-7 py-5 shadow-lift md:block">
            <p className="font-display text-2xl font-extrabold">Since 2019</p>
            <p className="text-xs uppercase tracking-[0.2em] text-deep-foreground/70">
              Hospitality in Hyderabad
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
