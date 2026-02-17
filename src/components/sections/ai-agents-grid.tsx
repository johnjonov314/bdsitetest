import { AiAgentRole } from "@/lib/data/platform-content";
import { Reveal } from "@/components/ui/reveal";

export function AiAgentsGrid({ items }: { items: AiAgentRole[] }) {
  return (
    <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item, index) => (
        <Reveal key={item.title} delay={index * 0.025}>
          <article className="group glass rounded-2xl p-4 transition-all hover:-translate-y-1 hover:border-yellow-200/60 hover:bg-yellow-200/5">
            <h4 className="text-base font-semibold">{item.title}</h4>
            <p className="mt-2 text-sm text-muted">{item.description}</p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
