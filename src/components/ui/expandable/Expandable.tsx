"use client";

import * as React from "react";
import { ChevronIcon } from "@/components/ui/_icons";
import { cn } from "@/utils/common/cn";

interface ExpandableProps extends Omit<React.ComponentProps<"header">, "title"> {
  title: React.ReactNode | string;
}

const Expandable = ({ children, className, title}: ExpandableProps) => {
  const [opened, setOpened] = React.useState(false);

    return (
      <div className={className}>
        <header
          onClick={() => setOpened(!opened)}
          className="flex cursor-pointer flex-row items-center justify-between pt-x3 md:pt-0"
        >
          <div>{title}</div>
          <div
            className={cn(
              opened && "transform-[rotate(180deg)]",
              "transition-[transform] duration-300 ease-out-back"
            )}
          >
            <ChevronIcon direction="down" width={25} height={20} />
          </div>
        </header>
        <div
          className={cn(
            "h-full max-h-0 overflow-hidden transition-[max-height] duration-300 ease-in-out",
            opened && "max-h-[1300px]"
          )}
        >
          {children}
        </div>
    </div>
  );
};
Expandable.displayName = "Expandable";

export { Expandable }; 