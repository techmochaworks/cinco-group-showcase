import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Properties } from "@/components/site/Properties";
import { Achievements } from "@/components/site/Achievements";
import { Venue } from "@/components/site/Venue";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Testimonials } from "@/components/site/Testimonials";
import { Founders } from "@/components/site/Founders";
import { GuestsAndGallery } from "@/components/site/GuestsAndGallery";
import { Footer } from "@/components/site/Footer";

const title = "The Cinco Group of Hotels | Stays Across Hyderabad";
const description =
  "Five thoughtfully located hotels across Hyderabad. Modern rooms, banquet halls and corporate packages from The Cinco Group of Hotels.";
const ogImage = "https://i.postimg.cc/1XRwX3tF/2025-05-21.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: ogImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: ogImage },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Properties />
        <Achievements />
        <Venue />
        <CtaBanner />
        <Testimonials />
        <Founders />
        <GuestsAndGallery />
      </main>
      <Footer />
    </div>
  );
}
