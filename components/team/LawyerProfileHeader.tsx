import { useLocale } from "next-intl";
import PortraitImage from "@/components/ui/PortraitImage";
import type { TeamMember } from "@/content/team";
import type { AppLocale } from "@/i18n/routing";

export default function LawyerProfileHeader({ member }: { member: TeamMember }) {
  const locale = useLocale() as AppLocale;

  return (
    <div className="grid gap-8 sm:grid-cols-[220px_1fr] sm:items-start">
      <PortraitImage
        src={member.photo}
        alt={member.name}
        className="aspect-[4/5] w-full"
        sizes="220px"
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
