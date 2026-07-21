import Image from "next/image";
import { CategoryCard } from "@/components/CategoryCard";
import type { DailyItem } from "@/lib/types";

type BookCardProps = {
  item: DailyItem;
};

export function BookCard({ item }: BookCardProps) {
  const cover = item.imageUrl ? (
    <div className="relative shrink-0">
      <div className="relative h-56 w-36 overflow-hidden rounded-r-[2px] shadow-[3px_6px_20px_rgba(28,28,28,0.2)] transition-transform duration-500 ease-out hover:-translate-y-1 hover:rotate-0 -rotate-[1.5deg] sm:h-64 sm:w-40">
        {item.sourceUrl ? (
          <a
            href={item.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-10"
            aria-label={`View source for ${item.title}`}
          />
        ) : null}
        <Image
          src={item.imageUrl}
          alt={`Cover of ${item.title}`}
          fill
          className="object-cover"
          sizes="160px"
        />
        <span
          aria-hidden
          className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-r from-black/30 via-black/10 to-transparent"
        />
      </div>
      <div
        aria-hidden
        className="mx-auto mt-4 h-2 w-[85%] rounded-[100%] bg-foreground/[0.08] blur-[2px]"
      />
    </div>
  ) : null;

  return (
    <CategoryCard label="Book" number="iv.">
      <div className="flex min-h-[280px] flex-1 items-center gap-8 border border-border bg-surface px-6 py-8 shadow-[0_1px_2px_rgba(28,28,28,0.03),0_12px_32px_rgba(28,28,28,0.05)] md:min-h-[320px] md:gap-10 md:px-8">
        {cover}
        <div className="min-w-0">
          <h2 className="font-display text-xl leading-snug text-foreground md:text-[1.65rem]">
            {item.sourceUrl ? (
              <a
                href={item.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent"
              >
                {item.title}
              </a>
            ) : (
              item.title
            )}
          </h2>
          <p className="mt-2 font-sans text-[0.8rem] tracking-[0.04em] text-secondary">
            {item.creator}
          </p>
          {item.excerpt ? (
            <p className="mt-5 max-w-prose border-l border-accent/30 pl-4 font-display text-[0.95rem] italic leading-relaxed text-secondary">
              {item.excerpt}
            </p>
          ) : null}
        </div>
      </div>
    </CategoryCard>
  );
}
