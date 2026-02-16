"use client";

import { navItems } from "@/lib/data/fallback-content";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-xl">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="text-sm font-semibold uppercase tracking-[0.12em]">Beeline Big Data & AI</Link>
          <nav className="hidden items-center gap-5 md:flex">
            {pathname === "/" ? [
              { label: "Что делаем", href: "#solutions" },
              { label: "Кейсы", href: "#cases" },
              { label: "Отрасли", href: "#industries" },
              { label: "FAQ", href: "#faq" }
            ].map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-muted hover:text-foreground">{item.label}</a>
            )) : navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-muted hover:text-foreground">{item.label}</Link>
            ))}
          </nav>
          <Button href="/contacts">Оставить заявку</Button>
        </div>
      </Container>
    </header>
  );
}
