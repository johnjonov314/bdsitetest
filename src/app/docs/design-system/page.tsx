export default function DocsDesignSystemPage() {
  return (
    <div className="space-y-6">
      <section className="glass rounded-2xl p-6">
        <h2>Palette tokens (strict)</h2>
        <ul className="mt-2 space-y-2 text-muted">
          <li>• Base: black / near-black + white</li>
          <li>• Neutral: серые для текста и бордеров</li>
          <li>• Primary: Beeline yellow</li>
          <li>• Secondary: warm orange</li>
          <li>• Запрет: blue/cyan/purple/green оттенки</li>
        </ul>
      </section>

      <section className="glass rounded-2xl p-6">
        <h3>Typography scale</h3>
        <ul className="mt-2 space-y-2 text-muted">
          <li>• Единый font-family: Inter</li>
          <li>• H1: 48–56, H2: 32–36, H3: 22–24</li>
          <li>• Body: 16–18, Caption: 12–14</li>
          <li>• Веса: 400 / 500 / 600 (+700 для hero)</li>
        </ul>
      </section>

      <section className="glass rounded-2xl p-6">
        <h3>Motion rules</h3>
        <ul className="mt-2 space-y-2 text-muted">
          <li>• Только transform + opacity.</li>
          <li>• Durations: 150–250ms.</li>
          <li>• Respect prefers-reduced-motion.</li>
          <li>• Без heavy WebGL по умолчанию.</li>
        </ul>
      </section>
    </div>
  );
}
