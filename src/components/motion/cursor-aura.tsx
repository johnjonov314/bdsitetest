"use client";

import { useEffect, useRef } from "react";

export function CursorAura() {
  const auraRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const aura = auraRef.current;
    if (!aura) return;
    if (window.matchMedia("(pointer: coarse)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      aura.style.display = "none";
      return;
    }

    const move = (event: MouseEvent) => {
      aura.style.opacity = "1";
      aura.style.transform = `translate3d(${event.clientX - 24}px, ${event.clientY - 24}px, 0)`;
    };

    const leave = () => {
      aura.style.opacity = "0";
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseout", leave);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseout", leave);
    };
  }, []);

  return <div ref={auraRef} className="pointer-events-none fixed left-0 top-0 z-[60] h-12 w-12 rounded-full border border-white/20 bg-white/5 opacity-0 transition-opacity duration-200" />;
}
