import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/common/cn";

const statusVariants = cva(
  cn(
    "flex h-[22px] w-min items-center justify-center whitespace-nowrap rounded-md border px-6 py-[6.5px]",
    "text-center font-medium uppercase text-[16px]/[1]",
    "transition-colors duration-200"
  ),
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
        sm: "h-[18px] px-4 py-[4px] text-[14px]/[1]",
        md: "h-[22px] px-6 py-[6.5px] text-[16px]/[1]",
        lg: "h-[26px] px-8 py-[8px] text-[18px]/[1]",
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

const Status = React.forwardRef<HTMLDivElement, StatusProps>(
  ({ className, text, theme, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(statusVariants({ theme, size }), className)}
        {...props}
      >
        <span className="relative">{text}</span>
      </div>
    );
  }
);

Status.displayName = "Status";

export { Status, statusVariants }; 