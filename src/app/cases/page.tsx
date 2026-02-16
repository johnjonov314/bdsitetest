import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { getCases } from "@/lib/cms/content";

export default async function CasesPage() {
  const items = await getCases();
  return (
    <Container>
      <div className="py-12">
        <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "Кейсы" }]} />
        <SectionTitle eyebrow="Cases" title="Кейсы внедрения" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((c: any) => (
            <article key={c.company} className="glass rounded-2xl p-6">
              <h2 className="text-2xl">{c.company}</h2>
              <p className="text-sm text-primary">{c.industry}</p>
              <p className="mt-3 text-muted">{c.challenge}</p>
              <p className="mt-2">{c.impact}</p>
            </article>
          ))}
        </div>
      </div>
    </Container>
  );
}
