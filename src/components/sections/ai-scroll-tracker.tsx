"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/utils/analytics";

export function AiScrollTracker() {
  useEffect(() => {
    let sent = false;
    const onScroll = () => {
      if (sent) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max <= 0) return;
      const progress = window.scrollY / max;
      if (progress >= 0.5) {
        sent = true;
        trackEvent("agents_scroll_depth", { depth: "50" });
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
