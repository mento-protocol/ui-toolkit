"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/common/cn";

const badgeVariants = cva(
  "flex min-h-[36px] min-w-[70px] items-center justify-center whitespace-nowrap rounded-[40px] p-2.5 font-inter text-base/4 md:text-lg/[18px]",
  {
    variants: {
      type: {
        default: "bg-primary text-white",
        outline: "border border-black dark:border-white dark:text-white",
        secondary: "bg-secondary text-black dark:text-black",
        tertiary: "bg-mento-mint text-black",
        danger: "bg-error text-white",
        warning: "bg-warning text-black",
        success: "bg-success text-black",
        info: "bg-info text-black",
      },
      fullwidth: { 
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      type: "default",
      fullwidth: false,
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, type, fullwidth, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(badgeVariants({ type, fullwidth, className }))}
        {...props}
      />
    );
  }
);
Badge.displayName = "Badge";

export { Badge, badgeVariants }; 