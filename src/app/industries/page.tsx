import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { IndustriesExplorer } from "@/components/sections/industries-explorer";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { industriesData } from "@/lib/data/platform-content";

export default function IndustriesPage() {
  return (
    <Container>
      <div className="space-y-8 py-12">
        <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "Отрасли" }]} />
        <SectionTitle
          eyebrow="Отрасли"
          title="Отраслевые решения и enterprise-кейсы"
          description="Выберите отрасль и изучите набор актуальных сценариев. Структура готова к масштабированию и добавлению новых кейсов."
        />
        <IndustriesExplorer items={industriesData} />
      </div>
    </Container>
  );
}
