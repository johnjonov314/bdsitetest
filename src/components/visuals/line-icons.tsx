import { cn } from "@/lib/utils/cn";

type IconProps = { className?: string };

export function DataNodeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={cn("h-5 w-5", className)} fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <circle cx="12" cy="18" r="2.5" />
      <path d="M8.2 7.4 10.8 16M15.8 7.4 13.2 16M8.5 6h7" />
    </svg>
  );
}

export function BrainCircuitIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={cn("h-5 w-5", className)} fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
      <path d="M8 8a4 4 0 1 1 8 0v8a4 4 0 1 1-8 0z" />
      <path d="M8 12h8M12 8v8M5 12h3M16 12h3" />
    </svg>
  );
}

export function AgentsIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={cn("h-5 w-5", className)} fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
      <circle cx="12" cy="8" r="3" />
      <path d="M5 19a7 7 0 0 1 14 0M4 12h2M18 12h2" />
    </svg>
  );
}

export function ShieldIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={cn("h-4 w-4", className)} fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
      <path d="M12 3 5 6v6c0 4.2 2.9 7.2 7 9 4.1-1.8 7-4.8 7-9V6z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function LockIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={cn("h-4 w-4", className)} fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

export function AuditIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={cn("h-4 w-4", className)} fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
      <path d="M6 4h12v16H6z" />
      <path d="M9 8h6M9 12h6M9 16h3" />
    </svg>
  );
}

export function CloudIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={cn("h-4 w-4", className)} fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
      <path d="M7 18h10a4 4 0 0 0 .8-7.9A6 6 0 0 0 6.3 9 4.5 4.5 0 0 0 7 18Z" />
    </svg>
  );
}

export function LifebuoyIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={cn("h-4 w-4", className)} fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
      <path d="M9 9 6 6M15 9l3-3M15 15l3 3M9 15l-3 3" />
    </svg>
  );
}
