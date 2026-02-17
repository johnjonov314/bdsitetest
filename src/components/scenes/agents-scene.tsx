"use client";

import { useState } from "react";
import { aiAgentsData } from "@/lib/data/platform-content";
import { BottomSheet } from "@/components/ui/bottom-sheet";

export function AgentsScene() {
  const [active, setActive] = useState<typeof aiAgentsData[number] | null>(null);
  const items = aiAgentsData.slice(0, 7);

  return (
    <section className="scene min-h-[160vh] py-20" data-scene="agents">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-xs uppercase tracking-[0.08em] text-yellow-200">AGENT LAYER</p>
        <h2 className="mt-2">Операторы AI-ролей</h2>
        <p className="mt-2 text-muted">Свайп‑галерея с точкой фокуса и быстрым разбором роли.</p>

        <div className="mt-6 flex snap-x gap-4 overflow-x-auto pb-2">
          {items.map((item) => (
            <button key={item.slug} onClick={() => setActive(item)} className="glass min-h-48 min-w-[84%] snap-center rounded-2xl p-5 text-left md:min-w-[42%] lg:min-w-[30%]">
              <p className="text-xs uppercase tracking-[0.08em] text-yellow-200">{item.category}</p>
              <h3 className="mt-2">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.outcomes[0]}</p>
            </button>
          ))}
        </div>
      </div>

      <BottomSheet open={Boolean(active)} onClose={() => setActive(null)} title={active?.title ?? "Роль"}>
        {active ? (
          <div className="space-y-3 text-sm text-muted">
            <p className="text-foreground">{active.description}</p>
            <ul className="list-disc space-y-1 pl-5">{active.outcomes.slice(0, 3).map((o) => <li key={o}>{o}</li>)}</ul>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="rounded-full border border-white/20 px-3 py-1">output: shortlist</span>
              <span className="rounded-full border border-white/20 px-3 py-1">output: report</span>
            </div>
          </div>
        ) : null}
      </BottomSheet>
    </section>
  );
}
