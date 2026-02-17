"use client";

import { MouseEvent, ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
};

export function TiltCard({ children, className }: TiltCardProps) {
  const onMove = (event: MouseEvent<HTMLDivElement>) => {
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateX = ((y / rect.height) - 0.5) * -8;
    const rotateY = ((x / rect.width) - 0.5) * 8;
    event.currentTarget.style.setProperty("transform", `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
  };

  return (
    <div
      className={cn("transition-transform duration-300 ease-out will-change-transform", className)}
      style={{ transform: "perspective(900px) rotateX(0deg) rotateY(0deg)" }}
      onMouseMove={onMove}
      onMouseLeave={(event) => event.currentTarget.style.setProperty("transform", "perspective(900px) rotateX(0deg) rotateY(0deg)")}
    >
      {children}
    </div>
  );
}
