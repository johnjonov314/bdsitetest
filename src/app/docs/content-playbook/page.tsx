export default function DocsContentPlaybookPage() {
  return (
    <div className="space-y-6">
      <section className="glass rounded-2xl p-6">
        <h2>Тон и стиль</h2>
        <ul className="mt-2 space-y-2 text-muted">
          <li>• Пишем как solution architect, коротко и уверенно.</li>
          <li>• Формула: claim → proof.</li>
          <li>• Не используем hype и абстрактные обещания.</li>
        </ul>
      </section>

      <section className="glass rounded-2xl p-6">
        <h3>Шаблоны блоков</h3>
        <p className="text-muted">Solution block: проблема → решение → эффект → архитектура.</p>
        <p className="text-muted">Metric block: метрика → метод расчёта → период.</p>
        <p className="text-muted">Case block: отрасль → контекст → результат.</p>
        <p className="text-muted">Agent card: роль → 3 outcome → пример задачи.</p>
      </section>

      <section className="glass rounded-2xl p-6">
        <h3>Глоссарий</h3>
        <ul className="mt-2 space-y-2 text-muted">
          <li>• Data governance — правила качества, доступа и ответственности данных.</li>
          <li>• LLMOps — эксплуатация LLM в прод-контуре.</li>
          <li>• Agents — исполняемые AI-сценарии над процессами.</li>
        </ul>
      </section>
    </div>
  );
}
