import type { NextRequest } from "next/server";

import {
  getTrackingIdentity,
  trackingResponse,
  type TrackingIdentity,
} from "@/server/services/tracking-identity.service";
import { isTrackingRateLimited } from "@/server/services/tracking-rate-limit.service";
import {
  getTrackingErrorName,
  recordClick,
} from "@/server/services/tracking.service";
import { clickPayloadSchema } from "@/types/tracking";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  let identity: TrackingIdentity | undefined;

  try {
    identity = getTrackingIdentity(request);

    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return trackingResponse(
        { success: false, message: "Invalid tracking payload" },
        400,
        identity,
      );
    }

    const payload = clickPayloadSchema.safeParse(body);
    if (!payload.success) {
      return trackingResponse(
        { success: false, message: "Invalid tracking payload" },
        400,
        identity,
      );
    }

    if (
      isTrackingRateLimited(`click:${identity.ipHash || "missing"}`, 60)
    ) {
      return trackingResponse(
        { success: false, message: "Too many tracking requests" },
        429,
        identity,
      );
    }

    await recordClick(request, identity, payload.data);
    return trackingResponse({ success: true }, 201, identity);
  } catch (error: unknown) {
    console.error("[tracking] click failed:", getTrackingErrorName(error));
    return trackingResponse(
      { success: false, message: "Unable to record click" },
      500,
      identity,
    );
  }
}
