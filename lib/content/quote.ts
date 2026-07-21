import quotes from "@/data/curated/quotes.json";
import { pickDailyItem } from "@/lib/daily";
import type { DailyItem } from "@/lib/types";

export async function getDailyQuote(dateKey: string): Promise<DailyItem> {
  const curated = quotes as DailyItem[];
  return pickDailyItem(curated, dateKey, "quote");
}
