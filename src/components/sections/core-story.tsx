"use client";

import { useEffect, useState } from "react";
import { DataNodeIcon, BrainCircuitIcon, AgentsIcon } from "@/components/visuals/line-icons";

const steps = [
  { id: "data", title: "Data", text: "Подключаем источники, стандартизируем качество и доступ.", points: ["Data governance", "Каталог и lineage", "Контроль качества"] , icon: DataNodeIcon},
  { id: "ai", title: "AI", text: "Управляем модельным слоем от пилота до production.", points: ["MLOps / LLMOps", "Контроль drift", "Управление inference"] , icon: BrainCircuitIcon},
  { id: "agents", title: "Agents", text: "Автоматизируем бизнес-процессы через цифровых сотрудников.", points: ["Оркестрация сценариев", "SLA и observability", "Интеграции CRM/ERP"] , icon: AgentsIcon}
] as const;

export function CoreStory() {
  const [active, setActive] = useState<(typeof steps)[number]["id"]>("data");

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-core-step]"));
    if (!nodes.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!hit) return;
        const id = hit.target.getAttribute("data-core-step") as (typeof steps)[number]["id"] | null;
        if (id) setActive(id);
      },
      { threshold: [0.3, 0.55, 0.8], rootMargin: "-25% 0px -30% 0px" }
    );
    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  const current = steps.find((item) => item.id === active) ?? steps[0];
  const Icon = current.icon;

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr,1fr]">
      <div className="space-y-4">
        {steps.map((step) => (
          <article key={step.id} data-core-step={step.id} className={`rounded-2xl border p-5 ${active === step.id ? "border-orange-300/60 bg-orange-300/10" : "border-white/10 bg-white/5"}`}>
            <h3>{step.title}</h3>
            <p className="mt-2 text-muted">{step.text}</p>
          </article>
        ))}
      </div>
      <aside className="lg:sticky lg:top-24">
        <div className="glass rounded-2xl p-6">
          <div className="inline-flex items-center gap-2 text-yellow-200"><Icon /><span className="text-sm font-medium">{current.title}</span></div>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
            {current.points.map((point) => <li key={point}>{point}</li>)}
          </ul>
        </div>
      </aside>
    </div>
  );
}
