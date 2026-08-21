import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { AppLocale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import Container from "@/components/ui/Container";
import LawyerProfileHeader from "@/components/team/LawyerProfileHeader";
import { team, getTeamMemberBySlug } from "@/content/team";
import { getPracticeAreaBySlug } from "@/content/practiceAreas";
import { ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    team.map((member) => ({ locale, slug: member.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: AppLocale; slug: string }>;
}) {
  const { slug } = await params;
  const member = getTeamMemberBySlug(slug);
  return { title: member?.name ?? "Ekibimiz" };
}

export default async function LawyerProfilePage({
  params,
}: {
  params: Promise<{ locale: AppLocale; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const member = getTeamMemberBySlug(slug);
  if (!member) notFound();

  const t = await getTranslations("team");
  const practiceAreas = member.practiceAreaSlugs
    .map((s) => getPracticeAreaBySlug(s))
    .filter(Boolean);

  return (
    <Container className="py-16 sm:py-20">
      <Link
        href="/ekibimiz"
        className="mb-8 inline-flex items-center gap-1.5 text-sm text-slate hover:text-accent"
      >
        <ArrowLeft className="h-4 w-4" />
        {t("backToTeam")}
      </Link>

      <LawyerProfileHeader member={member} />

      <div className="mt-12 grid gap-10 border-t border-ink/10 pt-10 sm:grid-cols-3">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-ink">
            {t("educationLabel")}
          </h3>
          <ul className="mt-3 space-y-1 text-sm text-slate">
            {member.education[locale].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-ink">
            {t("barLabel")}
          </h3>
          <p className="mt-3 text-sm text-slate">{member.barAdmission[locale]}</p>
          <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-ink">
            {t("languagesLabel")}
          </h3>
          <p className="mt-3 text-sm text-slate">{member.languages.join(", ")}</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-ink">
            {t("practiceAreasLabel")}
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {practiceAreas.map((area) => (
              <Link
                key={area!.slug}
                href={`/hizmetlerimiz/${area!.slug}`}
                className="rounded-full border border-accent/30 px-3 py-1 text-xs font-medium text-accent hover:bg-accent hover:text-white"
              >
                {area!.title[locale]}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
