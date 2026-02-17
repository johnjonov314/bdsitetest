import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { aiAgentsData } from "@/lib/data/platform-content";
import { AiAgentsCatalog } from "@/components/sections/ai-agents-catalog";
import { AiScrollTracker } from "@/components/sections/ai-scroll-tracker";

export default function AiAgentsPage() {
  return (
    <Container>
      <AiScrollTracker />
      <div className="space-y-8 py-12">
        <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "AI-агенты" }]} />
        <section className="glass noise rounded-3xl p-8 md:p-10">
          <SectionTitle
            eyebrow="SME"
            title="Цифровые сотрудники для малого и среднего бизнеса"
            description="Выберите роль: бухгалтер, юрист, маркетолог, аналитик — и получите измеримый результат по задаче."
          />
          <Button href="#catalog" eventName="open_agents">Выбрать агента</Button>
        </section>

        <AiAgentsCatalog items={aiAgentsData} />

        <section className="grid gap-4 md:grid-cols-3">
          {[
            { title: "Доверие и качество", text: "Проверка источников, контроль сценариев и мониторинг качества ответов." },
            { title: "Что важно понимать", text: "AI-агенты помогают принимать решения, но не заменяют ответственного сотрудника." },
            { title: "Roadmap", text: "Скоро: маркетплейс ролей, рейтинги, конструктор сценариев и API-каталог." }
          ].map((item) => (
            <article key={item.title} className="glass rounded-2xl p-5">
              <h4 className="font-semibold">{item.title}</h4>
              <p className="mt-2 text-sm text-muted">{item.text}</p>
            </article>
          ))}
        </section>

        <section className="glass rounded-2xl p-6">
          <h3 className="text-2xl font-semibold">Как это работает</h3>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-muted">
            <li>Вы выбираете роль под бизнес-функцию.</li>
            <li>Передаёте вводные, контекст и KPI.</li>
            <li>Получаете результат и план масштабирования.</li>
          </ol>
        </section>

        <div className="safe-bottom fixed bottom-4 left-4 right-4 z-40 md:hidden">
          <Button href="/contacts" className="w-full" eventName="request_demo">Запросить доступ к каталогу</Button>
        </div>
      </div>
    </Container>
  );
}
