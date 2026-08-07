import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { PROPERTIES } from "@/data/site";

const title = "Gallery | The Cinco Group of Hotels, Hyderabad";
const description =
  "Rooms, banquet halls, dining and exteriors across all five Cinco Group hotels in Hyderabad.";

const images = PROPERTIES.flatMap((p) =>
  p.images.slice(0, 9).map((src) => ({ src, name: p.name })),
);

export const Route = createFileRoute("/gallery")({
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
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A look inside the group"
        intro="Photographs from all five properties — rooms, banquet floors, dining spaces and lobbies."
        image={PROPERTIES[3]!.images[1]!}
      />

      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="columns-2 gap-4 md:columns-3 lg:columns-4">
          {images.map((img) => (
            <img
              key={img.src}
              src={img.src}
              alt={img.name}
              loading="lazy"
              className="mb-4 w-full break-inside-avoid rounded-2xl object-cover transition-transform duration-500 hover:scale-[1.02]"
            />
          ))}
        </div>
      </section>
    </>
  );
}
