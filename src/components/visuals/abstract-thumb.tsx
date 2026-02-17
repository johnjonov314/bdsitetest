import { cn } from "@/lib/utils/cn";

export function AbstractThumb({ seed, className }: { seed: number; className?: string }) {
  const gradients = [
    ["#48f2cf", "#7c3aed", "#bef264"],
    ["#22d3ee", "#a855f7", "#4ade80"],
    ["#67e8f9", "#6366f1", "#a3e635"]
  ];

  const [a, b, c] = gradients[seed % gradients.length];

  return (
    <svg viewBox="0 0 360 220" className={cn("h-40 w-full rounded-xl border border-white/10", className)}>
      <defs>
        <linearGradient id={`g-${seed}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={a} stopOpacity="0.9" />
          <stop offset="0.6" stopColor={b} stopOpacity="0.7" />
          <stop offset="1" stopColor={c} stopOpacity="0.9" />
        </linearGradient>
      </defs>
      <rect width="360" height="220" fill="rgba(9,12,20,0.95)" />
      <circle cx={80 + seed * 15} cy={80} r="70" fill={`url(#g-${seed})`} opacity="0.45" />
      <circle cx={270} cy={160 - seed * 8} r="90" fill={`url(#g-${seed})`} opacity="0.35" />
      <path d="M10 190 C100 130, 150 130, 240 165 S320 200, 350 120" stroke="white" strokeOpacity="0.3" strokeWidth="2" fill="none" />
      <path d="M20 160 C100 120, 160 105, 260 130" stroke={c} strokeOpacity="0.8" strokeWidth="2" fill="none" />
    </svg>
  );
}
