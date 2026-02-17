import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";

const blocks = [
  {
    title: "Контент-операции",
    points: [
      "Новые отрасли добавляйте в `industriesData` (минимум 6 кейсов).",
      "Новые флагманские решения добавляйте в `solutionsData`.",
      "Новые роли AI-агентов добавляйте в `aiAgentsData` с категорией и outcomes."
    ]
  },
  {
    title: "Медиа и видео",
    points: [
      "Локальные файлы храните в `public/media/*`.",
      "Видео для hero: webm + mp4 fallback, до 3–5MB, preload=metadata.",
      "Именование: `section-purpose-v1.webm` и `section-purpose-v1.mp4`."
    ]
  },
  {
    title: "QA чеклист",
    points: [
      "Mobile Safari: safe-area, touch targets ≥44px, без hover-only логики.",
      "Reduced motion: проверьте отключение tilt/cursor aura/parallax.",
      "Перед релизом: `npm run lint && npm run typecheck && npm run build`."
    ]
  }
];

export default function PlaybookPage() {
  return (
    <Container>
      <div className="space-y-8 py-12">
        <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "Playbook" }]} />
        <SectionTitle eyebrow="Playbook" title="Гайд для маркетинга, дизайна и разработки" description="Как масштабировать контент, анимации и медиа без поломки архитектуры." />
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
