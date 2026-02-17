"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

type Mode = "solution" | "impact" | "architecture";

type AgentResult = {
  understanding: string;
  bundle: string[];
  architecture: string[];
  impact: string[];
  next_steps: string[];
  fallback?: boolean;
};

const presets: { mode: Mode; title: string; prompt: string }[] = [
  { mode: "solution", title: "Подобрать решение", prompt: "Нужно сократить ручные операции и ускорить обслуживание клиентов." },
  { mode: "impact", title: "Оценить эффект", prompt: "Нужна оценка KPI/ROI для запуска AI-агентов в продажах и поддержке." },
  { mode: "architecture", title: "Архитектура внедрения", prompt: "Нужен план архитектуры с on-prem контуром и безопасностью данных." }
];

export function AiAssistantWidget() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<Mode>("solution");
  const [input, setInput] = useState(presets[0].prompt);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AgentResult | null>(null);
  const [flash, setFlash] = useState(false);
  const resultRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener("open-assistant", onOpen);
    return () => window.removeEventListener("open-assistant", onOpen);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  useEffect(() => {
    if (!resultRef.current) return;
    resultRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    setFlash(true);
    const t = setTimeout(() => setFlash(false), 520);
    return () => clearTimeout(t);
  }, [result]);

  const presetTitle = useMemo(() => presets.find((item) => item.mode === mode)?.title ?? "Подобрать решение", [mode]);

  const contactQuery = result
    ? `/contacts?interest=${encodeURIComponent(presetTitle)}&message=${encodeURIComponent(result.understanding)}&mode=${encodeURIComponent(mode)}`
    : "/contacts";

  const submit = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/agent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mode, message: input, context: { page: pathname } })
      });
      if (!response.ok) throw new Error("agent_error");
      const payload = await response.json() as AgentResult;
      setResult(payload);
    } catch {
      setResult({
        understanding: "Сервис временно недоступен, но мы подготовим структурный план вручную на основе вашего запроса.",
        bundle: ["Solution/Agent: Пресейл-ассистент", "Platform blocks: RAG + Governance + Security", "Deployment: private contour"],
        architecture: ["Соберём требования и контур данных", "Подготовим архитектурную схему", "Согласуем SLA и план пилота"],
        impact: ["Снижение рисков старта", "Быстрый запуск пилота с метриками"],
        next_steps: ["Оставьте заявку", "Получите план внедрения в течение 1 рабочего дня"],
        fallback: true
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {open ? <button aria-label="Закрыть AI-помощника" onClick={() => setOpen(false)} className="fixed inset-0 z-[44] bg-black/45 backdrop-blur-[1px] md:hidden" /> : null}

      <div className="pointer-events-none fixed bottom-2 right-2 z-[45] md:bottom-5 md:right-5 md:z-[70]">
        {open ? (
          <section className="pointer-events-auto mb-2 max-h-[min(82vh,680px)] w-[min(95vw,430px)] overflow-y-auto rounded-2xl border border-white/15 bg-[#0f0d09]/95 p-4 shadow-2xl backdrop-blur-xl md:mb-3">
            <div className="sticky top-0 z-10 -mx-1 -mt-1 mb-2 flex items-start justify-between gap-3 rounded-xl bg-[#0f0d09]/95 px-1 pt-1 pb-2">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.08em] text-yellow-300">AI-помощник</p>
                <h3 className="mt-1 text-lg font-semibold">Получить AI-план</h3>
              </div>
              <button className="rounded-md border border-white/20 px-2 py-1 text-xs text-muted hover:text-foreground" onClick={() => setOpen(false)}>Свернуть</button>
            </div>

            <div className="mt-3 grid gap-2">
              {presets.map((preset) => (
                <button
                  key={preset.mode}
                  onClick={() => {
                    setMode(preset.mode);
                    setInput(preset.prompt);
                  }}
                  className={`min-h-11 rounded-xl border px-3 py-2 text-left text-sm transition ${mode === preset.mode ? "border-orange-300/80 bg-orange-300/15" : "border-white/15 bg-white/5 hover:border-white/35"}`}
                >
                  {preset.title}
                </button>
              ))}
            </div>

            <label className="mt-3 grid gap-1 text-xs text-muted">
              Задача
              <textarea rows={3} value={input} onChange={(event) => setInput(event.target.value)} className="w-full rounded-xl border border-white/15 bg-black/20 p-3 text-sm text-foreground" />
            </label>

            <Button type="button" onClick={submit} className="mt-3 w-full" eventName="request_demo">{loading ? "Формируем план..." : "Получить план"}</Button>

            {result ? (
              <article ref={resultRef} className={`mt-3 rounded-xl border border-white/10 bg-white/[0.03] p-3 text-sm ${flash ? "ring-1 ring-orange-300/50" : ""}`}>
                <h4 className="text-sm font-semibold">Understanding</h4>
                <p className="mt-1 text-muted">{result.understanding}</p>
                <Section title="Recommended Bundle" items={result.bundle} />
                <Section title="Architecture" items={result.architecture} />
                <Section title="Impact" items={result.impact} />
                <Section title="Next steps" items={result.next_steps} />
                <div className="mt-3 grid gap-2 sm:grid-cols-[1fr_auto]">
                  <Button href={contactQuery} className="w-full" eventName="request_demo">Запросить демо</Button>
                  <Link href="/contacts" className="inline-flex items-center justify-center rounded-xl border border-white/20 px-3 py-2 text-sm text-muted hover:text-foreground">Контакты</Link>
                </div>
              </article>
            ) : null}
          </section>
        ) : null}

        <button className="assistant-trigger pointer-events-auto group flex min-h-12 items-center gap-3 rounded-full border border-white/25 bg-black/60 p-2 pr-4 backdrop-blur" onClick={() => setOpen((value) => !value)} aria-label="Открыть AI-помощника">
          <span className="orb-mark relative grid h-12 w-12 place-items-center overflow-hidden rounded-full">
            <span className="ringRotate absolute inset-[-16px] grid place-items-center text-[8px] font-medium tracking-[0.18em] text-yellow-200/70">
              <OrbRingText text="BEELINE BIG DATA & AI • " />
            </span>
            <svg viewBox="0 0 64 64" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
              <path d="M32 10 44 17v14L32 38 20 31V17z" className="text-yellow-300" />
              <path d="M32 38v14M20 31l-8 5M44 31l8 5" className="text-orange-300" />
              <circle cx="32" cy="52" r="3" className="text-orange-300" />
              <circle cx="12" cy="36" r="3" className="text-yellow-300" />
              <circle cx="52" cy="36" r="3" className="text-yellow-300" />
            </svg>
          </span>
          <span className="text-sm font-medium">Получить AI-план</span>
        </button>
      </div>

      {!open ? (
        <button onClick={() => setOpen(true)} className="safe-bottom fixed bottom-0 left-0 right-0 z-[43] h-14 border-t border-orange-300/30 bg-black/95 px-4 text-sm font-semibold text-yellow-300 md:hidden">
          Получить AI-план
        </button>
      ) : null}
    </>
  );
}

function OrbRingText({ text }: { text: string }) {
  return (
    <svg width="92" height="92" viewBox="0 0 92 92" aria-hidden>
      <defs>
        <path id="ringPath" d="M46 8a38 38 0 1 1 0 76a38 38 0 1 1 0 -76" />
      </defs>
      <text fill="currentColor">
        <textPath href="#ringPath" startOffset="0%">{text.repeat(4)}</textPath>
      </text>
    </svg>
  );
}

function Section({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="mt-3">
      <h5 className="text-xs font-semibold uppercase tracking-[0.08em] text-orange-200">{title}</h5>
      <ul className="mt-1 space-y-1 text-muted">{items.map((item) => <li key={item}>• {item}</li>)}</ul>
    </section>
  );
}
