import { CategoryCard } from "@/components/CategoryCard";
import type { DailyItem } from "@/lib/types";

type QuoteCardProps = {
  item: DailyItem;
};

export function QuoteCard({ item }: QuoteCardProps) {
  return (
    <CategoryCard label="Quote">
      <div className="flex flex-1 flex-col justify-center border-l-2 border-accent/40 py-2 pl-6">
        <p className="font-display text-2xl leading-relaxed text-foreground md:text-3xl">
          &ldquo;{item.excerpt}&rdquo;
        </p>
        <p className="mt-6 text-sm text-secondary">— {item.creator}</p>
      </div>
    </CategoryCard>
  );
}
