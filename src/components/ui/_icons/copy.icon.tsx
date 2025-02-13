import { forwardRef } from "react";
import { cn } from "@/utils/common/cn";
import { type BaseIconProps } from "./base-icon-interface";

export const CopyIcon = forwardRef<SVGSVGElement, BaseIconProps>(
  (
    {
      width = 29,
      height = 24,
      strokeClass = "stroke-gray-light",
      className,
      ...props
    },
    ref
  ) => {
    return (
      <svg
        ref={ref}
        width={width}
        height={height}
        viewBox="0 0 24 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(className)}
        {...props}
      >
        <path
          d="M15.6719 18.7832H19.9844V4.7832H8.48438V10.0332"
          className={strokeClass}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.6719 10.0332H4.17188V24.0332H15.6719V10.0332Z"
          className={strokeClass}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

CopyIcon.displayName = "CopyIcon";
