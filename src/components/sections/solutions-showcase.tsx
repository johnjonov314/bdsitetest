"use client";

import { useState } from "react";
import { FlagshipSolution } from "@/lib/data/platform-content";
import { Reveal } from "@/components/ui/reveal";

export function SolutionsShowcase({ items }: { items: FlagshipSolution[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  return (
    <div className="space-y-6">
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`rounded-2xl border p-4 text-left transition ${
              item.id === active
                ? "border-yellow-300/60 bg-yellow-300/10"
                : "border-white/15 bg-white/[0.03] hover:border-white/40"
            }`}
          >
            <p className="text-sm font-medium">{item.title}</p>
          </button>
        ))}
      </div>

      {items.map((item) =>
        item.id === active ? (
          <div key={item.id} className="space-y-4">
            <div className="glass rounded-2xl p-6">
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-muted">{item.summary}</p>
            </div>
            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {item.enterpriseCases.map((caseItem, index) => (
                <Reveal key={caseItem} delay={index * 0.03}>
                  <article className="glass rounded-2xl p-4 transition-transform hover:-translate-y-1">
                    <p className="font-mono text-xs uppercase tracking-[0.15em] text-yellow-200/90">Enterprise-кейс {index + 1}</p>
                    <p className="mt-2 text-sm text-foreground/90">{caseItem}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        ) : null
      )}
    </div>
  );
}
