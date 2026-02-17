"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { AiAgentRole } from "@/lib/data/platform-content";
import { trackEvent } from "@/lib/utils/analytics";

const categories = ["Все", "Продажи", "Маркетинг", "Финансы", "Юр", "HR", "Контент", "Управление"] as const;

export function AiAgentsCatalog({ items }: { items: AiAgentRole[] }) {
  const [active, setActive] = useState<(typeof categories)[number]>("Все");

  const visible = useMemo(() => (active === "Все" ? items : items.filter((item) => item.category === active)), [active, items]);

  return (
    <section id="catalog" className="space-y-4">
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-background to-transparent" />
        <div className="flex snap-x gap-2 overflow-x-auto pb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActive(cat);
                trackEvent("pick_role", { category: cat });
              }}
              className={`min-h-11 snap-start rounded-full border px-4 py-2 text-sm ${active === cat ? "border-orange-300/80 bg-orange-300/20 text-yellow-100" : "border-white/15 bg-white/5 text-muted"}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {visible.map((role) => (
          <article key={role.slug} className="glass glow-hover rounded-2xl p-4">
            <p className="text-xs font-medium text-yellow-200">{role.category}</p>
            <h3 className="mt-1 text-lg font-semibold">{role.title}</h3>
            <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-muted">
              {role.outcomes.slice(0, 3).map((outcome) => <li key={outcome}>{outcome}</li>)}
            </ul>
            <p className="mt-2 text-xs text-muted">Пример задачи: {role.exampleTask}</p>
            <Link href={`/ai-agents/${role.slug}`} className="mt-3 inline-block text-sm text-yellow-200">Открыть карточку роли →</Link>
          </article>
        ))}
      </div>
    </section>
  );
}
