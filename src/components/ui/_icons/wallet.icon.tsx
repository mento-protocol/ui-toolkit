import { cn } from "@/utils/common/cn";
import { type BaseIconProps } from "./base-icon-interface";

export const WalletIcon = ({
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
        d="M26.5 9.33334H6.5C5.39543 9.33334 4.5 10.2288 4.5 11.3333V24C4.5 25.1046 5.39543 26 6.5 26H26.5C27.6046 26 28.5 25.1046 28.5 24V11.3333C28.5 10.2288 27.6046 9.33334 26.5 9.33334Z"
        className={strokeClass}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.1667 20.6667C22.9031 20.6667 23.5 20.0697 23.5 19.3333C23.5 18.597 22.9031 18 22.1667 18C21.4303 18 20.8334 18.597 20.8334 19.3333C20.8334 20.0697 21.4303 20.6667 22.1667 20.6667Z"
        className={strokeClass}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.5 14.6667L28.5 14.6667"
        className={strokeClass}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 9.33334V6.66667C8.5 6.22464 8.67559 5.80072 8.98816 5.48816C9.30072 5.17559 9.72464 5 10.1667 5H24.8333C25.2754 5 25.6993 5.17559 26.0118 5.48816C26.3244 5.80072 26.5 6.22464 26.5 6.66667V9.33334"
        className={strokeClass}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

WalletIcon.displayName = "WalletIcon"; 