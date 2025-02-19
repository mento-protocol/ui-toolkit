import * as React from "react";
import { cn } from "@/utils/common/cn";
import { type BaseIconProps } from "./base-icon-interface";

export const SpinnerIcon = ({
  width = 33,
  height = 32,
  strokeClass = "stroke-foreground dark:stroke-foreground-dark",
  className,
  ...props
}: BaseIconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 33 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn("animate-spin", className)}
    {...props}
  >
    <path
      d="M16.5 4V8M16.5 24V28M8.5 16H4.5M28.5 16H24.5M24.9 24.4L22.1 21.6M24.9 7.60001L22.1 10.4M8.1 24.4L10.9 21.6M8.1 7.60001L10.9 10.4"
      className={strokeClass}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
