import "server-only";

import { createHmac, randomUUID } from "node:crypto";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { z } from "zod";

import { getTrackingEnv } from "@/lib/tracking-env";
import type { TrackingApiResponse } from "@/types/tracking";

const uuidSchema = z.string().uuid();
const VISITOR_COOKIE = "portfolio_visitor_id";
const SESSION_COOKIE = "portfolio_session_id";

export type TrackingIdentity = {
  visitorId: string;
  sessionId: string;
  ipHash: string;
};

function getAnonymousId(request: NextRequest, name: string): string {
  const value = request.cookies.get(name)?.value;
  return value && uuidSchema.safeParse(value).success ? value : randomUUID();
}

function getIp(request: NextRequest): string {
  return (
    request.headers.get("cf-connecting-ip")?.trim() ||
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip")?.trim() ||
    ""
  );
}

export function getTrackingIdentity(
  request: NextRequest,
): TrackingIdentity {
  const ip = getIp(request);

  return {
    visitorId: getAnonymousId(request, VISITOR_COOKIE),
    sessionId: getAnonymousId(request, SESSION_COOKIE),
    ipHash: ip
      ? createHmac("sha256", getTrackingEnv().hashSecret)
          .update(ip)
          .digest("hex")
      : "",
  };
}

export function trackingResponse(
  body: TrackingApiResponse,
  status: number,
  identity?: TrackingIdentity,
): NextResponse<TrackingApiResponse> {
  const response = NextResponse.json(body, {
    status,
    headers: { "Cache-Control": "no-store" },
  });

  if (!identity) return response;

  const cookieOptions = {
    httpOnly: true,
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
    path: "/",
  };

  response.cookies.set(VISITOR_COOKIE, identity.visitorId, {
    ...cookieOptions,
    maxAge: 60 * 60 * 24 * 365,
  });
  response.cookies.set(SESSION_COOKIE, identity.sessionId, {
    ...cookieOptions,
    maxAge: 60 * 30,
  });

  return response;
}
