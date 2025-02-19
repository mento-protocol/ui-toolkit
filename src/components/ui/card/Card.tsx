import * as React from "react";
import { cn } from "@/utils/common/cn";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  block?: boolean;
  transparent?: boolean;
  noBorderMobile?: boolean;
}

const Card = ({ className, block, transparent, noBorderMobile, ...props }: CardProps) => (
  <div
    className={cn(
      "rounded-lg border border-gray-light bg-white dark:bg-black-off p-5",
      block && "w-full",
      transparent && "bg-transparent",
      noBorderMobile && "border-none md:border",
      className
    )}
    {...props}
  />
);

const CardHeader = ({ className, ...props }: CardProps) => (
  <header
    className={cn("rounded-lg rounded-r-lg bg-[inherit]", className)}
    {...props}
  />
);

const CardFooter = ({ className, style, ...props }: CardProps) => (
  <footer
    className={className}
    style={style}
    {...props}
  />
);Card

export { Card, CardHeader, CardFooter };
