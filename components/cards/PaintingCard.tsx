"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { CategoryCard } from "@/components/CategoryCard";
import type { DailyItem } from "@/lib/types";

type PaintingCardProps = {
  item: DailyItem;
};

export function PaintingCard({ item }: PaintingCardProps) {
  const shouldReduceMotion = useReducedMotion();

  const image = item.imageUrl ? (
    <div className="border border-border bg-surface p-4 shadow-[0_1px_2px_rgba(28,28,28,0.04),0_8px_24px_rgba(28,28,28,0.06)] md:p-6">
      <div className="relative aspect-[4/3] overflow-hidden bg-background">
        <motion.div
          className="relative h-full w-full"
          whileHover={shouldReduceMotion ? undefined : { scale: 1.015 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Image
            src={item.imageUrl}
            alt={item.title}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </motion.div>
      </div>
    </div>
  ) : null;

  return (
    <CategoryCard label="Painting" number="i.">
      {image}
      <div className="mt-5 text-center">
        <h2 className="font-display text-xl leading-snug text-foreground md:text-2xl">
          {item.title}
        </h2>
        <p className="mt-1.5 text-sm tracking-wide text-secondary">{item.creator}</p>
      </div>
    </CategoryCard>
  );
}
