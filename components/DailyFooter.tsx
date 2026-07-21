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
    <footer className="mt-20 md:mt-28">
      <div className="mx-auto flex max-w-md items-center gap-4" aria-hidden>
        <span className="h-px flex-1 bg-border" />
        <span className="font-display text-lg italic text-accent/60">&#10087;</span>
        <span className="h-px flex-1 bg-border" />
      </div>

      <p className="mt-10 text-center font-display text-lg italic text-secondary">
        Come back tomorrow.
      </p>

      <div className="mt-12 border-t border-border pt-8">
        <p className="mb-4 text-center font-sans text-[0.6rem] uppercase tracking-[0.3em] text-secondary/80">
          Sources
        </p>
        <ul className="mx-auto flex max-w-3xl flex-col items-center gap-1.5 text-center text-xs text-secondary/80">
          {items.map((item) => (
            <li key={item.id}>
              {item.sourceUrl ? (
                <a
                  href={item.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-border underline-offset-4 transition-colors hover:text-foreground"
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
