import { useTranslations } from "next-intl";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import PracticeAreaCard from "@/components/practice-areas/PracticeAreaCard";
import { practiceAreas } from "@/content/practiceAreas";

export default function ServicesOverview() {
  const t = useTranslations("home.services");

  return (
    <section className="bg-mist py-16 sm:py-24">
      <Container>
        <SectionHeading
          title={t("title")}
          subtitle={t("subtitle")}
          align="center"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {practiceAreas.map((area) => (
            <PracticeAreaCard key={area.slug} area={area} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button href="/hizmetlerimiz" variant="ghost">
            {t("cta")}
          </Button>
        </div>
      </Container>
    </section>
  );
}
