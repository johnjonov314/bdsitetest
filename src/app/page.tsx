import dynamic from "next/dynamic";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/ui/section-title";
import { AIAgentsDiagram } from "@/components/visuals/ai-agents-diagram";
import { DotMesh, FlowLines, GradientOrb } from "@/components/visuals/patterns";
import { LeadForm } from "@/components/forms/lead-form";
import { getCases, getFaq } from "@/lib/cms/content";
import { Reveal } from "@/components/ui/reveal";
import { CaseItem, FaqItem } from "@/lib/data/types";
import { AiAgentsGrid } from "@/components/sections/ai-agents-grid";
import { aiAgentsData, industriesData, solutionsData } from "@/lib/data/platform-content";

const SolutionsShowcase = dynamic(() => import("@/components/sections/solutions-showcase").then((mod) => mod.SolutionsShowcase), {
  loading: () => <div className="glass rounded-2xl p-6 text-muted">Загружаем решения...</div>
});

export default async function Home() {
  const [caseItems, faq] = await Promise.all([getCases(), getFaq()]);

  return (
    <div className="space-y-24 pb-24 pt-10">
      <section className="relative overflow-hidden">
        <FlowLines />
        <GradientOrb />
        <Container>
          <Reveal>
            <div className="noise space-y-8 rounded-3xl border border-yellow-300/15 bg-gradient-to-br from-yellow-300/10 via-transparent to-violet-500/10 px-6 py-16 md:px-12">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-yellow-200">Beeline Enterprise Platform • Big Data & AI</p>
              <h1 className="max-w-5xl text-5xl font-semibold leading-tight md:text-7xl">Новая архитектура AI-решений для enterprise</h1>
              <p className="max-w-3xl text-lg text-muted">Единая платформа данных, AI-сервисов и цифровых сотрудников для B2B и госсектора. От пилота до промышленного масштаба с SLA и комплаенсом.</p>
              <div className="flex flex-wrap gap-3">
                <Button href="/contacts">Оставить заявку</Button>
                <Button variant="secondary" href="/solutions">Посмотреть решения</Button>
              </div>
              <div className="grid gap-3 text-sm sm:grid-cols-3">
                <p className="glass rounded-xl p-4">Data foundation</p>
                <p className="glass rounded-xl p-4">AI-ready инфраструктура</p>
                <p className="glass rounded-xl p-4">Enterprise-внедрение</p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section id="solutions">
        <Container>
          <SectionTitle eyebrow="Решения" title="8 флагманских блоков" description="Стратегические продуктовые направления для крупных компаний и государства." />
          <SolutionsShowcase items={solutionsData} />
        </Container>
      </section>

      <section>
        <Container>
          <SectionTitle eyebrow="Флагман" title="Цифровые AI-сотрудники" description="Продуктовая линейка AI-агентов для функций бизнеса. Это не чат-боты, а управляемые enterprise-модули." />
          <div className="mb-6 grid gap-6 lg:grid-cols-5">
            <div className="lg:col-span-3"><AIAgentsDiagram /></div>
            <div className="space-y-3 lg:col-span-2">
              <div className="glass rounded-xl p-4 text-sm">Модель управления ролями, качеством и аудитом.</div>
              <div className="glass rounded-xl p-4 text-sm">Интеграции с CRM, BPM, документооборотом и почтой.</div>
              <div className="glass rounded-xl p-4 text-sm">Метрики эффективности по каждому AI-сотруднику.</div>
            </div>
          </div>
          <AiAgentsGrid items={aiAgentsData} />
        </Container>
      </section>

      <section id="cases">
        <Container>
          <SectionTitle eyebrow="Кейсы" title="Реальные внедрения" />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {caseItems.slice(0, 6).map((c: CaseItem) => (
              <article key={c.company} className="glass rounded-2xl p-5 transition-transform hover:-translate-y-1">
                <h3 className="text-xl">{c.company}</h3>
                <p className="text-sm text-yellow-200">{c.industry}</p>
                <p className="mt-2 text-sm text-muted">{c.challenge}</p>
                <p className="mt-2 text-sm">{c.impact}</p>
              </article>
            ))}
          </div>
          <div className="mt-6"><Button href="/cases" variant="secondary">Все кейсы</Button></div>
        </Container>
      </section>

      <section id="industries">
        <Container>
          <SectionTitle eyebrow="Отрасли" title="10 индустрий в фокусе" description="Для каждой отрасли — отдельный набор enterprise-кейсов и сценариев внедрения." />
          <div className="grid-pattern rounded-2xl border border-white/10 p-6">
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {industriesData.map((item) => <span key={item.id} className="glass rounded-lg px-3 py-2 text-sm">{item.title}</span>)}
            </div>
            <div className="mt-5"><Button variant="secondary" href="/industries">Открыть отраслевые кейсы</Button></div>
          </div>
        </Container>
      </section>

      <section id="faq">
        <Container>
          <SectionTitle eyebrow="FAQ" title="Частые вопросы" />
          <div className="space-y-3">
            {faq.map((f: FaqItem) => (
              <details key={f.question} className="glass rounded-xl p-4">
                <summary className="cursor-pointer font-medium">{f.question}</summary>
                <p className="mt-2 text-sm text-muted">{f.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 p-8">
            <DotMesh />
            <SectionTitle eyebrow="Старт" title="Обсудим внедрение под ваш контур" description="Оставьте заявку — сформируем дорожную карту и архитектуру под ваши KPI." />
            <LeadForm />
          </div>
        </Container>
      </section>
    </div>
  );
}
