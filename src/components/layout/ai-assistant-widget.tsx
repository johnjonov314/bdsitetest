"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";

type Preset = {
  id: string;
  title: string;
  question: string;
  summary: string;
  kpi: string;
  architecture: string;
};

const presets: Preset[] = [
  {
    id: "solution",
    title: "Подобрать решение под задачу",
    question: "Нужно снизить ручные операции в клиентском сервисе и ускорить обработку обращений.",
    summary: "Рекомендуем связку AI-агентов поддержки + оркестрацию заявок с контролем качества.",
    kpi: "Ожидаемый эффект: до -35% времени обработки обращений за 8–12 недель.",
    architecture: "Контур: CRM → ingestion → LLM-слой → AI-агент → audit trail и SLA-мониторинг."
  },
  {
    id: "roi",
    title: "Оценить эффект (KPI/ROI)",
    question: "Нужно подготовить оценку ROI внедрения AI в продажи и поддержку.",
    summary: "Собираем baseline, считаем сценарии и формируем матрицу эффектов по подразделениям.",
    kpi: "Ожидаемый эффект: до +12% конверсии лидов и до -28% OPEX на рутинные процессы.",
    architecture: "Контур: BI + исторические данные + KPI-модель + дашборд контроля эффекта."
  },
  {
    id: "architecture",
    title: "Собрать архитектуру внедрения",
    question: "Нужна архитектура AI-платформы с on-prem контуром и безопасным доступом.",
    summary: "Проектируем этапы: data foundation, модельный слой, агентный слой и интеграции.",
    kpi: "Ожидаемый эффект: до -40% рисков внедрения за счёт пилота с измеримыми SLA.",
    architecture: "Контур: data lakehouse → feature store → model gateway → agents orchestration → observability."
  }
];

export function AiAssistantWidget() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<Preset>(presets[0]);
  const [input, setInput] = useState("");

  const result = useMemo(() => {
    const normalized = input.trim();
    if (!normalized) return active;
    return {
      ...active,
      question: normalized,
      summary: `Для задачи «${normalized}» предлагаем старт через пилот на одном процессе и быстрый замер эффекта.`,
      kpi: "Ожидаемый эффект: до -25% времени цикла процесса и прозрачный SLA по каждому этапу.",
      architecture: "Контур: источники данных → AI-модуль → рабочее место сотрудника → мониторинг качества и аудита."
    };
  }, [active, input]);

  const contactQuery = `/contacts?interest=${encodeURIComponent(active.title)}&message=${encodeURIComponent(result.question)}`;

  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-[70] max-w-sm md:bottom-5 md:right-5">
      {open ? (
        <section className="pointer-events-auto mb-3 w-[min(92vw,380px)] rounded-2xl border border-white/15 bg-[#0e1016]/95 p-4 shadow-2xl backdrop-blur-xl">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-yellow-200">AI-помощник</p>
              <h3 className="mt-1 text-lg font-semibold">Подобрать решение</h3>
            </div>
            <button className="rounded-md border border-white/20 px-2 py-1 text-xs text-muted hover:text-foreground" onClick={() => setOpen(false)}>Свернуть</button>
          </div>

          <div className="mt-3 grid gap-2">
            {presets.map((preset) => (
              <button
                key={preset.id}
                onClick={() => setActive(preset)}
                className={`rounded-xl border px-3 py-2 text-left text-sm transition ${active.id === preset.id ? "border-yellow-300/70 bg-yellow-300/15" : "border-white/15 bg-white/5 hover:border-white/35"}`}
              >
                {preset.title}
              </button>
            ))}
          </div>

          <label className="mt-3 grid gap-1 text-xs text-muted">
            Опишите задачу
            <textarea
              rows={3}
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Например: снизить потери в контакт-центре и автоматизировать контроль качества."
              className="w-full rounded-xl border border-white/15 bg-black/20 p-3 text-sm text-foreground"
            />
          </label>

          <article className="mt-3 rounded-xl border border-white/10 bg-white/[0.03] p-3 text-sm">
            <p className="text-foreground">{result.summary}</p>
            <p className="mt-2 text-muted">{result.kpi}</p>
            <p className="mt-2 text-muted">{result.architecture}</p>
          </article>

          <div className="mt-3 flex gap-2">
            <Button href={contactQuery} className="w-full" eventName="request_demo">Получить план</Button>
            <Link href="/ai-agents" className="inline-flex items-center rounded-xl border border-white/20 px-3 text-sm text-muted hover:text-foreground">Каталог</Link>
          </div>
        </section>
      ) : null}

      <button
        className="assistant-trigger pointer-events-auto group flex items-center gap-3 rounded-full border border-white/25 bg-black/55 p-2 pr-4 backdrop-blur"
        onClick={() => setOpen((value) => !value)}
        aria-label="Открыть AI-помощника"
      >
        <span className="orb-mark relative grid h-12 w-12 place-items-center overflow-hidden rounded-full">
          <span className="orb-ring" />
          <span className="orb-core" />
        </span>
        <span className="text-sm font-medium">Подобрать решение</span>
      </button>
    </div>
  );
}
