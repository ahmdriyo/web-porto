import assert from "node:assert/strict";

import {
  clickPayloadSchema,
  visitPayloadSchema,
} from "../types/tracking";
import { isTrackingRateLimited } from "../server/services/tracking-rate-limit.service";
import { getTrackingDevice } from "../server/services/tracking-device.service";
import {
  formatTrackingTimestamp,
  getTrackingLocation,
} from "../server/services/tracking.service";

assert.equal(
  visitPayloadSchema.safeParse({ pagePath: "/", unexpected: true }).success,
  false,
);
assert.equal(
  visitPayloadSchema.safeParse({ pagePath: "/?token=secret" }).success,
  false,
);
assert.equal(
  clickPayloadSchema.safeParse({
    actionKey: "github",
    targetUrl: "javascript:alert(1)",
    pagePath: "/",
  }).success,
  false,
);
assert.equal(
  clickPayloadSchema.safeParse({
    actionKey: "download_cv",
    targetUrl: "/cv/ahmad-riyo-kusuma.pdf",
    pagePath: "/",
  }).success,
  true,
);

assert.equal(isTrackingRateLimited("check", 2), false);
assert.equal(isTrackingRateLimited("check", 2), false);
assert.equal(isTrackingRateLimited("check", 2), true);
assert.equal(
  formatTrackingTimestamp(new Date("2026-07-26T17:21:00.000Z")),
  "27/07/2026 1:21:00",
);
assert.equal(
  getTrackingDevice(
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/126.0.0.0 Safari/537.36",
  ).operatingSystem,
  "Windows 10",
);
assert.deepEqual(
  getTrackingLocation(
    new Headers({
      "x-vercel-ip-city": "Banjarmasin",
      "x-vercel-ip-country-region": "KS",
      "x-vercel-ip-country": "ID",
    }),
  ),
  { city: "Banjarmasin", region: "KS", country: "ID" },
);

console.log("Tracking validation checks passed.");
