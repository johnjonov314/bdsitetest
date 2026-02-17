"use client";

import Link from "next/link";
import { cn } from "@/lib/utils/cn";
import { trackEvent } from "@/lib/utils/analytics";
import { MouseEvent, ReactNode, useRef } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  magnetic?: boolean;
  eventName?: string;
};

const base = "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/80";
const variants = {
  primary: "bg-primary text-black hover:brightness-105",
  secondary: "border border-white/20 bg-white/5 hover:bg-white/10",
  ghost: "text-muted hover:text-foreground"
};

export function Button({ children, href, variant = "primary", className, magnetic = true, eventName, onClick, ...props }: ButtonProps) {
  const targetRef = useRef<HTMLAnchorElement | HTMLButtonElement | null>(null);
  const cls = cn(base, variants[variant], className, magnetic ? "will-change-transform" : "");

  const handleMove = (event: MouseEvent<HTMLElement>) => {
    if (!magnetic || typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 8;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 8;
    targetRef.current?.style.setProperty("transform", `translate3d(${x}px, ${y}px, 0)`);
  };

  const reset = () => targetRef.current?.style.setProperty("transform", "translate3d(0, 0, 0)");

  const handleClick = () => {
    if (eventName) trackEvent(eventName);
    onClick?.();
  };

  if (href) {
    return (
      <Link ref={(node) => { targetRef.current = node; }} href={href} className={cls} onMouseMove={handleMove} onMouseLeave={reset} onClick={handleClick}>
        {children}
      </Link>
    );
  }

  return (
    <button ref={(node) => { targetRef.current = node; }} className={cls} onMouseMove={handleMove} onMouseLeave={reset} onClick={handleClick} {...props}>
      {children}
    </button>
  );
}
