import { NextResponse } from "next/server";

type AgentMode = "solution" | "impact" | "architecture";

type AgentResponse = {
  understanding: string;
  bundle: string[];
  architecture: string[];
  impact: string[];
  next_steps: string[];
};

const fallbackByMode: Record<AgentMode, AgentResponse> = {
  solution: {
    understanding: "Поняли задачу: нужен быстрый путь от запроса бизнеса к работающему AI-сценарию.",
    bundle: [
      "Solution/Agent: AI-пресейл ассистент для квалификации задач",
      "Platform blocks: RAG + Data governance + Observability",
      "Platform blocks: Security (RBAC, masking, audit)",
      "Integrations: CRM и service desk",
      "Deployment: private cloud или on-prem"
    ],
    architecture: [
      "Сбор контекста из CRM и базы знаний",
      "RAG-слой с контролем источников",
      "Оркестрация сценариев через агентный слой",
      "Логирование всех решений в audit trail",
      "SLA-мониторинг качества ответов"
    ],
    impact: [
      "до -30% времени пресейла",
      "до +12% конверсии в демо",
      "до -25% ручных операций на этапе квалификации"
    ],
    next_steps: [
      "Согласовать KPI и baseline",
      "Запустить пилот на 1 процессе за 2–4 недели",
      "Масштабировать на смежные команды"
    ]
  },
  impact: {
    understanding: "Поняли цель: оценить финансовый эффект и сроки окупаемости внедрения AI.",
    bundle: [
      "Solution/Agent: AI-аналитик эффектов внедрения",
      "Platform blocks: витрина KPI + governance + observability",
      "Integrations: BI + ERP + CRM",
      "Security: ролевая модель доступа к финансовым метрикам",
      "Deployment: hybrid contour"
    ],
    architecture: [
      "Собираем baseline по процессу и затратам",
      "Строим KPI-модель до/после",
      "Подключаем данные в единый контур",
      "Формируем управленческий дашборд",
      "Фиксируем KPI ownership и SLA"
    ],
    impact: [
      "до -20% OPEX по рутинным операциям",
      "до +15% скорость принятия решений",
      "прозрачная модель ROI для CFO/CEO"
    ],
    next_steps: [
      "Собрать входные данные по 2–3 процессам",
      "Подтвердить KPI-гипотезы в пилоте",
      "Подготовить план scale"
    ]
  },
  architecture: {
    understanding: "Поняли контекст: нужна архитектура внедрения с контролем безопасности и масштабируемости.",
    bundle: [
      "Solution/Agent: AI-архитектор внедрения",
      "Platform blocks: ingestion, feature store, model gateway",
      "Platform blocks: security, audit, observability",
      "Integrations: API-шина + корпоративные системы",
      "Deployment: on-prem / private cloud"
    ],
    architecture: [
      "Ingestion из внутренних источников",
      "Хранение и каталогизация данных",
      "Feature store и контроль версий",
      "Model gateway для LLM/ML",
      "Agent orchestration по бизнес-функциям",
      "SLA и алертинг в observability"
    ],
    impact: [
      "до -40% рисков внедрения за счёт этапного rollout",
      "до 12 недель до измеримого пилота",
      "единый контур контроля качества и безопасности"
    ],
    next_steps: [
      "Провести архитектурное discovery",
      "Зафиксировать ограничения контура",
      "Запустить пилот с KPI и SLA"
    ]
  }
};

export async function POST(request: Request) {
  const body = await request.json().catch(() => null) as { mode?: AgentMode; message?: string; context?: unknown } | null;
  const mode = body?.mode ?? "solution";
  const message = body?.message?.trim();

  const base = process.env.LAB_API_BASE_URL;
  const key = process.env.LAB_API_KEY;

  if (!base) {
    const fallback = fallbackByMode[mode] ?? fallbackByMode.solution;
    return NextResponse.json({ ...fallback, understanding: message ? `Поняли задачу: ${message}.` : fallback.understanding, fallback: true });
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 25_000);

    const response = await fetch(`${base.replace(/\/$/, "")}/agent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(key ? { Authorization: `Bearer ${key}` } : {})
      },
      body: JSON.stringify({ mode, message, context: body?.context ?? "website_presales" }),
      signal: controller.signal,
      cache: "no-store"
    });

    clearTimeout(timeout);

    if (!response.ok) {
      throw new Error(`LAB status ${response.status}`);
    }

    const data = await response.json() as Partial<AgentResponse>;
    const valid: AgentResponse = {
      understanding: data.understanding ?? fallbackByMode[mode].understanding,
      bundle: data.bundle?.length ? data.bundle : fallbackByMode[mode].bundle,
      architecture: data.architecture?.length ? data.architecture : fallbackByMode[mode].architecture,
      impact: data.impact?.length ? data.impact : fallbackByMode[mode].impact,
      next_steps: data.next_steps?.length ? data.next_steps : fallbackByMode[mode].next_steps
    };

    return NextResponse.json(valid);
  } catch {
    const fallback = fallbackByMode[mode] ?? fallbackByMode.solution;
    return NextResponse.json({ ...fallback, fallback: true });
  }
}
