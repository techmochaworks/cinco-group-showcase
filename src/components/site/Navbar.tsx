import { Link } from "@tanstack/react-router";
import { Menu, Search, UserRound, X } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "Home", to: "/" },
  { label: "Our Properties", to: "/#properties" },
  { label: "About Us", to: "/#about" },
  { label: "Blogs", to: "/#blogs" },
  { label: "Contact Us", to: "/#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">
        <Link to="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-sm surface-deep font-display text-lg font-bold">
            C
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg font-bold tracking-tight text-foreground">
              THE CINCO
            </span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
              Group of Hotels
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.to}
              className="text-sm font-semibold text-foreground/80 transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            aria-label="Search"
            className="hidden h-10 w-10 items-center justify-center rounded-sm text-foreground/70 transition-colors hover:text-primary lg:flex"
          >
            <Search className="h-5 w-5" />
          </button>
          <span className="hidden h-6 w-px bg-border lg:block" />
          <a
            href="#contact"
            className="hidden items-center justify-center rounded-sm bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 lg:inline-flex"
          >
            Book a Stay
          </a>
          <span className="hidden h-10 w-10 items-center justify-center rounded-full bg-secondary text-primary lg:flex">
            <UserRound className="h-5 w-5" />
          </span>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-sm border border-border lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-5 py-4 lg:hidden">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.to}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-sm font-semibold text-foreground/80"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
