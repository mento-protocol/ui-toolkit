"use client";

import * as React from "react";
import { cn } from "@/utils/common/cn";

interface LoadingCircleProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number;
  strokeWidth?: number;
  color?: string;
}

const LoadingCircle = React.forwardRef<HTMLDivElement, LoadingCircleProps>(
  (
    {
      className,
      size = 24,
      strokeWidth = 2,
      color = "currentColor",
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn("inline-flex items-center justify-center", className)}
        style={{ width: size, height: size }}
        {...props}
      >
        <svg
          className="animate-spin"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke={color}
            strokeWidth={strokeWidth}
          />
          <path
            className="opacity-75"
            fill={color}
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      </div>
    );
  },
);

LoadingCircle.displayName = "LoadingCircle";

export { LoadingCircle }; 