"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

type ArtworkFrameProps = {
  src: string;
  alt: string;
  href?: string;
  fit?: "contain" | "cover";
  priority?: boolean;
};

export function ArtworkFrame({
  src,
  alt,
  href,
  fit = "contain",
  priority = false,
}: ArtworkFrameProps) {
  const shouldReduceMotion = useReducedMotion();

  const frame = (
    <div className="group border border-border bg-surface p-3 shadow-[0_1px_2px_rgba(28,28,28,0.03),0_12px_32px_rgba(28,28,28,0.06)] transition-shadow duration-500 hover:shadow-[0_2px_4px_rgba(28,28,28,0.04),0_18px_40px_rgba(28,28,28,0.08)] md:p-5">
      <div className="relative aspect-[4/3] overflow-hidden bg-[#f3efe8]">
        <motion.div
          className="relative h-full w-full"
          whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
          transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            className={fit === "cover" ? "object-cover" : "object-contain"}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={priority}
          />
        </motion.div>
      </div>
    </div>
  );

  if (!href) {
    return frame;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block focus-visible:outline-none"
      aria-label={`View source for ${alt}`}
    >
      {frame}
    </a>
  );
}
