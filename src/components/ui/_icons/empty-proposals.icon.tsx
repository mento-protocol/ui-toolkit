import * as React from "react";
import { cn } from "@/utils/common/cn";
import { type BaseIconProps } from "./base-icon-interface";

export const EmptyProposalsIcon = ({
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
        d="M16.5 10.6667C17.4205 9.74619 18.5809 9.15731 19.8381 8.97803C21.0953 8.79875 22.3835 9.03824 23.5089 9.66431C24.6343 10.2904 25.5382 11.2698 26.0939 12.4496C26.6496 13.6294 26.8287 14.9444 26.6074 16.2212C26.3861 17.498 25.7759 18.6733 24.8587 19.5987C23.9415 20.5241 22.7714 21.1447 21.4967 21.3778C20.222 21.6109 18.9059 21.4441 17.7219 20.8994C16.5379 20.3546 15.5514 19.4599 14.9333 18.3467"
        className={strokeClass}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5 21.3333C15.5795 22.2538 14.4191 22.8427 13.1619 23.022C11.9047 23.2013 10.6165 22.9618 9.49111 22.3357C8.36574 21.7096 7.46178 20.7302 6.90609 19.5504C6.35039 18.3706 6.17133 17.0556 6.39261 15.7788C6.61389 14.502 7.22415 13.3267 8.14134 12.4013C9.05852 11.4759 10.2286 10.8553 11.5033 10.6222C12.778 10.3891 14.0941 10.5559 15.2781 11.1006C16.4621 11.6454 17.4486 12.5401 18.0667 13.6533"
        className={strokeClass}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

EmptyProposalsIcon.displayName = "EmptyProposalsIcon";
