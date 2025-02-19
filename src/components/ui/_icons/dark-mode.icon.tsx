import * as React from "react";
import { cn } from "@/utils/common/cn";
import { type BaseIconProps } from "./base-icon-interface";

export const DarkModeIcon = ({
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
        d="M28.5 16.7899C28.3555 19.0492 27.5779 21.2272 26.2512 23.0883C24.9245 24.9494 23.1001 26.4199 20.9783 27.3328C18.8565 28.2457 16.5226 28.5633 14.2292 28.2504C11.9358 27.9375 9.77795 27.0064 7.99723 25.5601C6.21652 24.1138 4.88507 22.2083 4.15152 20.0597C3.41797 17.9111 3.30821 15.6031 3.83323 13.3985C4.35824 11.1939 5.49842 9.17699 7.13001 7.56701C8.7616 5.95704 10.8233 4.81787 13.0417 4.28906C11.4407 6.62896 10.6901 9.45662 10.9333 12.2913C11.1764 15.126 12.3976 17.7937 14.4035 19.8548C16.4094 21.916 19.0429 23.2101 21.8557 23.5281C24.6685 23.8461 27.4963 23.1713 29.8667 21.6333C29.4355 20.0576 28.7205 18.5697 27.7567 17.2399L28.5 16.7899Z"
        className={strokeClass}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

