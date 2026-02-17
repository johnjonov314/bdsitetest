# Content Guide: Beeline Big Data & AI

Документ для разработчиков, дизайнеров и маркетинга. Здесь описано, где менять ключевой контент и визуальные правила.

## 1) Где добавлять новые отрасли
Файл: `src/lib/data/platform-content.ts`

Массив: `industriesData`

Структура:
```ts
{
  id: string,
  title: string,
  tagline: string,
  useCases: string[] // минимум 6 кейсов
}
```

Как отобразится:
- страница `/industries` через компонент `IndustriesExplorer`
- главная `/` в блоке «10 индустрий в фокусе»

## 2) Где добавлять новые решения
Файл: `src/lib/data/platform-content.ts`

Массив: `solutionsData`

Структура:
```ts
{
  id: string,
  title: string,
  summary: string,
  enterpriseCases: string[] // минимум 6 кейсов
}
```

Как отобразится:
- страница `/solutions` (интерактивный showcase)
- главная `/` (флагманские блоки)

## 3) Где лежат AI-агенты
Файл: `src/lib/data/platform-content.ts`

Массив: `aiAgentsData`

Структура:
```ts
{
  title: string,
  description: string
}
```

Как отобразится:
- главная `/` в секции «Цифровые AI-сотрудники»

## 4) Как менять цвета темы
Файл: `src/app/globals.css`

Основные CSS-переменные:
- `--background`
- `--foreground`
- `--primary` (акцент Beeline)
- `--accent`
- `--muted`

Рекомендация:
- для dark-tech использовать высокий контраст текста и аккуратный glow только на hover.

## 5) Как подключать/менять анимации
Базовые motion-компоненты:
- `src/components/ui/reveal.tsx` — stagger reveal
- `src/components/motion/tilt-card.tsx` — tilt по hover
- `src/components/motion/page-transition.tsx` — переходы между роутами
- `src/components/motion/cursor-aura.tsx` — курсорная аура (desktop)

Правила:
- анимировать только `transform` и `opacity`
- учитывать `prefers-reduced-motion`
- избегать тяжелых бесконечных циклов

## 6) Где редактировать AI-виджет навигации
Файл: `src/components/layout/ai-assistant-widget.tsx`

Ссылки/пункты виджета — массив `helperLinks`.

## 7) CMS и медиа
- Контент для редакторов: Sanity Studio (через `NEXT_PUBLIC_SANITY_STUDIO_URL`)
- Локальные медиа: `public/media/*`
- Если контент в Sanity недоступен, сайт использует fallback-данные.
