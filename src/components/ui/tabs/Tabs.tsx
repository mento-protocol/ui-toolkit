"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/common/cn";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-lg bg-gray-lighter p-1 text-black dark:bg-black-off dark:text-white",
      className
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const tabsTriggerVariants = cva(
  cn(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    "data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
  ),
  {
    variants: {
      variant: {
        default: cn(
          "hover:bg-white/50 dark:hover:bg-black/50",
          "data-[state=active]:bg-white dark:data-[state=active]:bg-black"
        ),
        outline: cn(
          "bg-transparent",
          "hover:bg-gray-lighter dark:hover:bg-black-off",
          "data-[state=active]:bg-white dark:data-[state=active]:bg-black",
          "data-[state=active]:text-black dark:data-[state=active]:text-white"
        ),
        pills: cn(
          "rounded-full",
          "hover:bg-gray-lighter dark:hover:bg-black-off",
          "data-[state=active]:bg-primary data-[state=active]:text-white"
        ),
        underline: cn(
          "rounded-none border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2",
          "hover:text-primary dark:hover:text-primary",
          "data-[state=active]:border-primary data-[state=active]:text-primary",
          "data-[state=active]:shadow-none"
        ),
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      fullWidth: false,
    },
  }
);

export interface TabsTriggerProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>,
    VariantProps<typeof tabsTriggerVariants> {}

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerProps
>(({ className, variant, fullWidth, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(tabsTriggerVariants({ variant, fullWidth }), className)}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent }; 