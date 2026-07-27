import "server-only";

import { google, type sheets_v4 } from "googleapis";

import { getTrackingEnv } from "@/lib/tracking-env";

const SHEETS_SCOPE = "https://www.googleapis.com/auth/spreadsheets";

let sheetsClient: sheets_v4.Sheets | undefined;

export function getGoogleSheetsClient(): sheets_v4.Sheets {
  if (sheetsClient) return sheetsClient;

  const env = getTrackingEnv();
  const auth = new google.auth.JWT({
    email: env.serviceAccountEmail,
    key: env.privateKey,
    scopes: [SHEETS_SCOPE],
  });

  sheetsClient = google.sheets({ version: "v4", auth });
  return sheetsClient;
}

export function quoteSheetName(name: string): string {
  return `'${name.replaceAll("'", "''")}'`;
}

export async function appendTrackingRow(
  sheetName: string,
  columns: string,
  values: readonly string[],
): Promise<void> {
  const env = getTrackingEnv();

  await getGoogleSheetsClient().spreadsheets.values.append({
    spreadsheetId: env.spreadsheetId,
    range: `${quoteSheetName(sheetName)}!${columns}`,
    valueInputOption: "RAW",
    insertDataOption: "INSERT_ROWS",
    requestBody: { values: [[...values]] },
  });
}
