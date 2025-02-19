import * as React from "react";
import { cn } from "@/utils/common/cn";
import { type BaseIconProps } from "./base-icon-interface";

export const GithubIcon = ({
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
        d="M12.5 27.8333C5.83333 30.1666 5.83333 24.4999 3.5 23.8333M21.5 31.8333V26.2666C21.5666 25.5857 21.4667 24.9012 21.2083 24.2666C21.0983 24.0241 21.1636 23.7387 21.3583 23.5666C24.8583 20.4999 25.4583 16.1666 23.7916 13.1666C22.8666 11.5999 21.3833 10.4166 19.625 9.83325C19.3583 9.75825 19.1583 9.53325 19.1583 9.24992V9.21658C19.1583 8.67492 19.7166 8.29992 20.225 8.46658C23.7916 9.54992 28.5 12.8333 28.5 19.8333C28.5 30.1666 21.5 31.8333 21.5 31.8333Z"
        className={fillClass}
      />
    </svg>
  );
};

GithubIcon.displayName = "GithubIcon";
