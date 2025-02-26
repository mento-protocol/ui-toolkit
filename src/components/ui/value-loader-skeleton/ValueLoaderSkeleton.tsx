"use client";

import * as React from "react";
import { cn } from "@/utils/common/cn";
import { cva, type VariantProps } from "class-variance-authority";

const skeletonVariants = cva(
  cn(
    "text-xl",
    "animate-pulse rounded-input bg-gray-300",
    "transition-colors duration-200"
  )
);

interface ValueLoaderSkeletonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof skeletonVariants> {}

const ValueLoaderSkeleton = ({
  className,
  ...props
}: ValueLoaderSkeletonProps) => {
  return (
    <div className={cn(skeletonVariants({ className }))} {...props}>
      &nbsp;
    </div>
  );
};

export { ValueLoaderSkeleton, skeletonVariants };
