import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { getSolutions } from "@/lib/cms/content";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Button } from "@/components/ui/button";

export default async function SolutionsPage() {
  const solutions = await getSolutions();
  return (
    <Container>
      <div className="py-12">
        <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "Решения" }]} />
        <SectionTitle eyebrow="Solutions" title="Решения Beeline Big Data & AI" />
        <div className="grid gap-4 md:grid-cols-2">
          {solutions.map((s: any) => (
            <article key={s.slug} className="glass rounded-2xl p-6">
              <h2 className="text-2xl">{s.title}</h2>
              <p className="mt-2 text-muted">{s.summary}</p>
              <Button href={`/solutions/${s.slug}`} variant="secondary" className="mt-4">Подробнее</Button>
            </article>
          ))}
        </div>
      </div>
    </Container>
  );
}
