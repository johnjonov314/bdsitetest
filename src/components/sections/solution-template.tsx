import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function SolutionTemplate({ title, description, bullets }: { title: string; description: string; bullets: string[] }) {
  return (
    <Container>
      <div className="py-12">
        <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "Решения", href: "/solutions" }, { label: title }]} />
        <div className="glass rounded-3xl p-8">
          <h1 className="text-4xl font-semibold">{title}</h1>
          <p className="mt-4 max-w-3xl text-muted">{description}</p>
          <ul className="mt-6 list-disc space-y-2 pl-5 text-muted">{bullets.map((b) => <li key={b}>{b}</li>)}</ul>
          <div className="mt-8 flex gap-3">
            <Button href="/contacts">Оставить заявку</Button>
            <Button href="/solutions" variant="secondary">Посмотреть решения</Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
