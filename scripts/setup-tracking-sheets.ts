import "server-only";

import {
  getGoogleSheetsClient,
  quoteSheetName,
} from "../lib/google-sheets";
import { getTrackingEnv, TrackingEnvError } from "../lib/tracking-env";
import {
  CLICK_HISTORY_HEADERS,
  CLICK_SUMMARY_HEADERS,
  TRACKING_ACTIONS,
  TRACKING_ACTION_KEYS,
  VISITOR_HEADERS,
} from "../types/tracking";

class SafeSetupError extends Error {}

type SheetSpec = {
  role: string;
  title: string;
  headers: readonly string[];
};

function rowsFrom(value: unknown): string[][] {
  if (!Array.isArray(value)) return [];

  return value.map((row) =>
    Array.isArray(row)
      ? row.map((cell) => (cell === undefined || cell === null ? "" : String(cell)))
      : [],
  );
}

function formulaSeparator(locale: string): "," | ";" {
  try {
    return Intl.NumberFormat(locale.replace("_", "-"))
      .format(1.1)
      .includes(",")
      ? ";"
      : ",";
  } catch {
    throw new SafeSetupError(
      `Unsupported spreadsheet locale "${locale}". No data was changed.`,
    );
  }
}

async function setup(): Promise<void> {
  const env = getTrackingEnv();
  const sheets = getGoogleSheetsClient();
  const metadata = await sheets.spreadsheets.get({
    spreadsheetId: env.spreadsheetId,
    fields: "properties.locale,sheets.properties.title",
  });
  const locale = metadata.data.properties?.locale;

  if (!locale) {
    throw new SafeSetupError("The spreadsheet locale could not be determined.");
  }

  const specs: SheetSpec[] = [
    {
      role: "visitors",
      title: env.visitorsTab,
      headers: VISITOR_HEADERS,
    },
    {
      role: "click summary",
      title: env.clickSummaryTab,
      headers: CLICK_SUMMARY_HEADERS,
    },
    {
      role: "click history",
      title: env.clickHistoryTab,
      headers: CLICK_HISTORY_HEADERS,
    },
  ];
  const existingTitles = new Set(
    metadata.data.sheets
      ?.map((sheet) => sheet.properties?.title)
      .filter((title): title is string => Boolean(title)) || [],
  );
  const missing = specs.filter((spec) => !existingTitles.has(spec.title));

  if (missing.length) {
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId: env.spreadsheetId,
      requestBody: {
        requests: missing.map((spec) => ({
          addSheet: { properties: { title: spec.title } },
        })),
      },
    });
  }

  for (const spec of specs) {
    const headerResponse = await sheets.spreadsheets.values.get({
      spreadsheetId: env.spreadsheetId,
      range: `${quoteSheetName(spec.title)}!1:1`,
    });
    const current = rowsFrom(headerResponse.data.values)[0] || [];

    if (!current.length) {
      await sheets.spreadsheets.values.update({
        spreadsheetId: env.spreadsheetId,
        range: `${quoteSheetName(spec.title)}!A1`,
        valueInputOption: "RAW",
        requestBody: { values: [[...spec.headers]] },
      });
    } else if (
      current.length !== spec.headers.length ||
      current.some((header, index) => header !== spec.headers[index])
    ) {
      throw new SafeSetupError(
        `Header mismatch in the ${spec.role} tab. Existing data was not changed.`,
      );
    }
  }

  const summaryResponse = await sheets.spreadsheets.values.get({
    spreadsheetId: env.spreadsheetId,
    range: `${quoteSheetName(env.clickSummaryTab)}!A2:D`,
  });
  const summaryRows = rowsFrom(summaryResponse.data.values);
  const rowByAction = new Map<string, number>();
  summaryRows.forEach((row, index) => {
    if (row[0]) rowByAction.set(row[0], index + 2);
  });

  let nextRow = summaryRows.length + 2;
  const separator = formulaSeparator(locale);
  const history = quoteSheetName(env.clickHistoryTab);
  const data = TRACKING_ACTION_KEYS.map((actionKey) => {
    const row = rowByAction.get(actionKey) || nextRow++;
    const action = TRACKING_ACTIONS[actionKey];
    const countFormula = `=COUNTIF(${history}!E:E${separator}A${row})`;
    const lastClickFormula =
      `=IFERROR(INDEX(FILTER(${history}!L:L${separator}` +
      `${history}!E:E=A${row})${separator}COUNTIF(${history}!E:E` +
      `${separator}A${row}))${separator}"")`;

    return {
      range: `${quoteSheetName(env.clickSummaryTab)}!A${row}:D${row}`,
      values: [[actionKey, action.label, countFormula, lastClickFormula]],
    };
  });

  try {
    await sheets.spreadsheets.values.batchUpdate({
      spreadsheetId: env.spreadsheetId,
      requestBody: { valueInputOption: "USER_ENTERED", data },
    });
  } catch {
    throw new SafeSetupError(
      `Unable to write formulas for spreadsheet locale "${locale}". Existing history was not changed.`,
    );
  }

  const verificationResponse = await sheets.spreadsheets.values.get({
    spreadsheetId: env.spreadsheetId,
    range: `${quoteSheetName(env.clickSummaryTab)}!A2:D`,
    valueRenderOption: "FORMATTED_VALUE",
  });
  const hasMissingLastClick = rowsFrom(verificationResponse.data.values).some(
    (row) => Number(row[2]) > 0 && !row[3],
  );

  if (hasMissingLastClick) {
    throw new SafeSetupError(
      "A last_clicked_at formula is still empty for an action with clicks.",
    );
  }

  console.log(
    `Tracking sheets setup complete: 3 tabs checked, 3 headers verified, ${TRACKING_ACTION_KEYS.length} summary actions configured.`,
  );
}

setup().catch((error: unknown) => {
  console.error(
    error instanceof SafeSetupError || error instanceof TrackingEnvError
      ? error.message
      : "Tracking sheets setup failed. Verify credentials and spreadsheet access.",
  );
  process.exitCode = 1;
});
