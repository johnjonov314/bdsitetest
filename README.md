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

## Preview draft mode
- Включение: `/api/draft?secret=...&slug=/`
- Отключение: `/api/disable-draft`

## SEO
- `src/app/sitemap.ts`
- `src/app/robots.ts`
- OpenGraph и metadata в `src/app/layout.tsx`

## Страницы
- `/`
- `/solutions`
- `/solutions/ai-agents`
- `/solutions/video-analytics`
- `/solutions/geo`
- `/solutions/antifraud`
- `/solutions/speech-analytics`
- `/industries`
- `/cases`
- `/insights`
- `/insights/[slug]`
- `/about`
- `/contacts`
