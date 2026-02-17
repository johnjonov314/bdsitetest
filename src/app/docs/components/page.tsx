export default function DocsComponentsPage() {
  const components = [
    "Hero", "SceneSection", "RoleCard", "SolutionCard", "TrustStack", "MetricCard", "AssistantDrawer", "OrbButton", "ArchitectureDiagram", "ContactForm"
  ];

  return (
    <div className="space-y-6">
      <section className="glass rounded-2xl p-6">
        <h2>Component Catalog</h2>
        <p className="mt-2 text-muted">Ниже — базовые reusable-компоненты и правила масштабирования.</p>
      </section>

      {components.map((component) => (
        <section key={component} className="glass rounded-2xl p-6">
          <h3>{component}</h3>
          <p className="mt-2 text-muted">Props: variant, className, data. Layout: desktop + mobile fallback. Mobile: touch-target ≥ 44px, без hover-only критичных действий.</p>
          <pre className="mt-2 overflow-x-auto rounded-xl border border-white/10 bg-black/30 p-4 text-xs">{`// usage\n<${component} />`}</pre>
        </section>
      ))}

      <section className="glass rounded-2xl p-6">
        <h3>Как добавить новую секцию</h3>
        <ol className="mt-2 list-decimal space-y-1 pl-5 text-muted">
          <li>Создайте data-модель в `src/lib/data/*`.</li>
          <li>Соберите section-компонент с map-рендером.</li>
          <li>Добавьте mobile-правила и reduced-motion.</li>
          <li>Включите секцию в страницу и обновите docs.</li>
        </ol>
      </section>
    </div>
  );
}
