"use client";

export function FloatingCTA() {
  return (
    <button
      className="floating-cta fixed bottom-5 left-1/2 z-[var(--z-cta)] hidden -translate-x-1/2 rounded-full border border-white/15 bg-black/95 px-6 py-3 text-sm font-semibold text-yellow-300 md:block"
      onClick={() => window.dispatchEvent(new Event("open-assistant"))}
    >
      Получить AI-план
    </button>
  );
}
