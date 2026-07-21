import Image from "next/image";
import { CategoryCard } from "@/components/CategoryCard";
import type { DailyItem } from "@/lib/types";

type BookCardProps = {
  item: DailyItem;
};

export function BookCard({ item }: BookCardProps) {
  return (
    <CategoryCard label="Book">
      <div className="flex flex-1 flex-col gap-5 sm:flex-row sm:items-start">
        {item.imageUrl ? (
          <div className="relative h-44 w-28 shrink-0 overflow-hidden border border-border bg-surface shadow-sm">
            <Image
              src={item.imageUrl}
              alt={`Cover of ${item.title}`}
              fill
              className="object-cover"
              sizes="112px"
            />
          </div>
        ) : null}
        <div className="space-y-2">
          <h2 className="font-display text-xl leading-snug text-foreground">{item.title}</h2>
          <p className="text-sm text-secondary">{item.creator}</p>
          {item.excerpt ? (
            <p className="max-w-prose text-sm leading-relaxed text-secondary">{item.excerpt}</p>
          ) : null}
        </div>
      </div>
    </CategoryCard>
  );
}
