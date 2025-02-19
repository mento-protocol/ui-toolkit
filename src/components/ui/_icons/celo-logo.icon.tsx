import * as React from "react";
import { cn } from "@/utils/common/cn";
import { BaseIconProps } from "./base-icon-interface";

export const CeloLogoIcon = ({
  width = 33,
  height = 32,
  fillClass = "fill-black dark:fill-white",
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
        d="M16.5 32C25.3366 32 32.5 24.8366 32.5 16C32.5 7.16344 25.3366 0 16.5 0C7.66344 0 0.5 7.16344 0.5 16C0.5 24.8366 7.66344 32 16.5 32Z"
        className={fillClass}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.5 29C23.6797 29 29.5 23.1797 29.5 16C29.5 8.8203 23.6797 3 16.5 3C9.3203 3 3.5 8.8203 3.5 16C3.5 23.1797 9.3203 29 16.5 29ZM16.5 32C25.3366 32 32.5 24.8366 32.5 16C32.5 7.16344 25.3366 0 16.5 0C7.66344 0 0.5 7.16344 0.5 16C0.5 24.8366 7.66344 32 16.5 32Z"
        fill="white"
        className="dark:fill-black"
      />
    </svg>
  );
};

CeloLogoIcon.displayName = "CeloLogoIcon";
