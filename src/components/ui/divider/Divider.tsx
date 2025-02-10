"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/common/cn";

const dividerVariants = cva(
  cn(
    "shrink-0 bg-gray-light transition-colors dark:bg-gray",
    "data-[orientation=horizontal]:h-[1px] data-[orientation=horizontal]:w-full",
    "data-[orientation=vertical]:h-full data-[orientation=vertical]:w-[1px]"
  ),
  {
    variants: {
      theme: {
        default: "bg-gray-light dark:bg-gray",
        primary: "bg-primary dark:bg-primary-dark",
        secondary: "bg-secondary dark:bg-secondary-dark",
        success: "bg-success dark:bg-success-dark",
        danger: "bg-error dark:bg-error-dark",
        warning: "bg-warning dark:bg-warning-dark",
        info: "bg-info dark:bg-info-dark",
      },
      spacing: {
        none: "my-0",
        sm: "my-2",
        md: "my-4",
        lg: "my-6",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      theme: "default",
      spacing: "md",
      fullWidth: true,
    },
  }
);

export interface DividerProps
  extends React.HTMLAttributes<HTMLHRElement>,
    VariantProps<typeof dividerVariants> {
  orientation?: "horizontal" | "vertical";
  decorative?: boolean;
}

const Divider = React.forwardRef<HTMLHRElement, DividerProps>(
  (
    {
      className,
      orientation = "horizontal",
      decorative = true,
      theme,
      spacing,
      fullWidth,
      ...props
    },
    ref
  ) => (
    <hr
      ref={ref}
      data-orientation={orientation}
      aria-orientation={orientation}
      aria-hidden={decorative}
      className={cn(dividerVariants({ theme, spacing, fullWidth }), className)}
      {...props}
    />
  )
);
Divider.displayName = "Divider";

export { Divider, dividerVariants }; 