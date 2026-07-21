import Image from "next/image";
import { CategoryCard } from "@/components/CategoryCard";
import type { DailyItem } from "@/lib/types";

type BookCardProps = {
  item: DailyItem;
};

export function BookCard({ item }: BookCardProps) {
  return (
    <CategoryCard label="Book" number="iv.">
      <div className="flex flex-1 items-center gap-8 py-4 sm:gap-10">
        {item.imageUrl ? (
          <div className="relative h-52 w-34 shrink-0 -rotate-1 overflow-hidden rounded-r-sm shadow-[2px_4px_16px_rgba(28,28,28,0.18)] transition-transform duration-500 ease-out hover:rotate-0 sm:h-60 sm:w-40">
            <Image
              src={item.imageUrl}
              alt={`Cover of ${item.title}`}
              fill
              className="object-cover"
              sizes="160px"
            />
            <span
              aria-hidden
              className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-r from-black/25 to-transparent"
            />
          </div>
        ) : null}
        <div>
          <h2 className="font-display text-xl leading-snug text-foreground md:text-2xl">
            {item.title}
          </h2>
          <p className="mt-1.5 text-sm tracking-wide text-secondary">{item.creator}</p>
          {item.excerpt ? (
            <p className="mt-4 max-w-prose border-l border-border pl-4 font-display text-sm italic leading-relaxed text-secondary">
              {item.excerpt}
            </p>
          ) : null}
        </div>
      </div>
    </CategoryCard>
  );
}
