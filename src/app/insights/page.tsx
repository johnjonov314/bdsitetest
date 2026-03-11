import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { getInsights } from "@/lib/cms/content";

export default async function InsightsPage() {
  const posts = await getInsights();
  return (
    <Container>
      <div className="py-12">
        <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "Аналитика" }]} />
        <SectionTitle eyebrow="Insights" title="Блог и аналитика" />
        <div className="space-y-3">
          {posts.map((p) => (
            <Link key={p.slug} href={`/insights/${p.slug}`} className="glass block rounded-xl p-5">
              <h2 className="text-xl">{p.title}</h2>
              <p className="mt-1 text-sm text-muted">{p.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
}
