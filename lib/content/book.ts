import books from "@/data/curated/books.json";
import { pickDailyItem } from "@/lib/daily";
import { getCachedOpenLibraryBook, getOpenLibraryCoverUrl } from "@/lib/content/api";
import type { CuratedBook, DailyItem } from "@/lib/types";

function toDailyItem(entry: CuratedBook): DailyItem {
  return {
    id: entry.id,
    category: "book",
    title: entry.title,
    creator: entry.creator,
    imageUrl: entry.imageUrl,
    excerpt: entry.excerpt,
    sourceUrl: entry.sourceUrl,
    attribution: entry.attribution,
  };
}

export async function getDailyBook(dateKey: string): Promise<DailyItem> {
  const curated = books as CuratedBook[];
  const selected = pickDailyItem(curated, dateKey, "book");
  const openLibraryEnabled = process.env.OPEN_LIBRARY_ENABLED !== "false";

  if (openLibraryEnabled && selected.isbn) {
    const openLibraryBook = await getCachedOpenLibraryBook(selected.isbn);

    if (openLibraryBook) {
      const author = openLibraryBook.authors?.[0]?.name ?? selected.creator;
      const coverId = openLibraryBook.covers?.[0];
      const imageUrl = coverId
        ? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`
        : getOpenLibraryCoverUrl(selected.isbn);

      return {
        id: selected.id,
        category: "book",
        title: openLibraryBook.title ?? selected.title,
        creator: author,
        imageUrl,
        excerpt: selected.excerpt,
        sourceUrl: selected.sourceUrl,
        attribution: `${author}, Open Library`,
      };
    }
  }

  return toDailyItem(selected);
}
