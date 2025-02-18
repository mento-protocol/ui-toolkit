import { cn } from "@/utils/common/cn";
import { type BaseIconProps } from "./base-icon-interface";

export const NotificationIcon = ({
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
        d="M13.1667 6.66667C13.1667 5.95942 13.4477 5.28115 13.9478 4.78105C14.4479 4.28095 15.1261 4 15.8334 4C16.5406 4 17.2189 4.28095 17.719 4.78105C18.2191 5.28115 18.5 5.95942 18.5 6.66667C20.1954 7.45591 21.6453 8.71201 22.6832 10.2902C23.721 11.8684 24.3063 13.7051 24.3834 15.6C24.3834 18.4 25.1667 20 26.5 21.3333H5.16669C6.50002 20 7.28335 18.4 7.28335 15.6C7.36039 13.7051 7.94571 11.8684 8.98357 10.2902C10.0214 8.71201 11.4713 7.45591 13.1667 6.66667"
        className={strokeClass}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 21.3333V22.6667C12.5 23.7275 12.9214 24.7449 13.6716 25.4951C14.4217 26.2452 15.4391 26.6667 16.5 26.6667C17.5609 26.6667 18.5783 26.2452 19.3284 25.4951C20.0786 24.7449 20.5 23.7275 20.5 22.6667V21.3333"
        className={strokeClass}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

NotificationIcon.displayName = "NotificationIcon"; 