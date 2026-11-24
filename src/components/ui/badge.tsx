import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-xs font-medium uppercase tracking-wide transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background",
  {
    variants: {
      variant: {
        default:
          "border-pink-400/30 bg-pink-500/10 text-pink-200 shadow-pink-glow-sm",
        secondary:
          "border-white/10 bg-white/[0.05] text-slate-200",
        destructive:
          "border-destructive/40 bg-destructive/10 text-destructive-foreground",
        outline: "border-border bg-transparent text-foreground",
        lavender:
          "border-pink-400/30 bg-pink-500/10 text-pink-200 shadow-pink-glow-sm",
        royal: "border-pink-500/35 bg-pink-600/15 text-pink-200",
        neutral: "border-white/10 bg-white/[0.04] text-slate-300",
        dot: "border-white/10 bg-navy-900 pl-2.5 text-slate-200 shadow-sm",
      },
    },
    defaultVariants: {
      variant: "lavender",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, children, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      {variant === "dot" && (
        <span
          className="size-1.5 rounded-full bg-pink-400 shadow-[0_0_8px_hsl(var(--pink-400))] animate-pulse"
          aria-hidden="true"
        />
      )}
      {children}
    </div>
  );
}

export { Badge, badgeVariants };
