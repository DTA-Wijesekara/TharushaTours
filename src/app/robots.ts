import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  return {
    rules: { userAgent: "*", allow: "/" },
    ...(siteUrl && siteUrl !== "https://example.com"
      ? { sitemap: `${siteUrl.replace(/\/$/, "")}/sitemap.xml` }
      : {}),
  };
}
