import { useTranslations } from "next-intl";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import TeamMemberCard from "@/components/team/TeamMemberCard";
import { team } from "@/content/team";

export default function TeamSnippet() {
  const t = useTranslations("home.team");

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading title={t("title")} subtitle={t("subtitle")} align="center" />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {team.map((member) => (
            <TeamMemberCard key={member.slug} member={member} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button href="/ekibimiz" variant="ghost">
            {t("cta")}
          </Button>
        </div>
      </Container>
    </section>
  );
}
