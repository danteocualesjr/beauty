"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type AnimatedCardProps = {
  children: ReactNode;
  index: number;
};

export function AnimatedCard({ children, index }: AnimatedCardProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div>{children}</div>;
  }

  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: 0.15 + index * 0.12,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
