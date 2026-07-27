import assert from "node:assert/strict";

import {
  clickPayloadSchema,
  visitPayloadSchema,
} from "../types/tracking";
import { isTrackingRateLimited } from "../server/services/tracking-rate-limit.service";
import { formatTrackingTimestamp } from "../server/services/tracking.service";

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

console.log("Tracking validation checks passed.");
