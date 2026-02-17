# Beeline Big Data & AI — Leadgen website

Современный B2B сайт на Next.js 14+ с dark-премиальным UI, CMS через Sanity, лид-формой и SMTP-отправкой.

## Стек
- Next.js 14 (App Router), TypeScript
- TailwindCSS
- shadcn-style UI компоненты
- Framer Motion
- react-hook-form + zod
- nodemailer
- Sanity (headless CMS + GROQ)

## Быстрый старт
```bash
npm i
npm run dev
```
Открыть: `http://localhost:3000`

## Настройка окружения
1. Скопировать пример переменных:
```bash
cp .env.example .env.local
```
2. Заполнить SMTP и (опционально) Sanity.

## SMTP (лиды)
API: `POST /api/lead`
- Пишет заявку в `console.log`
- Отправляет email через nodemailer при наличии SMTP переменных
- На фронте показывает toast и экран "Заявка отправлена"

## CMS: Sanity
### Установка
```bash
npm i -g sanity
```
### Инициализация проекта Sanity
```bash
sanity init
```
Используйте `sanity.config.ts` и схемы из `sanity/schemas/*`.

### Что управляется из CMS
- Тексты главной (базовая схема)
- Решения
- Кейсы
- FAQ
- Публикации Insights

При отсутствии Sanity-переменных сайт работает на fallback данных (`src/lib/data/fallback-content.ts`).


## Куда загружать контент и картинки
- Для маркетинга: контент, кейсы и публикации редактируются в **Sanity Studio**.
- Для локальных медиа: используйте папку `public/media/*` и подключайте через `next/image`.
- Для дизайна/маркетинга есть внутренняя страница-гайд: `/playbook`.

## Preview draft mode
- Включение: `/api/draft?secret=...&slug=/`
- Отключение: `/api/disable-draft`

## SEO
- `src/app/sitemap.ts`
- `src/app/robots.ts`
- OpenGraph и metadata в `src/app/layout.tsx`

## Страницы
- `/`
- `/platform`
- `/solutions`
- `/solutions/[slug]`
- `/ai-agents`
- `/ai-agents/[role]`
- `/industries`
- `/cases`
- `/insights`
- `/insights/[slug]`
- `/about`
- `/contacts`
- `/playbook`
- `/design-system`

## Гайды команды
- Контент и структура данных: `docs/content-guide.md`


## Demo Agent (LAB API)
Для включения demo-агента добавьте переменные в `.env.local`:

```bash
LAB_API_BASE_URL=https://your-lab-host
LAB_API_KEY=your_lab_key_optional
```

Проверка gateway локально:

```bash
curl -X POST http://localhost:3000/api/agent \
  -H "Content-Type: application/json" \
  -d '{"mode":"solution","message":"Нужно сократить ручные операции в поддержке","context":"manual_test"}'
```

Если `LAB_API_BASE_URL` не задан или LAB недоступна, API вернёт аккуратный fallback в той же структуре.
