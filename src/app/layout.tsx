import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/config/site";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CookieBanner } from "@/components/layout/cookie-banner";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Beeline Big Data & AI",
    template: "%s | Beeline Big Data & AI"
  },
  description: siteConfig.description,
  openGraph: {
    title: "Beeline Big Data & AI",
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
        <main>{children}</main>
        <Footer />
        <Toaster theme="dark" />
        {siteConfig.enableCookieBanner ? <CookieBanner /> : null}
      </body>
    </html>
  );
}
