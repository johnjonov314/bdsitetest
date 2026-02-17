import dynamic from "next/dynamic";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/ui/section-title";
import { HeroDataFlow } from "@/components/sections/hero-data-flow";
import { ArchitectureMap } from "@/components/visuals/architecture-map";
import { solutionsData, aiAgentsData } from "@/lib/data/platform-content";

const SolutionsShowcase = dynamic(() => import("@/components/sections/solutions-showcase").then((mod) => mod.SolutionsShowcase), {
  loading: () => <div className="glass rounded-2xl p-6 text-muted">Загружаем флагманские решения...</div>
});

const pillars = [
  { title: "Data", bullets: ["Подключение и качество данных", "Data governance и каталог", "Безопасные витрины для подразделений"] },
  { title: "AI", bullets: ["MLOps/LLMOps контур", "Наблюдаемость качества моделей", "Сценарное масштабирование нагрузок"] },
  { title: "Agents", bullets: ["Цифровые сотрудники по ролям", "Оркестрация бизнес-процессов", "Контроль SLA и результатов"] }
];

const deck = aiAgentsData.slice(0, 6);

export default function Home() {
  return (
    <div className="space-y-24 pb-24 pt-10">
      <section>
        <Container>
          <div className="noise relative overflow-hidden rounded-3xl border border-yellow-300/20 px-6 py-16 md:px-12 md:py-20">
            <HeroDataFlow />
            <div className="relative z-10 max-w-4xl space-y-6">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-yellow-200">AI Operating System • BigData & AI</p>
              <h1 className="text-5xl font-semibold leading-tight md:text-7xl">Платформа данных, AI и агентов для enterprise</h1>
              <p className="text-lg text-muted">Оригинальная технологическая сцена: от data-flow до готовых AI-сотрудников и индустриальных решений.</p>
              <div className="flex flex-wrap gap-3">
                <Button href="/platform" eventName="view_platform">Смотреть платформу</Button>
                <Button href="/ai-agents" variant="secondary" eventName="open_agents">AI-агенты для бизнеса</Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <SectionTitle eyebrow="Core" title="Платформенное ядро" description="Три pillar-панели вместо перегруженных гридов." />
          <div className="grid gap-4 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="glass glow-hover rounded-2xl p-6">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-yellow-200">{pillar.title}</p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
                  {pillar.bullets.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <SectionTitle eyebrow="AI-агенты" title="Цифровые AI-сотрудники" description="SME growth-engine: выберите роль и сразу увидьте результат." />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {deck.map((role) => (
              <article key={role.slug} className="glass glow-hover rounded-2xl p-5">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-yellow-200">{role.category}</p>
                <h3 className="mt-2 text-lg font-semibold">{role.title}</h3>
                <p className="mt-2 text-sm text-muted">{role.outcomes[0]}</p>
                <Link href={`/ai-agents/${role.slug}`} className="mt-3 inline-block text-sm text-yellow-200">Открыть роль →</Link>
              </article>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button href="/ai-agents" eventName="open_agents">Открыть каталог ролей</Button>
            <span className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-muted">Скоро: маркетплейс и конструктор сценариев</span>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <SectionTitle eyebrow="Флагманы" title="4 ключевых enterprise-направления" description="На главной — только главное. Вся глубина на странице решений." />
          <SolutionsShowcase items={solutionsData} limit={4} />
        </Container>
      </section>

      <section>
        <Container>
          <SectionTitle eyebrow="Архитектура" title="Снимок архитектуры платформы" description="Ingestion → Storage → Feature store → Models → Agents → Observability → APIs." />
          <ArchitectureMap />
        </Container>
      </section>

      <section>
        <Container>
          <div className="glass rounded-3xl p-8 md:p-10">
            <SectionTitle eyebrow="Дальше" title="Две траектории запуска" description="Выберите путь: быстрый старт для SME или платформенное внедрение для enterprise." />
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
