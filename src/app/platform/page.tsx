import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";

const coreBlocks = [
  { title: "Ingestion", text: "API, streaming и batch-источники в едином контуре." },
  { title: "Storage", text: "Lakehouse, витрины и управление жизненным циклом данных." },
  { title: "Feature Store", text: "Переиспользуемые признаки для ML/AI-сценариев." },
  { title: "Models", text: "MLOps, LLMOps, контроль качества и версий." },
  { title: "Agents", text: "Оркестрация AI-сотрудников и бизнес-процессов." },
  { title: "Observability", text: "SLA, алерты и сквозной мониторинг сервисов." },
  { title: "Security", text: "RBAC, audit trail, приватность и compliance." },
  { title: "APIs", text: "Интеграции в корпоративные системы и приложения." }
];

export default function PlatformPage() {
  return (
    <Container>
      <div className="space-y-8 py-12">
        <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "Платформа" }]} />
        <SectionTitle
          eyebrow="Платформа"
          title="AI Operating System для enterprise"
          description="Архитектура платформы объединяет данные, модели и AI-агентов в одном управляемом технологическом контуре."
        />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {coreBlocks.map((block) => (
            <article key={block.title} className="glass glow-hover rounded-2xl p-4">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-yellow-200">{block.title}</p>
              <p className="mt-2 text-sm text-muted">{block.text}</p>
            </article>
          ))}
        </div>
      </div>
    </Container>
  );
}
