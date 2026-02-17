"use client";

import { useEffect, useRef } from "react";

export function HeroDataFlow() {
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = wrapRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        node.dataset.active = entry.isIntersecting ? "1" : "0";
      },
      { threshold: 0.15 }
    );

    observer.observe(node);

    const onMove = (event: MouseEvent) => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || window.matchMedia("(pointer: coarse)").matches) return;
      const rect = node.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 14;
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 14;
      node.style.setProperty("--mx", `${x}px`);
      node.style.setProperty("--my", `${y}px`);
    };

    node.addEventListener("mousemove", onMove, { passive: true });

    return () => {
      observer.disconnect();
      node.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div ref={wrapRef} data-active="1" className="hero-flow pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
      <svg viewBox="0 0 1200 500" className="h-full w-full opacity-75">
        <defs>
          <linearGradient id="flowA" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#FFE45E" />
            <stop offset="0.6" stopColor="#A855F7" />
            <stop offset="1" stopColor="#34D399" />
          </linearGradient>
        </defs>
        <path d="M0 320 C220 180, 320 200, 500 280 S840 390, 1200 260" stroke="url(#flowA)" strokeWidth="2" fill="none" />
        <path d="M0 360 C180 300, 340 260, 540 290 S860 360, 1200 330" stroke="rgba(255,228,94,0.5)" strokeWidth="1.5" fill="none" />
        <path d="M0 260 C240 210, 330 180, 560 220 S900 260, 1200 180" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" fill="none" />
      </svg>
      <span className="hero-orb hero-orb-a" />
      <span className="hero-orb hero-orb-b" />
    </div>
  );
}
