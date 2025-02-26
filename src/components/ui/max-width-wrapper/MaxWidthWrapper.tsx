"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/common/cn";

const maxWidthWrapperVariants = cva(
  "mx-auto w-full px-4 sm:px-6 lg:px-8",
  {
    variants: {
      maxWidth: {
        sm: "max-w-screen-sm",
        md: "max-w-screen-md",
        lg: "max-w-screen-lg",
        xl: "max-w-screen-xl",
        "2xl": "max-w-screen-2xl",
        none: "",
      },
      gutter: {
        none: "px-0",
        sm: "px-2 sm:px-3 lg:px-4",
        md: "px-4 sm:px-6 lg:px-8",
        lg: "px-6 sm:px-8 lg:px-12",
      },
    },
    defaultVariants: {
      maxWidth: "lg",
      gutter: "md",
    },
  }
);

interface MaxWidthWrapperProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof maxWidthWrapperVariants> {
  as?: React.ElementType;
}

const MaxWidthWrapper = React.forwardRef<HTMLDivElement, MaxWidthWrapperProps>(
  ({ className, maxWidth, gutter, as: Component = "div", ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(maxWidthWrapperVariants({ maxWidth, gutter }), className)}
        {...props}
      />
    );
  }
);


export { MaxWidthWrapper };
export type { MaxWidthWrapperProps }; 