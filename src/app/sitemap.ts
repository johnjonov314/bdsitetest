import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config/site";
import { insights } from "@/lib/data/fallback-content";
import { aiAgentsData, solutionsData } from "@/lib/data/platform-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/platform", "/solutions", "/ai-agents", "/industries", "/cases", "/insights", "/about", "/contacts", "/playbook", "/design-system"].map((path) => ({
    url: `${siteConfig.url}${path}`,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8
  }));

  const solutionRoutes = solutionsData.map((s) => ({ url: `${siteConfig.url}/solutions/${s.slug}`, changeFrequency: "weekly" as const, priority: 0.7 }));
  const agentsRoutes = aiAgentsData.map((a) => ({ url: `${siteConfig.url}/ai-agents/${a.slug}`, changeFrequency: "weekly" as const, priority: 0.7 }));
  const insightRoutes = insights.map((p) => ({ url: `${siteConfig.url}/insights/${p.slug}`, changeFrequency: "monthly" as const, priority: 0.6 }));

  return [...staticRoutes, ...solutionRoutes, ...agentsRoutes, ...insightRoutes];
}
