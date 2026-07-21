import { format } from "date-fns";

type DailyHeaderProps = {
  date: Date;
};

export function DailyHeader({ date }: DailyHeaderProps) {
  return (
    <header className="mb-14 text-center md:mb-20">
      <p className="font-sans text-[0.65rem] uppercase tracking-[0.3em] text-secondary">
        {format(date, "EEEE")}
      </p>
      <div className="mx-auto mt-3 flex max-w-md items-center gap-4">
        <span className="h-px flex-1 bg-border" aria-hidden />
        <p className="font-sans text-[0.65rem] uppercase tracking-[0.3em] text-accent">
          {format(date, "MMMM d, yyyy")}
        </p>
        <span className="h-px flex-1 bg-border" aria-hidden />
      </div>
      <h1 className="mt-8 font-display text-6xl tracking-tight text-foreground md:text-8xl">
        Beauty
      </h1>
      <p className="mt-5 font-display text-base italic text-secondary md:text-lg">
        Four things worth seeing today
      </p>
      <div className="mx-auto mt-10 h-px w-24 bg-accent/50" aria-hidden />
    </header>
  );
}
