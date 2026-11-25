import React from 'react';
import { cn } from '@/lib/utils';

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

/**
 * CSS-only spotlight. No pointer listeners, getBoundingClientRect or state updates,
 * so the card can stay a Server Component and does not affect INP.
 */
export function SpotlightCard({
  children,
  className,
  glowColor = 'hsl(var(--pink-500) / 0.14)',
  ...props
}: SpotlightCardProps) {
  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-navy-900/80 backdrop-blur-xl p-7 shadow-card-glow transition-all duration-300 hover:border-pink-400/40 hover:shadow-pink-glow hover:-translate-y-1',
        className
      )}
      {...props}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(450px circle at 50% 0%, ${glowColor}, transparent 80%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
