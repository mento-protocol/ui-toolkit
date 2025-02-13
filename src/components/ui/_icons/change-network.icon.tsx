import { forwardRef } from "react";
import { cn } from "@/utils/common/cn";
import { type BaseIconProps } from "./base-icon-interface";

export const ChangeNetworkIcon = forwardRef<SVGSVGElement, BaseIconProps>(
  (
    {
      width = 32,
      height = 32,
      strokeClass = "stroke-mento-dark",
      className,
      ...props
    },
    ref
  ) => {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 33 32"
        fill="none"
        className={cn(className)}
        {...props}
      >
        <path
          d="M25.9844 11.363V20.657C25.9844 20.7641 25.9558 20.8693 25.9015 20.9616C25.8471 21.0539 25.7691 21.13 25.6754 21.182L17.2754 25.848C17.1863 25.8974 17.0862 25.9233 16.9844 25.9233C16.8826 25.9233 16.7824 25.8974 16.6934 25.848L8.29338 21.182C8.19969 21.13 8.12163 21.0539 8.06729 20.9616C8.01295 20.8693 7.98432 20.7641 7.98438 20.657V11.363C7.9845 11.256 8.01322 11.151 8.06754 11.0589C8.12187 10.9668 8.19984 10.8908 8.29338 10.839L16.6934 6.17197C16.7824 6.12259 16.8826 6.09668 16.9844 6.09668C17.0862 6.09668 17.1863 6.12259 17.2754 6.17197L25.6754 10.839C25.7689 10.8908 25.8469 10.9668 25.9012 11.0589C25.9555 11.151 25.9842 11.256 25.9844 11.363Z"
          className={strokeClass}
          strokeWidth="1.33"
          strokeLinecap="square"
        />
        <path
          d="M8.51172 11.3041L16.6917 15.8481C16.7809 15.8976 16.8812 15.9237 16.9832 15.9237C17.0852 15.9237 17.1856 15.8976 17.2747 15.8481L25.4837 11.2881M16.9837 25.0101V16.0101"
          className={strokeClass}
          strokeWidth="1.33"
          strokeLinecap="square"
        />
      </svg>
    );
  }
);

ChangeNetworkIcon.displayName = "ChangeNetworkIcon";
