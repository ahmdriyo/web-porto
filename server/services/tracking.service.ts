import "server-only";

import { randomUUID } from "node:crypto";
import type { NextRequest } from "next/server";

import { appendTrackingRow } from "@/lib/google-sheets";
import { getTrackingEnv } from "@/lib/tracking-env";
import { getTrackingDevice } from "@/server/services/tracking-device.service";
import type { TrackingIdentity } from "@/server/services/tracking-identity.service";
import {
  TRACKING_ACTIONS,
  type ClickPayload,
  type VisitPayload,
} from "@/types/tracking";

const timestampFormatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Asia/Makassar",
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hourCycle: "h23",
});

export function formatTrackingTimestamp(date: Date): string {
  const parts = Object.fromEntries(
    timestampFormatter
      .formatToParts(date)
      .map(({ type, value }) => [type, value]),
  );

  return `${parts.day}/${parts.month}/${parts.year} ${Number(parts.hour)}:${parts.minute}:${parts.second}`;
}

function decodeLocation(value: string | null): string {
  if (!value) return "unknown";

  try {
    return (
      decodeURIComponent(value).replace(/\p{C}/gu, "").trim().slice(0, 100) ||
      "unknown"
    );
  } catch {
    return value.replace(/\p{C}/gu, "").trim().slice(0, 100) || "unknown";
  }
}

export function getTrackingLocation(headers: Headers) {
  return {
    city: decodeLocation(
      headers.get("x-vercel-ip-city") || headers.get("cf-ipcity"),
    ),
    region: decodeLocation(
      headers.get("x-vercel-ip-country-region") ||
        headers.get("cf-region") ||
        headers.get("cf-region-code"),
    ),
    country: decodeLocation(
      headers.get("x-vercel-ip-country") || headers.get("cf-ipcountry"),
    ),
  };
}

function withoutQueryOrHash(value: string | undefined): string {
  if (!value) return "";

  try {
    const url = new URL(value, "https://portfolio.invalid");
    const relative = url.origin === "https://portfolio.invalid";
    return relative ? url.pathname : `${url.origin}${url.pathname}`;
  } catch {
    return "";
  }
}

export async function recordVisit(
  request: NextRequest,
  identity: TrackingIdentity,
  payload: VisitPayload,
): Promise<void> {
  const env = getTrackingEnv();
  const device = getTrackingDevice(request.headers.get("user-agent"));
  const location = getTrackingLocation(request.headers);

  await appendTrackingRow(env.visitorsTab, "A:N", [
    randomUUID(),
    identity.visitorId,
    identity.sessionId,
    payload.pagePath,
    withoutQueryOrHash(payload.referrer),
    device.deviceType,
    device.browser,
    device.operatingSystem,
    payload.language || "",
    identity.ipHash,
    formatTrackingTimestamp(new Date()),
    location.city,
    location.region,
    location.country,
  ]);
}

export async function recordClick(
  request: NextRequest,
  identity: TrackingIdentity,
  payload: ClickPayload,
): Promise<void> {
  const env = getTrackingEnv();
  const action = TRACKING_ACTIONS[payload.actionKey];
  const device = getTrackingDevice(request.headers.get("user-agent"));
  const location = getTrackingLocation(request.headers);

  await appendTrackingRow(env.clickHistoryTab, "A:O", [
    randomUUID(),
    identity.visitorId,
    identity.sessionId,
    action.type,
    payload.actionKey,
    action.label,
    withoutQueryOrHash(payload.targetUrl),
    payload.pagePath,
    device.deviceType,
    device.browser,
    device.operatingSystem,
    formatTrackingTimestamp(new Date()),
    location.city,
    location.region,
    location.country,
  ]);
}

export function getTrackingErrorName(error: unknown): string {
  return error instanceof Error ? error.name : "UnknownError";
}
