import { useTranslations } from "next-intl";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactInfoBlock() {
  const t = useTranslations("contact");

  return (
    <div className="space-y-6">
      <div className="flex items-start gap-3">
        <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
        <div>
          <p className="text-sm font-medium text-ink">{t("addressLabel")}</p>
          <p className="text-sm text-slate">[TASLAK] Adres bilgisi, İstanbul</p>
        </div>
      </div>
      <div className="flex items-start gap-3">
        <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
        <div>
          <p className="text-sm font-medium text-ink">{t("phoneLabel")}</p>
          <a href="tel:+902120000000" className="text-sm text-slate hover:text-accent">
            +90 (212) 000 00 00
          </a>
        </div>
      </div>
      <div className="flex items-start gap-3">
        <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
        <div>
          <p className="text-sm font-medium text-ink">{t("emailLabel")}</p>
          <a
            href="mailto:info@kosovahukuk.com"
            className="text-sm text-slate hover:text-accent"
          >
            info@kosovahukuk.com
          </a>
        </div>
      </div>

      <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border border-ink/10">
        <iframe
          title="Ofis Konumu"
          src="https://www.openstreetmap.org/export/embed.html?bbox=28.94%2C41.00%2C29.05%2C41.06&layer=mapnik"
          className="h-full w-full"
          loading="lazy"
        />
      </div>
    </div>
  );
}
