"use client";

import { useMemo, useState } from "react";
import { industriesData } from "@/lib/data/platform-content";
import { SegmentedControl } from "@/components/ui/segmented-control";

export function IndustriesScene() {
  const subset = industriesData.slice(0, 5);
  const titles = subset.map((item) => item.title);
  const [active, setActive] = useState(titles[0]);
  const current = useMemo(() => subset.find((item) => item.title === active) ?? subset[0], [active, subset]);

  return (
    <section className="scene min-h-[140vh] py-20" data-scene="solutions">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-xs uppercase tracking-[0.08em] text-yellow-200">INDUSTRIES</p>
        <h2 className="mt-2">Сегментированные сценарии</h2>
        <div className="mt-4">
          <SegmentedControl items={titles} active={active} onChange={setActive} />
        </div>
        <article className="glass mt-5 rounded-2xl p-6">
          <h3>{current.title}</h3>
          <p className="mt-2 text-muted">{current.tagline}</p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-muted">
            {current.useCases.slice(0, 3).map((item) => <li key={item}>{item}</li>)}
          </ul>
          <p className="mt-3 text-sm text-yellow-200">example metric: до +12% эффективности процесса</p>
        </article>
      </div>
    </section>
  );
}
