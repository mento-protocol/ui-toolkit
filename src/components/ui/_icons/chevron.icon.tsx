import * as React from "react";
import { cn } from "@/utils/common/cn";
import { type BaseIconProps } from "./base-icon-interface";

interface ChevronIconProps extends BaseIconProps {
  /**
   * Direction the chevron should point
   * @default "right"
   */
  direction?: "up" | "down" | "left" | "right";
}

export const ChevronIcon = ({
  width = 33,
  height = 32,
  strokeClass = "stroke-foreground dark:stroke-foreground-dark",
  className,
  direction = "down",
  ...props
}: ChevronIconProps) => {
  const rotation = {
    up: "rotate-180",
    down: "rotate-0",
    left: "rotate-90",
    right: "-rotate-90",
  };

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className, rotation[direction])}
      {...props}
    >
      <path
        d="M26.5 20L16.5 12L6.5 20"
        className={strokeClass}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronIcon.displayName = "ChevronIcon";
