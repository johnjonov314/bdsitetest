import Link from "next/link";
import { cn } from "@/lib/utils/cn";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

const base = "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium transition-all";
const variants = {
  primary: "bg-primary text-black hover:opacity-90",
  secondary: "border border-white/20 bg-white/5 hover:bg-white/10",
  ghost: "text-muted hover:text-foreground"
};

export function Button({ children, href, variant = "primary", className, ...props }: ButtonProps) {
  const cls = cn(base, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}
