"use client";

import { useSearchParams } from "next/navigation";

export function QaOverlay() {
  const params = useSearchParams();
  if (params.get("qa") !== "1") return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[var(--z-ui)]">
      <div className="absolute inset-0 border-2 border-dashed border-orange-300/30" />
      <div className="absolute left-2 top-2 rounded bg-black/80 px-2 py-1 text-[10px] text-yellow-200">QA MODE</div>
      <div className="absolute bottom-[env(safe-area-inset-bottom)] left-2 rounded bg-black/80 px-2 py-1 text-[10px] text-yellow-200">safe-area</div>
    </div>
  );
}
