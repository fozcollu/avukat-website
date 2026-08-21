import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    // Hotlinking Unsplash stock photos turned out unreliable (the site
    // currently uses local, network-free AbstractPanel/Monogram placeholders
    // instead — see public/images/CREDITS.md for that history). Keep
    // images.unsplash.com allowed in case a real Unsplash photo is used
    // later; add any other real photo host here too.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
