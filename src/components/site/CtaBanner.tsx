import { BedDouble } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="bg-sand py-8">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex flex-col items-start gap-6 rounded-xl surface-deep px-8 py-12 md:flex-row md:items-center md:justify-between md:px-14">
          <div className="flex items-center gap-6">
            <BedDouble className="hidden h-12 w-12 text-gold md:block" />
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold">
                Your Perfect Stay Awaits
              </p>
              <h2 className="mt-2 font-display text-3xl font-extrabold text-deep-foreground md:text-4xl">
                Stay, Relax &amp; Experience Hyderabad
              </h2>
            </div>
          </div>
          <a
            href="#contact"
            className="rounded-xl bg-gold px-8 py-4 text-sm font-bold text-gold-foreground transition-opacity hover:opacity-90"
          >
            Contact Us Now
          </a>
        </div>
      </div>
    </section>
  );
}
