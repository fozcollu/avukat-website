import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // Add new locales here (e.g. "de", "ku") — the rest of the i18n setup
  // (middleware, navigation helpers, LanguageSwitcher) does not need to change.
  locales: ["tr", "en"],
  defaultLocale: "tr",
  localePrefix: "always",
});

export type AppLocale = (typeof routing.locales)[number];
