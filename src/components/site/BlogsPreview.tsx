import { Link } from "@tanstack/react-router";
import { POSTS } from "@/data/site";

export function BlogsPreview() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:py-24">
      <div className="mb-8 flex flex-col items-start gap-4 sm:mb-12 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between sm:gap-6">
        <div>
          <span className="rounded-full bg-secondary px-4 py-1 text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
            Journal
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-foreground sm:mt-5 sm:text-4xl md:text-4xl">
            Notes from Hyderabad
          </h2>
        </div>
        <Link
          to="/blogs"
          className="rounded-xl border border-border px-6 py-3 text-sm font-bold text-foreground transition-colors hover:border-primary hover:text-primary"
        >
          Read all posts
        </Link>
      </div>

      {/* Mobile: horizontal scroll */}
      <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory -mx-5 px-5 md:hidden">
        {POSTS.map((post) => (
          <Link
            key={post.slug}
            to="/blogs"
            className="group w-72 shrink-0 snap-center overflow-hidden rounded-2xl bg-card shadow-soft"
          >
            <div className="h-44 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:text-xs">
                {post.date} · {post.readTime}
              </p>
              <h3 className="mt-2 font-display text-base font-bold leading-snug text-foreground sm:text-lg">
                {post.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Desktop: grid */}
      <div className="hidden gap-8 md:grid md:grid-cols-3">
        {POSTS.map((post) => (
          <Link
            key={post.slug}
            to="/blogs"
            className="group overflow-hidden rounded-2xl bg-card shadow-soft transition-shadow hover:shadow-lift"
          >
            <div className="h-52 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {post.date} · {post.readTime}
              </p>
              <h3 className="mt-3 font-display text-lg font-bold leading-snug text-foreground">
                {post.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
