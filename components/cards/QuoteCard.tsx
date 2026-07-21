import { CategoryCard } from "@/components/CategoryCard";
import type { DailyItem } from "@/lib/types";

type QuoteCardProps = {
  item: DailyItem;
};

export function QuoteCard({ item }: QuoteCardProps) {
  return (
    <CategoryCard label="Quote" number="iii.">
      <figure className="relative flex min-h-[280px] flex-1 flex-col justify-center border border-border bg-surface px-7 py-10 shadow-[0_1px_2px_rgba(28,28,28,0.03),0_12px_32px_rgba(28,28,28,0.05)] md:min-h-[320px] md:px-10 md:py-12">
        <span
          aria-hidden
          className="pointer-events-none absolute top-2 left-4 font-display text-[8rem] leading-none text-accent/[0.12] md:top-0 md:left-6 md:text-[10rem]"
        >
          &ldquo;
        </span>
        <blockquote className="relative font-display text-[1.65rem] leading-[1.35] text-foreground md:text-[2.1rem]">
          {item.excerpt}
        </blockquote>
        <figcaption className="relative mt-10 flex items-center gap-3">
          <span className="h-px w-10 bg-accent/45" aria-hidden />
          <span className="font-sans text-[0.68rem] uppercase tracking-[0.22em] text-secondary">
            {item.creator}
          </span>
        </figcaption>
      </figure>
    </CategoryCard>
  );
}
