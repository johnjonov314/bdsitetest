import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/ui/section-title";
import { AIAgentsDiagram } from "@/components/visuals/ai-agents-diagram";
import { DotMesh, FlowLines, GradientOrb } from "@/components/visuals/patterns";
import { LeadForm } from "@/components/forms/lead-form";
import { getCases, getFaq, getSolutions } from "@/lib/cms/content";
import { Reveal } from "@/components/ui/reveal";

const industries = ["Госсектор", "Финансы", "Транспорт", "Ритейл", "Промышленность", "Энергетика", "Телеком", "Логистика"];

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
              <h1 className="text-5xl font-semibold md:text-7xl">Beeline Big Data & AI</h1>
              <p className="max-w-3xl text-lg text-muted">Данные оператора и AI-платформа для enterprise и госсектора: от ИИ-агентов до видео и геоаналитики в защищенном контуре.</p>
              <div className="flex flex-wrap gap-3">
                <Button href="/contacts">Оставить заявку</Button>
                <Button variant="secondary" href="/solutions">Посмотреть решения</Button>
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

      <section id="solutions"><Container><SectionTitle eyebrow="Решения" title="Что мы делаем" description="Приоритетные продуктовые направления для роста и эффективности." />
        <div className="grid gap-4 md:grid-cols-2">
          {solutions.slice(0, 4).map((s: any, i: number) => <Reveal key={s.slug} delay={i * 0.05}><article className="glass rounded-2xl p-6"><p className="mb-2 text-xs text-primary">#{s.priority}</p><h3 className="mb-2 text-2xl">{s.title}</h3><p className="text-muted">{s.summary}</p></article></Reveal>)}
        </div></Container></section>

      <section><Container><SectionTitle eyebrow="Spotlight" title="ИИ-агенты" description="Автоматизируют повторяемые операции, сокращают время решения задач и повышают предсказуемость процессов." />
      <div className="grid gap-6 lg:grid-cols-5"><div className="lg:col-span-3"><AIAgentsDiagram /></div><div className="space-y-3 lg:col-span-2">{["Продажи и пресейл", "Контакт-центр", "Внутренние процессы"].map((x)=> <div key={x} className="glass rounded-xl p-4">{x}</div>)}</div></div></Container></section>

      <section><Container><SectionTitle eyebrow="Spotlight" title="Видеоаналитика и наблюдение" description="Безопасность объектов, контроль инцидентов и качество процессов в реальном времени." />
      <div className="glass grid gap-4 rounded-2xl p-6 md:grid-cols-3">{["Контроль периметра", "Детекция инцидентов", "Стандарты процессов"].map((x)=><p key={x} className="rounded-xl border border-white/10 p-4">{x}</p>)}</div></Container></section>

      <section id="cases"><Container><SectionTitle eyebrow="Кейсы" title="Реальные внедрения" />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{caseItems.slice(0,6).map((c:any)=><article key={c.company} className="glass rounded-2xl p-5"><h3 className="text-xl">{c.company}</h3><p className="text-sm text-primary">{c.industry}</p><p className="mt-2 text-sm text-muted">{c.challenge}</p><p className="mt-2 text-sm">{c.impact}</p></article>)}</div>
      <div className="mt-6"><Button href="/cases" variant="secondary">Все кейсы</Button></div></Container></section>

      <section id="industries"><Container><SectionTitle eyebrow="Отрасли" title="Фокус по индустриям" />
      <div className="grid-pattern rounded-2xl border border-white/10 p-6"><div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">{industries.map((i)=><span key={i} className="glass rounded-lg px-3 py-2 text-sm">{i}</span>)}</div></div></Container></section>

      <section><Container><SectionTitle eyebrow="Delivery" title="Как внедряем" />
      <div className="grid gap-4 md:grid-cols-4">{["Discovery", "Пилот", "Интеграция", "Поддержка/SLA"].map((x,idx)=><div key={x} className="glass rounded-xl p-4"><p className="mb-2 text-xs text-primary">0{idx+1}</p><p>{x}</p></div>)}</div></Container></section>

      <section><Container><SectionTitle eyebrow="Комплаенс" title="Безопасность и правовые основания" />
      <div className="glass rounded-2xl p-6 text-muted"><ul className="list-disc space-y-2 pl-5"><li>Работа с агрегированными и обезличенными данными в сценариях аналитики.</li><li>Договорные контуры и разграничение ролей доступа.</li><li>Соответствие требованиям 152-ФЗ и корпоративной ИБ-политике.</li></ul></div></Container></section>

      <section id="faq"><Container><SectionTitle eyebrow="FAQ" title="Частые вопросы" />
      <div className="space-y-3">{faq.map((f:any)=><details key={f.question} className="glass rounded-xl p-4"><summary className="cursor-pointer">{f.question}</summary><p className="mt-2 text-sm text-muted">{f.answer}</p></details>)}</div></Container></section>

      <section><Container><div className="relative overflow-hidden rounded-3xl border border-white/10 p-8"><DotMesh /><SectionTitle eyebrow="Start" title="Обсудим задачу и архитектуру внедрения" description="Оставьте заявку — подготовим релевантный сценарий под ваш контур." /><LeadForm /></div></Container></section>
    </div>
  );
}
