export type PracticeArea = {
  slug: string;
  icon: string; // lucide-react icon name, see components/practice-areas/PracticeAreaCard.tsx
  title: { tr: string; en: string };
  shortDescription: { tr: string; en: string };
  fullDescription: { tr: string[]; en: string[] }; // paragraphs
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "aile-ve-miras-hukuku",
    icon: "Users",
    title: { tr: "Aile ve Miras Hukuku", en: "Family & Inheritance Law" },
    shortDescription: {
      tr: "Boşanma, velayet, nafaka, mal paylaşımı ve miras uyuşmazlıklarında danışmanlık ve dava takibi.",
      en: "Advisory and litigation services in divorce, custody, alimony, property division, and inheritance disputes.",
    },
    fullDescription: {
      tr: [
        "Aile ve miras hukuku alanında boşanma, velayet, nafaka, mal rejimi ve mal paylaşımı, evlat edinme ile miras paylaşımı ve mirasçılık belgesi gibi konularda müvekkillerimize danışmanlık ve dava takibi hizmeti sunuyoruz.",
        "Süreçlerin hassasiyetini göz önünde bulundurarak, müvekkillerimizin haklarını en etkin şekilde korurken, mümkün olduğunca uzlaşmacı ve çözüm odaklı bir yaklaşım benimsiyoruz.",
      ],
      en: [
        "In the field of family and inheritance law, we advise and represent our clients in divorce, custody, alimony, matrimonial property regimes and division, adoption, inheritance distribution, and certificate of inheritance matters.",
        "Considering the sensitivity of these processes, we protect our clients' rights as effectively as possible while adopting a conciliatory, solution-focused approach wherever possible.",
      ],
    },
  },
  {
    slug: "is-hukuku",
    icon: "Briefcase",
    title: { tr: "İş Hukuku", en: "Employment Law" },
    shortDescription: {
      tr: "İşe iade, kıdem ve ihbar tazminatı, iş kazaları ve toplu iş sözleşmesi uyuşmazlıklarında hukuki destek.",
      en: "Legal support in reinstatement, severance and notice pay, workplace accidents, and collective bargaining disputes.",
    },
    fullDescription: {
      tr: [
        "İşçi ve işveren müvekkillerimize iş sözleşmelerinin hazırlanmasından fesih süreçlerine, işe iade davalarından kıdem ve ihbar tazminatı taleplerine kadar iş hukukunun tüm alanlarında danışmanlık veriyoruz.",
        "Ayrıca iş kazası ve meslek hastalığından kaynaklanan tazminat davaları ile toplu iş sözleşmesi uyuşmazlıklarında da müvekkillerimizi temsil ediyoruz.",
      ],
      en: [
        "We advise both employee and employer clients across every area of employment law, from drafting employment contracts to termination processes, from reinstatement claims to severance and notice pay disputes.",
        "We also represent our clients in compensation claims arising from workplace accidents and occupational illness, as well as in collective bargaining disputes.",
      ],
    },
  },
  {
    slug: "ticaret-ve-sirketler-hukuku",
    icon: "Building2",
    title: { tr: "Ticaret ve Şirketler Hukuku", en: "Commercial & Corporate Law" },
    shortDescription: {
      tr: "Şirket kuruluşu, ortaklık sözleşmeleri, ticari uyuşmazlıklar ve şirketler hukuku danışmanlığı.",
      en: "Company formation, shareholder agreements, commercial disputes, and corporate law advisory.",
    },
    fullDescription: {
      tr: [
        "Şirket kuruluşu, genel kurul ve yönetim kurulu süreçleri, ortaklık ve pay devri sözleşmeleri, ticari sözleşmelerin hazırlanması ve müzakeresi ile ticari alacak ve uyuşmazlıkların takibinde müvekkillerimize hizmet veriyoruz.",
        "Küçük ve orta ölçekli işletmelerin günlük hukuki ihtiyaçlarından, şirketler arası ticari uyuşmazlıkların dava ve icra yoluyla çözümüne kadar geniş bir yelpazede destek sunuyoruz.",
      ],
      en: [
        "We serve our clients in company formation, general assembly and board processes, shareholder and share transfer agreements, drafting and negotiating commercial contracts, and pursuing commercial receivables and disputes.",
        "We support businesses of all sizes, from day-to-day legal needs of small and medium enterprises to resolving commercial disputes between companies through litigation and enforcement proceedings.",
      ],
    },
  },
  {
    slug: "ceza-hukuku",
    icon: "Gavel",
    title: { tr: "Ceza Hukuku", en: "Criminal Law" },
    shortDescription: {
      tr: "Soruşturma ve kovuşturma aşamalarında şüpheli, sanık ve mağdur vekilliği.",
      en: "Representing suspects, defendants, and victims during investigation and prosecution stages.",
    },
    fullDescription: {
      tr: [
        "Ceza hukuku alanında soruşturma aşamasından kovuşturma ve infaz aşamasına kadar şüpheli, sanık ya da mağdur/müşteki sıfatıyla müvekkillerimizi temsil ediyoruz.",
        "Gözaltı ve tutukluluk süreçlerinde, ifade alma ve sorgu işlemlerinde, ceza yargılamasının her aşamasında müvekkillerimizin haklarının korunması için etkin savunma hizmeti sunuyoruz.",
      ],
      en: [
        "In the field of criminal law, we represent our clients as suspects, defendants, or victims/complainants from the investigation stage through prosecution and enforcement of sentences.",
        "During detention and arrest processes, statement-taking and interrogation proceedings, and every stage of criminal proceedings, we provide effective defense services to protect our clients' rights.",
      ],
    },
  },
  {
    slug: "gayrimenkul-hukuku",
    icon: "Home",
    title: { tr: "Gayrimenkul Hukuku", en: "Real Estate Law" },
    shortDescription: {
      tr: "Tapu iptal ve tescil, kamulaştırma, kira ve ortaklığın giderilmesi davalarında temsil.",
      en: "Representation in title deed cancellation, expropriation, lease, and partition of co-ownership disputes.",
    },
    fullDescription: {
      tr: [
        "Gayrimenkul alım satım sözleşmelerinden tapu iptal ve tescil davalarına, kira uyuşmazlıklarından kamulaştırma ve kamulaştırmasız el atma davalarına, ortaklığın giderilmesi (izale-i şüyu) davalarına kadar gayrimenkul hukukunun her alanında müvekkillerimize hizmet veriyoruz.",
        "Gayrimenkul yatırımı yapan bireysel ve kurumsal müvekkillerimize işlem öncesi hukuki durum tespiti (due diligence) desteği de sağlıyoruz.",
      ],
      en: [
        "We serve our clients across every area of real estate law, from property sale agreements to title deed cancellation and registration cases, from lease disputes to expropriation and de facto expropriation cases, and partition of co-ownership actions.",
        "We also provide pre-transaction legal due diligence support to individual and corporate clients investing in real estate.",
      ],
    },
  },
  {
    slug: "icra-ve-iflas-hukuku",
    icon: "FileWarning",
    title: { tr: "İcra ve İflas Hukuku", en: "Enforcement & Bankruptcy Law" },
    shortDescription: {
      tr: "Alacakların takibi, itirazın iptali, iflas ve konkordato süreçlerinde danışmanlık.",
      en: "Advisory on debt collection, annulment of objection, bankruptcy, and composition proceedings.",
    },
    fullDescription: {
      tr: [
        "Alacaklı ve borçlu müvekkillerimize icra takibi başlatılmasından itirazın iptali ve kaldırılması davalarına, iflas ve konkordato süreçlerinden ihtiyati haciz taleplerine kadar icra ve iflas hukukunun tüm alanlarında hizmet veriyoruz.",
        "Ticari alacakların tahsilinde etkin ve hızlı takip stratejileri geliştirerek müvekkillerimizin alacaklarına en kısa sürede kavuşmasını hedefliyoruz.",
      ],
      en: [
        "We serve our creditor and debtor clients across every area of enforcement and bankruptcy law, from initiating enforcement proceedings to annulment and removal of objection actions, from bankruptcy and composition proceedings to precautionary attachment requests.",
        "We develop effective and fast collection strategies for commercial receivables, aiming to help our clients recover their claims as quickly as possible.",
      ],
    },
  },
];

export function getPracticeAreaBySlug(slug: string) {
  return practiceAreas.find((area) => area.slug === slug);
}
