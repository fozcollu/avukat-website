"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Menu, X, Scale } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";
import Container from "@/components/ui/Container";
import LanguageSwitcher from "./LanguageSwitcher";

const navItems = [
  { href: "/", key: "home" },
  { href: "/hakkimizda", key: "about" },
  { href: "/ekibimiz", key: "team" },
  { href: "/hizmetlerimiz", key: "services" },
  { href: "/blog", key: "blog" },
  { href: "/kariyer", key: "career" },
  { href: "/iletisim", key: "contact" },
] as const;

export default function Header() {
  const t = useTranslations("nav");
  const tMeta = useTranslations("meta");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-white/95 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <Scale className="h-6 w-6 shrink-0 text-accent" strokeWidth={1.5} />
          <span className="leading-tight">
            <span className="block font-serif text-lg font-bold text-ink">
              {tMeta("siteName")}
            </span>
            <span className="block text-[11px] font-medium uppercase tracking-widest text-slate">
              {tMeta("tagline")}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-xs font-bold uppercase tracking-wide transition-colors ${
                  active ? "text-accent" : "text-ink/80 hover:text-ink"
                }`}
              >
                {t(item.key)}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LanguageSwitcher />
        </div>

        <button
          type="button"
          className="text-ink lg:hidden"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-ink/10 bg-white lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-xs font-bold uppercase tracking-wide text-ink/80 hover:bg-mist hover:text-ink"
              >
                {t(item.key)}
              </Link>
            ))}
            <div className="mt-2 px-2">
              <LanguageSwitcher />
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
