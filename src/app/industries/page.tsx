import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { IndustriesFilter } from "@/components/sections/industries-filter";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";

export default function IndustriesPage() {
  return (
    <Container>
      <div className="py-12">
        <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "Отрасли" }]} />
        <SectionTitle eyebrow="Industries" title="Отраслевые сценарии" description="Выбирайте фильтр, чтобы посмотреть примеры применения." />
        <IndustriesFilter />
      </div>
    </Container>
  );
}
