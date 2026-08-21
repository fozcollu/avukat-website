import { useLocale, useTranslations } from "next-intl";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import BlogPostCard from "@/components/blog/BlogPostCard";
import { getAllPostsMeta } from "@/lib/blog";
import type { AppLocale } from "@/i18n/routing";

export default function BlogPreview() {
  const t = useTranslations("home.blog");
  const locale = useLocale() as AppLocale;
  const posts = getAllPostsMeta(locale).slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section className="bg-ink py-16 sm:py-24">
      <Container>
        <div className="text-center">
          <h2 className="font-serif text-3xl text-white sm:text-4xl">{t("title")}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/60">{t("subtitle")}</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogPostCard key={post.slug} post={post} dark />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button
            href="/blog"
            variant="ghost"
            className="border-white/25 text-white hover:border-accent hover:text-accent"
          >
            {t("cta")}
          </Button>
        </div>
      </Container>
    </section>
  );
}
