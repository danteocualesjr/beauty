import { format } from "date-fns";

export function getDailyKey(date: Date = new Date()): string {
  return format(date, "yyyy-MM-dd");
}

function hashString(value: string): number {
  let hash = 0;

  for (let i = 0; i < value.length; i += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }

  return Math.abs(hash);
}

export function pickDailyItem<T>(items: T[], dateKey: string, category: string): T {
  if (items.length === 0) {
    throw new Error(`No items available for category: ${category}`);
  }

  const index = hashString(`${dateKey}:${category}`) % items.length;
  return items[index];
}

export function pickDailyIndex(length: number, dateKey: string, category: string): number {
  if (length === 0) {
    throw new Error(`No items available for category: ${category}`);
  }

  return hashString(`${dateKey}:${category}`) % length;
}
