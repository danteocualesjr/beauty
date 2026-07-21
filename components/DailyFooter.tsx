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
    <footer className="mt-16 border-t border-border pt-8 md:mt-20">
      <p className="mb-4 font-sans text-[0.65rem] uppercase tracking-[0.25em] text-accent">
        Sources
      </p>
      <ul className="space-y-2 text-sm text-secondary">
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
      <p className="mt-8 text-sm text-secondary">Come back tomorrow.</p>
    </footer>
  );
}
