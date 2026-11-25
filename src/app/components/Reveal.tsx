import { motion } from 'motion/react';
import type { ReactNode } from 'react';

export default function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

export function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <p className="mb-3 font-mono text-sm text-accent">
      {index} <span className="text-muted">/ {title}</span>
    </p>
  );
}
