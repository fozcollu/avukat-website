import { useTranslations } from "next-intl";
import { MapPin, Phone, Mail, Scale } from "lucide-react";
import { Link } from "@/i18n/navigation";
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

export default function Footer() {
  const t = useTranslations("nav");
  const tFooter = useTranslations("footer");
  const tMeta = useTranslations("meta");
  const tContact = useTranslations("contact");
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-white/10 bg-ink text-white/70">
      <Container className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-serif text-lg text-white">
            <Scale className="h-5 w-5 text-accent" strokeWidth={1.5} />
            {tMeta("siteName")}
          </div>
          <p className="mt-3 max-w-xs text-sm">{tFooter("tagline")}</p>
          <div className="mt-5">
            <LanguageSwitcher dark />
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            {tFooter("quickLinks")}
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {t(item.key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            {tFooter("contactTitle")}
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>[TASLAK] Adres bilgisi, İstanbul</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-accent" />
              <a href="tel:+902120000000" className="hover:text-white">
                +90 (212) 000 00 00
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-accent" />
              <a href="mailto:info@kosovahukuk.com" className="hover:text-white">
                info@kosovahukuk.com
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            {tContact("title")}
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/kvkk" className="hover:text-white">
                {tFooter("kvkk")}
              </Link>
            </li>
            <li>
              <Link href="/kariyer" className="hover:text-white">
                {t("career")}
              </Link>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container className="text-xs text-white/40">
          © {year} {tMeta("siteName")} — {tFooter("rights")}
        </Container>
      </div>
    </footer>
  );
}
