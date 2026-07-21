"use client";

import { format } from "date-fns";
import { motion, useReducedMotion } from "framer-motion";

type DailyHeaderProps = {
  date: Date;
};

export function DailyHeader({ date }: DailyHeaderProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.header
      className="mb-16 text-center md:mb-24"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <p className="font-sans text-[0.62rem] uppercase tracking-[0.35em] text-secondary">
        {format(date, "EEEE")}
      </p>
      <div className="mx-auto mt-4 flex max-w-sm items-center gap-4">
        <span className="h-px flex-1 bg-border" aria-hidden />
        <p className="font-sans text-[0.62rem] uppercase tracking-[0.35em] text-accent">
          {format(date, "MMMM d, yyyy")}
        </p>
        <span className="h-px flex-1 bg-border" aria-hidden />
      </div>
      <h1 className="mt-9 font-display text-[4.5rem] leading-none tracking-[-0.03em] text-foreground md:text-[7.5rem]">
        Beauty
      </h1>
      <p className="mx-auto mt-6 max-w-md font-display text-base italic leading-relaxed text-secondary md:text-lg">
        One painting, one photograph, one quote, one book —
        <br className="hidden sm:block" /> chosen for today
      </p>
      <div className="mx-auto mt-12 flex items-center justify-center gap-3" aria-hidden>
        <span className="h-px w-10 bg-accent/40" />
        <span className="h-1 w-1 rotate-45 bg-accent/50" />
        <span className="h-px w-10 bg-accent/40" />
      </div>
    </motion.header>
  );
}
