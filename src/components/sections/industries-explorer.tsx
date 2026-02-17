"use client";

import { useMemo, useState } from "react";
import { IndustryItem } from "@/lib/data/platform-content";
import { Reveal } from "@/components/ui/reveal";

export function IndustriesExplorer({ items }: { items: IndustryItem[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");
  const [expanded, setExpanded] = useState(false);

  const selected = useMemo(() => items.find((item) => item.id === active) ?? items[0], [active, items]);
  const visibleUseCases = expanded ? selected.useCases : selected.useCases.slice(0, 6);
  const hasMore = selected.useCases.length > 6;

  return (
    <div className="space-y-5">
      <div className="flex snap-x gap-2 overflow-x-auto pb-1 md:flex-wrap md:overflow-visible">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              setActive(item.id);
              setExpanded(false);
            }}
            className={`snap-start rounded-full border px-4 py-2 text-sm transition ${
              item.id === selected.id
                ? "border-yellow-300 bg-yellow-300/20 text-yellow-100"
                : "border-white/20 bg-white/5 text-muted hover:border-white/40 hover:text-foreground"
            }`}
          >
            {item.title}
          </button>
        ))}
      </div>

      <div className="glass rounded-2xl p-5">
        <h3 className="text-2xl font-semibold">{selected.title}</h3>
        <p className="mt-2 text-muted">{selected.tagline}</p>
      </div>

      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {visibleUseCases.map((useCase, index) => (
          <Reveal key={useCase} delay={index * 0.04}>
            <article className="group glass rounded-2xl p-4 transition-transform hover:-translate-y-1">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-yellow-200/85">Кейс {index + 1}</p>
              <p className="mt-2 text-sm leading-relaxed text-foreground/90">{useCase}</p>
            </article>
          </Reveal>
        ))}
      </div>

      {hasMore ? (
        <button
          onClick={() => setExpanded((value) => !value)}
          className="rounded-xl border border-white/20 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
        >
          {expanded ? "Свернуть" : "Показать ещё"}
        </button>
      ) : null}
    </div>
  );
}
