import { allPosts } from "contentlayer/generated";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const site = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${site}/`, lastModified: now },
    { url: `${site}/blog`, lastModified: now },
  ];

  const postRoutes: MetadataRoute.Sitemap = allPosts.map((p) => ({
    url: `${site}${p.url}`,
    lastModified: new Date(p.date),
  }));

  return [...staticRoutes, ...postRoutes];
}

