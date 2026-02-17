"use client";

import { useMemo, useRef } from "react";
import { useSceneProgress } from "@/lib/motion/useSceneProgress";
import { mapRange } from "@/lib/motion/mapRange";

const states = [
  { key: "DATA", label: "DATA", bullets: ["Governance и lineage", "Контроль качества", "Каталог источников"] },
  { key: "AI", label: "AI", bullets: ["Model gateway", "LLMOps/MLOps", "Контроль drift"] },
  { key: "AGENTS", label: "AGENTS", bullets: ["Оркестрация ролей", "SLA и observability", "CRM/ERP integrations"] }
] as const;

export function CoreScene() {
  const ref = useRef<HTMLElement | null>(null);
  const progress = useSceneProgress(ref);

  const idx = useMemo(() => {
    if (progress < 0.33) return 0;
    if (progress < 0.66) return 1;
    return 2;
  }, [progress]);

  const current = states[idx];
  const pulse = mapRange(progress, 0, 1, 0.92, 1.06);

  return (
    <section ref={ref} className="scene min-h-[220vh] py-20" data-scene="core">
      <div className="sticky top-20 mx-auto grid max-w-6xl gap-6 px-4 lg:grid-cols-[1fr,1fr]">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.08em] text-yellow-200">PIPELINE</p>
          <h2>Платформенное ядро Data → AI → Agents</h2>
          <p className="text-muted">Одна сцена и три состояния: данные, интеллект и агентный слой.</p>
          <div className="space-y-3">
            {states.map((item, i) => (
              <div key={item.key} className={`rounded-2xl border p-4 transition ${i === idx ? "border-orange-300/70 bg-orange-300/10" : "border-white/10 bg-white/5"}`}>
                <p className="text-sm font-semibold">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <article className="glass rounded-2xl p-6">
          <div className="mx-auto grid h-40 w-40 place-items-center rounded-full border border-orange-300/40" style={{ transform: `scale(${pulse})` }}>
            <div className="h-24 w-24 rounded-full bg-gradient-to-br from-yellow-300/50 to-orange-400/40" />
          </div>
          <h3 className="mt-4">{current.label}</h3>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-muted">
            {current.bullets.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </article>
      </div>
    </section>
  );
}
