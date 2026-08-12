import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import { GROUP } from "@/data/site";

const links = [
  { label: "Home", to: "/" },
  { label: "Our Properties", to: "/properties" },
  { label: "About Us", to: "/about" },
  { label: "Gallery", to: "/gallery" },
  { label: "Blogs", to: "/blogs" },
  { label: "Contact Us", to: "/contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:h-20">
        <Link to="/" className="flex items-center gap-3">
          
          <span className="leading-tight">
            <span className="block font-display text-base font-bold tracking-tight text-foreground sm:text-lg">
              THE CINCO
            </span>
            <span className="block text-[9px] font-semibold uppercase tracking-[0.28em] text-muted-foreground sm:text-[10px]">
              Group of Hotels
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-primary" }}
              className="text-sm font-semibold text-foreground/80 transition-colors hover:text-primary"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="hidden items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 lg:inline-flex"
          >
            Book a Stay
          </Link>
          
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-border lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu - full-screen overlay */}
      {open && (
        <nav className="absolute inset-x-0 top-full z-40 flex h-[calc(100dvh-4rem)] flex-col bg-background px-5 py-6 sm:h-[calc(100dvh-5rem)] lg:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "!text-primary !bg-secondary" }}
                className="rounded-xl px-4 py-3.5 text-base font-semibold text-foreground/80 transition-colors hover:bg-sand"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="mt-auto space-y-4 border-t border-border pt-6">
            <a
              href={`tel:${GROUP.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-3 text-sm font-semibold text-foreground/70"
            >
              <Phone className="h-4 w-4 text-primary" />
              {GROUP.phone}
            </a>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Book a Stay
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
