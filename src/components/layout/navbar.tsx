"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { BrandLogo } from "@/components/layout/brand-logo";

const links = [
  { label: "Платформа", href: "/platform" },
  { label: "Решения", href: "/solutions" },
  { label: "AI-агенты", href: "/ai-agents" },
  { label: "Отрасли", href: "/industries" },
  { label: "Кейсы", href: "/cases" }
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/85 backdrop-blur-xl">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <BrandLogo />
          <nav className="hidden items-center gap-5 md:flex">
            {links.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-muted transition-colors hover:text-foreground">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button href="/contacts" className="hidden md:inline-flex" magnetic>Запросить демо</Button>
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Открыть меню"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </Container>

      {open ? (
        <div className="border-t border-white/10 bg-background/95 p-4 md:hidden">
          <div className="grid gap-2">
            {links.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-lg border border-white/10 px-3 py-2 text-sm text-muted hover:bg-white/5 hover:text-foreground">
                {item.label}
              </Link>
            ))}
            <Button href="/contacts" className="mt-2 w-full" onClick={() => setOpen(false)}>Запросить демо</Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
