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
    <section className="relative h-[340px] w-full overflow-hidden md:h-[400px]">
      <img src={image} alt="" aria-hidden className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-linear-to-r from-deep/90 via-deep/70 to-deep/30" />
      <div className="absolute inset-0">
        <div className="mx-auto flex h-full max-w-7xl flex-col justify-center px-5">
          <span className="w-fit rounded-full border border-gold/60 px-4 py-1 text-[11px] font-bold uppercase tracking-[0.28em] text-gold">
            {eyebrow}
          </span>
          <h1 className="mt-5 max-w-3xl font-display text-3xl font-extrabold leading-tight text-deep-foreground md:text-5xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-deep-foreground/80">
              {intro}
            </p>
          )}
          <nav className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-deep-foreground/60">
            <Link to="/" className="transition-colors hover:text-gold">
              Home
            </Link>
            <span className="px-2">/</span>
            <span className="text-gold">{eyebrow}</span>
          </nav>
        </div>
      </div>
    </section>
  );
}
