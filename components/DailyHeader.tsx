import { format } from "date-fns";

type DailyHeaderProps = {
  date: Date;
};

export function DailyHeader({ date }: DailyHeaderProps) {
  return (
    <header className="mb-12 flex flex-col gap-3 border-b border-border pb-8 md:mb-16 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="font-display text-4xl tracking-tight text-foreground md:text-5xl">
          Beauty
        </p>
        <p className="mt-2 text-sm text-secondary">Four things worth seeing today</p>
      </div>
      <p className="font-sans text-xs uppercase tracking-[0.2em] text-secondary">
        {format(date, "MMMM d, yyyy")}
      </p>
    </header>
  );
}
