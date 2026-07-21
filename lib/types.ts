export type Category = "painting" | "photography" | "quote" | "book";

export type DailyItem = {
  id: string;
  category: Category;
  title: string;
  creator: string;
  imageUrl?: string;
  excerpt?: string;
  sourceUrl?: string;
  attribution: string;
};

export type CuratedPainting = DailyItem & {
  metObjectId?: number;
};

export type CuratedBook = DailyItem & {
  isbn?: string;
};
