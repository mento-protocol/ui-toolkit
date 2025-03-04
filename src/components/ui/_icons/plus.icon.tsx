import * as React from "react";
import { cn } from "@/utils/common/cn";
import { type BaseIconProps } from "./base-icon-interface";

export const PlusIcon = ({
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
      d="M16.5 6.66666V25.3333M7.16669 16H25.8334"
      className={strokeClass}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
