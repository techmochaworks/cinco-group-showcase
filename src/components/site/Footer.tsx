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
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:py-20 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
        <div>
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold font-display text-lg font-bold text-gold-foreground sm:h-12 sm:w-12 sm:text-xl">
            C
          </span>
          <p className="mt-4 font-display text-base font-bold sm:mt-5 sm:text-lg">THE CINCO</p>
          <p className="text-[10px] uppercase tracking-[0.28em] text-deep-foreground/60 sm:text-xs">
            Group of Hotels
          </p>
          <p className="mt-4 max-w-xs text-xs leading-relaxed text-deep-foreground/75 sm:mt-5 sm:text-sm">
            Multiple hotels across Hyderabad, run to one standard since 2019.
          </p>
          <div className="mt-5 flex gap-3 sm:mt-6">
            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
              <span
                key={i}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-deep-foreground/10 transition-colors hover:bg-gold hover:text-gold-foreground sm:h-9 sm:w-9"
              >
                <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 md:col-span-1 md:block md:space-y-0">
          <div>
            <h3 className="font-display text-sm font-bold text-gold sm:text-base">Useful Links</h3>
            <ul className="mt-4 space-y-2.5 text-xs text-deep-foreground/75 sm:mt-5 sm:space-y-3 sm:text-sm">
              {links.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="transition-colors hover:text-gold">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:mt-10 lg:mt-0">
            <h3 className="font-display text-sm font-bold text-gold sm:text-base">Our Properties</h3>
            <ul className="mt-4 space-y-2.5 text-xs text-deep-foreground/75 sm:mt-5 sm:space-y-3 sm:text-sm">
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
        </div>

        <div className="md:col-span-2 lg:col-span-1">
          <h3 className="font-display text-sm font-bold text-gold sm:text-base">Contact</h3>
          <ul className="mt-4 space-y-4 text-xs text-deep-foreground/75 sm:mt-5 sm:space-y-5 sm:text-sm">
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

      <div className="border-t border-deep-foreground/10 px-5 py-5 text-center text-[10px] text-deep-foreground/60 sm:py-6 sm:text-xs">
        © {new Date().getFullYear()} {GROUP.name}. All rights reserved.
      </div>
    </footer>
  );
}
