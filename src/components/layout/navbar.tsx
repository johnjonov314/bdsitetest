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
          <Link href="/" className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-foreground/95">Beeline Big Data & AI</Link>
          <nav className="hidden items-center gap-5 md:flex">
            {pathname === "/" ? [
              { label: "Capabilities", href: "#solutions" },
              { label: "Cases", href: "#cases" },
              { label: "Industries", href: "#industries" },
              { label: "FAQ", href: "#faq" }
            ].map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-muted transition-colors hover:text-foreground">{item.label}</a>
            )) : navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-muted transition-colors hover:text-foreground">{item.label}</Link>
            ))}
            <Link href="/design-system" className="text-sm text-muted transition-colors hover:text-foreground">Design</Link>
          </nav>
          <Button href="/contacts">Оставить заявку</Button>
        </div>
      </Container>
    </header>
  );
}
