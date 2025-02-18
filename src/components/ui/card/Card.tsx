import * as React from "react";
import { cn } from "@/utils/common/cn";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  block?: boolean;
  transparent?: boolean;
  noBorderMobile?: boolean;
}

const Card = ({ className, block, transparent, ...props }: CardProps) => (
  <div
    className={cn(
      "rounded-lg border border-gray-light bg-white dark:bg-black-off p-5",
      block && "w-full",
      transparent && "bg-transparent",
      className
    )}
    {...props}
  />
);
Card.displayName = "Card";

const CardHeader = ({ className, ...props }: CardProps) => (
  <header
    className={cn("rounded-lg rounded-r-lg bg-[inherit]", className)}
    {...props}
  />
);
CardHeader.displayName = "CardHeader";

const CardFooter = ({ className, style, ...props }: CardProps) => (
  <footer
    className={className}
    style={style}
    {...props}
  />
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter };
