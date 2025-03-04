import * as React from "react";
import { cn } from "@/utils/common/cn";
import { type BaseIconProps } from "./base-icon-interface";

export const MenuIcon = ({
  width = 33,
  height = 32,
  strokeClass = "stroke-mento-dark dark:stroke-white",
  className,
  ...props
}: BaseIconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 33 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn(className)}
    {...props}
  >
    <path
      d="M4.5 16H28.5M4.5 8H28.5M4.5 24H28.5"
      className={strokeClass}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

