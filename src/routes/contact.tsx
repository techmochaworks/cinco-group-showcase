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
        image={PROPERTIES[2]!.images[1]!}
      />

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:py-20 lg:grid-cols-[1fr_1.2fr] lg:gap-12">
        <div className="space-y-4 sm:space-y-5">
          {[
            { icon: Phone, label: "Phone", value: GROUP.phone },
            { icon: Mail, label: "Email", value: GROUP.email },
            { icon: MapPin, label: "Head office", value: GROUP.address },
          ].map((c) => (
            <div key={c.label} className="flex gap-4 rounded-xl bg-card p-5 shadow-soft sm:gap-5 sm:rounded-2xl sm:p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary sm:h-12 sm:w-12">
                <c.icon className="h-4 w-4 sm:h-5 sm:w-5" />
              </span>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground sm:text-xs">
                  {c.label}
                </p>
                <p className="mt-0.5 text-sm font-semibold text-foreground sm:mt-1 sm:text-base">{c.value}</p>
              </div>
            </div>
          ))}
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="rounded-2xl bg-card p-6 shadow-lift sm:rounded-3xl sm:p-8 md:p-10"
        >
          <h2 className="font-display text-xl font-extrabold text-foreground sm:text-2xl">Send an enquiry</h2>
          <div className="mt-5 grid gap-4 sm:mt-7 sm:gap-5 sm:grid-cols-2">
            <label className="text-xs font-semibold text-foreground sm:text-sm">
              Name
              <input
                required
                className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-xs font-normal outline-hidden focus:border-primary sm:mt-2 sm:py-3 sm:text-sm"
              />
            </label>
            <label className="text-xs font-semibold text-foreground sm:text-sm">
              Phone
              <input
                required
                className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-xs font-normal outline-hidden focus:border-primary sm:mt-2 sm:py-3 sm:text-sm"
              />
            </label>
            <label className="text-xs font-semibold text-foreground sm:col-span-2 sm:text-sm">
              Email
              <input
                type="email"
                required
                className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-xs font-normal outline-hidden focus:border-primary sm:mt-2 sm:py-3 sm:text-sm"
              />
            </label>
            <label className="text-xs font-semibold text-foreground sm:col-span-2 sm:text-sm">
              Property of interest
              <select className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-xs font-normal outline-hidden focus:border-primary sm:mt-2 sm:py-3 sm:text-sm">
                <option>Any property</option>
                {PROPERTIES.map((p) => (
                  <option key={p.slug}>{p.name}</option>
                ))}
              </select>
            </label>
            <label className="text-xs font-semibold text-foreground sm:col-span-2 sm:text-sm">
              Message
              <textarea
                rows={4}
                className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-xs font-normal outline-hidden focus:border-primary sm:mt-2 sm:py-3 sm:text-sm"
              />
            </label>
          </div>
          <button
            type="submit"
            className="mt-6 w-full rounded-xl bg-primary px-8 py-3 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90 sm:mt-7 sm:w-auto sm:py-3.5"
          >
            Send enquiry
          </button>
        </form>
      </section>
    </>
  );
}
