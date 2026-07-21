import type { ReactNode } from "react";

type CategoryCardProps = {
  label: string;
  number: string;
  children: ReactNode;
};

export function CategoryCard({ label, number, children }: CategoryCardProps) {
  return (
    <article className="flex h-full flex-col">
      <p className="mb-5 flex items-baseline gap-3 font-sans text-[0.65rem] uppercase tracking-[0.3em] text-accent">
        <span className="font-display text-sm normal-case italic tracking-normal text-secondary">
          {number}
        </span>
        {label}
      </p>
      <div className="flex flex-1 flex-col">{children}</div>
    </article>
  );
}
