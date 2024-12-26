import { cn } from "@/utils/common/cn";
import { forwardRef } from "react";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "default" | "sm" | "lg" | "full";
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "mx-auto w-full px-4",
          {
            "max-w-7xl": size === "default",
            "max-w-5xl": size === "sm",
            "max-w-screen-2xl": size === "lg",
            "max-w-none": size === "full",
          },
          className,
        )}
        {...props}
      />
    );
  },
);
Container.displayName = "Container";

export { Container };
