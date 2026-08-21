import { getTranslations, setRequestLocale } from "next-intl/server";
import { Mail } from "lucide-react";
import type { AppLocale } from "@/i18n/routing";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import { ButtonLink } from "@/components/ui/Button";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "career" });
  return { title: t("title") };
}

export default async function CareerPage({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("career");

  return (
    <>
      <PageHeader title={t("title")} subtitle={t("subtitle")} />
      <Container className="py-16 sm:py-20">
        <div className="max-w-xl space-y-6 text-slate">
          <p>{t("body")}</p>
          <ButtonLink
            href="mailto:kariyer@kosovahukuk.com?subject=CV%20Ba%C5%9Fvurusu"
            variant="primary"
          >
            <Mail className="h-4 w-4" />
            {t("cta")}
          </ButtonLink>
        </div>
      </Container>
    </>
  );
}
