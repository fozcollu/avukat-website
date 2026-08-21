import { getTranslations, setRequestLocale } from "next-intl/server";
import type { AppLocale } from "@/i18n/routing";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import MarkdownContent from "@/components/blog/MarkdownContent";
import { getLegalPageHtml } from "@/lib/legal";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "kvkk" });
  return { title: t("title") };
}

export default async function KvkkPage({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("kvkk");
  const html = await getLegalPageHtml("kvkk", locale);

  return (
    <>
      <PageHeader title={t("title")} />
      <Container className="py-16 sm:py-20">
        <MarkdownContent html={html} />
      </Container>
    </>
  );
}
