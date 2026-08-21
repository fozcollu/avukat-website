import { useLocale } from "next-intl";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import type { TeamMember } from "@/content/team";

export default function LawyerProfileHeader({ member }: { member: TeamMember }) {
  const locale = useLocale() as "tr" | "en";

  return (
    <div className="grid gap-8 sm:grid-cols-[220px_1fr] sm:items-start">
      <ImagePlaceholder
        expectedSrc={member.photo}
        label={member.name}
        className="aspect-[4/5] w-full"
      />
      <div>
        <h1 className="font-serif text-3xl text-ink sm:text-4xl">
          {member.name}
        </h1>
        <p className="mt-1 text-accent">{member.title[locale]}</p>
        <p className="mt-5 max-w-xl text-slate">{member.bio[locale]}</p>
      </div>
    </div>
  );
}
