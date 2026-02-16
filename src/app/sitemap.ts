import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config/site";
import { insights, solutions } from "@/lib/data/fallback-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/solutions", "/industries", "/cases", "/insights", "/about", "/contacts"].map((path) => ({
    url: `${siteConfig.url}${path}`,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8
  }));

  const solutionRoutes = solutions.map((s) => ({ url: `${siteConfig.url}/solutions/${s.slug}`, changeFrequency: "weekly" as const, priority: 0.7 }));
  const insightRoutes = insights.map((p) => ({ url: `${siteConfig.url}/insights/${p.slug}`, changeFrequency: "monthly" as const, priority: 0.6 }));

  return [...staticRoutes, ...solutionRoutes, ...insightRoutes];
}
