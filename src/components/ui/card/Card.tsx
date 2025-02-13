import * as React from "react";
import { cn } from "@/utils/common/cn";
import { forwardRef } from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  block?: boolean;
  transparent?: boolean;
  noBorderMobile?: boolean;
}

const Card = forwardRef<
  HTMLDivElement,
  CardProps
>(({ className, block, transparent, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border border-gray-light bg-white dark:bg-black-off p-5",
      block && "w-full",
      transparent && "bg-transparent",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <header
    ref={ref}
    className={cn("rounded-lg rounded-r-lg bg-[inherit]", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardFooter = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, style, ...props }, ref) => (
  <footer
    ref={ref}
    className={className}
    style={style}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter };
