export default function DocsQaReleasePage() {
  return (
    <div className="space-y-6">
      <section className="glass rounded-2xl p-6">
        <h2>Release 3 QA checklist</h2>
        <ul className="mt-2 space-y-2 text-muted">
          <li>• Нет артефактов в карточках и sticky-блоках.</li>
          <li>• Нет blue/cyan/purple/green акцентов в UI.</li>
          <li>• Нет global horizontal overflow.</li>
          <li>• Mobile CTA и orb не перекрывают форму/кнопки.</li>
          <li>• Assistant выдаёт structured response с bundle.</li>
          <li>• /docs и /docs/deck доступны из footer и sitemap.</li>
        </ul>
      </section>

      <section className="glass rounded-2xl p-6">
        <h3>Manual smoke matrix</h3>
        <ul className="mt-2 space-y-2 text-muted">
          <li>• 360×800, 390×844, 414×896, 768×1024</li>
          <li>• Desktop pointer:fine + keyboard navigation</li>
          <li>• prefers-reduced-motion: reduce</li>
        </ul>
      </section>
    </div>
  );
}
