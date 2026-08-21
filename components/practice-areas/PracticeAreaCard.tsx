import { useLocale, useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import type { PracticeArea } from "@/content/practiceAreas";
import { getPracticeAreaIcon } from "./icon-map";

export default function PracticeAreaCard({ area }: { area: PracticeArea }) {
  const locale = useLocale() as "tr" | "en";
  const t = useTranslations("services");
  const Icon = getPracticeAreaIcon(area.icon);

  return (
    <Link
      href={`/hizmetlerimiz/${area.slug}`}
      className="group flex flex-col rounded-xl border border-ink/10 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-lg hover:shadow-ink/5"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-mist text-accent group-hover:bg-accent group-hover:text-white transition-colors">
        <Icon className="h-5 w-5" strokeWidth={1.5} />
      </div>
      <h3 className="mt-5 font-serif text-lg text-ink">{area.title[locale]}</h3>
      <p className="mt-2 flex-1 text-sm text-slate">
        {area.shortDescription[locale]}
      </p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
        {t("detailCta")}
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
