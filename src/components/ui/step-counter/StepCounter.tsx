import * as React from "react";
import BaseComponentProps from "@/components/interfaces/base-component-props.interface";
import { cn } from "@/utils/common/cn";
import { IndexWrapperIcon } from "@/components/ui/_icons";


export const StepCounter = ({ children, className }: BaseComponentProps) => {
  return (
    <div
      className={cn(
        "relative flex h-x5 w-x5 items-center justify-center rounded-t-[4px] bg-inherit pb-[1px] pr-[1px]",
        className,
      )}
    >
      <IndexWrapperIcon className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]" />
      {children}
    </div>
  );
};

