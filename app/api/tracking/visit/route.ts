import type { NextRequest } from "next/server";

import {
  getTrackingIdentity,
  trackingResponse,
  type TrackingIdentity,
} from "@/server/services/tracking-identity.service";
import { isTrackingRateLimited } from "@/server/services/tracking-rate-limit.service";
import {
  getTrackingErrorName,
  recordVisit,
} from "@/server/services/tracking.service";
import { visitPayloadSchema } from "@/types/tracking";

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

    const payload = visitPayloadSchema.safeParse(body);
    if (!payload.success) {
      return trackingResponse(
        { success: false, message: "Invalid tracking payload" },
        400,
        identity,
      );
    }

    if (
      isTrackingRateLimited(`visit:${identity.ipHash || "missing"}`, 30)
    ) {
      return trackingResponse(
        { success: false, message: "Too many tracking requests" },
        429,
        identity,
      );
    }

    await recordVisit(request, identity, payload.data);
    return trackingResponse({ success: true }, 201, identity);
  } catch (error: unknown) {
    console.error("[tracking] visit failed:", getTrackingErrorName(error));
    return trackingResponse(
      { success: false, message: "Unable to record visit" },
      500,
      identity,
    );
  }
}
