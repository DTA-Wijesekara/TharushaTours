import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  return siteUrl && siteUrl !== "https://example.com"
    ? [
        {
          url: siteUrl.replace(/\/$/, ""),
          changeFrequency: "monthly",
          priority: 1,
        },
      ]
    : [];
}
