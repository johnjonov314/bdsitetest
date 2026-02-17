export const siteConfig = {
  name: "Beeline BigData & AI",
  description: "AI Operating System для enterprise и SME: данные, AI-платформа и цифровые сотрудники в едином контуре.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  enableCookieBanner: process.env.NEXT_PUBLIC_ENABLE_COOKIE_BANNER !== "false"
};
