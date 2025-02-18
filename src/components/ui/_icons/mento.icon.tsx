import { cn } from "@/utils/common/cn";
import { type BaseIconProps } from "./base-icon-interface";

export const MentoIcon = ({
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
    </svg>
  );
};

MentoIcon.displayName = "MentoIcon";
