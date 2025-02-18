import React from "react";
import { cn } from "@/utils/common/cn";
import { type BaseIconProps } from "./base-icon-interface";

export const LightModeIcon = ({
  width = 33,
  height = 32,
  strokeClass = "stroke-foreground dark:stroke-foreground-dark",
  className,
  ...props
}: BaseIconProps) => {
  return (
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
        d="M16.5 22.6667C20.0183 22.6667 22.8333 19.8517 22.8333 16.3333C22.8333 12.815 20.0183 10 16.5 10C12.9816 10 10.1666 12.815 10.1666 16.3333C10.1666 19.8517 12.9816 22.6667 16.5 22.6667Z"
        className={strokeClass}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5 5.33331V2.66666M8.43328 8.26666L6.49995 6.33333M5.49995 16.3333H2.83328M8.43328 24.4L6.49995 26.3333M16.5 31V28.3333M24.5666 24.4L26.5 26.3333M30.1666 16.3333H27.5M24.5666 8.26666L26.5 6.33333"
        className={strokeClass}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

LightModeIcon.displayName = "LightModeIcon";
