import { BedDouble } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="bg-sand py-6 sm:py-8">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex flex-col items-center gap-5 rounded-xl surface-deep px-6 py-10 text-center sm:gap-6 md:flex-row md:items-center md:justify-between md:px-14 md:py-12 md:text-left">
          <div className="flex flex-col items-center gap-4 md:flex-row md:items-center md:gap-6">
            <BedDouble className="h-10 w-10 text-gold sm:h-12 sm:w-12" />
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold">
                Your Perfect Stay Awaits
              </p>
              <h2 className="mt-2 font-display text-2xl font-extrabold text-deep-foreground sm:text-3xl md:text-4xl">
                Stay, Relax &amp; Experience Hyderabad
              </h2>
            </div>
          </div>
          <a
            href="/contact"
            className="w-full rounded-xl bg-gold px-8 py-4 text-center text-sm font-bold text-gold-foreground transition-opacity hover:opacity-90 sm:w-auto"
          >
            Contact Us Now
          </a>
        </div>
      </div>
    </section>
  );
}
