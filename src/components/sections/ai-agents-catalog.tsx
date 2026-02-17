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
      <div className="flex snap-x gap-2 overflow-x-auto pb-1">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActive(cat);
              trackEvent("pick_role", { category: cat });
            }}
            className={`snap-start rounded-full border px-3 py-1 text-sm ${active === cat ? "border-yellow-300/70 bg-yellow-300/20 text-yellow-100" : "border-white/15 bg-white/5 text-muted"}`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {visible.map((role) => (
          <article key={role.slug} className="glass glow-hover rounded-2xl p-4">
            <p className="font-mono text-xs text-yellow-200">{role.category}</p>
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
