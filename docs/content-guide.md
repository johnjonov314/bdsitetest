# Content Guide — Beeline BigData & AI

Практический гайд для разработчиков, дизайнеров и маркетинга.

## 1) Где править отрасли
Файл: `src/lib/data/platform-content.ts`

Массив: `industriesData`

```ts
{
  id: string,
  title: string,
  tagline: string,
  useCases: string[] // обязательно 6+
}
```

Отображение:
- `/industries` через `IndustriesExplorer`
- краткий список на `/`

## 2) Где править решения
Файл: `src/lib/data/platform-content.ts`

Массив: `solutionsData`

```ts
{
  id: string,
  slug: string,
  title: string,
  summary: string,
  outcomes: string[],
  capabilities: string[],
  enterpriseCases: string[], // минимум 6
  kpi: string[]
}
```

Отображение:
- `/solutions`
- `/solutions/[slug]`
- блок флагманов на `/`

## 3) Где править AI-агентов
Файл: `src/lib/data/platform-content.ts`

Массив: `aiAgentsData`

```ts
{
  slug: string,
  category: "Продажи" | "Маркетинг" | "Финансы" | "Юр" | "HR" | "Контент" | "Управление",
  title: string,
  description: string,
  outcomes: string[],
  exampleTask: string,
  futureMarketplace: boolean
}
```

Отображение:
- `/ai-agents`
- `/ai-agents/[role]`

## 4) Цветовая тема и токены
Файл: `src/app/globals.css`

Ключевые переменные:
- `--background`
- `--foreground`
- `--primary` (beeline-акцент)
- `--accent`
- `--muted`

## 5) Анимации
Файлы:
- `src/components/ui/reveal.tsx`
- `src/components/motion/tilt-card.tsx`
- `src/components/motion/page-transition.tsx`
- `src/components/motion/cursor-aura.tsx`
- `src/components/sections/hero-data-flow.tsx`

Правила:
- только `transform` + `opacity`
- уважать `prefers-reduced-motion`
- не добавлять тяжёлые бесконечные циклы без паузы

## 6) Как загружать видео
Папка: `public/media/hero/`

Рекомендации:
- форматы: `webm` + `mp4` fallback
- размер: желательно до 3–5MB
- preload: `metadata`
- mobile fallback: статичный/градиентный фон

Naming:
- `hero-dataflow-v1.webm`
- `hero-dataflow-v1.mp4`

## 7) Mobile Safari checklist
- touch-target ≥ 44px
- нет критичных hover-only действий
- safe-area учтён
- на reduced motion отключаются тяжёлые эффекты

## 8) Переключение heavy-motion
- Базово heavy эффекты отключаются через `prefers-reduced-motion`.
- Если нужен полный kill-switch, добавляйте feature-flag в `siteConfig` и проверяйте его в motion-компонентах.

## 9) Release QA
Запуск перед релизом:
```bash
npm run lint
npm run typecheck
npm run build
```


## 10) AI assistant widget
Файл: `src/components/layout/ai-assistant-widget.tsx`

Что можно менять:
- пресеты сценариев (подбор решения / KPI / архитектура)
- структуру preview-ответа
- query prefill для `/contacts`

Важно:
- не перекрывать контент на mobile
- CTA всегда должен вести в лид-форму с prefill

## 11) Scroll scenes на главной
Файлы:
- `src/components/sections/scroll-scenes.tsx`
- `src/app/page.tsx` (`data-scene` у секций)
- `src/app/globals.css` (`.scene-*` слои)

Правило: менять только 5–6 сцен и держать low-contrast фон, чтобы не ухудшать читаемость.
