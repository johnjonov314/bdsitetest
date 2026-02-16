import groq from "groq";

export const homeQuery = groq`*[_type == "homePage"][0]{
  heroTitle,
  heroSubtitle
}`;

export const solutionsQuery = groq`*[_type == "solution"] | order(priority asc){
  "slug": slug.current,
  title,
  summary,
  priority,
  points
}`;

export const casesQuery = groq`*[_type == "caseItem"] | order(order asc){
  company,
  industry,
  challenge,
  impact
}`;

export const faqQuery = groq`*[_type == "faqItem"] | order(order asc){
  question,
  answer
}`;

export const insightsQuery = groq`*[_type == "insightPost"] | order(publishedAt desc){
  "slug": slug.current,
  title,
  excerpt,
  "publishedAt": publishedAt[0..9],
  content
}`;

export const insightBySlugQuery = groq`*[_type == "insightPost" && slug.current == $slug][0]{
  "slug": slug.current,
  title,
  excerpt,
  "publishedAt": publishedAt[0..9],
  content
}`;
