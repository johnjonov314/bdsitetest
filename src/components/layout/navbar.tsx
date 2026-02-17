"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { BrandLogo } from "@/components/layout/brand-logo";
import Link from "next/link";

const links = [
  { label: "Решения", href: "/solutions" },
  { label: "Отрасли", href: "/industries" },
  { label: "Кейсы", href: "/cases" },
  { label: "Аналитика", href: "/insights" },
  { label: "О платформе", href: "/about" },
  { label: "Контакты", href: "/contacts" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-xl">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <BrandLogo />
          <nav className="hidden items-center gap-5 md:flex">
            {links.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-muted transition-colors hover:text-foreground">
                {item.label}
              </Link>
            ))}
            <Link href="/design-system" className="text-sm text-muted transition-colors hover:text-foreground">Гайд</Link>
          </nav>
          <Button href="/contacts">Оставить заявку</Button>
        </div>
      </Container>
    </header>
  );
}
