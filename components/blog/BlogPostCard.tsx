import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import PortraitImage from "@/components/ui/PortraitImage";
import type { BlogPostMeta } from "@/lib/blog";

export default function BlogPostCard({
  post,
  dark = false,
}: {
  post: BlogPostMeta;
  dark?: boolean;
}) {
  const t = useTranslations("blog");

  const date = new Date(post.date).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`group flex flex-col overflow-hidden rounded-xl border transition-all hover:-translate-y-0.5 ${
        dark
          ? "border-white/10 bg-ink hover:border-accent/50"
          : "border-ink/10 bg-white hover:border-accent/40 hover:shadow-lg hover:shadow-ink/5"
      }`}
    >
      <PortraitImage
        src={post.coverImage}
        alt={post.title}
        rounded=""
        dark={dark}
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="aspect-[16/9] w-full"
      />
      <div className="flex flex-1 flex-col p-5">
        <p className={`text-xs uppercase tracking-wide ${dark ? "text-white/40" : "text-slate"}`}>
          {date}
        </p>
        <h3 className={`mt-2 font-serif text-lg ${dark ? "text-white" : "text-ink"}`}>
          {post.title}
        </h3>
        <p className={`mt-2 flex-1 text-sm ${dark ? "text-white/60" : "text-slate"}`}>
          {post.excerpt}
        </p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
          {t("readMore")}
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
