import Link from "next/link";
import { cn } from "@/lib/utils/cn";

export function BrandLogo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("inline-flex items-center gap-3", className)} aria-label="Beeline Big Data & AI">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <rect x="1" y="1" width="26" height="26" rx="8" fill="#FFDD00" stroke="rgba(255,255,255,0.24)" />
        <path d="M7 18.5h14M7 14h14M7 9.5h9" stroke="#0A0A0A" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
      <span className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-foreground/95">Beeline Big Data & AI</span>
    </Link>
  );
}
