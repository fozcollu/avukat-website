// NOTE: Bio/education/bar-admission text below is DRAFT placeholder content
// (marked [TASLAK] in Turkish) written to make the site demoable end-to-end.
// The client should review and replace these with each lawyer's real CV details.

export type TeamMember = {
  slug: string;
  name: string;
  title: { tr: string; en: string; ar: string };
  // Local path ("/images/team/slug.jpg") or a full https:// URL (currently
  // Unsplash stock photos — see public/images/CREDITS.md). Falls back to a
  // designed Monogram placeholder when unset.
  photo?: string;
  education: { tr: string[]; en: string[]; ar: string[] };
  barAdmission: { tr: string; en: string; ar: string };
  languages: string[];
  practiceAreaSlugs: string[];
  bio: { tr: string; en: string; ar: string };
};

export const team: TeamMember[] = [
  {
    slug: "salih-seref-kosova",
    name: "Salih Şeref Kosova",
    title: { tr: "Kurucu Avukat", en: "Founding Partner", ar: "شريك مؤسس" },
    // Photo: Tony Luginsland (Unsplash, free) — see public/images/CREDITS.md.
    photo:
      "https://images.unsplash.com/photo-1652471943570-f3590a4e52ed?w=800&h=1000&fit=crop&fm=jpg&q=80",
    education: {
      tr: ["[TASLAK] Hukuk Fakültesi, Lisans"],
      en: ["[DRAFT] Faculty of Law, LL.B."],
      ar: ["[مسودة] كلية الحقوق، بكالوريوس"],
    },
    barAdmission: {
      tr: "[TASLAK] İstanbul Barosu",
      en: "[DRAFT] Istanbul Bar Association",
      ar: "[مسودة] نقابة محامي إسطنبول",
    },
    languages: ["Türkçe", "English"],
    practiceAreaSlugs: [
      "aile-ve-miras-hukuku",
      "is-hukuku",
      "ticaret-ve-sirketler-hukuku",
      "ceza-hukuku",
      "gayrimenkul-hukuku",
      "icra-ve-iflas-hukuku",
    ],
    bio: {
      tr: "[TASLAK] Salih Şeref Kosova, Kosova Hukuk Bürosu'nun kurucu ortağıdır. Ticaret hukuku, aile hukuku ve icra-iflas hukuku başta olmak üzere geniş bir yelpazede müvekkillerine danışmanlık ve dava takibi hizmeti sunmaktadır.",
      en: "[DRAFT] Salih Şeref Kosova is the founding partner of Kosova Law Firm. He advises and represents clients across a broad range of matters, primarily commercial law, family law, and enforcement & bankruptcy law.",
      ar: "[مسودة] صالح شرف كوسوفا هو الشريك المؤسس لمكتب كوسوفا للمحاماة. يقدم الاستشارات ويمثل الموكلين في نطاق واسع من المسائل، أبرزها القانون التجاري وقانون الأسرة وقانون التنفيذ والإفلاس.",
    },
  },
  {
    slug: "zeynep-aksu-kosova",
    name: "Zeynep Aksu Kosova",
    title: { tr: "Kurucu Avukat", en: "Founding Partner", ar: "شريكة مؤسسة" },
    // Photo: Troy Spoelma (Unsplash, free) — see public/images/CREDITS.md.
    photo:
      "https://images.unsplash.com/photo-1701096374092-bb70915fdc5c?w=800&h=1000&fit=crop&fm=jpg&q=80",
    education: {
      tr: ["[TASLAK] Hukuk Fakültesi, Lisans"],
      en: ["[DRAFT] Faculty of Law, LL.B."],
      ar: ["[مسودة] كلية الحقوق، بكالوريوس"],
    },
    barAdmission: {
      tr: "[TASLAK] İstanbul Barosu",
      en: "[DRAFT] Istanbul Bar Association",
      ar: "[مسودة] نقابة محامي إسطنبول",
    },
    languages: ["Türkçe", "English"],
    practiceAreaSlugs: [
      "aile-ve-miras-hukuku",
      "is-hukuku",
      "ticaret-ve-sirketler-hukuku",
      "ceza-hukuku",
      "gayrimenkul-hukuku",
      "icra-ve-iflas-hukuku",
    ],
    bio: {
      tr: "[TASLAK] Zeynep Aksu Kosova, Kosova Hukuk Bürosu'nun kurucu ortağıdır. Aile ve miras hukuku, gayrimenkul hukuku ve iş hukuku alanlarında müvekkillerine danışmanlık ve dava takibi hizmeti sunmaktadır.",
      en: "[DRAFT] Zeynep Aksu Kosova is a founding partner of Kosova Law Firm. She advises and represents clients primarily in family & inheritance law, real estate law, and employment law.",
      ar: "[مسودة] زينب أكسو كوسوفا شريكة مؤسسة في مكتب كوسوفا للمحاماة. تقدم الاستشارات وتمثل الموكلين بشكل أساسي في قانون الأسرة والميراث، وقانون العقارات، وقانون العمل.",
    },
  },
  {
    slug: "mehmet-can-gonul",
    name: "Mehmet Can Gönül",
    title: { tr: "Kurucu Avukat", en: "Founding Partner", ar: "شريك مؤسس" },
    // Photo: Jeppe Mønster (Unsplash, free) — see public/images/CREDITS.md.
    photo:
      "https://images.unsplash.com/photo-1648474484044-bb82df2f5a1f?w=800&h=1000&fit=crop&fm=jpg&q=80",
    education: {
      tr: ["[TASLAK] Hukuk Fakültesi, Lisans"],
      en: ["[DRAFT] Faculty of Law, LL.B."],
      ar: ["[مسودة] كلية الحقوق، بكالوريوس"],
    },
    barAdmission: {
      tr: "[TASLAK] İstanbul Barosu",
      en: "[DRAFT] Istanbul Bar Association",
      ar: "[مسودة] نقابة محامي إسطنبول",
    },
    languages: ["Türkçe", "English"],
    practiceAreaSlugs: [
      "aile-ve-miras-hukuku",
      "is-hukuku",
      "ticaret-ve-sirketler-hukuku",
      "ceza-hukuku",
      "gayrimenkul-hukuku",
      "icra-ve-iflas-hukuku",
    ],
    bio: {
      tr: "[TASLAK] Mehmet Can Gönül, Kosova Hukuk Bürosu'nun kurucu ortaklarındandır. Ceza hukuku, ticaret hukuku ve icra-iflas hukuku alanlarında dava takibi ve danışmanlık hizmeti vermektedir.",
      en: "[DRAFT] Mehmet Can Gönül is a founding partner of Kosova Law Firm. He provides litigation and advisory services in criminal law, commercial law, and enforcement & bankruptcy law.",
      ar: "[مسودة] محمد جان غونول شريك مؤسس في مكتب كوسوفا للمحاماة. يقدم خدمات التقاضي والاستشارات في القانون الجنائي والقانون التجاري وقانون التنفيذ والإفلاس.",
    },
  },
];

export function getTeamMemberBySlug(slug: string) {
  return team.find((member) => member.slug === slug);
}

export function getTeamByPracticeArea(practiceAreaSlug: string) {
  return team.filter((member) =>
    member.practiceAreaSlugs.includes(practiceAreaSlug)
  );
}
