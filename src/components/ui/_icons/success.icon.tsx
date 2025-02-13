import { forwardRef } from "react";
import { cn } from "@/utils/common/cn";
import { type BaseIconProps } from "./base-icon-interface";

export const SuccessIcon = forwardRef<SVGSVGElement, BaseIconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 52 52"
      className={cn(className)}
      {...props}
    >
      <circle cx="26" cy="26" r="25" className="fill-light-green" />
      <path
        className="stroke-[black]"
        d="M14.1 27.2l7.1 7.2 16.7-16.8"
        fill="none"
        strokeWidth="2"
        strokeLinecap="butt"
        strokeLinejoin="miter"
      />
    </svg>
  )
);

SuccessIcon.displayName = "SuccessIcon";
