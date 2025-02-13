import { cn } from "@/utils/common/cn";
import React from "react";

const ValueLoaderSkeleton = ({
  children,
  className,
}: React.HTMLProps<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "text-[22px]",
        className,
        "animate-pulse rounded-[4px] bg-gray-300",
      )}
    >
      <span className="opacity-0">{children}</span>
    </div>
  );
};

ValueLoaderSkeleton.displayName = "ValueLoaderSkeleton";
export default ValueLoaderSkeleton;
