"use client";

import * as React from "react";
import { cn } from "@/utils/common/cn";

const Divider = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "border-b border-[#b3b3b3] w-[1080px] mx-4 mb-5 md:mx-5",
        className
      )}
      {...props}
    />
  );
};

export { Divider }; 