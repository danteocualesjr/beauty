import { CategoryCard } from "@/components/CategoryCard";
import type { DailyItem } from "@/lib/types";

type QuoteCardProps = {
  item: DailyItem;
};

export function QuoteCard({ item }: QuoteCardProps) {
  return (
    <CategoryCard label="Quote" number="iii.">
      <figure className="relative flex flex-1 flex-col justify-center px-2 py-8 md:px-6">
        <span
          aria-hidden
          className="pointer-events-none absolute -top-2 left-0 font-display text-[7rem] leading-none text-accent/15 md:-top-4 md:text-[9rem]"
        >
          &ldquo;
        </span>
        <blockquote className="relative font-display text-2xl leading-[1.4] text-foreground md:text-[2rem]">
          {item.excerpt}
        </blockquote>
        <figcaption className="mt-8 flex items-center gap-3">
          <span className="h-px w-8 bg-accent/50" aria-hidden />
          <span className="font-sans text-xs uppercase tracking-[0.2em] text-secondary">
            {item.creator}
          </span>
        </figcaption>
      </figure>
    </CategoryCard>
  );
}
