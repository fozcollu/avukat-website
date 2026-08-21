import { useTranslations } from "next-intl";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function CtaSection() {
  const t = useTranslations("home.cta");

  return (
    <section className="border-t border-ink/10 bg-mist py-16 sm:py-20">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 className="font-serif text-3xl text-ink sm:text-4xl">{t("title")}</h2>
        <p className="max-w-xl text-slate">{t("subtitle")}</p>
        <Button href="/iletisim" variant="primary">
          {t("button")}
        </Button>
      </Container>
    </section>
  );
}
