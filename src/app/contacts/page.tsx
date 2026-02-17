import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { LeadForm } from "@/components/forms/lead-form";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";

type Props = { searchParams?: { interest?: string; message?: string } };

export default function ContactsPage({ searchParams }: Props) {
  return (
    <Container>
      <div className="space-y-6 py-12 pb-28 md:pb-12">
        <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "Контакты" }]} />
        <SectionTitle eyebrow="Контакты" title="Запросить демо и план внедрения" description="Опишите задачу — вернёмся с архитектурой, KPI-гипотезой и дорожной картой пилота." />

        <div className="grid gap-4 md:grid-cols-3">
          {[
            "Ответим в течение 1 рабочего дня",
            "Подпишем NDA до передачи чувствительных данных",
            "Согласуем пилот и SLA поддержки"
          ].map((item) => (
            <div key={item} className="rounded-xl border border-white/15 bg-white/5 p-3 text-sm text-muted">{item}</div>
          ))}
        </div>

        <LeadForm defaultInterest={searchParams?.interest} defaultMessage={searchParams?.message} />
      </div>
    </Container>
  );
}
