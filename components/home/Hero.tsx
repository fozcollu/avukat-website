import { useTranslations } from "next-intl";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { Button } from "@/components/ui/Button";

export default function Hero() {
  const t = useTranslations("home.hero");

  return (
    <>
      {/* Full-bleed photo band — no text overlay, mirrors the reference
          site's photo-first hero. Headline/CTA live in the section below. */}
      <ImagePlaceholder
        expectedSrc="/images/hero/office-hero.jpg"
        label="Ofis görseli — AI ile üretilecek"
        rounded=""
        className="h-[70vh] max-h-[640px] w-full"
      />

      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto w-full max-w-6xl px-6">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            {t("eyebrow")}
          </p>
          <h1 className="mt-3 max-w-3xl font-serif text-3xl leading-tight text-ink sm:text-4xl">
            {t("title")}
          </h1>
          <p className="mt-4 max-w-2xl text-slate">{t("subtitle")}</p>
          <div className="mt-7 flex flex-wrap gap-4">
            <Button href="/iletisim" variant="primary">
              {t("cta")}
            </Button>
            <Button href="/hizmetlerimiz" variant="ghost">
              {t("ctaSecondary")}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
