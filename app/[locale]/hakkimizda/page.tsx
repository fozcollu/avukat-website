import { getTranslations, setRequestLocale } from "next-intl/server";
import type { AppLocale } from "@/i18n/routing";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  return { title: t("title") };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");
  const values = t.raw("values") as { title: string; body: string }[];

  return (
    <>
      <PageHeader eyebrow={t("intro")} title={t("title")} />
      <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[2fr_1fr]">
        <div className="max-w-2xl space-y-5 text-slate">
          <p>{t("body1")}</p>
          <p>{t("body2")}</p>
          <p>{t("body3")}</p>
        </div>

        <div>
          <h2 className="font-serif text-xl text-ink">{t("valuesTitle")}</h2>
          <ul className="mt-5 space-y-5">
            {values.map((value) => (
              <li key={value.title} className="border-l-2 border-accent pl-4">
                <p className="font-medium text-ink">{value.title}</p>
                <p className="mt-1 text-sm text-slate">{value.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </>
  );
}
