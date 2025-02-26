import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/common/cn";

const baseStyles = cn(
  "flex h-status-md w-min items-center justify-center whitespace-nowrap rounded-md border px-6 py-2",
  "text-center font-medium uppercase text-base leading-none",
  "transition-colors duration-200"
);

const sizes = {
  sm: "h-status-sm px-4 py-1 text-xs leading-none",
  md: "h-status-md px-6 py-2 text-base leading-none",
  lg: "h-status-lg px-8 py-2 text-lg leading-none",
};

const statusVariants = cva(
  baseStyles,
  {
    variants: {
      theme: {
        primary: "border-primary bg-primary text-white",
        secondary: "border-secondary bg-secondary text-black",
        success: "border-success bg-success text-black",
        danger: "border-error bg-error text-white",
        warning: "border-warning bg-warning text-black",
        info: "border-info bg-info text-black",
        tertiary: "border-mento-mint bg-mento-mint text-black",
        outline: "border-black bg-transparent text-black dark:border-white dark:text-white",
      },
      size: {
        sm: sizes.sm,
        md: sizes.md,
        lg: sizes.lg,
      },
    },
    defaultVariants: {
      theme: "primary",
      size: "md",
    },
  }
);

export interface StatusProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof statusVariants> {
  text: string;
}

const Status = ({ className, text, theme, size, ...props }: StatusProps) => {
  return (
    <div
      className={cn(statusVariants({ theme, size }), className)}
      {...props}
    >
      <span className="relative">{text}</span>
    </div>
  );
};

export { Status, statusVariants }; 