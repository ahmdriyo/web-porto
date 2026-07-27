"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { trackVisit } from "@/services/tracking.client";

const VISIT_WINDOW_MS = 30 * 60 * 1000;
const trackedPaths = new Set<string>();

export default function VisitTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname || trackedPaths.has(pathname)) return;

    const key = `portfolio_visit:${pathname}`;
    const now = Date.now();

    try {
      const lastVisit = Number(sessionStorage.getItem(key));
      if (Number.isFinite(lastVisit) && now - lastVisit < VISIT_WINDOW_MS) {
        trackedPaths.add(pathname);
        return;
      }
      sessionStorage.setItem(key, String(now));
    } catch {
      // Module state still prevents duplicate requests in React Strict Mode.
    }

    trackedPaths.add(pathname);
    trackVisit({
      pagePath: pathname,
      referrer: document.referrer,
      language: navigator.language,
    });
  }, [pathname]);

  return null;
}
