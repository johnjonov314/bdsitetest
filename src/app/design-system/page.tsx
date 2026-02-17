import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { TiltCard } from "@/components/motion/tilt-card";
import { AbstractThumb } from "@/components/visuals/abstract-thumb";
import { DataNodeIcon, BrainCircuitIcon, AgentsIcon, ShieldIcon } from "@/components/visuals/line-icons";

export default function DesignSystemPage() {
  return (
    <Container>
      <div className="space-y-12 py-12">
        <SectionTitle eyebrow="Система" title="Дизайн-система" description="Токены, типографика, motion и набор кастомных line-иконок." />

        <section className="grid gap-4 md:grid-cols-3">
          {["#FFDD00", "#0E1118", "#FF8F2D"].map((token) => (
            <div key={token} className="glass rounded-2xl p-6">
              <div className="h-10 rounded-lg" style={{ backgroundColor: token }} />
              <p className="mt-3 font-mono text-xs text-muted">{token}</p>
            </div>
          ))}
        </section>

        <section className="glass rounded-2xl p-6">
          <h2 className="text-3xl font-semibold">Типографика</h2>
          <p className="mt-2 text-muted">Заголовки — плотные и уверенные, подписи и технические метки — в mono.</p>
          <p className="mt-3 font-mono text-xs uppercase tracking-[0.24em] text-primary">Платформа Enterprise AI</p>
        </section>

        <section className="glass rounded-2xl p-6">
          <h3 className="text-xl font-semibold">Иконографика</h3>
          <div className="mt-3 flex gap-4 text-muted">
            <DataNodeIcon className="h-6 w-6" />
            <BrainCircuitIcon className="h-6 w-6" />
            <AgentsIcon className="h-6 w-6" />
            <ShieldIcon className="h-6 w-6" />
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          <TiltCard>
            <div className="glass rounded-2xl p-6">
              <h3 className="text-xl font-semibold">Анимации</h3>
              <p className="mt-2 text-sm text-muted">Наклон карточки, reveal-анимация и магнитный CTA.</p>
              <div className="mt-4 flex gap-3">
                <Button>Основная</Button>
                <Button variant="secondary">Вторичная</Button>
              </div>
            </div>
          </TiltCard>
          <Reveal>
            <div className="glass rounded-2xl p-6">
              <AbstractThumb seed={2} className="h-48" />
            </div>
          </Reveal>
        </section>
      </div>
    </Container>
  );
}
