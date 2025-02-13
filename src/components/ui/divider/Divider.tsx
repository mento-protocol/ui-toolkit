"use client";

import * as React from "react";
import { forwardRef } from "react";
import { cn } from "@/utils/common/cn";

const Divider = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "border-b border-[#b3b3b3] w-[1080px] mx-4 mb-5 md:mx-5",
          className
        )}
        {...props}
      />
    );
  }
);
Divider.displayName = "Divider";

export { Divider }; 