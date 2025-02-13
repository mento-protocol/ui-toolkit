import { forwardRef } from "react";
import { cn } from "@/utils/common/cn";
import { type BaseIconProps } from "./base-icon-interface";

export const DiscordIcon = forwardRef<SVGSVGElement, BaseIconProps>(
  (
    {
      width = 20,
      height = 16,
      fillClass = "fill-black dark:fill-white",
      className,
      ...props
    },
    ref
  ) => {
    return (
      <svg
        ref={ref}
        width={width}
        height={height}
        viewBox="0 0 20 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(className)}
        {...props}
      >
        <path
          d="M16.9569 1.35131C16.9513 1.34 16.9421 1.33114 16.9309 1.32631C15.6342 0.701621 14.2658 0.25616 12.8599 0.00109041C12.8472 -0.00139959 12.834 0.000400237 12.8222 0.00623024C12.8105 0.0120702 12.8008 0.0216402 12.7945 0.0335902C12.6082 0.3887 12.439 0.753451 12.2877 1.12645C10.7723 0.884911 9.2308 0.884911 7.7154 1.12645C7.56307 0.752501 7.39121 0.38766 7.2006 0.0335902C7.19406 0.0219002 7.18432 0.0125505 7.17265 0.00675047C7.16098 0.000950467 7.14791 -0.00101959 7.13516 0.00109041C5.72916 0.25563 4.36067 0.701121 3.06412 1.32635C3.05302 1.33129 3.04366 1.33972 3.03732 1.35049C0.44449 5.41614 -0.26579 9.3818 0.0826496 13.2984C0.0836296 13.308 0.0864396 13.3173 0.0909096 13.3257C0.0953797 13.3342 0.10142 13.3416 0.10867 13.3475C1.61845 14.5213 3.30716 15.4172 5.10273 15.9971C5.11538 16.0011 5.12888 16.0009 5.14143 15.9966C5.15397 15.9923 5.16496 15.9841 5.1729 15.973C5.55855 15.422 5.90027 14.8386 6.19457 14.2286C6.19862 14.2203 6.20093 14.2111 6.20135 14.2017C6.20177 14.1923 6.2003 14.183 6.19702 14.1742C6.19375 14.1655 6.18875 14.1576 6.18235 14.151C6.17595 14.1445 6.16831 14.1394 6.15991 14.1362C5.62106 13.9197 5.09938 13.6587 4.59977 13.3557C4.5907 13.3501 4.58308 13.3423 4.57758 13.3328C4.57208 13.3234 4.56888 13.3127 4.56826 13.3017C4.56764 13.2906 4.56962 13.2796 4.57401 13.2696C4.57841 13.2595 4.5851 13.2508 4.59348 13.2441C4.69831 13.1616 4.80321 13.0758 4.90331 12.9892C4.91221 12.9815 4.92297 12.9766 4.93438 12.975C4.9458 12.9733 4.95742 12.9751 4.96794 12.9801C8.241 14.5485 11.7846 14.5485 15.019 12.9801C15.0295 12.9748 15.0413 12.9728 15.0529 12.9743C15.0644 12.9757 15.0754 12.9806 15.0844 12.9884C15.1846 13.075 15.2894 13.1616 15.395 13.2441C15.4035 13.2507 15.4102 13.2594 15.4147 13.2694C15.4192 13.2794 15.4212 13.2904 15.4207 13.3015C15.4201 13.3125 15.417 13.3232 15.4116 13.3327C15.4061 13.3422 15.3986 13.3501 15.3895 13.3557C14.8911 13.6613 14.3689 13.9221 13.8286 14.1354C13.8203 14.1387 13.8126 14.1439 13.8063 14.1506C13.7999 14.1572 13.795 14.1652 13.7918 14.174C13.7886 14.1828 13.7872 14.1922 13.7877 14.2016C13.7881 14.2111 13.7905 14.2203 13.7946 14.2286C14.0939 14.8352 14.4351 15.4179 14.8155 15.972C14.8232 15.9834 14.8342 15.9919 14.8468 15.9964C14.8594 16.0009 14.873 16.0011 14.8857 15.997C16.6845 15.4191 18.3761 14.5231 19.8878 13.3475C19.8952 13.3419 19.9013 13.3347 19.9058 13.3263C19.9103 13.318 19.913 13.3088 19.9138 13.2992C20.331 8.7713 19.2155 4.83807 16.9569 1.35131ZM6.68339 10.9136C5.69794 10.9136 4.88597 9.9641 4.88597 8.7979C4.88597 7.6318 5.68219 6.6822 6.68339 6.6822C7.6924 6.6822 8.4965 7.64 8.4808 8.7979C8.4808 9.9641 7.68451 10.9136 6.68339 10.9136ZM13.329 10.9136C12.3436 10.9136 11.5316 9.9641 11.5316 8.7979C11.5316 7.6318 12.3278 6.6822 13.329 6.6822C14.3381 6.6822 15.1422 7.64 15.1264 8.7979C15.1264 9.9641 14.3381 10.9136 13.329 10.9136Z"
          className={fillClass}
        />
      </svg>
    );
  }
);

DiscordIcon.displayName = "DiscordIcon";
