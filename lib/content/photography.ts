import photos from "@/data/curated/photos.json";
import { pickDailyItem, pickDailyIndex } from "@/lib/daily";
import { getCachedUnsplashPhoto, PHOTO_SEARCH_TERMS } from "@/lib/content/api";
import type { DailyItem } from "@/lib/types";

function toDailyItem(entry: DailyItem): DailyItem {
  return {
    id: entry.id,
    category: "photography",
    title: entry.title,
    creator: entry.creator,
    imageUrl: entry.imageUrl,
    sourceUrl: entry.sourceUrl,
    attribution: entry.attribution,
  };
}

export async function getDailyPhotography(dateKey: string): Promise<DailyItem> {
  const curated = photos as DailyItem[];
  const selected = pickDailyItem(curated, dateKey, "photography");

  if (process.env.UNSPLASH_ACCESS_KEY) {
    const termIndex = pickDailyIndex(PHOTO_SEARCH_TERMS.length, dateKey, "photography-query");
    const query = PHOTO_SEARCH_TERMS[termIndex];
    const unsplashPhoto = await getCachedUnsplashPhoto(query, dateKey);

    if (unsplashPhoto) {
      return {
        id: `unsplash-${unsplashPhoto.id}`,
        category: "photography",
        title: unsplashPhoto.alt_description || query,
        creator: unsplashPhoto.user.name,
        imageUrl: unsplashPhoto.urls.regular,
        sourceUrl: unsplashPhoto.links.html,
        attribution: `${unsplashPhoto.user.name}, Unsplash`,
      };
    }
  }

  return toDailyItem(selected);
}
