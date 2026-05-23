"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

interface FadeUpProps extends HTMLMotionProps<"div"> {
  delay?: number;
  children: React.ReactNode;
  className?: string;
}

export default function FadeUp({ delay = 0, children, className, ...rest }: FadeUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
