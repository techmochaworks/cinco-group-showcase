import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { GROUP, PROPERTIES } from "@/data/site";

const title = "Contact Us | The Cinco Group of Hotels, Hyderabad";
const description =
  "Reach The Cinco Group of Hotels for room bookings, banquet enquiries and corporate long-stay rates across Hyderabad.";

export const Route = createFileRoute("/contact")({
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
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Talk to us about your stay"
        intro="Room bookings, banquet dates or corporate rates — one message reaches all Our properties."
        image={PROPERTIES[4]!.images[1]!}
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-5">
          {[
            { icon: Phone, label: "Phone", value: GROUP.phone },
            { icon: Mail, label: "Email", value: GROUP.email },
            { icon: MapPin, label: "Head office", value: GROUP.address },
          ].map((c) => (
            <div key={c.label} className="flex gap-5 rounded-2xl bg-card p-6 shadow-soft">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                <c.icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  {c.label}
                </p>
                <p className="mt-1 font-semibold text-foreground">{c.value}</p>
              </div>
            </div>
          ))}
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="rounded-3xl bg-card p-8 shadow-lift md:p-10"
        >
          <h2 className="font-display text-2xl font-extrabold text-foreground">Send an enquiry</h2>
          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-semibold text-foreground">
              Name
              <input
                required
                className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm font-normal outline-hidden focus:border-primary"
              />
            </label>
            <label className="text-sm font-semibold text-foreground">
              Phone
              <input
                required
                className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm font-normal outline-hidden focus:border-primary"
              />
            </label>
            <label className="text-sm font-semibold text-foreground sm:col-span-2">
              Email
              <input
                type="email"
                required
                className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm font-normal outline-hidden focus:border-primary"
              />
            </label>
            <label className="text-sm font-semibold text-foreground sm:col-span-2">
              Property of interest
              <select className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm font-normal outline-hidden focus:border-primary">
                <option>Any property</option>
                {PROPERTIES.map((p) => (
                  <option key={p.slug}>{p.name}</option>
                ))}
              </select>
            </label>
            <label className="text-sm font-semibold text-foreground sm:col-span-2">
              Message
              <textarea
                rows={4}
                className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm font-normal outline-hidden focus:border-primary"
              />
            </label>
          </div>
          <button
            type="submit"
            className="mt-7 rounded-xl bg-primary px-8 py-3.5 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Send enquiry
          </button>
        </form>
      </section>
    </>
  );
}
