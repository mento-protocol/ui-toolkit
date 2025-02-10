"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/common/cn";

const progressVariants = cva(
  cn(
    "relative h-2 w-full overflow-hidden rounded-full transition-all",
    "bg-secondary dark:bg-secondary-dark"
  ),
  {
    variants: {
      theme: {
        default: "[&>div]:bg-primary dark:[&>div]:bg-primary-dark",
        primary: "[&>div]:bg-primary dark:[&>div]:bg-primary-dark",
        secondary: "[&>div]:bg-secondary dark:[&>div]:bg-secondary-dark",
        success: "[&>div]:bg-success dark:[&>div]:bg-success-dark",
        danger: "[&>div]:bg-error dark:[&>div]:bg-error-dark",
        warning: "[&>div]:bg-warning dark:[&>div]:bg-warning-dark",
        info: "[&>div]:bg-info dark:[&>div]:bg-info-dark",
      },
      size: {
        sm: "h-1",
        md: "h-2",
        lg: "h-3",
      },
    },
    defaultVariants: {
      theme: "default",
      size: "md",
    },
  }
);

export interface ProgressProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof progressVariants> {
  value: number;
  max?: number;
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, value, max = 100, theme, size, ...props }, ref) => {
    const percentage = Math.min((value / max) * 100, 100);

    return (
      <div
        ref={ref}
        className={cn(progressVariants({ theme, size }), className)}
        {...props}
      >
        <div
          className="h-full w-full flex-1 transition-all"
          style={{
            transform: `translateX(-${100 - percentage}%)`,
          }}
        />
      </div>
    );
  }
);
Progress.displayName = "Progress";

export interface MultiProgressValue {
  value: number;
  theme?: ProgressProps["theme"];
}

export interface MultiProgressProps
  extends Omit<ProgressProps, "value" | "theme">,
    VariantProps<typeof progressVariants> {
  values: MultiProgressValue[];
  size?: ProgressProps["size"];
}

const MultiProgress = React.forwardRef<HTMLDivElement, MultiProgressProps>(
  ({ className, values, max = 100, size, ...props }, ref) => {
    const total = values.reduce((acc, curr) => acc + curr.value, 0);
    const percentages = values.map((v) => Math.min((v.value / max) * 100, 100));

    return (
      <div
        ref={ref}
        className={cn(
          "relative h-2 w-full overflow-hidden rounded-full bg-secondary transition-all dark:bg-secondary-dark",
          size === "sm" && "h-1",
          size === "lg" && "h-3",
          className
        )}
        {...props}
      >
        {percentages.map((percentage, index) => {
          const previousTotal = percentages
            .slice(0, index)
            .reduce((acc, curr) => acc + curr, 0);

          return (
            <div
              key={index}
              className={cn(
                "absolute h-full transition-all",
                values[index].theme === "primary" &&
                  "bg-primary dark:bg-primary-dark",
                values[index].theme === "secondary" &&
                  "bg-secondary dark:bg-secondary-dark",
                values[index].theme === "success" &&
                  "bg-success dark:bg-success-dark",
                values[index].theme === "danger" &&
                  "bg-error dark:bg-error-dark",
                values[index].theme === "warning" &&
                  "bg-warning dark:bg-warning-dark",
                values[index].theme === "info" && "bg-info dark:bg-info-dark"
              )}
              style={{
                left: `${previousTotal}%`,
                width: `${percentage}%`,
              }}
            />
          );
        })}
      </div>
    );
  }
);
MultiProgress.displayName = "MultiProgress";

export { Progress, MultiProgress }; 