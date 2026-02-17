const columns = [
  { title: "Ingestion", items: ["API", "Потоки", "Batch"] },
  { title: "Storage", items: ["Lakehouse", "Каталог", "Политики"] },
  { title: "Feature Store", items: ["Признаки", "Версионирование", "Доступ"] },
  { title: "Models", items: ["MLOps", "LLMOps", "Контроль drift"] },
  { title: "Agents", items: ["Оркестрация", "Workflows", "SLA"] },
  { title: "Observability", items: ["Мониторинг", "Алерты", "Audit"] },
  { title: "APIs", items: ["CRM/ERP", "BI", "Внешние сервисы"] }
];

export function ArchitectureMap() {
  return (
    <div className="glass rounded-2xl p-6">
      <div className="grid gap-3 md:grid-cols-7">
        {columns.map((col, idx) => (
          <div key={col.title} className="relative rounded-xl border border-white/10 bg-black/20 p-4">
            {idx < columns.length - 1 ? <span className="arch-link hidden md:block" aria-hidden /> : null}
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-yellow-200">0{idx + 1}</p>
            <h3 className="mt-2 text-sm font-semibold">{col.title}</h3>
            <ul className="mt-2 space-y-1 text-xs text-muted">
              {col.items.map((item) => <li key={item}>• {item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
