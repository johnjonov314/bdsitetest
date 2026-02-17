export default function DocsOverviewPage() {
  return (
    <div className="space-y-6">
      <section className="glass rounded-2xl p-6">
        <h2>Что это за продукт</h2>
        <p className="mt-2 text-muted">Beeline BigData & AI — enterprise-платформа, которая объединяет data foundation, AI-модели и агентные сценарии в безопасном управляемом контуре.</p>
      </section>

      <section className="glass rounded-2xl p-6">
        <h3>Целевая аудитория и value proposition</h3>
        <ul className="mt-2 space-y-2 text-muted">
          <li>• CEO/CFO/CDO/CIO: прозрачный эффект и контроль рисков.</li>
          <li>• Бизнес-команды: быстрый запуск пилотов с измеримыми KPI.</li>
          <li>• ИТ/ИБ: private contour, RBAC, masking, audit trail.</li>
        </ul>
      </section>

      <section className="glass rounded-2xl p-6">
        <h3>Как работает demo agent</h3>
        <p className="mt-2 text-muted">Ассистент принимает mode + сообщение, вызывает `/api/agent`, получает структурный ответ и направляет пользователя в контактный сценарий с prefill.</p>
      </section>

      <section className="glass rounded-2xl p-6">
        <h3>Site map (Mermaid)</h3>
        <pre className="mt-2 overflow-x-auto rounded-xl border border-white/10 bg-black/30 p-4 text-xs">
{`graph TD
  A[/] --> B[/platform]
  A --> C[/solutions]
  C --> D[/solutions/[slug]]
  A --> E[/ai-agents]
  E --> F[/ai-agents/[role]]
  A --> G[/industries]
  A --> H[/cases]
  A --> I[/contacts]
  A --> J[/docs/*]`}
        </pre>
      </section>
    </div>
  );
}
