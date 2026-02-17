"use client";

import Link from "next/link";

export function HeroScene() {
  return (
    <section className="scene min-h-[120vh] pt-10" data-scene="hero">
      <div className="mx-auto max-w-6xl px-4">
        <div className="noise relative overflow-hidden rounded-3xl border border-yellow-300/20 px-6 py-16 md:px-12 md:py-24">
          <div className="core-orb absolute right-[-60px] top-[-30px] h-64 w-64 rounded-full md:h-80 md:w-80" aria-hidden />
          <div className="relative z-[var(--z-content)] max-w-4xl space-y-6">
            <p className="text-xs uppercase tracking-[0.12em] text-yellow-200">MODULE • AI OPERATING SYSTEM</p>
            <h1 className="reveal-line">Beeline Big Data & AI — Control Room для данных, AI и агентов</h1>
            <p className="reveal-line text-lg text-muted">Сценарная платформа для enterprise-команд: от pipeline до измеримого бизнес-эффекта.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/platform" className="rounded-xl bg-primary px-5 py-3 text-sm font-medium text-black">Открыть платформу</Link>
              <Link href="/ai-agents" className="rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm">AI-агенты</Link>
            </div>
            <div className="hero-video-slot rounded-xl border border-white/10 bg-black/20 p-3 text-xs text-muted">TODO: /public/motion/hero-loop.webm (fallback: gradient scene)</div>
          </div>
        </div>
      </div>
    </section>
  );
}
