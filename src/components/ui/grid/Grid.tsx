import { cn } from "@/utils/common/cn";
import { forwardRef } from "react";

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  gap?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

const Grid = forwardRef<HTMLDivElement, GridProps>(
  ({ className, cols = 3, gap = 4, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "grid",
          {
            "grid-cols-1": cols === 1,
            "grid-cols-2": cols === 2,
            "grid-cols-3": cols === 3,
            "grid-cols-4": cols === 4,
            "grid-cols-5": cols === 5,
            "grid-cols-6": cols === 6,
            "grid-cols-7": cols === 7,
            "grid-cols-8": cols === 8,
            "grid-cols-9": cols === 9,
            "grid-cols-10": cols === 10,
            "grid-cols-11": cols === 11,
            "grid-cols-12": cols === 12,
            "gap-1": gap === 1,
            "gap-2": gap === 2,
            "gap-3": gap === 3,
            "gap-4": gap === 4,
            "gap-5": gap === 5,
            "gap-6": gap === 6,
            "gap-7": gap === 7,
            "gap-8": gap === 8,
            "gap-9": gap === 9,
            "gap-10": gap === 10,
            "gap-11": gap === 11,
            "gap-12": gap === 12,
          },
          className,
        )}
        {...props}
      />
    );
  },
);
Grid.displayName = "Grid";

export { Grid };
