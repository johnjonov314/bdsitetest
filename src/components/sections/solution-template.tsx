import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ProductDirectionContent } from "@/lib/data/types";

export function SolutionTemplate({ content }: { content: ProductDirectionContent }) {
  return (
    <Container>
      <div className="space-y-8 py-12">
        <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "Решения", href: "/solutions" }, { label: content.title }]} />

        <section className="glass noise rounded-3xl p-8 md:p-10">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{content.subtitle}</p>
          <h1 className="mt-3 text-4xl font-semibold md:text-5xl">{content.title}</h1>
          <p className="mt-5 max-w-4xl text-muted">{content.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contacts">Оставить заявку</Button>
            <Button href="/solutions" variant="secondary">Посмотреть решения</Button>
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-3">
          {content.outcomes.map((item) => (
            <article key={item} className="glass rounded-2xl p-5">
              <p className="font-mono text-xs text-primary">OUTCOME</p>
              <p className="mt-2">{item}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <article className="glass rounded-2xl p-6">
            <h2 className="text-2xl font-semibold">Ключевые возможности</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
              {content.capabilities.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
          <article className="glass rounded-2xl p-6">
            <h2 className="text-2xl font-semibold">Сценарии применения</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
              {content.useCases.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <article className="glass rounded-2xl p-6">
            <h2 className="text-2xl font-semibold">Технологический контур</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {content.stack.map((item) => (
                <span key={item} className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-mono text-muted">
                  {item}
                </span>
              ))}
            </div>
          </article>
          <article className="glass rounded-2xl p-6">
            <h2 className="text-2xl font-semibold">Метрики успеха</h2>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {content.kpi.map((item) => (
                <div key={item} className="rounded-xl border border-white/10 bg-black/20 p-3 font-mono text-sm">
                  {item}
                </div>
              ))}
            </div>
          </article>
        </section>
      </div>
    </Container>
  );
}
