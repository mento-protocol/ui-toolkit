"use client";

import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/common/cn";

const scrollAreaVariants = cva("relative overflow-hidden", {
  variants: {
    theme: {
      default: "[--scrollbar-thumb:var(--gray)] [--scrollbar-track:var(--gray-light)]",
      primary: "[--scrollbar-thumb:var(--primary)] [--scrollbar-track:var(--primary-light)]",
      secondary: "[--scrollbar-thumb:var(--secondary)] [--scrollbar-track:var(--secondary-light)]",
      success: "[--scrollbar-thumb:var(--success)] [--scrollbar-track:var(--success-light)]",
      danger: "[--scrollbar-thumb:var(--error)] [--scrollbar-track:var(--error-light)]",
      warning: "[--scrollbar-thumb:var(--warning)] [--scrollbar-track:var(--warning-light)]",
      info: "[--scrollbar-thumb:var(--info)] [--scrollbar-track:var(--info-light)]",
    },
  },
  defaultVariants: {
    theme: "default",
  },
});

const scrollbarVariants = cva(
  "flex touch-none select-none transition-colors",
  {
    variants: {
      orientation: {
        vertical: "h-full w-2.5 border-l border-l-transparent p-[1px]",
        horizontal: "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      },
    },
    defaultVariants: {
      orientation: "vertical",
    },
  }
);

const thumbVariants = cva(
  "relative flex-1 rounded-full bg-[var(--scrollbar-thumb)]",
  {
    variants: {
      orientation: {
        vertical: "w-full",
        horizontal: "h-full",
      },
    },
    defaultVariants: {
      orientation: "vertical",
    },
  }
);

const cornerVariants = cva(
  "bg-[var(--scrollbar-corner)]",
  {
    variants: {
      theme: {
        default: "[--scrollbar-corner:var(--gray-light)]",
        primary: "[--scrollbar-corner:var(--primary-light)]",
        secondary: "[--scrollbar-corner:var(--secondary-light)]",
        success: "[--scrollbar-corner:var(--success-light)]",
        danger: "[--scrollbar-corner:var(--error-light)]",
        warning: "[--scrollbar-corner:var(--warning-light)]",
        info: "[--scrollbar-corner:var(--info-light)]",
      },
    },
    defaultVariants: {
      theme: "default",
    },
  }
);

interface ScrollAreaProps
  extends React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>,
    VariantProps<typeof scrollAreaVariants> {
  orientation?: "vertical" | "horizontal" | "both";
  scrollHideDelay?: number;
}

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  ScrollAreaProps
>(({ className, children, theme, orientation = "vertical", scrollHideDelay, ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    className={cn(scrollAreaVariants({ theme }), className)}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
      {children}
    </ScrollAreaPrimitive.Viewport>
    {(orientation === "vertical" || orientation === "both") && (
      <ScrollAreaPrimitive.Scrollbar
        orientation="vertical"
        className={cn(scrollbarVariants({ orientation: "vertical" }))}
      >
        <ScrollAreaPrimitive.Thumb className={cn(thumbVariants({ orientation: "vertical" }))} />
      </ScrollAreaPrimitive.Scrollbar>
    )}
    {(orientation === "horizontal" || orientation === "both") && (
      <ScrollAreaPrimitive.Scrollbar
        orientation="horizontal"
        className={cn(scrollbarVariants({ orientation: "horizontal" }))}
      >
        <ScrollAreaPrimitive.Thumb className={cn(thumbVariants({ orientation: "horizontal" }))} />
      </ScrollAreaPrimitive.Scrollbar>
    )}
    <ScrollAreaPrimitive.Corner className={cn(cornerVariants({ theme }))} />
  </ScrollAreaPrimitive.Root>
));
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

export { ScrollArea }; 