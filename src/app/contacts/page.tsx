import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { LeadForm } from "@/components/forms/lead-form";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";

export default function ContactsPage() {
  return (
    <Container>
      <div className="py-12">
        <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "Контакты" }]} />
        <SectionTitle eyebrow="Contacts" title="Оставить заявку" description="Опишите задачу, и команда предложит архитектуру решения." />
        <LeadForm />
      </div>
    </Container>
  );
}
