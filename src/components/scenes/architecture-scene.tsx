"use client";

import { useMemo, useRef, useState } from "react";
import { useSceneProgress } from "@/lib/motion/useSceneProgress";
import { BottomSheet } from "@/components/ui/bottom-sheet";

const nodes = [
  { title: "Ingestion", io: ["Input: API/streams", "Process: normalize", "Output: curated events"] },
  { title: "Governance", io: ["Input: metadata", "Process: policies", "Output: access rules"] },
  { title: "Models", io: ["Input: features", "Process: train/serve", "Output: decisions"] },
  { title: "Agents", io: ["Input: goals", "Process: orchestration", "Output: actions"] },
  { title: "Observability", io: ["Input: telemetry", "Process: monitor", "Output: SLA insights"] }
];

export function ArchitectureScene() {
  const ref = useRef<HTMLElement | null>(null);
  const progress = useSceneProgress(ref);
  const [active, setActive] = useState<typeof nodes[number] | null>(null);
  const highlighted = useMemo(() => Math.max(0, Math.min(nodes.length - 1, Math.floor(progress * nodes.length))), [progress]);

  return (
    <section ref={ref} className="scene min-h-[180vh] py-20" data-scene="trust">
      <div className="mx-auto max-w-5xl px-4">
        <p className="text-xs uppercase tracking-[0.08em] text-yellow-200">ARCHITECTURE</p>
        <h2 className="mt-2">Live pipeline</h2>
        <div className="mt-6 space-y-3">
          {nodes.map((node, idx) => (
            <button key={node.title} onClick={() => setActive(node)} className={`relative w-full rounded-2xl border p-4 text-left transition ${idx <= highlighted ? "border-orange-300/70 bg-orange-300/10" : "border-white/10 bg-white/5"}`}>
              <span className="text-sm font-semibold">{node.title}</span>
            </button>
          ))}
        </div>
      </div>

      <BottomSheet open={Boolean(active)} onClose={() => setActive(null)} title={active?.title ?? "Node"}>
        <ul className="space-y-2 text-sm text-muted">{active?.io.map((line) => <li key={line}>{line}</li>)}</ul>
      </BottomSheet>
    </section>
  );
}
