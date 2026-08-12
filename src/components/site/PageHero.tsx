import { Link } from "@tanstack/react-router";

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  image: string;
}) {
  return (
    <section className="relative h-[300px] w-full overflow-hidden sm:h-[340px] md:h-[400px]">
      <img src={image} alt="" aria-hidden className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-linear-to-r from-deep/90 via-deep/70 to-deep/30" />
      <div className="absolute inset-0">
        <div className="mx-auto flex h-full max-w-7xl flex-col justify-center px-5">
          <span className="w-fit rounded-full border border-gold/60 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.28em] text-gold sm:px-4 sm:text-[11px]">
            {eyebrow}
          </span>
          <h1 className="mt-4 max-w-3xl font-display text-2xl font-extrabold leading-tight text-deep-foreground sm:mt-5 sm:text-3xl md:text-5xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-deep-foreground/80 sm:mt-4 sm:text-base">
              {intro}
            </p>
          )}
          <nav className="mt-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-deep-foreground/60 sm:mt-6 sm:text-xs">
            <Link to="/" className="transition-colors hover:text-gold">
              Home
            </Link>
            <span className="px-1.5 sm:px-2">/</span>
            <span className="text-gold">{eyebrow}</span>
          </nav>
        </div>
      </div>
    </section>
  );
}
