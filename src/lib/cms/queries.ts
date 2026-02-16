import groq from "groq";

export const homeQuery = groq`*[_type == "homePage"][0]`;
export const solutionsQuery = groq`*[_type == "solution"] | order(priority asc)`;
export const casesQuery = groq`*[_type == "caseItem"] | order(order asc)`;
export const faqQuery = groq`*[_type == "faqItem"] | order(order asc)`;
export const insightsQuery = groq`*[_type == "insightPost"] | order(publishedAt desc)`;
export const insightBySlugQuery = groq`*[_type == "insightPost" && slug.current == $slug][0]`;
