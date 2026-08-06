import { CORPORATES, PROPERTIES } from "@/data/site";

const gallery = [
  PROPERTIES[0]!.images[4]!,
  PROPERTIES[1]!.images[9]!,
  PROPERTIES[2]!.images[6]!,
  PROPERTIES[3]!.images[8]!,
  PROPERTIES[4]!.images[3]!,
];

export function GuestsAndGallery() {
  return (
    <section id="blogs" className="py-24">
      <div className="mx-auto max-w-7xl px-5 text-center">
        <span className="rounded-sm bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-[0.28em] text-accent-foreground">
          Guests
        </span>
        <h2 className="mt-5 font-display text-3xl font-extrabold text-foreground md:text-4xl">
          Our Corporate Guests
        </h2>
        <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
          {CORPORATES.map((c) => (
            <span
              key={c}
              className="font-display text-lg font-bold tracking-tight text-muted-foreground transition-colors hover:text-primary"
            >
              {c}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-24 text-center">
        <h2 className="font-display text-3xl font-extrabold text-foreground md:text-4xl">
          Our Gallery
        </h2>
        <div className="mt-12 grid grid-cols-2 gap-1 md:grid-cols-5">
          {gallery.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`Cinco Group hotels gallery image ${i + 1}`}
              loading="lazy"
              className="h-56 w-full object-cover grayscale-[0.15] transition-all duration-500 hover:grayscale-0 md:h-64"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
