export const siteConfig = {
  name: "Beeline Big Data & AI",
  description: "Платформа данных оператора и AI-решений для enterprise и госсектора России.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  enableCookieBanner: process.env.NEXT_PUBLIC_ENABLE_COOKIE_BANNER !== "false"
};
