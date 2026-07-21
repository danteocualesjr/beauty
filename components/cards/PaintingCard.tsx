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
    <div className="relative aspect-[4/3] overflow-hidden border border-border bg-surface">
      <motion.div
        className="relative h-full w-full"
        whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Image
          src={item.imageUrl}
          alt={item.title}
          fill
          className="object-contain p-3"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </motion.div>
    </div>
  ) : null;

  return (
    <CategoryCard label="Painting">
      {image}
      <div className="mt-4 space-y-1">
        <h2 className="font-display text-xl leading-snug text-foreground">{item.title}</h2>
        <p className="text-sm text-secondary">{item.creator}</p>
      </div>
    </CategoryCard>
  );
}
