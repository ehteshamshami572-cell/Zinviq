import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-pink-glow hover:bg-pink-400 hover:shadow-deep-glow",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-pink-500/40 bg-pink-500/[0.04] text-pink-200 hover:border-pink-400 hover:bg-pink-500/15 hover:text-white",
        secondary:
          "border border-white/10 bg-white/[0.05] text-white backdrop-blur-md hover:border-pink-400/50 hover:bg-white/[0.1]",
        ghost: "text-slate-300 hover:bg-white/[0.06] hover:text-white",
        link: "text-pink-300 underline-offset-4 hover:text-pink-200 hover:underline",
        primary:
          "bg-gradient-to-r from-pink-600 to-pink-400 text-white shadow-pink-glow hover:shadow-deep-glow hover:brightness-110",
        glow: "bg-pink-200 text-navy-950 shadow-[0_0_30px_-5px_hsl(var(--pink-400)/0.6)] hover:bg-white hover:shadow-pink-glow",
      },
      size: {
        default: "h-10 px-5 py-2.5",
        sm: "h-9 rounded-md px-4 text-xs",
        md: "h-11 px-5 py-2.5",
        lg: "h-12 rounded-xl px-7 py-3.5 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      isLoading = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    if (asChild) {
      return (
        <Slot
          ref={ref}
          className={cn(buttonVariants({ variant, size, className }))}
          aria-disabled={disabled || isLoading || undefined}
          {...props}
        >
          {children}
        </Slot>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {isLoading && <Loader2 className="mr-1 animate-spin" aria-hidden="true" />}
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
