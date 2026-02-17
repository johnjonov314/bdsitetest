"use client";

import { useEffect, useRef } from "react";

export function CursorAura() {
  const auraRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);
  const wingLeftRef = useRef<HTMLSpanElement | null>(null);
  const wingRightRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const aura = auraRef.current;
    const dot = dotRef.current;
    const wingLeft = wingLeftRef.current;
    const wingRight = wingRightRef.current;
    if (!aura || !dot || !wingLeft || !wingRight) return;

    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (coarse || reduced) {
      aura.style.display = "none";
      return;
    }

    let mx = 0;
    let my = 0;
    let x = 0;
    let y = 0;
    let raf = 0;

    const move = (event: MouseEvent) => {
      mx = event.clientX;
      my = event.clientY;
      aura.style.opacity = "1";
    };

    const animate = () => {
      x += (mx - x) * 0.22;
      y += (my - y) * 0.22;
      aura.style.transform = `translate3d(${x - 20}px, ${y - 20}px, 0)`;
      raf = requestAnimationFrame(animate);
    };

    const leave = () => {
      aura.style.opacity = "0";
      wingLeft.style.opacity = "0";
      wingRight.style.opacity = "0";
    };

    const onOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const interactive = target?.closest("a, button, [role='button'], input, textarea, select");
      if (interactive) {
        dot.style.transform = "scale(1.12)";
        wingLeft.style.opacity = "0.7";
        wingRight.style.opacity = "0.7";
      } else {
        dot.style.transform = "scale(1)";
        wingLeft.style.opacity = "0";
        wingRight.style.opacity = "0";
      }
    };

    const onClick = () => {
      dot.animate(
        [{ transform: "scale(1)" }, { transform: "scale(1.06)" }, { transform: "scale(1)" }],
        { duration: 190, easing: "cubic-bezier(0.22,1,0.36,1)" }
      );
    };

    const onKey = () => {
      aura.style.opacity = "0";
    };

    raf = requestAnimationFrame(animate);
    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mouseout", leave);
    window.addEventListener("mousedown", onClick);
    window.addEventListener("keydown", onKey);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", leave);
      window.removeEventListener("mousedown", onClick);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div ref={auraRef} className="cursor-aura pointer-events-none fixed left-0 top-0 z-[60] h-10 w-10 opacity-0 transition-opacity duration-200" aria-hidden>
      <span ref={wingLeftRef} className="cursor-wing cursor-wing-left" />
      <span ref={wingRightRef} className="cursor-wing cursor-wing-right" />
      <div ref={dotRef} className="cursor-dot" />
    </div>
  );
}
