import { getTranslations, setRequestLocale } from "next-intl/server";
import type { AppLocale } from "@/i18n/routing";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import TeamMemberCard from "@/components/team/TeamMemberCard";
import { team } from "@/content/team";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "team" });
  return { title: t("title") };
}

export default async function TeamPage({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("team");

  return (
    <>
      <PageHeader title={t("title")} subtitle={t("subtitle")} />
      <Container className="py-16 sm:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <TeamMemberCard key={member.slug} member={member} />
          ))}
        </div>
      </Container>
    </>
  );
}
