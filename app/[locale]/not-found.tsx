import { getTranslations } from "next-intl/server";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default async function NotFound() {
  const t = await getTranslations("notFound");

  return (
    <Container className="flex flex-col items-center gap-4 py-32 text-center">
      <h1 className="font-serif text-3xl text-ink">{t("title")}</h1>
      <p className="text-slate">{t("body")}</p>
      <Button href="/" variant="primary">
        {t("cta")}
      </Button>
    </Container>
  );
}
