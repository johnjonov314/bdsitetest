export function SectionTitle({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="mb-8 space-y-2">
      <p className="font-mono text-xs uppercase tracking-[0.24em] text-primary">{eyebrow}</p>
      <h2 className="text-3xl font-semibold md:text-4xl">{title}</h2>
      {description ? <p className="max-w-3xl text-muted">{description}</p> : null}
    </div>
  );
}
