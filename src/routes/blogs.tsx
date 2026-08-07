import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { POSTS, PROPERTIES } from "@/data/site";

const title = "Blog | Travel Notes from The Cinco Group of Hotels";
const description =
  "Guides to Hyderabad, business travel tips and event planning notes from the team behind The Cinco Group of Hotels.";

export const Route = createFileRoute("/blogs")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BlogsPage,
});

function BlogsPage() {
  return (
    <>
      <PageHero
        eyebrow="Blogs"
        title="Notes from Hyderabad"
        intro="City guides, travel tips and things our front desk teams get asked most often."
        image={PROPERTIES[2]!.images[1]!}
      />

      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-8 md:grid-cols-3">
          {POSTS.map((post) => (
            <article
              key={post.slug}
              className="overflow-hidden rounded-2xl bg-card shadow-soft transition-shadow hover:shadow-lift"
            >
              <img
                src={post.image}
                alt={post.title}
                loading="lazy"
                className="h-52 w-full object-cover"
              />
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {post.date} · {post.readTime}
                </p>
                <h2 className="mt-3 font-display text-lg font-bold leading-snug text-foreground">
                  {post.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
