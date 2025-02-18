import { cn } from "@/utils/common/cn";
import { type BaseIconProps } from "./base-icon-interface";

export const MentoLogoIcon = ({
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
        d="M21.5 21.3333V26.6667H13.5C9.08172 26.6667 5.5 23.0849 5.5 18.6667V10.6667H10.8333V17.5C10.8333 19.7091 12.624 21.3333 14.8333 21.3333H21.5ZM10.8333 10.6667V5.33333H18.8333C23.2516 5.33333 26.8333 8.91505 26.8333 13.3333V21.3333H21.5V14.5C21.5 12.2909 19.7093 10.6667 17.5 10.6667H10.8333Z"
        className={fillClass}
      />
    </svg>
  );
};

MentoLogoIcon.displayName = "MentoLogoIcon";
