import { getDailyBook } from "@/lib/content/book";
import { getDailyPainting } from "@/lib/content/painting";
import { getDailyPhotography } from "@/lib/content/photography";
import { getDailyQuote } from "@/lib/content/quote";
import { getDailyKey } from "@/lib/daily";
import type { DailyItem } from "@/lib/types";

export type DailySelection = {
  dateKey: string;
  painting: DailyItem;
  photography: DailyItem;
  quote: DailyItem;
  book: DailyItem;
};

export async function getDailySelection(date: Date = new Date()): Promise<DailySelection> {
  const dateKey = getDailyKey(date);

  const [painting, photography, quote, book] = await Promise.all([
    getDailyPainting(dateKey),
    getDailyPhotography(dateKey),
    getDailyQuote(dateKey),
    getDailyBook(dateKey),
  ]);

  return { dateKey, painting, photography, quote, book };
}
