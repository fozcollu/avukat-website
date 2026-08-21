import { getTranslations, setRequestLocale } from "next-intl/server";
import type { AppLocale } from "@/i18n/routing";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import ContactInfoBlock from "@/components/contact/ContactInfoBlock";
import ContactForm from "@/components/contact/ContactForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
  return { title: t("title") };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");

  return (
    <>
      <PageHeader title={t("title")} subtitle={t("subtitle")} />
      <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-2">
        <ContactInfoBlock />
        <div>
          <h2 className="font-serif text-xl text-ink">{t("formTitle")}</h2>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </Container>
    </>
  );
}
