import { Link } from "@tanstack/react-router";
import { PROPERTIES } from "@/data/site";

const gallery = [
  PROPERTIES[0]!.images[4]!,
  PROPERTIES[1]!.images[9]!,
  PROPERTIES[2]!.images[6]!,
  PROPERTIES[3]!.images[8]!,
  PROPERTIES[4]!.images[3]!,
];

export function GalleryStrip() {
  return (
    <section className="bg-sand py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display text-3xl font-extrabold text-foreground md:text-4xl">
            Inside our hotels
          </h2>
          <Link
            to="/gallery"
            className="rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
          >
            View full gallery
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
          {gallery.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`Cinco Group hotels interior ${i + 1}`}
              loading="lazy"
              className="h-56 w-full rounded-2xl object-cover md:h-64"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
