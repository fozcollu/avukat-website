import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import PortraitImage from "@/components/ui/PortraitImage";
import type { TeamMember } from "@/content/team";
import type { AppLocale } from "@/i18n/routing";

export default function TeamMemberCard({ member }: { member: TeamMember }) {
  const locale = useLocale() as AppLocale;

  return (
    <Link
      href={`/ekibimiz/${member.slug}`}
      className="group block overflow-hidden rounded-xl border border-ink/10 bg-white transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-lg hover:shadow-ink/5"
    >
      <PortraitImage
        src={member.photo}
        alt={member.name}
        rounded=""
        className="aspect-[4/5] w-full"
      />
      <div className="p-5">
        <h3 className="font-serif text-lg text-ink">{member.name}</h3>
        <p className="mt-1 text-sm text-accent">{member.title[locale]}</p>
      </div>
    </Link>
  );
}
