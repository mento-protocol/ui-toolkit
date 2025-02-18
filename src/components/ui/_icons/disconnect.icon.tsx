import React from "react";
import { cn } from "@/utils/common/cn";
import { type BaseIconProps } from "./base-icon-interface";

export const DisconnectIcon = ({
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
        d="M12.5 5H8.5C7.43913 5 6.42172 5.42143 5.67157 6.17157C4.92143 6.92172 4.5 7.93913 4.5 9V23C4.5 24.0609 4.92143 25.0783 5.67157 25.8284C6.42172 26.5786 7.43913 27 8.5 27H12.5M20.5 23L28.5 15L20.5 7M28.5 15H12.5"
        className={strokeClass}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

DisconnectIcon.displayName = "DisconnectIcon";
