import "server-only";

import UAParser from "ua-parser-js";

import type { TrackingDeviceType } from "@/types/tracking";

export type TrackingDevice = {
  deviceType: TrackingDeviceType;
  browser: string;
  operatingSystem: string;
};

export function getTrackingDevice(userAgent: string | null): TrackingDevice {
  if (!userAgent) {
    return {
      deviceType: "unknown",
      browser: "unknown",
      operatingSystem: "unknown",
    };
  }

  const result = new UAParser(userAgent).getResult();
  const deviceType: TrackingDeviceType =
    result.device.type === "mobile" || result.device.type === "tablet"
      ? result.device.type
      : result.device.type
        ? "unknown"
        : "desktop";

  return {
    deviceType,
    browser: result.browser.name || "unknown",
    operatingSystem: result.os.name || "unknown",
  };
}
