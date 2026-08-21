import {
  Users,
  Briefcase,
  Building2,
  Gavel,
  Home,
  FileWarning,
  Scale,
  type LucideIcon,
} from "lucide-react";

export const practiceAreaIcons: Record<string, LucideIcon> = {
  Users,
  Briefcase,
  Building2,
  Gavel,
  Home,
  FileWarning,
};

export function getPracticeAreaIcon(name: string): LucideIcon {
  return practiceAreaIcons[name] ?? Scale;
}
