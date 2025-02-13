import { forwardRef } from "react";
import { cn } from "@/utils/common/cn";
import { type BaseIconProps } from "./base-icon-interface";

export const ChainIcon = forwardRef<SVGSVGElement, BaseIconProps>(
  (
    {
      width = 32,
      height = 32,
      strokeClass = "stroke-mento-dark dark:stroke-white",
      className,
      ...props
    },
    ref
  ) => {
    return (
      <svg
        ref={ref}
        className={cn(className)}
        height={height}
        width={width}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M15.3521 9.5712L17.6045 7.31878C18.5581 6.44958 19.81 5.98125 21.1 6.01111C22.39 6.04098 23.6189 6.56674 24.5313 7.47914C25.4437 8.39155 25.9695 9.62043 25.9993 10.9104C26.0292 12.2004 25.5609 13.4523 24.6917 14.4059L21.4723 17.6139C21.0083 18.0797 20.4569 18.4492 19.8498 18.7013C19.2427 18.9535 18.5918 19.0833 17.9344 19.0833C17.277 19.0833 16.6261 18.9535 16.0189 18.7013C15.4118 18.4492 14.8605 18.0797 14.3965 17.6139"
          className={strokeClass}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.6486 22.4486L14.3962 24.701C13.4425 25.5702 12.1906 26.0385 10.9006 26.0087C9.61066 25.9788 8.38178 25.4531 7.46938 24.5406C6.55697 23.6282 6.03121 22.3994 6.00135 21.1094C5.97148 19.8194 6.43981 18.5675 7.30901 17.6138L10.5284 14.4058C10.9924 13.9401 11.5437 13.5706 12.1508 13.3185C12.758 13.0663 13.4089 12.9365 14.0663 12.9365C14.7237 12.9365 15.3746 13.0663 15.9817 13.3185C16.5888 13.5706 17.1402 13.9401 17.6042 14.4058"
          className={strokeClass}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

ChainIcon.displayName = "ChainIcon";
