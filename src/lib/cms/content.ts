import { sanityClient } from "./client";
import { cases, faq, insights, solutions } from "@/lib/data/fallback-content";
import { casesQuery, faqQuery, insightBySlugQuery, insightsQuery, solutionsQuery } from "./queries";
import type { CaseItem, FaqItem, InsightPost, Solution } from "@/lib/data/types";

export async function getSolutions(): Promise<Solution[]> {
  if (!sanityClient) return solutions;
  return sanityClient.fetch<Solution[]>(solutionsQuery, {}, { next: { revalidate: 120 } });
}

export async function getCases(): Promise<CaseItem[]> {
  if (!sanityClient) return cases;
  return sanityClient.fetch<CaseItem[]>(casesQuery, {}, { next: { revalidate: 120 } });
}

export async function getFaq(): Promise<FaqItem[]> {
  if (!sanityClient) return faq;
  return sanityClient.fetch<FaqItem[]>(faqQuery, {}, { next: { revalidate: 120 } });
}

export async function getInsights(): Promise<InsightPost[]> {
  if (!sanityClient) return insights;
  return sanityClient.fetch<InsightPost[]>(insightsQuery, {}, { next: { revalidate: 120 } });
}

export async function getInsightBySlug(slug: string): Promise<InsightPost | null> {
  if (!sanityClient) return insights.find((i) => i.slug === slug) ?? null;
  return sanityClient.fetch<InsightPost | null>(insightBySlugQuery, { slug }, { next: { revalidate: 120 } });
}
