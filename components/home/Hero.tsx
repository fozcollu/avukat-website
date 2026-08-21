import { useTranslations } from "next-intl";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

// Stock photo (Unsplash, free license), self-hosted locally — dark wood
// office with bookshelves, premium/moody lighting. Swap for a real office
// photo when available (see public/images/PROMPTS.md). Photo: Florian
// Peeters — public/images/CREDITS.md.
const HERO_IMAGE = "/images/hero/office-hero.jpg";

export default function Hero() {
  const t = useTranslations("home.hero");

  return (
    <>
      {/* Full-bleed photo band — no text overlay, mirrors the reference
          site's photo-first hero. Headline/CTA live in the section below. */}
      <div className="relative h-[70vh] max-h-[640px] w-full bg-ink">
        <Image
          src={HERO_IMAGE}
          alt="Kosova Hukuk Bürosu ofisi"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

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
