import { Link } from "@tanstack/react-router";
import { PROPERTIES } from "@/data/site";

const gallery = [
  PROPERTIES[0]!.images[2]!,
  PROPERTIES[1]!.images[4]!,
  PROPERTIES[2]!.images[3]!,
  PROPERTIES[3]!.images[2]!,
];

export function GalleryStrip() {
  return (
    <section className="bg-sand py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-8 flex flex-col items-start gap-4 sm:mb-10 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between sm:gap-6">
          <h2 className="font-display text-2xl font-extrabold text-foreground sm:text-3xl md:text-4xl">
            Inside our hotels
          </h2>
          <Link
            to="/gallery"
            className="rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
          >
            View full gallery
          </Link>
        </div>
        {/* Mobile: horizontal scroll strip */}
        <div className="flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory md:hidden -mx-5 px-5">
          {gallery.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`Cinco Group hotels interior ${i + 1}`}
              loading="lazy"
              className="h-48 w-64 shrink-0 snap-center rounded-2xl object-cover"
            />
          ))}
        </div>
        {/* Desktop: grid */}
        <div className="hidden gap-3 md:grid md:grid-cols-4">
          {gallery.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`Cinco Group hotels interior ${i + 1}`}
              loading="lazy"
              className="h-64 w-full rounded-2xl object-cover"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
