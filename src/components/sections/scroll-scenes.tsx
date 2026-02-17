"use client";

import { useEffect, useState } from "react";

const sceneIds = ["hero", "core", "agents", "solutions", "trust", "cta"] as const;

export function ScrollScenes() {
  const [active, setActive] = useState<(typeof sceneIds)[number]>("hero");

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-scene]"));
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!hit) return;
        const next = hit.target.getAttribute("data-scene") as (typeof sceneIds)[number] | null;
        if (next) setActive(next);
      },
      { threshold: [0.25, 0.5, 0.7], rootMargin: "-20% 0px -30% 0px" }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <div aria-hidden className="scene-backdrop fixed inset-0 -z-10">
      {sceneIds.map((id) => (
        <span key={id} data-active={active === id ? "1" : "0"} className={`scene-layer scene-${id}`} />
      ))}
    </div>
  );
}
