import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowLeft } from "lucide-react";
import type { AppLocale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import TeamMemberCard from "@/components/team/TeamMemberCard";
import { practiceAreas, getPracticeAreaBySlug } from "@/content/practiceAreas";
import { getTeamByPracticeArea } from "@/content/team";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    practiceAreas.map((area) => ({ locale, slug: area.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: AppLocale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const area = getPracticeAreaBySlug(slug);
  return { title: area?.title[locale] ?? "Hizmetlerimiz" };
}

export default async function PracticeAreaPage({
  params,
}: {
  params: Promise<{ locale: AppLocale; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const area = getPracticeAreaBySlug(slug);
  if (!area) notFound();

  const t = await getTranslations("services");
  const lawyers = getTeamByPracticeArea(slug);

  return (
    <>
      <PageHeader title={area.title[locale]} />
      <Container className="py-16 sm:py-20">
        <Link
          href="/hizmetlerimiz"
          className="mb-8 inline-flex items-center gap-1.5 text-sm text-slate hover:text-accent"
        >
          <ArrowLeft className="h-4 w-4" />
          {t("backToServices")}
        </Link>

        <div className="max-w-2xl space-y-4 text-slate">
          {area.fullDescription[locale].map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        {lawyers.length > 0 && (
          <div className="mt-16 border-t border-ink/10 pt-10">
            <h2 className="font-serif text-xl text-ink">{t("lawyersTitle")}</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {lawyers.map((member) => (
                <TeamMemberCard key={member.slug} member={member} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </>
  );
}
