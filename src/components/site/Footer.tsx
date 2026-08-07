import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { GROUP, PROPERTIES } from "@/data/site";

const links = [
  { label: "Home", to: "/" },
  { label: "Our Properties", to: "/properties" },
  { label: "About Us", to: "/about" },
  { label: "Gallery", to: "/gallery" },
  { label: "Blogs", to: "/blogs" },
  { label: "Contact Us", to: "/contact" },
] as const;

export function Footer() {
  return (
    <footer className="surface-deep">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold font-display text-xl font-bold text-gold-foreground">
            C
          </span>
          <p className="mt-5 font-display text-lg font-bold">THE CINCO</p>
          <p className="text-xs uppercase tracking-[0.28em] text-deep-foreground/60">
            Group of Hotels
          </p>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-deep-foreground/75">
            Five hotels across Hyderabad, run to one standard since 2019.
          </p>
          <div className="mt-6 flex gap-3">
            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
              <span
                key={i}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-deep-foreground/10 transition-colors hover:bg-gold hover:text-gold-foreground"
              >
                <Icon className="h-4 w-4" />
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-base font-bold text-gold">Useful Links</h3>
          <ul className="mt-5 space-y-3 text-sm text-deep-foreground/75">
            {links.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="transition-colors hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-base font-bold text-gold">Our Properties</h3>
          <ul className="mt-5 space-y-3 text-sm text-deep-foreground/75">
            {PROPERTIES.map((p) => (
              <li key={p.slug}>
                <Link
                  to="/property/$slug"
                  params={{ slug: p.slug }}
                  className="transition-colors hover:text-gold"
                >
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-base font-bold text-gold">Contact</h3>
          <ul className="mt-5 space-y-5 text-sm text-deep-foreground/75">
            <li className="flex gap-3">
              <Phone className="h-4 w-4 shrink-0 text-gold" />
              <span>{GROUP.phone}</span>
            </li>
            <li className="flex gap-3">
              <Mail className="h-4 w-4 shrink-0 text-gold" />
              <span>{GROUP.email}</span>
            </li>
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 shrink-0 text-gold" />
              <span>{GROUP.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-deep-foreground/10 py-6 text-center text-xs text-deep-foreground/60">
        © {new Date().getFullYear()} {GROUP.name}. All rights reserved.
      </div>
    </footer>
  );
}
