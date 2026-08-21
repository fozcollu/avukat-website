"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const labels: Record<string, string> = {
  tr: "TR",
  en: "EN",
  ar: "AR",
};

export default function LanguageSwitcher({ dark = false }: { dark?: boolean }) {
  const t = useTranslations("language");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-1" aria-label={t("label")}>
      {routing.locales.map((loc) => (
        <button
          key={loc}
          type="button"
          onClick={() => router.replace(pathname, { locale: loc })}
          className={`rounded-full px-2.5 py-1 text-xs font-medium transition-colors ${
            loc === locale
              ? "bg-accent text-white"
              : dark
              ? "text-white/60 hover:text-white"
              : "text-slate hover:text-ink"
          }`}
          aria-current={loc === locale ? "true" : undefined}
        >
          {labels[loc] ?? loc.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
