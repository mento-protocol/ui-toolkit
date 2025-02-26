import * as React from "react";
import { cn } from "@/utils/common/cn";
import { type BaseIconProps } from "./base-icon-interface";

export const ExclamationIcon = ({
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
        d="M16.5 10.6667V16M16.5 21.3333H16.5133"
        className={strokeClass}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
);

