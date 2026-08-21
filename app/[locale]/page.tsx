import { setRequestLocale } from "next-intl/server";
import type { AppLocale } from "@/i18n/routing";
import Hero from "@/components/home/Hero";
import ServicesOverview from "@/components/home/ServicesOverview";
import AboutSnippet from "@/components/home/AboutSnippet";
import TeamSnippet from "@/components/home/TeamSnippet";
import BlogPreview from "@/components/home/BlogPreview";
import CtaSection from "@/components/home/CtaSection";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <ServicesOverview />
      <AboutSnippet />
      <TeamSnippet />
      <BlogPreview />
      <CtaSection />
    </>
  );
}
