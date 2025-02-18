import { cn } from "@/utils/common/cn";
import { type BaseIconProps } from "./base-icon-interface";

export const SuccessIcon = ({
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
        d="M27.1667 9.33334L12.8334 23.6667L5.83337 16.6667"
        className={strokeClass}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

SuccessIcon.displayName = "SuccessIcon";
