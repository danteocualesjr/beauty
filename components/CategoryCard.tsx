import type { ReactNode } from "react";

type CategoryCardProps = {
  label: string;
  children: ReactNode;
};

export function CategoryCard({ label, children }: CategoryCardProps) {
  return (
    <article className="flex h-full flex-col">
      <p className="mb-4 font-sans text-[0.65rem] uppercase tracking-[0.25em] text-accent">
        {label}
      </p>
      <div className="flex flex-1 flex-col">{children}</div>
    </article>
  );
}
