"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { FlagshipSolution } from "@/lib/data/platform-content";
import { Reveal } from "@/components/ui/reveal";

type Props = {
  items: FlagshipSolution[];
  limit?: number;
};

export function SolutionsShowcase({ items, limit }: Props) {
  const visible = useMemo(() => (limit ? items.slice(0, limit) : items), [items, limit]);
  const [active, setActive] = useState(visible[0]?.id ?? "");
  const selected = visible.find((item) => item.id === active) ?? visible[0];

  return (
    <div className="space-y-6">
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {visible.map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`rounded-2xl border p-4 text-left transition ${item.id === selected.id ? "border-yellow-300/60 bg-yellow-300/10" : "border-white/15 bg-white/[0.03] hover:border-white/40"}`}
          >
            <p className="text-sm font-medium">{item.title}</p>
          </button>
        ))}
      </div>

      <div className="space-y-4">
        <div className="glass rounded-2xl p-6">
          <h3 className="text-2xl font-semibold">{selected.title}</h3>
          <p className="mt-2 text-muted">{selected.summary}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {selected.kpi.map((metric) => <span key={metric} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs">{metric}</span>)}
          </div>
          <Link href={`/solutions/${selected.slug}`} className="mt-4 inline-block text-sm text-yellow-200">Провалиться в решение →</Link>
        </div>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {selected.enterpriseCases.map((caseItem, index) => (
            <Reveal key={caseItem} delay={index * 0.03}>
              <article className="glass glow-hover rounded-2xl p-4">
                <p className="font-mono text-xs uppercase tracking-[0.15em] text-yellow-200/90">Кейс {index + 1}</p>
                <p className="mt-2 text-sm text-foreground/90">{caseItem}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
