import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { getSolutions } from "@/lib/cms/content";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Solution } from "@/lib/data/types";

export default async function SolutionsPage() {
  const solutions = await getSolutions();
  return (
    <Container>
      <div className="space-y-8 py-12">
        <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "Решения" }]} />
        <SectionTitle
          eyebrow="Решения"
          title="Продуктовые направления"
          description="От ИИ-агентов до прикладной аналитики: каждое направление спроектировано под enterprise-внедрение, интеграции и измеримый бизнес-эффект."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {solutions.map((s: Solution) => (
            <article key={s.slug} className="glass noise rounded-2xl p-6">
              <p className="font-mono text-xs text-primary">Приоритет 0{s.priority}</p>
              <h2 className="mt-2 text-2xl font-semibold">{s.title}</h2>
              <p className="mt-2 text-muted">{s.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.points.map((point) => (
                  <span key={point} className="rounded-full border border-white/20 px-3 py-1 text-xs text-muted">
                    {point}
                  </span>
                ))}
              </div>
              <Button href={`/solutions/${s.slug}`} variant="secondary" className="mt-6">
                Провалиться в направление
              </Button>
            </article>
          ))}
        </div>
      </div>
    </Container>
  );
}
