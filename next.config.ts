import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    // Stock photos (hero + team portraits) are referenced directly from
    // Unsplash's CDN for now rather than downloaded locally — see
    // public/images/CREDITS.md for the exact photos/photographers used and
    // README.md "Görseller" for how to swap these for commissioned/AI photos.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
