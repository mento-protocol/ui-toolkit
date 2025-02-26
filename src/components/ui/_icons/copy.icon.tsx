import * as React from "react";
import { type BaseIconProps } from "./base-icon-interface";

export const CopyIcon = ({
  color = "stroke-gray-light",
  height = 24,
  width = 29,
  className,
}: BaseIconProps) => {
  return (
    <svg
      height={height}
      width={width}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 29"
      fill="none"
    >
      <path
        d="M15.6719 18.7832H19.9844V4.7832H8.48438V10.0332"
        className={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.6719 10.0332H4.17188V24.0332H15.6719V10.0332Z"
        className={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
