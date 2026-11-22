import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glow';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      disabled,
      ...props
    },
    ref
  ) => {
    const sizeClasses = {
      sm: 'px-4 py-2 text-xs font-semibold rounded-lg gap-1.5',
      md: 'px-5 py-2.5 text-sm font-semibold rounded-xl gap-2',
      lg: 'px-7 py-3.5 text-base font-bold rounded-xl gap-2.5',
    };

    const variantClasses = {
      primary:
        'bg-gradient-to-r from-[#00F0FF] to-[#00A3FF] text-[#050814] font-bold shadow-[0_0_25px_rgba(0,240,255,0.35)] hover:shadow-[0_0_35px_rgba(0,240,255,0.55)] hover:brightness-110 active:scale-[0.98]',
      secondary:
        'bg-white/[0.05] text-white border border-white/10 backdrop-blur-md hover:bg-white/[0.1] hover:border-[#00F0FF]/40 active:scale-[0.98]',
      outline:
        'border border-[#00F0FF]/40 text-[#00F0FF] bg-[#00F0FF]/[0.04] hover:bg-[#00F0FF]/[0.12] hover:border-[#00F0FF] active:scale-[0.98]',
      ghost:
        'text-slate-300 hover:text-white hover:bg-white/[0.06]',
      glow:
        'bg-white text-[#050814] font-bold shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:bg-[#00F0FF] hover:shadow-[0_0_40px_rgba(0,240,255,0.6)] active:scale-[0.98]',
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          'inline-flex items-center justify-center transition-all duration-200 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00F0FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050814] disabled:opacity-50 disabled:pointer-events-none cursor-pointer',
          sizeClasses[size],
          variantClasses[variant],
          className
        )}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
