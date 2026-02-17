import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/ui/section-title";
import { AIAgentsDiagram } from "@/components/visuals/ai-agents-diagram";
import { DotMesh, FlowLines, GradientOrb } from "@/components/visuals/patterns";
import { LeadForm } from "@/components/forms/lead-form";
import { getCases, getFaq, getSolutions } from "@/lib/cms/content";
import { Reveal } from "@/components/ui/reveal";
import { CaseItem, FaqItem, Solution } from "@/lib/data/types";
import { TiltCard } from "@/components/motion/tilt-card";
import { AbstractThumb } from "@/components/visuals/abstract-thumb";
import { ArchitectureMap } from "@/components/visuals/architecture-map";

const industries = ["Госсектор", "Финансы", "Транспорт", "Ритейл", "Промышленность", "Энергетика", "Телеком", "Логистика"];
const capabilities = [
  "Data ingestion & quality",
  "Data governance & catalog",
  "Realtime analytics",
  "AI-agents orchestration",
  "Monitoring & SLA"
];
const useCases = [
  "Умный контакт-центр",
  "Превентивная видеоаналитика",
  "Территориальное планирование",
  "Антифрод-контур",
  "Аналитика сервиса",
  "Операционный control tower"
];

export default async function Home() {
  const [solutions, caseItems, faq] = await Promise.all([getSolutions(), getCases(), getFaq()]);

  return (
    <div className="space-y-24 pb-24 pt-10">
      <section className="relative overflow-hidden">
        <FlowLines />
        <GradientOrb />
        <Container>
          <Reveal>
            <div className="noise relative space-y-8 rounded-3xl border border-white/10 px-6 py-16 md:px-12">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-primary">Big Data Software Platform • Enterprise</p>
              <h1 className="max-w-5xl text-5xl font-semibold leading-tight md:text-7xl">Beeline Big Data & AI</h1>
              <p className="max-w-3xl text-lg text-muted">
                Единая data/AI платформа для enterprise и госсектора: от подключения источников до агентных сценариев и SLA-внедрения.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button href="/contacts">Оставить заявку</Button>
                <Button variant="secondary" href="/solutions">Посмотреть платформу</Button>
              </div>
              <div className="grid gap-3 text-sm text-muted sm:grid-cols-3">
                <p className="glass rounded-xl p-4">Данные оператора</p>
                <p className="glass rounded-xl p-4">Безопасность и комплаенс</p>
                <p className="glass rounded-xl p-4">Enterprise-внедрение</p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section id="solutions">
        <Container>
          <SectionTitle eyebrow="Capabilities" title="Что делает платформа" description="Core-возможности для сквозного data-to-value цикла." />
          <div className="grid gap-4 md:grid-cols-5">
            {capabilities.map((item, index) => (
              <Reveal key={item} delay={index * 0.04}>
                <div className="glass rounded-xl p-4 text-sm">{item}</div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <SectionTitle eyebrow="Solutions" title="Продуктовые направления" description="Проваливайтесь в направление: сценарии, архитектура, KPI, контур внедрения." />
          <div className="grid gap-4 md:grid-cols-2">
            {solutions.slice(0, 4).map((s: Solution) => (
              <TiltCard key={s.slug}>
                <article className="glass noise rounded-2xl p-6">
                  <p className="font-mono text-xs text-primary">PRIORITY 0{s.priority}</p>
                  <h3 className="mb-2 mt-2 text-2xl">{s.title}</h3>
                  <p className="text-muted">{s.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {s.points.map((point) => (
                      <span key={point} className="rounded-full border border-white/20 px-3 py-1 text-xs text-muted">{point}</span>
                    ))}
                  </div>
                  <Button href={`/solutions/${s.slug}`} variant="secondary" className="mt-5">Провалиться в направление</Button>
                </article>
              </TiltCard>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <SectionTitle eyebrow="Use cases" title="Сценарии применения" description="Практические сценарии для B2B и госсектора." />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((item, i) => (
              <Reveal key={item} delay={i * 0.05}>
                <article className="glass rounded-2xl p-4">
                  <AbstractThumb seed={i + 1} />
                  <h3 className="mt-4 text-lg font-semibold">{item}</h3>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <SectionTitle eyebrow="Architecture" title="Архитектура платформы" description="Прозрачная схема от источников данных до конечных AI-сервисов." />
          <ArchitectureMap />
        </Container>
      </section>

      <section>
        <Container>
          <SectionTitle eyebrow="Spotlight" title="ИИ-агенты" description="Data → Models → Agents → Outcomes. Управляемый агентный контур для enterprise." />
          <div className="grid gap-6 lg:grid-cols-5">
            <div className="lg:col-span-3"><AIAgentsDiagram /></div>
            <div className="space-y-3 lg:col-span-2">
              {["Продажи и пресейл", "Контакт-центр", "Внутренние процессы"].map((x) => <div key={x} className="glass rounded-xl p-4">{x}</div>)}
              <Button href="/solutions/ai-agents" className="w-full">Подробнее про ИИ-агентов</Button>
            </div>
          </div>
        </Container>
      </section>

      <section id="cases">
        <Container>
          <SectionTitle eyebrow="Кейсы" title="Реальные внедрения" />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {caseItems.slice(0, 6).map((c: CaseItem) => (
              <article key={c.company} className="glass rounded-2xl p-5">
                <h3 className="text-xl">{c.company}</h3>
                <p className="text-sm text-primary">{c.industry}</p>
                <p className="mt-2 text-sm text-muted">{c.challenge}</p>
                <p className="mt-2 text-sm">{c.impact}</p>
              </article>
            ))}
          </div>
          <div className="mt-6"><Button href="/cases" variant="secondary">Все кейсы</Button></div>
        </Container>
      </section>

      <section id="industries"><Container><SectionTitle eyebrow="Отрасли" title="Фокус по индустриям" />
        <div className="grid-pattern rounded-2xl border border-white/10 p-6"><div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">{industries.map((i) => <span key={i} className="glass rounded-lg px-3 py-2 text-sm">{i}</span>)}</div></div>
      </Container></section>

      <section>
        <Container>
          <SectionTitle eyebrow="Security" title="Безопасность и комплаенс" />
          <div className="glass rounded-2xl p-6 text-muted"><ul className="list-disc space-y-2 pl-5"><li>Работа с агрегированными и обезличенными данными.</li><li>Договорные контуры, role-based доступ и аудит.</li><li>Соответствие требованиям 152-ФЗ и корпоративной ИБ-политике.</li></ul></div>
        </Container>
      </section>

      <section>
        <Container>
          <SectionTitle eyebrow="Pricing" title="Модель подключения" description="Пилот, масштабирование или enterprise-программа. Подбираем формат под ваш контур." />
          <div className="glass grid gap-4 rounded-2xl p-6 md:grid-cols-3">
            {["Pilot", "Scale", "Enterprise"].map((tier) => <div key={tier} className="rounded-xl border border-white/10 p-4"><p className="font-mono text-xs text-primary">{tier.toUpperCase()}</p><p className="mt-2 text-sm text-muted">Обсуждается с учетом инфраструктуры, SLA и объема сценариев.</p></div>)}
          </div>
          <div className="mt-6"><Button href="/contacts">Talk to sales</Button></div>
        </Container>
      </section>

      <section id="faq">
        <Container><SectionTitle eyebrow="FAQ" title="Частые вопросы" />
          <div className="space-y-3">{faq.map((f: FaqItem) => <details key={f.question} className="glass rounded-xl p-4"><summary className="cursor-pointer font-medium">{f.question}</summary><p className="mt-2 text-sm text-muted">{f.answer}</p></details>)}</div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 p-8"><DotMesh />
            <SectionTitle eyebrow="Start" title="Обсудим задачу и архитектуру внедрения" description="Оставьте заявку — подготовим релевантный сценарий под ваш контур." />
            <LeadForm />
          </div>
        </Container>
      </section>
    </div>
  );
}
