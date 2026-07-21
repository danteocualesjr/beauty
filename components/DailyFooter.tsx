import type { DailySelection } from "@/lib/content";

type DailyFooterProps = {
  selection: DailySelection;
};

export function DailyFooter({ selection }: DailyFooterProps) {
  const items = [
    selection.painting,
    selection.photography,
    selection.quote,
    selection.book,
  ];

  return (
    <footer className="mt-24 md:mt-32">
      <div className="mx-auto flex max-w-md items-center gap-4" aria-hidden>
        <span className="h-px flex-1 bg-border" />
        <span className="font-display text-xl italic text-accent/50">&#10087;</span>
        <span className="h-px flex-1 bg-border" />
      </div>

      <p className="mt-10 text-center font-display text-xl italic text-secondary">
        Come back tomorrow.
      </p>
      <p className="mt-2 text-center font-sans text-[0.65rem] uppercase tracking-[0.28em] text-secondary/70">
        A new selection each day
      </p>

      <div className="mt-14 border-t border-border pt-8">
        <p className="mb-5 text-center font-sans text-[0.58rem] uppercase tracking-[0.32em] text-secondary/70">
          Sources
        </p>
        <ul className="mx-auto flex max-w-2xl flex-col items-center gap-2 text-center text-[0.75rem] leading-relaxed text-secondary/75">
          {items.map((item) => (
            <li key={item.id}>
              {item.sourceUrl ? (
                <a
                  href={item.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-accent/40"
                >
                  {item.attribution}
                </a>
              ) : (
                item.attribution
              )}
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
