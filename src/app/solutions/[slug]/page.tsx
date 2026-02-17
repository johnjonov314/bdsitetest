import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { solutionsData } from "@/lib/data/platform-content";

type Props = { params: { slug: string } };

export default function SolutionDetailPage({ params }: Props) {
  const solution = solutionsData.find((item) => item.slug === params.slug);
  if (!solution) return notFound();

  return (
    <Container>
      <div className="space-y-8 py-12">
        <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "Решения", href: "/solutions" }, { label: solution.title }]} />
        <section className="glass rounded-3xl p-8 md:p-10">
          <h1 className="text-4xl font-semibold md:text-5xl">{solution.title}</h1>
          <p className="mt-3 max-w-3xl text-muted">{solution.summary}</p>
          <div className="mt-5 grid gap-2 sm:grid-cols-2">
            {solution.outcomes.map((item) => <div key={item} className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm">{item}</div>)}
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-2">
          <article className="glass rounded-2xl p-6">
            <h2 className="text-2xl font-semibold">Ключевые возможности</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-muted">{solution.capabilities.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
          <article className="glass rounded-2xl p-6">
            <h2 className="text-2xl font-semibold">KPI</h2>
            <div className="mt-3 flex flex-wrap gap-2">{solution.kpi.map((item) => <span key={item} className="rounded-full border border-white/20 px-3 py-1 text-sm">{item}</span>)}</div>
          </article>
        </section>

        <section className="glass rounded-2xl p-6">
          <h2 className="text-2xl font-semibold">Enterprise-кейсы</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {solution.enterpriseCases.map((item, idx) => (
              <article key={item} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="font-mono text-xs text-yellow-200">Кейс {idx + 1}</p>
                <p className="mt-2 text-sm text-muted">{item}</p>
              </article>
            ))}
          </div>
          <div className="mt-6"><Button href="/contacts" eventName="request_demo">Запросить демо</Button></div>
        </section>
      </div>
    </Container>
  );
}
