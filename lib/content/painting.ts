import paintings from "@/data/curated/paintings.json";
import { pickDailyItem } from "@/lib/daily";
import { getCachedMetObject } from "@/lib/content/api";
import type { CuratedPainting, DailyItem } from "@/lib/types";

function toDailyItem(entry: CuratedPainting): DailyItem {
  return {
    id: entry.id,
    category: "painting",
    title: entry.title,
    creator: entry.creator,
    imageUrl: entry.imageUrl,
    sourceUrl: entry.sourceUrl,
    attribution: entry.attribution,
  };
}

export async function getDailyPainting(dateKey: string): Promise<DailyItem> {
  const curated = paintings as CuratedPainting[];
  const selected = pickDailyItem(curated, dateKey, "painting");
  const metEnabled = process.env.MET_API_ENABLED !== "false";

  if (metEnabled && selected.metObjectId) {
    const metObject = await getCachedMetObject(selected.metObjectId);

    if (metObject) {
      return {
        id: `met-${metObject.objectID}`,
        category: "painting",
        title: metObject.title,
        creator: metObject.artistDisplayName || selected.creator,
        imageUrl: metObject.primaryImage,
        sourceUrl: metObject.objectURL,
        attribution: metObject.creditLine || selected.attribution,
      };
    }
  }

  return toDailyItem(selected);
}
