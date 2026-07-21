import type { ReactNode } from "react";

type CategoryCardProps = {
  label: string;
  number: string;
  children: ReactNode;
};

export function CategoryCard({ label, number, children }: CategoryCardProps) {
  return (
    <article className="flex h-full flex-col">
      <div className="mb-6 flex items-baseline justify-between gap-4 border-b border-border/80 pb-3">
        <p className="flex items-baseline gap-3 font-sans text-[0.62rem] uppercase tracking-[0.32em] text-accent">
          <span className="font-display text-sm normal-case italic tracking-normal text-secondary">
            {number}
          </span>
          {label}
        </p>
      </div>
      <div className="flex flex-1 flex-col">{children}</div>
    </article>
  );
}
