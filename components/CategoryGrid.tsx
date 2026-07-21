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
    <section className="grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-x-16 md:gap-y-20">
      <AnimatedCard index={0}>
        <PaintingCard item={selection.painting} />
      </AnimatedCard>
      <AnimatedCard index={1}>
        <PhotoCard item={selection.photography} />
      </AnimatedCard>
      <AnimatedCard index={2}>
        <QuoteCard item={selection.quote} />
      </AnimatedCard>
      <AnimatedCard index={3}>
        <BookCard item={selection.book} />
      </AnimatedCard>
    </section>
  );
}
