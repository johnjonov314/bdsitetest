import Link from "next/link";
import { cn } from "@/lib/utils/cn";

export function BrandLogo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("inline-flex items-center gap-3", className)} aria-label="Beeline Big Data & AI">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <rect x="1" y="1" width="26" height="26" rx="8" fill="url(#logoGrad)" stroke="rgba(255,255,255,0.25)" />
        <path d="M7 18.5h14M7 14h14M7 9.5h9" stroke="#06080F" strokeWidth="2.2" strokeLinecap="round" />
        <defs>
          <linearGradient id="logoGrad" x1="2" y1="2" x2="26" y2="26">
            <stop stopColor="#5DF2D8" />
            <stop offset="0.55" stopColor="#6EE7F9" />
            <stop offset="1" stopColor="#A3FF5A" />
          </linearGradient>
        </defs>
      </svg>
      <span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-foreground/95">Beeline Big Data & AI</span>
    </Link>
  );
}
