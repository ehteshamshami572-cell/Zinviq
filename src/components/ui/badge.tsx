import * as React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'cyan' | 'blue' | 'neutral' | 'dot';
}

export function Badge({
  className,
  variant = 'cyan',
  children,
  ...props
}: BadgeProps) {
  const variantClasses = {
    cyan: 'bg-[#00F0FF]/10 border border-[#00F0FF]/30 text-[#00F0FF] shadow-[0_0_15px_-3px_rgba(0,240,255,0.2)]',
    blue: 'bg-[#0070F3]/15 border border-[#0070F3]/35 text-[#38BDF8]',
    neutral: 'bg-white/[0.04] border border-white/10 text-slate-300',
    dot: 'bg-[#080E21] border border-white/10 text-slate-200 shadow-sm pl-2.5',
  };

  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide uppercase',
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {variant === 'dot' && (
        <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] shadow-[0_0_8px_#00F0FF] animate-pulse" />
      )}
      {children}
    </div>
  );
}
