import Link from "next/link";
import { Container } from "@/components/ui/container";

const links = [
  { href: "/docs/overview", label: "Overview" },
  { href: "/docs/design-system", label: "Design System" },
  { href: "/docs/content-playbook", label: "Content Playbook" },
  { href: "/docs/components", label: "Components" },
  { href: "/docs/architecture", label: "Architecture" }
];

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <div className="py-10">
        <h1>Документация платформы</h1>
        <p className="mt-3 max-w-3xl text-muted">Внутренний продуктовый док для маркетинга, контента, разработки, архитектуры и аналитики.</p>
        <nav className="mt-4 flex flex-wrap gap-2">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="rounded-full border border-white/15 bg-white/5 px-3 py-2 text-sm">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="mt-6">{children}</div>
      </div>
    </Container>
  );
}
