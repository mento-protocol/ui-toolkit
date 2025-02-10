"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/utils/common/cn";
import { cva, type VariantProps } from "class-variance-authority";

const expandableHeaderVariants = cva(
  cn(
    "flex cursor-pointer flex-row items-center justify-between",
    "transition-colors duration-200 ease-out"
  ),
  {
    variants: {
      spacing: {
        default: "pt-x3 md:pt-0",
        none: "",
        sm: "pt-2 md:pt-0",
        lg: "pt-x4 md:pt-0",
      },
      theme: {
        default: "hover:text-primary",
        primary: "text-primary hover:text-primary-dark",
        secondary: "text-secondary hover:text-secondary-dark",
        muted: "text-gray-light hover:text-gray",
      },
    },
    defaultVariants: {
      spacing: "default",
      theme: "default",
    },
  }
);

export interface ExpandableProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title">,
    VariantProps<typeof expandableHeaderVariants> {
  title: React.ReactNode | string;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const Expandable = React.forwardRef<HTMLDivElement, ExpandableProps>(
  ({ 
    children, 
    className, 
    title, 
    spacing, 
    theme,
    defaultOpen = false,
    onOpenChange,
    ...props 
  }, ref) => {
    const [opened, setOpened] = React.useState(defaultOpen);

    const handleToggle = () => {
      const newState = !opened;
      setOpened(newState);
      onOpenChange?.(newState);
    };

    return (
      <div ref={ref} className={className} {...props}>
        <header
          onClick={handleToggle}
          className={expandableHeaderVariants({ spacing, theme })}
        >
          <div>{title}</div>
          <div
            className={cn(
              "transition-transform duration-300 ease-out-back",
              opened && "rotate-180"
            )}
          >
            <ChevronDown className="h-5 w-5" />
          </div>
        </header>
        <div
          className={cn(
            "h-full overflow-hidden transition-[max-height] duration-300 ease-in-out",
            opened ? "max-h-[1300px]" : "max-h-0"
          )}
        >
          {children}
        </div>
      </div>
    );
  }
);

Expandable.displayName = "Expandable";

export { Expandable, expandableHeaderVariants }; 