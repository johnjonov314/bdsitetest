import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";

export default function AboutPage() {
  return (
    <Container>
      <div className="py-12">
        <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "О платформе" }]} />
        <SectionTitle eyebrow="Platform" title="О платформе, комплаенсе и правовых основаниях" />
        <div className="space-y-4 text-muted">
          <p className="glass rounded-xl p-5">Платформа поддерживает enterprise-архитектуры: on-prem/private cloud, сегментацию контуров и журналирование действий.</p>
          <p className="glass rounded-xl p-5">Политика обработки ПДн: сбор только необходимых данных, целевая обработка, ограниченные сроки хранения, управление доступом по ролям.</p>
          <p className="glass rounded-xl p-5">Соответствие 152-ФЗ обеспечивается организационными и техническими мерами. Все условия фиксируются договорными документами и SLA.</p>
          <p className="text-sm">Дисклеймер: информация на сайте не является публичной офертой.</p>
        </div>
      </div>
    </Container>
  );
}
