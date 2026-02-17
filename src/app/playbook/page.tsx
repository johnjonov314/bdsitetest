import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";

const blocks = [
  {
    title: "Руководство для маркетинга",
    points: [
      "Контент редактируется через Sanity Studio: главный экран, решения, кейсы, FAQ и материалы аналитики.",
      "Перед публикацией проверяйте тон: enterprise, без B2C-обещаний.",
      "Используйте CTA: «Оставить заявку» как основной, «Посмотреть решения» как вторичный."
    ]
  },
  {
    title: "Руководство для дизайнеров",
    points: [
      "Соблюдайте цветовую систему из токенов в `globals.css`.",
      "Графика — только оригинальные SVG/градиенты/абстракции.",
      "Анимации: только transform/opacity и поддержка reduced motion."
    ]
  },
  {
    title: "Админка и контуры",
    points: [
      "CMS Studio: настройте `NEXT_PUBLIC_SANITY_PROJECT_ID` и `NEXT_PUBLIC_SANITY_DATASET`.",
      "Черновой предпросмотр: `/api/draft?secret=...&slug=/`.",
      "Ручная ре-валидация: `POST /api/revalidate` с `REVALIDATE_SECRET`."
    ]
  }
];

export default function PlaybookPage() {
  return (
    <Container>
      <div className="space-y-8 py-12">
        <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "Гайд команды" }]} />
        <SectionTitle eyebrow="Гайд" title="Материалы для маркетинга, дизайна и администраторов" description="Краткая операционная инструкция по контенту, стилям и CMS Studio." />
        <div className="grid gap-4 md:grid-cols-3">
          {blocks.map((block) => (
            <article key={block.title} className="glass rounded-2xl p-6">
              <h2 className="text-xl font-semibold">{block.title}</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
                {block.points.map((point) => <li key={point}>{point}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </Container>
  );
}
