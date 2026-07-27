import "server-only";

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const entries = new Map<string, RateLimitEntry>();
const WINDOW_MS = 60_000;
let lastCleanup = Date.now();

// ponytail: in-memory limits are best effort per serverless instance; use a shared store only if global enforcement is required.
export function isTrackingRateLimited(key: string, limit: number): boolean {
  const now = Date.now();

  if (now - lastCleanup >= WINDOW_MS) {
    for (const [entryKey, entry] of Array.from(entries)) {
      if (entry.resetAt <= now) entries.delete(entryKey);
    }
    lastCleanup = now;
  }

  const entry = entries.get(key);
  if (!entry || entry.resetAt <= now) {
    entries.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  entry.count += 1;
  return entry.count > limit;
}
