import { z } from "zod";

export const TRACKING_ACTION_KEYS = [
  "download_cv",
  "github",
  "linkedin",
  "facebook",
  "instagram",
] as const;

export type TrackingActionKey = (typeof TRACKING_ACTION_KEYS)[number];

export const TRACKING_ACTIONS = {
  download_cv: { type: "cv_download", label: "Download CV" },
  github: { type: "social_media", label: "GitHub" },
  linkedin: { type: "social_media", label: "LinkedIn" },
  facebook: { type: "social_media", label: "Facebook" },
  instagram: { type: "social_media", label: "Instagram" },
} as const satisfies Record<
  TrackingActionKey,
  { type: "cv_download" | "social_media"; label: string }
>;

const pagePathSchema = z
  .string()
  .max(500)
  .startsWith("/")
  .refine((value) => !value.includes("?") && !value.includes("#"));

export const visitPayloadSchema = z
  .object({
    pagePath: pagePathSchema,
    referrer: z.string().max(1000).optional(),
    language: z.string().max(50).optional(),
  })
  .strict();

export const clickPayloadSchema = z
  .object({
    actionKey: z.enum(TRACKING_ACTION_KEYS),
    targetUrl: z
      .string()
      .min(1)
      .max(1500)
      .refine((value) => {
        try {
          return ["http:", "https:"].includes(
            new URL(value, "https://portfolio.invalid").protocol,
          );
        } catch {
          return false;
        }
      }),
    pagePath: pagePathSchema,
  })
  .strict();

export type VisitPayload = z.infer<typeof visitPayloadSchema>;
export type ClickPayload = z.infer<typeof clickPayloadSchema>;
export type TrackingDeviceType = "desktop" | "mobile" | "tablet" | "unknown";

export type TrackingApiResponse = {
  success: boolean;
  message?: string;
};

export const VISITOR_HEADERS = [
  "visit_id",
  "visitor_id",
  "session_id",
  "page_path",
  "referrer",
  "device_type",
  "browser",
  "operating_system",
  "language",
  "ip_hash",
  "visited_at",
] as const;

export const CLICK_SUMMARY_HEADERS = [
  "action_key",
  "action_label",
  "total_clicks",
  "last_clicked_at",
] as const;

export const CLICK_HISTORY_HEADERS = [
  "click_id",
  "visitor_id",
  "session_id",
  "action_type",
  "action_key",
  "action_label",
  "target_url",
  "page_path",
  "device_type",
  "browser",
  "operating_system",
  "clicked_at",
] as const;
