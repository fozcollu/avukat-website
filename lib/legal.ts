import fs from "node:fs";
import path from "node:path";
import { remark } from "remark";
import remarkHtml from "remark-html";
import type { AppLocale } from "@/i18n/routing";

export async function getLegalPageHtml(
  name: "kvkk",
  locale: AppLocale
): Promise<string> {
  const filePath = path.join(
    process.cwd(),
    "content",
    "legal",
    `${name}.${locale}.md`
  );
  const raw = fs.readFileSync(filePath, "utf8");
  const processed = await remark().use(remarkHtml).process(raw);
  return processed.toString();
}
