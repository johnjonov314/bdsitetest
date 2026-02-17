import Link from "next/link";

export default function DocsDeckPage() {
  return (
    <div className="space-y-6">
      <section className="glass rounded-2xl p-6">
        <h2>Release deck</h2>
        <p className="mt-2 text-muted">Deck доступен как markdown-артефакт релиза.</p>
        <Link href="/docs/deck.md" className="mt-3 inline-flex rounded-lg border border-white/20 px-3 py-2 text-sm">Открыть deck.md</Link>
      </section>
    </div>
  );
}
