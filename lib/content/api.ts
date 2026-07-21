import { unstable_cache } from "next/cache";

const ONE_DAY = 86400;

type MetObjectResponse = {
  objectID: number;
  title: string;
  artistDisplayName: string;
  primaryImage: string;
  objectURL: string;
  creditLine: string;
};

export async function fetchMetObject(objectId: number): Promise<MetObjectResponse | null> {
  try {
    const response = await fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectId}`,
      { next: { revalidate: ONE_DAY } },
    );

    if (!response.ok) {
      return null;
    }

    const data = (await response.json()) as MetObjectResponse;

    if (!data.primaryImage) {
      return null;
    }

    return data;
  } catch {
    return null;
  }
}

export function getCachedMetObject(objectId: number) {
  return unstable_cache(
    async () => fetchMetObject(objectId),
    [`met-object-${objectId}`],
    { revalidate: ONE_DAY },
  )();
}

export const PHOTO_SEARCH_TERMS = [
  "landscape",
  "minimal",
  "portrait",
  "architecture",
  "nature",
  "ocean",
  "forest",
  "light",
  "mist",
  "golden hour",
  "mountains",
  "flowers",
  "city",
  "desert",
  "rain",
  "library",
  "still life",
  "coast",
  "winter",
  "bamboo",
  "stars",
  "lavender",
  "harbor",
  "road",
  "coffee",
  "autumn",
  "reflection",
  "fog",
  "meadow",
  "dawn",
] as const;

type UnsplashPhoto = {
  id: string;
  alt_description: string | null;
  urls: { regular: string };
  links: { html: string };
  user: { name: string };
};

type UnsplashSearchResponse = {
  results: UnsplashPhoto[];
};

export async function fetchUnsplashPhoto(query: string): Promise<UnsplashPhoto | null> {
  const accessKey = process.env.UNSPLASH_ACCESS_KEY;

  if (!accessKey) {
    return null;
  }

  try {
    const params = new URLSearchParams({
      query,
      orientation: "landscape",
      content_filter: "high",
      per_page: "1",
    });

    const response = await fetch(`https://api.unsplash.com/search/photos?${params}`, {
      headers: { Authorization: `Client-ID ${accessKey}` },
      next: { revalidate: ONE_DAY },
    });

    if (!response.ok) {
      return null;
    }

    const data = (await response.json()) as UnsplashSearchResponse;
    return data.results[0] ?? null;
  } catch {
    return null;
  }
}

export function getCachedUnsplashPhoto(query: string, dateKey: string) {
  return unstable_cache(
    async () => fetchUnsplashPhoto(query),
    [`unsplash-photo-${dateKey}-${query}`],
    { revalidate: ONE_DAY },
  )();
}

type OpenLibraryBookResponse = {
  title?: string;
  authors?: Array<{ name?: string }>;
  covers?: number[];
};

export async function fetchOpenLibraryBook(isbn: string): Promise<OpenLibraryBookResponse | null> {
  try {
    const response = await fetch(`https://openlibrary.org/isbn/${isbn}.json`, {
      next: { revalidate: ONE_DAY },
    });

    if (!response.ok) {
      return null;
    }

    return (await response.json()) as OpenLibraryBookResponse;
  } catch {
    return null;
  }
}

export function getCachedOpenLibraryBook(isbn: string) {
  return unstable_cache(
    async () => fetchOpenLibraryBook(isbn),
    [`open-library-${isbn}`],
    { revalidate: ONE_DAY },
  )();
}

export function getOpenLibraryCoverUrl(isbn: string): string {
  return `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`;
}
