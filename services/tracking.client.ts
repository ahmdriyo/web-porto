"use client";

import type { ClickPayload, VisitPayload } from "@/types/tracking";

function post(path: string, payload: VisitPayload): void {
  void fetch(path, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  }).catch(() => undefined);
}

export function trackVisit(payload: VisitPayload): void {
  post("/api/tracking/visit", payload);
}

export function trackClick(payload: ClickPayload): void {
  const body = JSON.stringify(payload);

  try {
    if (
      navigator.sendBeacon(
        "/api/tracking/click",
        new Blob([body], { type: "application/json" }),
      )
    ) {
      return;
    }
  } catch {
    // Fall through to keepalive fetch.
  }

  void fetch("/api/tracking/click", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
    keepalive: true,
  }).catch(() => undefined);
}
