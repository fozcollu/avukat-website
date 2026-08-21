import { getTranslations, setRequestLocale } from "next-intl/server";
import type { AppLocale } from "@/i18n/routing";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import PracticeAreaCard from "@/components/practice-areas/PracticeAreaCard";
import { practiceAreas } from "@/content/practiceAreas";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services" });
  return { title: t("title") };
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("services");

  return (
    <>
      <PageHeader title={t("title")} subtitle={t("subtitle")} />
      <Container className="py-16 sm:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {practiceAreas.map((area) => (
            <PracticeAreaCard key={area.slug} area={area} />
          ))}
        </div>
      </Container>
    </>
  );
}
