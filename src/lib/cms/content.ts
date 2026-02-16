import { sanityClient } from "./client";
import { cases, faq, insights, solutions } from "@/lib/data/fallback-content";
import { casesQuery, faqQuery, insightBySlugQuery, insightsQuery, solutionsQuery } from "./queries";

export async function getSolutions() {
  if (!sanityClient) return solutions;
  return sanityClient.fetch(solutionsQuery, {}, { next: { revalidate: 120 } });
}

export async function getCases() {
  if (!sanityClient) return cases;
  return sanityClient.fetch(casesQuery, {}, { next: { revalidate: 120 } });
}

export async function getFaq() {
  if (!sanityClient) return faq;
  return sanityClient.fetch(faqQuery, {}, { next: { revalidate: 120 } });
}

export async function getInsights() {
  if (!sanityClient) return insights;
  return sanityClient.fetch(insightsQuery, {}, { next: { revalidate: 120 } });
}

export async function getInsightBySlug(slug: string) {
  if (!sanityClient) return insights.find((i) => i.slug === slug) ?? null;
  return sanityClient.fetch(insightBySlugQuery, { slug }, { next: { revalidate: 120 } });
}
