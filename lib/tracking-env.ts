import "server-only";

import { z } from "zod";

const trackingEnvSchema = z.object({
  spreadsheetId: z.string().trim().min(1),
  serviceAccountEmail: z.string().trim().email(),
  privateKey: z
    .string()
    .min(1)
    .transform((value) => value.replace(/\\n/g, "\n")),
  visitorsTab: z.string().trim().min(1),
  clickSummaryTab: z.string().trim().min(1),
  clickHistoryTab: z.string().trim().min(1),
  hashSecret: z.string().min(1),
});

export type TrackingEnv = z.infer<typeof trackingEnvSchema>;

const envNames: Record<string, string> = {
  spreadsheetId: "GOOGLE_SHEETS_SPREADSHEET_ID",
  serviceAccountEmail: "GOOGLE_SERVICE_ACCOUNT_EMAIL",
  privateKey: "GOOGLE_PRIVATE_KEY",
  visitorsTab: "GOOGLE_SHEETS_VISITORS_TAB",
  clickSummaryTab: "GOOGLE_SHEETS_CLICK_SUMMARY_TAB",
  clickHistoryTab: "GOOGLE_SHEETS_CLICK_HISTORY_TAB",
  hashSecret: "TRACKING_HASH_SECRET",
};

export class TrackingEnvError extends Error {
  override name = "TrackingEnvError";
}

let cachedEnv: TrackingEnv | undefined;

export function getTrackingEnv(): TrackingEnv {
  if (cachedEnv) return cachedEnv;

  const result = trackingEnvSchema.safeParse({
    spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
    serviceAccountEmail: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    privateKey: process.env.GOOGLE_PRIVATE_KEY,
    visitorsTab: process.env.GOOGLE_SHEETS_VISITORS_TAB,
    clickSummaryTab: process.env.GOOGLE_SHEETS_CLICK_SUMMARY_TAB,
    clickHistoryTab: process.env.GOOGLE_SHEETS_CLICK_HISTORY_TAB,
    hashSecret: process.env.TRACKING_HASH_SECRET,
  });

  if (!result.success) {
    const fields = Array.from(
      new Set(
        result.error.issues.map((issue) => {
          const field = issue.path.join(".");
          return envNames[field] || field;
        }),
      ),
    );
    throw new TrackingEnvError(
      `Missing or invalid tracking environment variables: ${fields.join(", ")}`,
    );
  }

  cachedEnv = result.data;
  return cachedEnv;
}
