import { forwardRef } from "react";
import { cn } from "@/utils/common/cn";
import { type BaseIconProps } from "./base-icon-interface";

export const CheckMarkIcon = forwardRef<SVGSVGElement, BaseIconProps>(
  (
    {
      width = 17,
      height = 17,
      fillClass = "fill-primary",
      strokeClass = "stroke-black",
      className,
      ...props
    },
    ref
  ) => {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        className={cn(className)}
        width={width}
        height={height}
        viewBox="0 0 17 17"
        fill="none"
        {...props}
      >
        <rect
          className={cn(fillClass, strokeClass)}
          x="1.10547"
          y="1.25977"
          width="15"
          height="15"
          rx="3.5"
        />
        <path
          d="M4.0332 8.18696L7.85644 11.6184L13.1761 5.90039"
          className="stroke-white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

CheckMarkIcon.displayName = "CheckMarkIcon";
