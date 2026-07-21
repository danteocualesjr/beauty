import { ArtworkFrame } from "@/components/ArtworkFrame";
import { CategoryCard } from "@/components/CategoryCard";
import { Placard } from "@/components/Placard";
import type { DailyItem } from "@/lib/types";

type PaintingCardProps = {
  item: DailyItem;
};

export function PaintingCard({ item }: PaintingCardProps) {
  return (
    <CategoryCard label="Painting" number="i.">
      {item.imageUrl ? (
        <ArtworkFrame
          src={item.imageUrl}
          alt={item.title}
          href={item.sourceUrl}
          fit="contain"
          priority
        />
      ) : null}
      <Placard title={item.title} creator={item.creator} href={item.sourceUrl} />
    </CategoryCard>
  );
}
