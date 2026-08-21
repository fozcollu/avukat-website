import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";
import type { AppLocale } from "@/i18n/routing";

export type BlogPostMeta = {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  practiceAreaSlug: string;
  author: string;
  coverImage: string;
};

export type BlogPost = BlogPostMeta & {
  contentHtml: string;
};

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function localeDir(locale: AppLocale) {
  return path.join(BLOG_DIR, locale);
}

export function getAllPostsMeta(locale: AppLocale): BlogPostMeta[] {
  const dir = localeDir(locale);
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));

  const posts = files.map((filename) => {
    const raw = fs.readFileSync(path.join(dir, filename), "utf8");
    const { data } = matter(raw);
    return data as BlogPostMeta;
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(
  locale: AppLocale,
  slug: string
): Promise<BlogPost | null> {
  const filePath = path.join(localeDir(locale), `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  const processed = await remark().use(remarkHtml).process(content);
  const contentHtml = processed.toString();

  return { ...(data as BlogPostMeta), contentHtml };
}

export function getAllSlugs(locale: AppLocale): string[] {
  const dir = localeDir(locale);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}
