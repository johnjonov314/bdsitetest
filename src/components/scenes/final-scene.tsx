"use client";

import Link from "next/link";

export function FinalScene() {
  return (
    <section className="scene min-h-[120vh] py-20" data-scene="cta">
      <div className="mx-auto max-w-5xl px-4">
        <div className="glass rounded-3xl p-8 md:p-10">
          <h2>Запуск через 2 траектории</h2>
          <p className="mt-3 text-muted">SME — быстрый старт с агентами. Enterprise — платформенное внедрение в контуре безопасности.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/ai-agents" className="rounded-xl bg-primary px-5 py-3 text-sm font-medium text-black">Начать с AI-агентов</Link>
            <Link href="/contacts" className="rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm">Обсудить платформу</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
