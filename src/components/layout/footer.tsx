import { Container } from "@/components/ui/container";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container>
        <div className="flex flex-col gap-4 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Beeline Big Data & AI</p>
          <div className="flex gap-4">
            <Link href="/about">Политика ПДн</Link>
            <Link href="/contacts">Контакты</Link>
            <Link href="/docs">Документация</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
