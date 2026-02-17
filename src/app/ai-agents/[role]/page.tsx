import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { aiAgentsData } from "@/lib/data/platform-content";

type Props = { params: { role: string } };

export default function AiAgentRolePage({ params }: Props) {
  const role = aiAgentsData.find((item) => item.slug === params.role);
  if (!role) return notFound();

  return (
    <Container>
      <div className="space-y-8 py-12">
        <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "AI-агенты", href: "/ai-agents" }, { label: role.title }]} />
        <section className="glass rounded-3xl p-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-yellow-200">{role.category}</p>
          <h1 className="mt-3 text-4xl font-semibold">{role.title}</h1>
          <p className="mt-3 text-muted">{role.description}</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
            {role.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}
          </ul>
          <p className="mt-4 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-muted">Пример задачи: {role.exampleTask}</p>
          <div className="mt-6 flex gap-3">
            <Button href="/contacts" eventName="request_demo">Запросить демо</Button>
            <Button href="/ai-agents" variant="secondary">Назад к каталогу</Button>
          </div>
        </section>
      </div>
    </Container>
  );
}
