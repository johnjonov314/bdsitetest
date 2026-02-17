"use client";

import { ReactNode, useEffect } from "react";

export function BottomSheet({ open, onClose, title, children }: { open: boolean; onClose: () => void; title: string; children: ReactNode }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[var(--z-sheet)]">
      <button className="absolute inset-0 bg-black/50" aria-label="Закрыть" onClick={onClose} />
      <section className="absolute bottom-0 left-0 right-0 max-h-[78vh] overflow-y-auto rounded-t-2xl border border-white/10 bg-[#111008] p-4 pb-8 shadow-2xl">
        <div className="mb-3 flex items-center justify-between">
          <h4 className="text-lg font-semibold">{title}</h4>
          <button onClick={onClose} className="rounded-lg border border-white/20 px-3 py-1.5 text-sm">Закрыть</button>
        </div>
        {children}
      </section>
    </div>
  );
}
