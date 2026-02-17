"use client";

import { useEffect, useState } from "react";

export function PreloadScene() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 700);
    return () => clearTimeout(t);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[var(--z-ui)] grid place-items-center bg-background/96">
      <div className="space-y-2 text-center text-sm text-muted">
        <p>[DATA PIPELINE]</p>
        <p>[AI ENGINE]</p>
        <p>[AGENT LAYER]</p>
      </div>
    </div>
  );
}
