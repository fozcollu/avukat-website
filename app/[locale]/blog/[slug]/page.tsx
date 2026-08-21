import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowLeft } from "lucide-react";
import type { AppLocale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import Container from "@/components/ui/Container";
import PortraitImage from "@/components/ui/PortraitImage";
import AbstractPanel from "@/components/ui/AbstractPanel";
import MarkdownContent from "@/components/blog/MarkdownContent";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";
import { getTeamMemberBySlug } from "@/content/team";
import { getPracticeAreaBySlug } from "@/content/practiceAreas";
import { getPracticeAreaIcon } from "@/components/practice-areas/icon-map";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getAllSlugs(locale).map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: AppLocale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = await getPostBySlug(locale, slug);
  return { title: post?.title ?? "Blog" };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: AppLocale; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const post = await getPostBySlug(locale, slug);
  if (!post) notFound();

  const t = await getTranslations("blog");
  const author = getTeamMemberBySlug(post.author);
  const area = getPracticeAreaBySlug(post.practiceAreaSlug);
  const date = new Date(post.date).toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Container className="py-16 sm:py-20">
      <Link
        href="/blog"
        className="mb-8 inline-flex items-center gap-1.5 text-sm text-slate hover:text-accent"
      >
        <ArrowLeft className="h-4 w-4" />
        {t("backToBlog")}
      </Link>

      <div className="max-w-2xl">
        {area && (
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            {t("relatedAreaLabel")}: {area.title[locale]}
          </p>
        )}
        <h1 className="mt-3 font-serif text-3xl text-ink sm:text-4xl">
          {post.title}
        </h1>
        <div className="mt-3 flex items-center gap-2 text-sm text-slate">
          <span>{date}</span>
          {author && (
            <>
              <span>·</span>
              <span>
                {t("authorLabel")}:{" "}
                <Link href={`/ekibimiz/${author.slug}`} className="text-accent hover:underline">
                  {author.name}
                </Link>
              </span>
            </>
          )}
        </div>
      </div>

      {post.coverImage ? (
        <PortraitImage
          src={post.coverImage}
          alt={post.title}
          sizes="(min-width: 640px) 42rem, 100vw"
          className="mt-8 aspect-[16/9] w-full max-w-2xl"
        />
      ) : (
        <AbstractPanel
          icon={getPracticeAreaIcon(area?.icon ?? "")}
          rounded="rounded-xl"
          className="mt-8 aspect-[16/9] w-full max-w-2xl"
        />
      )}

      <MarkdownContent html={post.contentHtml} />
    </Container>
  );
}
