import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { ShieldIcon, LockIcon, AuditIcon, CloudIcon, LifebuoyIcon } from "@/components/visuals/line-icons";

const trust = [
  { title: "RBAC", text: "Гибкие роли и зоны доступа по подразделениям.", icon: ShieldIcon },
  { title: "Privacy", text: "Masking и работа с PII в безопасном контуре.", icon: LockIcon },
  { title: "Audit", text: "Полный журнал действий и изменений моделей.", icon: AuditIcon },
  { title: "Контур", text: "On-prem / private cloud с контролем интеграций.", icon: CloudIcon },
  { title: "SLA", text: "24/7 поддержка и прозрачные SLA-показатели.", icon: LifebuoyIcon }
];

const rollout = ["Discovery и оценка текущего ландшафта", "Пилот на одном приоритетном процессе", "Scale: расширение на функции и филиалы", "Поддержка, observability и оптимизация стоимости"];

export default function PlatformPage() {
  return (
    <Container>
      <div className="space-y-8 py-12">
        <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "Платформа" }]} />
        <SectionTitle
          eyebrow="Платформа"
          title="AI Operating System для enterprise"
          description="Платформа объединяет данные, модели и AI-агентов в управляемом контуре с прозрачной безопасностью и измеримыми KPI."
        />

        <section className="grid gap-4 md:grid-cols-5">
          {trust.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="glass rounded-2xl p-4">
                <div className="inline-flex items-center gap-2 text-yellow-200"><Icon /><p className="font-mono text-xs uppercase tracking-[0.12em]">{item.title}</p></div>
                <p className="mt-2 text-sm text-muted">{item.text}</p>
              </article>
            );
          })}
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {[
            "до -30% OPEX на рутинные операции",
            "до +20% скорости принятия решений",
            "до 12 недель до измеримого пилота"
          ].map((metric) => (
            <article key={metric} className="rounded-2xl border border-yellow-300/30 bg-yellow-300/10 p-4 text-sm">
              {metric}
            </article>
          ))}
        </section>

        <section className="glass rounded-2xl p-6">
          <h2 className="text-2xl font-semibold">Как внедряем</h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-muted">
            {rollout.map((step) => <li key={step}>{step}</li>)}
          </ol>
        </section>
      </div>
    </Container>
  );
}
