"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const helperLinks = [
  { label: "Открыть платформу", href: "/platform" },
  { label: "Открыть каталог AI-агентов", href: "/ai-agents" },
  { label: "Отраслевые кейсы", href: "/industries" },
  { label: "CMS Studio", href: process.env.NEXT_PUBLIC_SANITY_STUDIO_URL || "/playbook" }
];

export function AiAssistantWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-[70] hidden max-w-xs md:block">
      {open ? (
        <div className="glass mb-3 rounded-2xl p-4">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-yellow-200">AI-навигатор</p>
          <p className="mt-2 text-sm text-muted">Помогу перейти в нужный раздел платформы.</p>
          <div className="mt-3 grid gap-2">
            {helperLinks.map((item) => (
              <Link key={item.label} href={item.href} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10">
                {item.label}
              </Link>
            ))}
          </div>
          <Button className="mt-3 w-full" variant="secondary" onClick={() => setOpen(false)}>Свернуть</Button>
        </div>
      ) : null}

      <button className="group flex items-center gap-3 rounded-full border border-white/20 bg-black/60 p-2 pr-4 backdrop-blur" onClick={() => setOpen((value) => !value)} aria-label="Открыть AI-навигатор">
        <span className="relative grid h-12 w-12 place-items-center overflow-hidden rounded-full bg-gradient-to-br from-yellow-300 via-amber-200 to-yellow-500">
          <svg viewBox="0 0 64 64" className="h-10 w-10">
            <circle cx="32" cy="32" r="16" fill="#0B1020" opacity="0.9" />
            <circle cx="26" cy="30" r="2" fill="#fff" />
            <circle cx="38" cy="30" r="2" fill="#fff" />
            <path d="M24 38 C28 42, 36 42, 40 38" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" />
          </svg>
        </span>
        <span className="text-sm">Чем помочь?</span>
      </button>
    </div>
  );
}
