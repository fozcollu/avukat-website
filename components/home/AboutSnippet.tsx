import { useTranslations } from "next-intl";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export default function AboutSnippet() {
  const t = useTranslations("home.about");

  return (
    <section className="py-16 sm:py-24">
      <Container className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <SectionHeading title={t("title")} subtitle={t("body")} />
        <Button href="/hakkimizda" variant="secondary" className="w-fit">
          {t("cta")}
        </Button>
      </Container>
    </section>
  );
}
