import { PROPERTIES } from "@/data/site";

export function Achievements() {
  return (
    <section className="bg-sand py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:gap-14 lg:grid-cols-2">
        <div>
          <span className="rounded-xl bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-[0.28em] text-accent-foreground">
            Highlights
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-foreground sm:mt-5 sm:text-4xl md:text-5xl">
            Our Achievements
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground sm:mt-6 sm:text-base sm:leading-8">
            Recognised three years running for guest satisfaction across Hyderabad's budget-premium
            segment, The Cinco Group has hosted over 120,000 stays with a 4.5+ average rating. Our
            teams are trained on a single standard — clean rooms, honest pricing and service that
            anticipates rather than reacts.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4 sm:mt-10 sm:gap-6">
            {[
              { k: "5", v: "Properties" },
              { k: "120K+", v: "Happy Stays" },
              { k: "4.5★", v: "Avg. Rating" },
            ].map((s) => (
              <div key={s.v} className="rounded-xl bg-card p-4 text-center shadow-soft sm:rounded-none sm:bg-transparent sm:p-0 sm:text-left sm:shadow-none">
                <p className="font-display text-2xl font-extrabold text-primary sm:text-3xl">{s.k}</p>
                <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.v}</p>
              </div>
            ))}
          </div>
          <a
            href="/contact"
            className="mt-8 inline-flex rounded-xl bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90 sm:mt-10"
          >
            Contact Us Now
          </a>
        </div>

        <div className="relative">
          <img
            src={PROPERTIES[0]!.images[1]}
            alt="The Cinco Group property interior"
            loading="lazy"
            className="h-72 w-full rounded-xl object-cover shadow-lift sm:h-[520px]"
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
