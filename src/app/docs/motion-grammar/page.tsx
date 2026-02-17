export default function DocsMotionGrammarPage() {
  return (
    <div className="space-y-6">
      <section className="glass rounded-2xl p-6">
        <h2>Motion concepts (варианты)</h2>
        <ul className="mt-2 space-y-2 text-muted">
          <li>• Concept A: Cinematic Lines — мягкие сценические переходы и акцент на текст.</li>
          <li>• Concept B: Orbital Interface — вокруг ассистента строится motion-идентичность.</li>
          <li>• Concept C: Dense Kinetic — более активная динамика (отклонено как избыточная).</li>
        </ul>
        <p className="mt-2 text-muted">Выбран гибрид A+B: спокойная режиссура скролла + выразительный orb/assistant.</p>
      </section>

      <section className="glass rounded-2xl p-6">
        <h3>Timing tokens</h3>
        <ul className="mt-2 space-y-2 text-muted">
          <li>• Hover: 120–180ms, cubic-bezier(0.22,1,0.36,1)</li>
          <li>• Reveal: 300–450ms</li>
          <li>• Scene transition: 600–900ms</li>
          <li>• Orb breathing: 4–6s</li>
          <li>• Ring rotation: 10–16s hover, 20–28s idle</li>
        </ul>
      </section>

      <section className="glass rounded-2xl p-6">
        <h3>Cursor variants</h3>
        <ul className="mt-2 space-y-2 text-muted">
          <li>• Variant 1 (chosen): dot + wing hint + sting pulse.</li>
          <li>• Variant 2: simple ring + magnetic glow only.</li>
        </ul>
      </section>

      <section className="glass rounded-2xl p-6">
        <h3>Reduced motion policy</h3>
        <p className="text-muted">Отключаем кастомный курсор, ring rotation, sequence-like ambient motion. Сохраняем только лёгкие fade/reveal.</p>
      </section>
    </div>
  );
}
