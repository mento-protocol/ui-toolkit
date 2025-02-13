import { forwardRef } from "react";
import { cn } from "@/utils/common/cn";

interface MenuIconProps {
  width?: number;
  height?: number;
  opened: boolean;
  className?: string;
}

export const MenuIcon = forwardRef<HTMLDivElement, MenuIconProps>(
  (
    {
      width = 20,
      height = 14,
      opened,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        style={{
          width: `${width}px`,
          height: `${height}px`,
        }}
        className={cn(
          "group relative inline-block h-[24px] w-[24px] cursor-pointer",
          opened && "opened",
          className
        )}
        {...props}
      >
        <span className="absolute top-0 h-[2px] w-full duration-300 group-[.opened]:top-[50%] group-[.opened]:translate-y-[-50%] group-[.opened]:rotate-45" />
        <span className="absolute top-[50%] h-[2px] w-full translate-y-[-50%] duration-300 group-[.opened]:opacity-0 " />
        <span className="absolute bottom-0 h-[2px] w-full duration-300 group-[.opened]:top-[50%] group-[.opened]:translate-y-[-50%]  group-[.opened]:-rotate-45" />
      </div>
    );
  }
);

MenuIcon.displayName = "MenuIcon";
