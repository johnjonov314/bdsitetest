import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { SolutionsShowcase } from "@/components/sections/solutions-showcase";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { solutionsData } from "@/lib/data/platform-content";

export default function SolutionsPage() {
  return (
    <Container>
      <div className="space-y-8 py-12">
        <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "Решения" }]} />
        <SectionTitle
          eyebrow="Решения"
          title="8 флагманских направлений платформы"
          description="Каждое направление включает enterprise-кейсы, архитектурные сценарии и готовность к внедрению в крупном контуре."
        />
        <SolutionsShowcase items={solutionsData} />
      </div>
    </Container>
  );
}
