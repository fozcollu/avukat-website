import { useTranslations } from "next-intl";
import Container from "@/components/ui/Container";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { Button } from "@/components/ui/Button";

export default function Hero() {
  const t = useTranslations("home.hero");

  return (
    <section className="bg-white">
      <Container className="grid items-center gap-10 py-16 sm:py-24 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            {t("eyebrow")}
          </p>
          <h1 className="mt-3 font-serif text-4xl leading-tight text-ink sm:text-5xl">
            {t("title")}
          </h1>
          <p className="mt-5 max-w-lg text-slate">{t("subtitle")}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/iletisim" variant="primary">
              {t("cta")}
            </Button>
            <Button href="/hizmetlerimiz" variant="ghost">
              {t("ctaSecondary")}
            </Button>
          </div>
        </div>
        <ImagePlaceholder
          expectedSrc="/images/hero/office-hero.jpg"
          label="Ofis görseli — AI ile üretilecek"
          className="aspect-[4/3] w-full"
        />
      </Container>
    </section>
  );
}
