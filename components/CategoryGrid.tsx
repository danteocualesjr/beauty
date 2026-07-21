import { AnimatedCard } from "@/components/AnimatedCard";
import { BookCard } from "@/components/cards/BookCard";
import { PaintingCard } from "@/components/cards/PaintingCard";
import { PhotoCard } from "@/components/cards/PhotoCard";
import { QuoteCard } from "@/components/cards/QuoteCard";
import type { DailySelection } from "@/lib/content";

type CategoryGridProps = {
  selection: DailySelection;
};

export function CategoryGrid({ selection }: CategoryGridProps) {
  return (
    <section className="flex flex-col gap-16 md:gap-20">
      <div className="grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-x-14 md:gap-y-0 md:divide-x md:divide-border/70">
        <AnimatedCard index={0}>
          <div className="md:pr-10">
            <PaintingCard item={selection.painting} />
          </div>
        </AnimatedCard>
        <AnimatedCard index={1}>
          <div className="md:pl-10">
            <PhotoCard item={selection.photography} />
          </div>
        </AnimatedCard>
      </div>

      <div className="relative" aria-hidden>
        <div className="mx-auto flex max-w-xs items-center gap-3">
          <span className="h-px flex-1 bg-border" />
          <span className="h-1 w-1 rotate-45 bg-accent/40" />
          <span className="h-px flex-1 bg-border" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-x-14 md:divide-x md:divide-border/70">
        <AnimatedCard index={2}>
          <div className="md:pr-10">
            <QuoteCard item={selection.quote} />
          </div>
        </AnimatedCard>
        <AnimatedCard index={3}>
          <div className="md:pl-10">
            <BookCard item={selection.book} />
          </div>
        </AnimatedCard>
      </div>
    </section>
  );
}
