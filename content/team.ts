// NOTE: Bio/education/bar-admission text below is DRAFT placeholder content
// (marked [TASLAK] in Turkish) written to make the site demoable end-to-end.
// The client should review and replace these with each lawyer's real CV details.

export type TeamMember = {
  slug: string;
  name: string;
  title: { tr: string; en: string };
  photo: string;
  education: { tr: string[]; en: string[] };
  barAdmission: { tr: string; en: string };
  languages: string[];
  practiceAreaSlugs: string[];
  bio: { tr: string; en: string };
};

export const team: TeamMember[] = [
  {
    slug: "salih-seref-kosova",
    name: "Salih Şeref Kosova",
    title: { tr: "Kurucu Avukat", en: "Founding Partner" },
    photo: "/images/team/salih-seref-kosova.jpg",
    education: {
      tr: ["[TASLAK] Hukuk Fakültesi, Lisans"],
      en: ["[DRAFT] Faculty of Law, LL.B."],
    },
    barAdmission: { tr: "[TASLAK] İstanbul Barosu", en: "[DRAFT] Istanbul Bar Association" },
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
    },
  },
  {
    slug: "zeynep-aksu-kosova",
    name: "Zeynep Aksu Kosova",
    title: { tr: "Kurucu Avukat", en: "Founding Partner" },
    photo: "/images/team/zeynep-aksu-kosova.jpg",
    education: {
      tr: ["[TASLAK] Hukuk Fakültesi, Lisans"],
      en: ["[DRAFT] Faculty of Law, LL.B."],
    },
    barAdmission: { tr: "[TASLAK] İstanbul Barosu", en: "[DRAFT] Istanbul Bar Association" },
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
    },
  },
  {
    slug: "mehmet-can-gonul",
    name: "Mehmet Can Gönül",
    title: { tr: "Avukat", en: "Attorney" },
    photo: "/images/team/mehmet-can-gonul.jpg",
    education: {
      tr: ["[TASLAK] Hukuk Fakültesi, Lisans"],
      en: ["[DRAFT] Faculty of Law, LL.B."],
    },
    barAdmission: { tr: "[TASLAK] İstanbul Barosu", en: "[DRAFT] Istanbul Bar Association" },
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
      tr: "[TASLAK] Mehmet Can Gönül, Kosova Hukuk Bürosu'nda avukat olarak görev yapmaktadır. Ceza hukuku, ticaret hukuku ve icra-iflas hukuku alanlarında dava takibi ve danışmanlık hizmeti vermektedir.",
      en: "[DRAFT] Mehmet Can Gönül is an attorney at Kosova Law Firm. He provides litigation and advisory services in criminal law, commercial law, and enforcement & bankruptcy law.",
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
