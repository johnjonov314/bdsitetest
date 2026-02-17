export function ArchitectureMap() {
  const columns = [
    { title: "Ingestion", items: ["API", "Streams", "Batch"] },
    { title: "Governance", items: ["Catalog", "Policies", "Masking"] },
    { title: "AI & Analytics", items: ["Feature Store", "LLM Ops", "BI"] },
    { title: "Delivery", items: ["Dashboards", "Agents", "Alerts"] }
  ];

  return (
    <div className="glass rounded-2xl p-6">
      <div className="grid gap-4 md:grid-cols-4">
        {columns.map((col, idx) => (
          <div key={col.title} className="rounded-xl border border-white/10 bg-black/20 p-4">
            <p className="font-mono text-xs text-primary">0{idx + 1}</p>
            <h3 className="mt-2 text-lg font-semibold">{col.title}</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              {col.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
