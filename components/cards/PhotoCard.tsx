import { ArtworkFrame } from "@/components/ArtworkFrame";
import { CategoryCard } from "@/components/CategoryCard";
import { Placard } from "@/components/Placard";
import type { DailyItem } from "@/lib/types";

type PhotoCardProps = {
  item: DailyItem;
};

export function PhotoCard({ item }: PhotoCardProps) {
  return (
    <CategoryCard label="Photography" number="ii.">
      {item.imageUrl ? (
        <ArtworkFrame
          src={item.imageUrl}
          alt={item.title}
          href={item.sourceUrl}
          fit="cover"
          priority
        />
      ) : null}
      <Placard title={item.title} creator={item.creator} href={item.sourceUrl} />
    </CategoryCard>
  );
}
