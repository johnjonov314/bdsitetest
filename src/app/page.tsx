import dynamic from "next/dynamic";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/ui/section-title";
import { HeroDataFlow } from "@/components/sections/hero-data-flow";
import { ArchitectureMap } from "@/components/visuals/architecture-map";
import { ScrollScenes } from "@/components/sections/scroll-scenes";
import { ShieldIcon, LockIcon, AuditIcon, CloudIcon, LifebuoyIcon } from "@/components/visuals/line-icons";
import { CoreStory } from "@/components/sections/core-story";
import { solutionsData, aiAgentsData } from "@/lib/data/platform-content";

const SolutionsShowcase = dynamic(() => import("@/components/sections/solutions-showcase").then((mod) => mod.SolutionsShowcase), {
  loading: () => <div className="glass rounded-2xl p-6 text-muted">Загружаем флагманские решения...</div>
});

const trustBadges = [
  { label: "RBAC и контуры доступа", icon: ShieldIcon },
  { label: "Masking и защита PII", icon: LockIcon },
  { label: "Audit trail по действиям", icon: AuditIcon },
  { label: "On-prem / private cloud", icon: CloudIcon },
  { label: "SLA и 24/7 поддержка", icon: LifebuoyIcon }
];

const cases = [
  { title: "Финтех", problem: "Рост ручной проверки транзакций", impact: "до -38% времени расследований и ускорение реакции на аномалии" },
  { title: "Ритейл", problem: "Потери из-за OOS и несвоевременных поставок", impact: "до +11% доступности полки и снижение списаний" },
  { title: "Telecom", problem: "Высокий churn и перегрузка поддержки", impact: "до +9% удержания и снижение нагрузки на линию поддержки" }
];

const deck = aiAgentsData.slice(0, 6);

export default function Home() {
  return (
    <div className="space-y-24 pb-24 pt-10">
      <ScrollScenes />

      <section data-scene="hero">
        <Container>
          <div className="noise relative overflow-hidden rounded-3xl border border-yellow-300/20 px-6 py-16 md:px-12 md:py-20">
            <HeroDataFlow />
            <div className="relative z-10 max-w-4xl space-y-6">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-yellow-200">AI Operating System • BigData & AI</p>
              <h1 className="text-5xl font-semibold leading-tight md:text-7xl">AI-платформа, которая превращает данные в бизнес-результат</h1>
              <p className="text-lg text-muted">Для enterprise-команд, которым нужны контроль, безопасность и масштабируемый эффект от AI и агентных сценариев.</p>
              <div className="flex flex-wrap gap-3">
                <Button href="/platform" eventName="view_platform">Смотреть платформу</Button>
                <Button href="/ai-agents" variant="secondary" eventName="open_agents">AI-агенты для бизнеса</Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section data-scene="core">
        <Container>
          <SectionTitle eyebrow="Ядро" title="Платформенное ядро Data → AI → Agents" description="Три pillar-блока дают понятную и управляемую архитектуру внедрения." />
          <CoreStory />
        </Container>
      </section>

      <section data-scene="agents">
        <Container>
          <SectionTitle eyebrow="AI-агенты" title="Цифровые AI-сотрудники" description="Выберите роль и получите быстрый сценарий запуска с измеримым KPI." />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {deck.map((role) => (
              <article key={role.slug} className="glass glow-hover rounded-2xl p-5">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-yellow-200">{role.category}</p>
                <h3 className="mt-2 text-lg font-semibold">{role.title}</h3>
                <p className="mt-2 text-sm text-muted">{role.outcomes[0]}</p>
                <p className="mt-2 text-xs text-muted">KPI: {role.outcomes[1]}</p>
                <Link href={`/ai-agents/${role.slug}`} className="mt-3 inline-block text-sm text-yellow-200">Открыть роль →</Link>
              </article>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button href="/ai-agents" eventName="open_agents">Открыть каталог ролей</Button>
            <Button href="/contacts?interest=AI-план" variant="secondary" eventName="request_demo">Попробовать ассистента</Button>
            <span className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-muted">Скоро: маркетплейс и конструктор агентных сценариев</span>
          </div>
        </Container>
      </section>

      <section data-scene="solutions">
        <Container>
          <SectionTitle eyebrow="Флагманы" title="4 ключевых enterprise-направления" description="На главной только ключевые треки. Полная глубина — на странице решений." />
          <SolutionsShowcase items={solutionsData} limit={4} />
        </Container>
      </section>

      <section data-scene="trust">
        <Container>
          <SectionTitle eyebrow="Доверие" title="Архитектура и контроль внедрения" description="Proof stack: схема платформы, security/compliance и измеримые результаты." />
          <ArchitectureMap />
          <div className="mt-4 flex flex-wrap gap-2">
            {trustBadges.map((item) => {
              const Icon = item.icon;
              return <span key={item.label} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-muted"><Icon />{item.label}</span>;
            })}
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {cases.map((item) => (
              <article key={item.title} className="glass rounded-2xl p-4">
                <p className="font-mono text-xs text-yellow-200">{item.title}</p>
                <p className="mt-2 text-sm text-muted">Контекст: {item.problem}</p>
                <p className="mt-2 text-sm">Эффект: {item.impact}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section data-scene="cta">
        <Container>
          <div className="glass rounded-3xl p-8 md:p-10">
            <SectionTitle eyebrow="Запуск" title="Две траектории старта" description="SME — быстрый запуск AI-агентов. Enterprise — платформенное внедрение и масштабирование." />
            <div className="flex flex-wrap gap-3">
              <Button href="/ai-agents" eventName="open_agents">Начать с AI-агентов (SME)</Button>
              <Button href="/contacts" variant="secondary" eventName="request_demo">Обсудить платформу (Enterprise)</Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
