"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/common/cn";

const skeletonVariants = cva(
  cn(
    "animate-pulse rounded-md bg-gray-light dark:bg-gray",
    "relative overflow-hidden",
    "after:absolute after:inset-0",
    "after:animate-shimmer after:bg-gradient-to-r",
    "after:from-transparent after:via-white/10 after:to-transparent"
  ),
  {
    variants: {
      variant: {
        default: "h-4",
        heading: "h-8",
        title: "h-6",
        avatar: "rounded-full",
        thumbnail: "rounded-lg",
        button: "h-10 rounded-lg",
        card: "h-48 rounded-lg",
      },
      size: {
        default: "w-full",
        sm: "w-16",
        md: "w-32",
        lg: "w-64",
        xl: "w-96",
        icon: "h-4 w-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface SkeletonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof skeletonVariants> {
  asChild?: boolean;
}

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? "span" : "div";
    return (
      <Comp
        ref={ref}
        className={cn(skeletonVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);

Skeleton.displayName = "Skeleton";

export { Skeleton, skeletonVariants }; 