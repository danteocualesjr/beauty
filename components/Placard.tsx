type PlacardProps = {
  title: string;
  creator: string;
  href?: string;
};

export function Placard({ title, creator, href }: PlacardProps) {
  const titleEl = href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="transition-colors hover:text-accent"
    >
      {title}
    </a>
  ) : (
    title
  );

  return (
    <div className="mt-6 text-center">
      <h2 className="font-display text-xl leading-snug text-foreground md:text-[1.65rem]">
        {titleEl}
      </h2>
      <p className="mt-2 font-sans text-[0.8rem] tracking-[0.04em] text-secondary">
        {creator}
      </p>
    </div>
  );
}
