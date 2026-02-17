import type { Metadata } from "next";
import dynamic from "next/dynamic";
import "./globals.css";
import { siteConfig } from "@/lib/config/site";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CookieBanner } from "@/components/layout/cookie-banner";
import { Toaster } from "sonner";
import { PageTransition } from "@/components/motion/page-transition";
import { CursorAura } from "@/components/motion/cursor-aura";

const AiAssistantWidget = dynamic(() => import("@/components/layout/ai-assistant-widget").then((m) => m.AiAssistantWidget), { ssr: false });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Beeline BigData & AI — AI Operating System для бизнеса",
    template: "%s | Beeline BigData & AI"
  },
  description: siteConfig.description,
  openGraph: {
    title: "Beeline BigData & AI",
    description: siteConfig.description,
    type: "website",
    locale: "ru_RU",
    url: siteConfig.url
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>
        <Navbar />
        <main><PageTransition>{children}</PageTransition></main>
        <Footer />
        <CursorAura />
        <AiAssistantWidget />
        <Toaster theme="dark" />
        {siteConfig.enableCookieBanner ? <CookieBanner /> : null}
      </body>
    </html>
  );
}
