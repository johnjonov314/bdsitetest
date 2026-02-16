"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(localStorage.getItem("bd-cookie-accepted") !== "1");
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-1/2 z-50 w-[95%] max-w-xl -translate-x-1/2 rounded-2xl border border-white/15 bg-black/70 p-4 backdrop-blur">
      <p className="mb-3 text-sm text-muted">Мы используем cookie для корректной работы сайта и аналитики.</p>
      <Button
        onClick={() => {
          localStorage.setItem("bd-cookie-accepted", "1");
          setShow(false);
        }}
      >
        Принять
      </Button>
    </div>
  );
}
