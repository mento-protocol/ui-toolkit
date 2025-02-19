import * as React from "react";
import { cn } from "@/utils/common/cn";
import { type BaseIconProps } from "./base-icon-interface";

export const CopyIcon = ({
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
        d="M27.1667 12H18.8333C17.5447 12 16.5 10.9553 16.5 9.66667V1.33333C16.5 0.596954 15.903 0 15.1667 0H7.83333C4.61167 0 2 2.61167 2 5.83333V26.1667C2 29.3883 4.61167 32 7.83333 32H24.8333C28.055 32 30.6667 29.3883 30.6667 26.1667V13.3333C30.6667 12.597 30.0697 12 29.3333 12H27.1667ZM18.8333 8.66667H27.3877L18.8333 0.112333V8.66667Z"
        className={strokeClass}
      />
    </svg>
  );
};

