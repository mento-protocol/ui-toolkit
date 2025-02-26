"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/common/cn";

const TooltipProvider = TooltipPrimitive.Provider;
const Tooltip = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;

const tooltipContentVariants = cva(
  cn(
    "z-50 overflow-hidden rounded-lg px-3 py-1.5 text-sm shadow-md",
    "animate-in fade-in-0 zoom-in-95",
    "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
    "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
  ),
  {
    variants: {
      theme: {
        default: "border border-gray-light bg-white text-black dark:border-gray dark:bg-black-off dark:text-white",
        primary: "border-primary bg-primary text-white",
        secondary: "border-secondary bg-secondary text-black",
        success: "border-success bg-success text-black",
        danger: "border-error bg-error text-white",
        warning: "border-warning bg-warning text-black",
        info: "border-info bg-info text-black",
      },
      size: {
        sm: "px-2 py-1 text-xs",
        md: "px-3 py-1.5 text-sm",
        lg: "px-4 py-2 text-base",
      },
    },
    defaultVariants: {
      theme: "default",
      size: "md",
    },
  }
);

const tooltipArrowVariants = cva(
  "fill-current",
  {
    variants: {
      theme: {
        default: "text-gray-light dark:text-gray",
        primary: "text-primary",
        secondary: "text-secondary",
        success: "text-success",
        danger: "text-error",
        warning: "text-warning",
        info: "text-info",
      },
    },
    defaultVariants: {
      theme: "default",
    },
  }
);

export interface TooltipContentProps
  extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>,
    VariantProps<typeof tooltipContentVariants> {
  hideArrow?: boolean;
}

const TooltipContent = React.forwardRef<
  React.ComponentRef<typeof TooltipPrimitive.Content>,
  TooltipContentProps
>(({ className, theme, size, hideArrow, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Portal>
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(tooltipContentVariants({ theme, size }), className)}
      {...props}
    >
      {!hideArrow && (
        <TooltipPrimitive.Arrow
          className={cn(tooltipArrowVariants({ theme }), "h-2 w-4")}
        />
      )}
    </TooltipPrimitive.Content>
  </TooltipPrimitive.Portal>
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
  tooltipContentVariants,
  tooltipArrowVariants,
}; 